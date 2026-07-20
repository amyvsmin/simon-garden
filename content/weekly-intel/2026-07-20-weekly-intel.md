---
title: "資安週報 2026-07-20"
date: 2026-07-20
type: weekly-intel
issue: "W10"
cover_range: "2026-07-13 ~ 2026-07-19"
tags:
  - 資安週報
  - patch-tuesday
  - zero-day
  - kev
  - china-apt
  - edge-device
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "微軟 7 月更新創下史上最大單月紀錄：自家產品 622 個 CVE（另有 427 個 Chromium 漏洞影響 Edge、合計逾千）、62 個列為重大。兩個已遭實際利用：SharePoint Server 權限提升 CVE-2026-56164（CVSS 僅 5.3、EPSS 5.60%）與 ADFS 權限提升 CVE-2026-56155（CVSS 7.8、EPSS 0.38%），雙雙於 7 月 14 日列入 KEV。緊接著 7 月 16 日再新增 SharePoint 反序列化 RCE 零時差 CVE-2026-58644（CVSS 9.8、EPSS 1.47%），修補前即遭在野利用。CVE-2026-56164 是「CVSS 只有中度、卻已被打」的教科書案例"
  - "資安設備自己成為入口，且 EPSS 分數異常高：Fortinet FortiSandbox 兩個未驗證即可執行系統命令的漏洞 CVE-2026-39808（CVSS 9.1、EPSS 84.16%）與 CVE-2026-25089（CVSS 9.1、EPSS 36.13%）於 7 月 16 日列入 KEV、CISA 限 7 月 19 日前修補；SonicWall SMA1000 遠端存取設備則爆出兩個零時差 CVE-2026-15409（SSRF、CVSS 10.0）與 CVE-2026-15410（命令注入、CVSS 7.2）、攻擊中被串接使用。EPSS 84.16% 是本期最高、遠超企業 1% 關注門檻"
  - "台灣製造業爆出潛伏 13 年的中國國家級後門：Symantec 與 Carbon Black 威脅獵捕團隊在一家跨國高科技製造商的台灣子公司主機上，發現仍在運作的 Daxin 後門，以及前所未見的 Backdoor.Stupig——後者用木馬化的鍵盤配置 DLL 由 winlogon.exe 載入，可在任何人登入前、且不留登入稽核紀錄的情況下以 System 權限執行命令。兩個樣本的編譯時間戳都是 2013 年初，該主機直到 2026 年 5 月才開始回報遙測資料"
tldr: "本週是「修補量體與已被利用同時破表」的一週：微軟單月修補 622 個自家 CVE 創史上新高、其中兩個零時差已遭利用並即刻列入 KEV，隨後 SharePoint 反序列化 RCE 零時差 CVE-2026-58644 再進 KEV；資安設備本身成為破口（FortiSandbox EPSS 高達 84.16%、SonicWall SMA1000 兩個零時差遭串接利用）；台灣則被揭露一家高科技製造商子公司內潛伏長達 13 年的中國後門 Daxin 與全新的 Stupig 登入前後門。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W10 — 2026-07-20

> 涵蓋範圍：2026-07-13 ~ 2026-07-19

## 本週重點摘要

本週的主軸是「修補量體與實際被利用同時破表」。微軟 7 月例行更新一口氣修補自家產品 622 個 CVE、創下單月歷史新高，另有 427 個 Chromium 漏洞影響 Edge，合計逾千；其中兩個零時差已遭實際利用，SharePoint Server 的 CVE-2026-56164 更只有 CVSS 5.3 的中度評分卻已被打，直接示範了「嚴重度分數不等於實際風險」。兩天後 CISA 再把 SharePoint 反序列化 RCE 零時差 CVE-2026-58644（CVSS 9.8）列入 KEV，並發布 SharePoint 強化與獵捕指引，點名攻擊者會竊取 IIS machine key 建立持久化。第二條主線是資安設備自己成為入口：Fortinet FortiSandbox 兩個未驗證即可執行系統命令的漏洞列入 KEV、其中 CVE-2026-39808 的 EPSS 高達 84.16%，是本期最高的一條；SonicWall SMA1000 遠端存取設備則爆出兩個零時差、在實際攻擊中被串接使用。國家級活動同週雙線推進：美國與 18 個盟邦機構聯合警告俄羅斯聯邦安全局（FSB）Center 16 持續鎖定設定不當的路由器滲透關鍵基礎設施，歐盟與英國則首度聯手對俄制裁。台灣在地最值得注意的是 Symantec 揭露一家跨國高科技製造商的台灣子公司主機上，中國國家級後門 Daxin 與全新的 Stupig 登入前後門疑似潛伏達 13 年。整體嚴重程度判為高——修補量體空前、多個滿分且已遭利用的漏洞集中在對外設備，加上針對製造業的長期潛伏實證。

## 重大漏洞與威脅

1. **[微軟 7 月例行更新修補創紀錄的 622 個漏洞，含兩個遭實際利用的零時差](https://thehackernews.com/2026/07/microsoft-patches-record-622-flaws.html)**
   - 微軟 7 月 14 日修補自家產品 622 個 CVE，是史上最大單月量（6 月前高約 200 個的三倍以上），另含 427 個 Chromium 漏洞影響 Edge、合計逾千個；[62 個列為重大等級](https://isc.sans.edu/diary/33154)。兩個已遭實際利用：**CVE-2026-56164**（SharePoint Server 權限提升）評分只有 CVSS 5.3「中度」卻已在野被打，**CVE-2026-56155**（Active Directory 同盟服務 ADFS 權限提升、CVSS 7.8）同樣已被利用，兩者皆於 7 月 14 日列入 KEV。另有一個已公開揭露但尚未被利用的 CVE-2026-50661（Windows BitLocker 安全功能繞過、CVSS 6.1）。SANS ISC 值班分析師 Johannes Ullrich 對修補量體的建議務實：漏洞數暴增不代表工作量等比放大，「你手上的微軟產品數量沒變、照常修補就好」。需留意的網路面重大漏洞另有 CVE-2026-54128（DHCP 用戶端 RCE、CVSS 8.4）與 CVE-2026-54982／54995（RMCAST RCE、皆為重大）。（註：BleepingComputer 對同一批更新計為 570 個漏洞、3 個零時差，與 SANS 及 The Hacker News 的 622 個計數不同，差異來自計入範圍不一；本文採 SANS ISC 與 The Hacker News 的口徑。）
   - 指標（CVE-2026-56164）：CVSS 5.3｜EPSS 5.60%｜KEV：已列入（2026-07-14）
   - 指標（CVE-2026-56155）：CVSS 7.8｜EPSS 0.38%｜KEV：已列入（2026-07-14）
   - 指標（CVE-2026-50661）：CVSS 6.1｜EPSS 0.38%｜KEV：未列入

2. **[CISA 將遭在野利用的 SharePoint 反序列化 RCE 零時差 CVE-2026-58644 列入 KEV](https://thehackernews.com/2026/07/cisa-adds-exploited-sharepoint-rce-zero.html)**
   - 這是一個不受信任資料反序列化導致遠端程式碼執行的漏洞、CVSS 9.8，具備 Site Owner 以上權限的已驗證攻擊者可遠端植入並執行任意程式碼；可經網際網路遠端利用、攻擊複雜度低且可重複成功。修補隨 7 月 14 日例行更新釋出，微軟事後修訂公告、確認修補前即遭零時差利用，CISA 於 7 月 16 日列入 KEV 並要求聯邦機構 7 月 19 日前完成修補。受影響版本為 SharePoint Server 訂閱版、2019 與 Enterprise Server 2016。同週 CISA 另發布 [SharePoint 強化通報](https://www.cisa.gov/news-events/alerts/2026/07/14/cisa-urges-sharepoint-hardening-after-new-exploitations)，指出 CVE-2026-32201、CVE-2026-45659 與 CVE-2026-56164 三個漏洞正被積極利用、攻擊者會在得手後竊取 IIS machine key 建立持久化並投放惡意程式。地端 SharePoint 本季已累積四個進入 KEV 的漏洞，是本年度受攻擊最密集的微軟產品線之一。
   - 指標（CVE-2026-58644）：CVSS 9.8｜EPSS 1.47%｜KEV：已列入（2026-07-16）
   - 指標（CVE-2026-32201）：EPSS 21.48%｜KEV：已列入（2026-04-14）；（CVE-2026-45659）：EPSS 3.22%｜KEV：已列入（2026-07-01）

3. **[Fortinet FortiSandbox 兩個未驗證命令注入漏洞遭實際利用，CISA 勒令 7 月 19 日前修補](https://www.theregister.com/security/2026/07/17/attackers-target-critical-fortisandbox-flaws-as-cisa-issues-patch-order/5274287)**
   - CVE-2026-39808 與 CVE-2026-25089 都是 CVSS 9.1 的作業系統命令注入漏洞，未驗證攻擊者可用特製 HTTP 請求執行未授權的系統命令、達成遠端程式碼執行，攻擊複雜度低。CVE-2026-39808 影響 FortiSandbox 4.4.0 至 4.4.8；CVE-2026-25089 影響範圍更廣，涵蓋 5.0.0 至 5.0.5、4.4.0 至 4.4.8、所有 4.2 版本，以及 FortiSandbox Cloud 與 PaaS 的 5.0.4 至 5.0.5。Fortinet 已於 4.4.9 與 5.0.6 修補，CISA 於 7 月 16 日列入 KEV。值得注意的是 [CVE-2026-25089 的公開攻擊碼被研究者評為「vibecoded」（由 AI 草率生成）且很可能無法運作、目前尚無可用的公開攻擊碼](https://www.infosecurity-magazine.com/news/cisa-urgent-patch-fortinet/)，但 CVE-2026-39808 的 EPSS 84.16% 是本期所有條目最高的一條，遠超企業 1% 關注門檻。
   - 指標（CVE-2026-39808）：CVSS 9.1｜EPSS 84.16%｜KEV：已列入（2026-07-16）
   - 指標（CVE-2026-25089）：CVSS 9.1｜EPSS 36.13%｜KEV：已列入（2026-07-16）

4. **[SonicWall SMA1000 遠端存取設備兩個零時差遭串接利用](https://www.helpnetsecurity.com/2026/07/14/sonicwall-sma-attacks-via-cve-2026-15409-cve-2026-15410/)**
   - Rapid7 的託管偵測與應變（MDR）團隊發現並通報這兩個零時差。CVE-2026-15409 是 SMA1000 Work Place 介面的伺服器端請求偽造（SSRF）漏洞、CVSS 10.0，遠端未驗證攻擊者可迫使設備向非預期位置發出請求；CVE-2026-15410 是設備管理主控台的驗證後程式碼注入漏洞、CVSS 7.2，已驗證的遠端管理員可執行任意作業系統命令。[SonicWall 調查多起事件後確認兩者皆遭實際利用，且在已觀察到的攻擊中被串接使用](https://www.securityweek.com/sonicwall-issues-urgent-sma-patch-warning-for-two-zero-day-exploits/)——先以 SSRF 取得立足點、再以命令注入落地。影響 SMA1000 的 6210、7210 與 8200v，須更新至 hotfix 12.4.3-03453 或 12.5.0-02835。CISA 依 BOD 26-04 要求聯邦機構 7 月 17 日前修補、無法緩解者須停用該產品。
   - 指標（CVE-2026-15409）：CVSS 10.0｜EPSS 1.27%｜KEV：已列入（2026-07-14）
   - 指標（CVE-2026-15410）：CVSS 7.2｜EPSS 1.49%｜KEV：已列入（2026-07-14）

5. **[Oracle E-Business Suite 付款模組漏洞 CVE-2026-46817 遭實際利用並列入 KEV](https://www.scworld.com/news/critical-oracle-ebs-bug-added-to-cisa-list-of-exploited-vulnerabilities)**
   - CVE-2026-46817 是 Oracle Payments「檔案傳輸」元件的權限管理與驗證缺陷、CVSS 9.8，影響 Oracle E-Business Suite 12.2.3 至 12.2.15。未驗證攻擊者只需網路可達、經 HTTP 即可完全接管 Oracle Payments 模組，無須驗證、無須使用者互動。[Defused Cyber 觀察到攻擊者在週末對 Oracle E-Business 蜜罐發動利用，先前無已知利用紀錄、也無公開攻擊碼](https://securityaffairs.com/194463/security/attackers-actively-exploit-the-oracle-e-business-suite-flaw-cve-2026-46817.html)；另有報導指出約 950 台系統對外曝露。Oracle 已於上月的重大安全修補更新（CSPU）釋出修補，CISA 於 7 月 15 日列入 KEV、要求 7 月 18 日前處理。財務與付款系統遭鎖定，對有導入 ERP 的製造業是直接風險。
   - 指標：CVSS 9.8｜EPSS 1.04%｜KEV：已列入（2026-07-15）

## 攻擊趨勢與事件

1. **[美國與 18 個盟邦機構聯合警告：俄羅斯 FSB Center 16 鎖定路由器滲透關鍵基礎設施](https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-194a)**
   - CISA 偕同國家安全局（NSA）、聯邦調查局（FBI）、國防部網路犯罪中心（DC3）與澳洲、英國 NCSC、加拿大、紐西蘭、愛沙尼亞、芬蘭、法國、義大利等 15 個機構，於 7 月 13 日發布聯合資安通報 AA26-194A「改善路由器衛生以防範俄羅斯國家級鎖定」。通報指出俄羅斯聯邦安全局 Center 16 的行動者持續利用全球設定不當與存在漏洞的網路設備，機會性地入侵多個關鍵基礎設施網路，重點鎖定通訊、國防工業基礎、能源、金融服務、政府與醫療部門；相關組織別名包括 Berserk Bear、Energetic Bear、Crouching Yeti、Dragonfly、Ghost Blizzard 與 Static Tundra。手法以濫用設定不當的路由器為主、同時利用已知 CVE 取得未授權存取、竊取設備組態並藉此擴大惡意活動。呼應這條，CISA 於 7 月 13 日把一個 2008 年的 Cisco IOS 跨站請求偽造漏洞 CVE-2008-4128 列入 KEV，其 EPSS 達 23.86%——十八年前的漏洞至今仍在被實際利用，凸顯網路設備長期失修的沉痾。
   - 指標（CVE-2008-4128）：EPSS 23.86%｜KEV：已列入（2026-07-13）

2. **[歐盟與英國首度聯手對俄羅斯發動網路制裁](https://www.bleepingcomputer.com/news/security/eu-and-uk-hit-russia-with-first-joint-cyber-sanctions-package/)**
   - 7 月 13 日，歐盟與英國聯合制裁數十名俄羅斯個人與實體，指控俄羅斯協調一個駭客組織網絡、對歐洲各地發動攻擊。這是雙方首度推出聯合網路制裁包，與同日發布的 AA26-194A 技術通報形成「技術指引＋外交施壓」的雙軌行動。對企業端的實務意義在合規面：制裁名單擴張會連動出口管制與第三方風險審查，有歐洲往來的企業需留意往來對象是否落入新增名單。

3. **[Progress ShareFile 緊急停機事件確認為零時差漏洞，本週已恢復服務（本週新進展）](https://www.bleepingcomputer.com/news/security/progress-confirms-sharefile-zero-day-flaw-behind-storage-zone-shutdown/)**
   - Progress 於 7 月 10 日以「可信的外部安全威脅」為由，要求 ShareFile 客戶手動關閉承載 Storage Zone Controller 的 Windows 伺服器，並強調僅從 ShareFile 雲端平台停用存取並不足夠。本週的新進展是原因與收尾：調查確認為 Storage Zone Controller 的一個高風險路徑穿越漏洞、影響 5.x 與 6.x 版本，Progress 釋出 5.12.5 與 6.0.2 修補版並解除停機令、已套用修補的設備即可恢復運作。Progress 表示沒有證據顯示任何客戶帳號或資料遭未授權存取、也未發現進行中的攻擊。這起事件的參考價值在應變決策本身：在沒有修補、也還沒完全掌握威脅細節時，廠商直接選擇「叫客戶關機」這種最高強度的緩解手段。

4. **[新惡意程式雙發：macOS 的 CrashStealer 與 Android 的 RedHook 新版](https://www.bleepingcomputer.com/news/security/)**
   - CrashStealer 是一支新的 macOS 資訊竊取程式，偽裝成 Apple 的當機回報工具以竊取憑證、鑰匙圈（keychain）資料與加密錢包。RedHook 的新版本則以一種前所未見的方式濫用 Android 的無線偵錯（Wireless ADB）機制，不需連接電腦即可取得 shell 層級權限。兩者共同顯示端點竊密工具正往「偽裝成系統原生元件」與「濫用官方偵錯介面」的方向演化，傳統以可執行檔特徵為主的偵測會逐漸失效。

> 註：本期原定的 Reddit 社群來源（r/cybersecurity、r/netsec、r/blueteamsec）無法取得——搜尋工具的爬蟲遭 reddit.com 阻擋、回傳網域不可存取錯誤，並非該站本週無內容。本段改以新聞媒體與廠商研究來源填補，社群討論視角本期從缺。

## 防禦與偵測

1. **[SANS ISC 7 月 14 日 Handler Diary：微軟 7 月更新總覽與修補節奏建議](https://isc.sans.edu/diary/33154)**
   - Johannes Ullrich 拆解本月 622 個微軟 CVE 加 427 個 Chromium 漏洞的組成：62 個重大等級，兩個已遭利用（CVE-2026-56155 ADFS 權限提升 CVSS 7.8、CVE-2026-56164 SharePoint 權限提升 CVSS 5.3），一個已公開揭露（CVE-2026-50661 BitLocker CVSS 6.1）。最實用的一句是對修補團隊的定心丸：漏洞數暴增不等於修補工時等比暴增，「你手上的微軟產品數量沒變、照常修補就好」。落地作法是別被總數嚇到而亂了優先序——先過濾出自己實際有部署的產品線，再以「已列入 KEV → EPSS 高 → CVSS 高」的順序排。本月值得特別注意的網路面重大漏洞是 CVE-2026-54128（DHCP 用戶端 RCE、CVSS 8.4）與 CVE-2026-54982／54995（RMCAST RCE）。

2. **[CISA SharePoint 強化與入侵獵捕指引：偵測特徵與 machine key 輪替順序](https://www.cisa.gov/news-events/alerts/2026/07/14/cisa-urges-sharepoint-hardening-after-new-exploitations)**
   - 這是本週最可直接落地的一份防禦文件。CISA 給出的獵捕方向包括：檢視遙測資料中的異常請求、可疑的 SharePoint worker 行程活動、web shell 以及對 machine key 的存取行為；並提供微軟的偵測特徵——`AMSI: Exploit:Script/SuspSignoutReqBody.A`（掃描請求主體）、`AMSI: Exploit:Script/ToolPaneAuthBypass.A`（掃描請求標頭）、`AMSI: Exploit:Script/ToolPaneAuthBypass.C`（涵蓋 RCE）、`MDAV: Backdoor:MSIL/LeakFang.A!dha`（涵蓋竊取 IIS 受保護機密的後續行為）。最關鍵的一條操作順序是：**輪替 IIS machine key 之前，要先獵捕並清除入侵痕跡（含 machine key 竊取工具），否則新輪替的金鑰會再次被竊**。同時檢查 SharePoint 伺服器是否有未授權的管理員活動、非預期的 web shell、可疑行程與應用程式檔案遭竄改。

3. **對抗本週「資安設備成為入口」的收斂作法。** FortiSandbox 與 SonicWall SMA1000 這兩條的共通點是：漏洞落在原本用來防禦或提供遠端存取的設備上，而這類設備往往被預設信任、且管理介面常對外曝露。三個不必等修補窗口就能做的動作：一是盤點所有資安與遠端存取設備的管理介面是否對網際網路曝露，一律收斂到獨立管理網段並加上來源 IP 限制；二是對這些設備建立「非預期外連」與「設備自身發起的可疑請求」告警——CVE-2026-15409 是 SSRF，攻擊成功的特徵正是設備向非預期位置發出請求；三是把資安設備納入與伺服器同等的修補節奏與資產清冊，別讓它們因為「是資安產品」而落在弱點管理流程之外。

4. **路由器衛生的具體檢核項（呼應 AA26-194A）。** 聯合通報給的建議相當基礎但正是被長期忽略的部分：停用過時的 SNMP 版本（尤其 SNMPv1／v2c 的明文 community string）、使用強密碼、更新韌體、關閉不必要的路由器服務。搭配 CVE-2008-4128 這條 2008 年漏洞至今仍在 KEV 被實際利用的事實，建議把網路設備的韌體版本與服務曝露面納入定期盤點——網路設備常因「還能通就不動它」而多年不修，正是這類機會性入侵的主要溫床。

## 台灣在地動態

1. **[潛伏 13 年的中國國家級後門 Daxin 在台灣高科技製造商現蹤，並發現全新的 Stupig 登入前後門](https://thehackernews.com/2026/07/daxin-resurfaces-in-taiwan-alongside.html)**
   - Symantec 與 Carbon Black 威脅獵捕團隊[在一台位於台灣的受害主機上發現 Daxin 仍在運作，該主機屬於一家跨國高科技製造商的台灣子公司](https://www.security.com/threat-intelligence/daxin-returns-stupig)。Daxin 是 Symantec 評為中國關聯行動者最先進的惡意程式，其標誌性特徵是不主動建立對外連線，而是由驅動程式監聽傳入的 TCP 流量、比對特定樣式後劫持既有的正常連線來夾帶加密的命令與控制（C2）流量——這使它幾乎無法被以「異常對外連線」為基礎的偵測抓到。同一台主機上還發現一支前所未知的後門 Backdoor.Stupig，手法未見於任何已知惡意程式家族：以木馬化的鍵盤配置 DLL 由 `winlogon.exe` 載入，讓攻擊者能直接從 Windows 登入畫面、在任何人登入前以 System 權限執行命令，且不會產生登入稽核事件。兩個樣本的編譯時間戳都落在 2013 年初，而該主機直到 2026 年 5 月才開始回報遙測資料，研判入侵可能在該網路內潛伏長達 13 年未被察覺。這是本期對台灣製造業最重要的一條。

2. **[iThome 資安週報 0713~0717：微軟 7 月修補逾千個 CVE、SharePoint 零時差漏洞遭積極利用](https://www.ithome.com.tw/news/177408)**
   - iThome 本週週報以微軟創紀錄的修補量與 SharePoint 零時差遭積極利用為主軸，與本期第一、二條的國際情報一致，可視為本地媒體對同一批事件的中文覆述，適合轉給不讀英文來源的同事。同週的 7 月 17 日資安日報則獨立收錄了[台灣製造公司遭中國惡意軟體 Daxin 攻擊](https://www.ithome.com.tw/news/177397)一案，即上一條的本地報導版本。
   - 註：iThome 本站對自動抓取回應 HTTP 403，本條依搜尋結果標題與摘要撰寫、未能取得全文，細節密度低於其他條目。

## 對 Simon 工作的影響評估

1. **Daxin ／ Stupig 潛伏 13 年 ＋ 光電半導體製造業 — 這是本期跟你公司處境最貼近的一條**
   受害者是「跨國高科技製造商的台灣子公司」，跟你們的產業與組織型態幾乎重疊，值得當成內部風險情境認真看。三個技術細節決定了該怎麼防：其一，Daxin 不主動對外連線、而是劫持既有正常連線夾帶 C2 流量，代表你們若只靠防火牆的對外連線異常偵測，這類後門根本不會觸發告警；其二，Stupig 從 Windows 登入畫面就能以 System 執行命令、且不留登入稽核事件，代表以「登入紀錄」為主的稽核也看不到；其三，最關鍵的是那台主機「直到 2026 年 5 月才開始回報遙測資料」——真正讓它潛伏 13 年的不是技術多高明，而是端點偵測的覆蓋率有缺口。可以立刻做的是盤點端點防護與遙測的覆蓋率：哪些主機（尤其產線相關、老舊、或因相容性被排除在防毒／EDR 之外的機台）目前沒有回報遙測？這份「盲區清單」本身就是最高價值的產出，而且能直接餵進你正在做的 ISO 27001 BIA——把「長期潛伏的國家級入侵」列為威脅情境，會影響你對關鍵系統的 RTO／RPO 判斷（若入侵已存在多年，備份本身可能也含有後門，這會改變還原策略的設計）。

2. **微軟 7 月 622 個 CVE ＋ SharePoint／ADFS 零時差 — 修補優先序與身分基礎設施同時受壓**
   你負責伺服器管理與資安治理，這個月的修補量體會直接衝擊工作排程。先用 SANS 的建議定心：漏洞總數暴增不代表你的工時等比暴增，因為你手上的微軟產品數量沒變。實務排序建議是：先盤點公司有沒有地端 SharePoint Server 與 ADFS。若有 SharePoint，這一條是本期你最該優先處理的微軟項目——四個 SharePoint 漏洞已進 KEV，且 CISA 明確指出攻擊者會竊取 IIS machine key 建立持久化，務必照 CISA 指引的順序做：**先獵捕清除入侵痕跡、再輪替 machine key**，順序顛倒等於白做。ADFS 的 CVE-2026-56155 影響的是身分同盟基礎設施，一旦被提權，影響會擴散到所有依賴它做單一登入的應用，屬於你職責中「身分與存取控制」的核心資產。CVE-2026-56164 只有 CVSS 5.3 卻已被實際利用，是可以直接寫進資安 KPI 月簡報的教學案例——用來說明為什麼弱點管理不能只用 CVSS 門檻篩選，這正好佐證你導入 KEV 與 EPSS 三指標排序的價值（7 月份簡報下月初交）。

3. **FortiSandbox EPSS 84.16% ＋ SonicWall SMA1000 零時差 — 資安設備與遠端存取設備要納入同等修補節奏**
   這兩條指向同一個容易被忽略的盲點：防禦設備本身成為入口。先盤點公司是否有 FortiSandbox（若有，確認版本是否落在 4.4.0–4.4.8、5.0.0–5.0.5 或 4.2 全系列，須升級至 4.4.9 或 5.0.6）與 SonicWall SMA1000（6210／7210／8200v，須套用 hotfix 12.4.3-03453 或 12.5.0-02835）。CVE-2026-39808 的 EPSS 84.16% 意味著「被利用的機率極高」，遠超企業 1% 關注門檻，屬於當零時差節奏排緊急變更的等級。更該制度化的是把資安設備與遠端存取設備正式納入資產清冊與修補流程——這類設備常因採購與維運分屬不同流程而落在弱點管理之外，而 ISO 27001 的資產盤點你已完成，正好可以回頭檢查這一類是否被涵蓋。SonicWall 一案還有個延伸提醒：SMA 是遠端存取設備，若公司有類似的 VPN／遠端存取閘道，它同時是身分邊界，應優先確保管理介面不對外曝露。

4. **路由器衛生通報 ＋ 十八年舊漏洞仍在被利用 — 機房網路設備的韌體與服務曝露面盤點**
   你負責機房管理，AA26-194A 的建議清單基本上就是一份可直接執行的檢核表：停用過時的 SNMP 版本（特別是 SNMPv1／v2c 的明文 community string，這在機房設備中極常見且常沿用預設值 public／private）、更換強密碼、更新韌體、關閉不必要的服務。CVE-2008-4128 這條 2008 年的 Cisco IOS 漏洞在 2026 年被列入 KEV、EPSS 還有 23.86%，具體說明了「網路設備因為還能通就多年不動」會累積成什麼樣的風險。建議把交換器、路由器、無線控制器的韌體版本與開放服務納入定期盤點，並和 BIA 一起做——網路設備失效或被控會直接影響營運復原時間，本來就該出現在 RTO／RPO 的盤點清單裡。另外，Oracle E-Business Suite 的 CVE-2026-46817（CVSS 9.8、已進 KEV、鎖定付款模組）若公司有導入 Oracle ERP，也應一併確認版本是否落在 12.2.3–12.2.15 的受影響區間。
