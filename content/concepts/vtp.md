---
title: "VTP VLAN 中繼協定（VLAN Trunking Protocol）"
slug: vtp
aliases: [VTP, VLAN Trunking Protocol, VLAN 中繼協議, VLAN 中繼協定, VTP Pruning, VTP 修剪, vtp-pruning, VTP domain, VTP 網域, VTPv3, vtp primary]
category: 網路基礎
confidence: 已驗證
created: 2026-10-03
---

## 定義
Cisco 私有的二層協定：在同一個 VTP 網域內，把 server 上 VLAN 的建立、修改、刪除，經 [[trunk]] 自動同步到其他交換器，省掉逐台建 [[vlan]] 的工作。它只同步「有哪些 VLAN」，**哪個埠劃進哪個 VLAN 仍要逐台設定**。

## 關鍵面向
- **同步的前提**：交換器之間是 trunk、VTP 網域名稱相同；有設密碼時密碼也要相同（密碼每台手動設，不會同步）。網域名稱還是空的交換器，會採用它收到的第一個網域名稱；網域設了密碼時，要先在新交換器設好密碼才學得到（Cisco IOS XE 17 設定指南）。
- **四種模式**（下表是 v1／v2 的行為；預設 v1、server）：

| 模式 | 能改 VLAN | 學別人的 VLAN | 轉送 VTP 訊息 |
|---|---|---|---|
| server | 能，並通告出去 | 會 | 會 |
| client | 不能 | 會 | 會 |
| transparent | 能，但只在本機、不通告 | 不會 | 新版 Cisco 文件與課程實驗：網域名稱相同才轉送，v1 還要版本相同；舊版 Catalyst 3750 文件寫 v2 不檢查版本與網域名稱 |
| off | 能，只在本機 | 不會 | 不轉送 |

  v3 多了主伺服器：只有主伺服器能建、改、刪 VLAN，一般 server 建 VLAN 會報錯（11-8 實驗）。

- **修訂號大的贏、整包覆蓋**：VLAN 資料庫每改一次，配置修訂號（configuration revision）加 1。設備收到修訂號比自己大的通告，就**整份取代**自己的資料庫，不是合併。11-5 實驗中，SW2 自己建的 VLAN 14 被 SW1 較新的資料庫蓋掉。`show vtp status` 可看修訂號與最後修改者，最後修改者是最後一次讓修訂號加 1 的那台設備的 IP。
- **四種訊息**（送往群播位址 01-00-0C-CC-CC-CC）：

| 類型 | 訊息 | 用途 |
|---|---|---|
| 1 | 彙總通告（Summary） | 每 300 秒送一次、有變更時立即送；帶網域名稱、修訂號、MD5 摘要 |
| 2 | 子集通告（Subset） | 帶**整份** VLAN 清單（VTP 不做增量更新），每個 VLAN 一段變動長度 |
| 3 | 通告請求（Advertisement Request） | 向其他 VTP 設備索取 VLAN 資訊；Cisco 列的觸發：重開機、改網域名稱、收到修訂號較大的彙總通告 |
| 4 | 加入訊息（Join，又稱修剪訊息） | 位元圖、每個 VLAN 1 bit，列出「不要修剪」的 VLAN，給 VTP 修剪用（代碼 4 在 Cisco 文件查不到，依課程畫面與 Wireshark） |

  密碼不以明文傳送，而是混進 16 bytes 的 MD5 摘要。
- **三個版本**：

| | v1／v2 | v3 |
|---|---|---|
| 傳播的 VLAN 範圍 | 只傳 1–1005 | 1–4094 |
| 擴展 VLAN（1006–4094） | 要在 transparent（或 off）模式才能本機建立，不同步 | 能傳播；Cisco 文件寫 v3 在 server、client 模式支援建立擴展 VLAN，但課程實驗中只有主伺服器能改 VLAN，兩種說法筆記未能調和 |
| 誰能改 VLAN | 任一台 server | 只有主伺服器（primary server） |
| 版本怎麼設 | 在 server 改會擴散到網域；transparent 只改自己；client 不能改 | 每台手動設 |
| 密碼 | 一般密碼 | 另有 `hidden`（藏成雜湊值）、`secret`（直接輸入 32 位十六進位雜湊值） |

  講師說 v2 相對 v1 的主要差別是令牌環（Token Ring）支援；Cisco 另列有 v2 一致性檢查，transparent 轉送條件也不同（見上表）。**v3 主伺服器**用特權模式 `vtp primary vlan [force]` 指定，`force` 會覆蓋衝突伺服器的設定；主伺服器身分在**重新開機、切換、改網域參數**後會消失。Cisco 文件寫沒有主伺服器的 v3 網域仍可運作（只是不能改 VLAN），跟講師說的「沒有主伺服器就無法運作」相反。Cisco 文件也寫 v1／v2 設備不轉送 v3 通告，跑 v1 但也能跑 v2 的設備收到 v3 通告會自動改成 v2；課程模擬器實驗看到的行為不同。
- **VTP 修剪（Pruning）**：trunk 預設把所有 VLAN 的流量（含廣播）都送過去。手動修剪（`switchport trunk allowed vlan`）只在本機有效、要人工維護；VTP 修剪則讓交換器用類型 4 加入訊息告訴鄰居「不要修剪哪些 VLAN」，鄰居據此自動剔除其他 VLAN。
  - 預設關閉；全域 `vtp pruning` 開啟。v1／v2 在 server 上開一台就套用到整個網域，v3 要逐台開。
  - 鄰居會請求自己有啟用埠的 VLAN（講師的兩個條件：有埠劃進該 VLAN、該埠管理上啟用），也會替下游交換器請求（11-12 實驗結果推論）。
  - 只有可修剪的 VLAN 會被剔除：預設 2–1001 可修剪；VLAN 1、1002–1005 與擴展 VLAN 一律不可修剪。Cisco 文件寫 VTP 修剪不適用於 transparent 模式。
  - `show interfaces <介面> pruning` 上半段是「鄰居沒請求、所以本埠不往外送」的 VLAN，下半段是「本機向鄰居請求」的 VLAN。
- **常用命令**：全域 `vtp version`、`vtp domain`、`vtp password`、`vtp mode`、`vtp pruning`；特權 `show vtp status`、`show vtp password`、`vtp primary vlan`。Catalyst 9300 設定指南寫密碼為 8～64 字元（課程映像接受 3 字元的 123）。
- **考試權重**：Cisco 官方 CCNA 200-301 v1.1 考試主題 PDF（2026-10-03 審查時查證）沒有列出 VTP；是否出題、考多細我未查證。

## 應用場景
- **Simon 工作場景**：VTP 讓 VLAN 變更集中化，但修訂號規則也代表一個地方改錯會同步到全部交換器。我延伸推論的風險情境：一台網域名稱、密碼都相符、修訂號又較大的舊交換器接上 trunk，它的 VLAN 資料庫可能蓋掉整個網域；被刪掉的 VLAN 上，埠會變成 inactive，造成大範圍斷線（見 [[vlan]] 的刪除後果）。新設備上線前先跑 `show vtp status`，確認模式、網域名稱與修訂號；設備巡檢紀錄也可加上 VTP 模式、網域名稱與修剪狀態，並可列入 ISO 27001 網路設備變更管理的檢查。
- **一般場景**：多台交換器的園區網路用來統一管理 VLAN；也有不少環境只用 transparent 或 off、改成逐台管理（這是我的推論）。Cisco 文件寫 NVRAM 與 DRAM 足夠時，網域內設備都應設成 server；講師則主張不要讓多台 server 各自改 VLAN（11-5）。

## 相關概念
- [[vlan]]：VTP 同步的對象；擴展 VLAN 的建立受 VTP 版本與模式限制。
- [[trunk]]：VTP 訊息只走 trunk；VTP 修剪就是自動決定 trunk 送哪些 VLAN。
- [[dtp]]：同為 Cisco 私有的二層協定，在交換器互連埠上協商埠要不要成為 trunk。
- [[native-vlan]]：該頁所記 Cisco 文件（未讀原文）寫 VTP 固定走 VLAN 1；VLAN 1 不可修剪，跟 native VLAN 是哪一個無關。

## 尚未解決的疑問
- VTPv3 的實際封包格式與訊息代碼 Cisco 沒公開；課程說「v3 移除子集通告」，可能其實是 Wireshark 不會解析 v3（9 號筆記有證據整理）。
- 加入訊息確切依據埠的管理狀態、線路狀態還是生成樹轉送狀態，查不到 Cisco 明文。
- 真實設備上，跑 v1／v2 的 transparent 會不會轉送 v3 通告：Cisco 文件寫不會，課程模擬器看到會，沒有實機驗證。
- 修剪關閉時是否也會送類型 4 加入訊息（11-9 在修剪預設關閉時就抓到）未查證。

## 來源（自動維護）
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/1-vtp-intro-centralized-vlan-management|CCNA Section 11 Leaf 1 VTP 簡介與集中管理 VLAN]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/2-vtp-message-format|CCNA Section 11 Leaf 2 VTP 的資料格式]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/3-vtp-roles-and-v1-v2-configuration|CCNA Section 11 Leaf 3 VTP 角色與 v1、v2 配置]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/4-commands-vtp-configuration|CCNA Section 11 Leaf 4 VTP 配置命令]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/5-lab-vtp-v1-v2-configuration|CCNA Section 11 Leaf 5 LAB VTP v1 和 v2 配置]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/6-vtp-v3-configuration|CCNA Section 11 Leaf 6 VTPv3 的配置]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/7-commands-vtp-v3-configuration|CCNA Section 11 Leaf 7 VTPv3 配置命令]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/8-lab-vtp-v3-configuration|CCNA Section 11 Leaf 8 LAB VTPv3 配置]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/9-lab-view-vtp-messages-with-wireshark|CCNA Section 11 Leaf 9 LAB 用 Wireshark 查看 VTP 訊息]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/10-vtp-pruning|CCNA Section 11 Leaf 10 VTP Pruning 修剪]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/11-commands-vtp-pruning-configuration|CCNA Section 11 Leaf 11 VTP Pruning 配置命令]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/12-lab-vtp-pruning|CCNA Section 11 Leaf 12 LAB VTP Pruning 實驗]]
