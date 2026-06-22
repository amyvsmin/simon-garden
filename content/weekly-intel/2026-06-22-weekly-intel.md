---
title: "資安週報 2026-06-22"
date: 2026-06-22
type: weekly-intel
issue: "W06"
cover_range: "2026-06-15 ~ 2026-06-21"
tags:
  - 資安週報
  - zero-day
  - credential-leak
  - apt
  - edge-device
  - privilege-escalation
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "FortiBleed 憑證外洩風暴：研究者揭露 73,932 台對外 FortiGate 防火牆／VPN 的設定檔與管理員憑證遭擷取、雜湊破解，橫跨 194 國，其中已交叉驗證可用的管理員帳密逾 3 萬組，台灣受影響數量居全球第三；至少 4 個組織遭完全入侵（含一家土耳其北約國防承包商）。CISA 6 月 18 日發布強化指引，要求 Fortinet 用戶立即輪換憑證並視設定檔已外洩處理"
  - "Splunk Enterprise 爆未驗證遠端程式碼執行零時差 CVE-2026-20253（CVSS 9.8），免登入即可透過 PostgreSQL sidecar 服務端點建立或截斷任意檔案進而執行程式碼，影響 10.2.0–10.2.3 與 10.0.0–10.0.6；CISA 6 月 18 日確認遭實際利用、列入 KEV（史上第一個進 KEV 的 Splunk 漏洞），依 BOD 26-04 勒令聯邦機構 6 月 21 日前修補"
  - "中國 APT 組織 Velvet Ant 的「Operation Highland」曝光：自 2016 年起在一個完全與網際網路隔離的關鍵基礎設施網路潛伏將近十年未被察覺，手法是直接竄改 Linux 認證核心——植入 9 種變體的後門 pam_unix.so 模組與木馬化 OpenSSH 二進位檔，攔截每一次登入的憑證與指令；本週同時有 Microsoft Defender 提權零時差 RoguePlanet（CVE-2026-50656）與 Cisco SD-WAN Manager 零時差 CVE-2026-20262 遭實際利用"
tldr: "本週主軸是「身分與邊界憑證的大規模失守」：FortiBleed 一次曝光逾 7 萬台 Fortinet 設備的可用管理員憑證（台灣全球第三重災），同時 Splunk 爆 CVSS 9.8 未驗證 RCE 零時差遭實際利用、Microsoft Defender 與 Cisco SD-WAN Manager 雙雙出現遭利用的提權零時差，而中國 Velvet Ant 以後門認證元件潛伏隔離網路近十年的案例，更把『連保護與監控工具、連認證流程本身都會變成攻擊面』推到檯面。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W06 — 2026-06-22

> 涵蓋範圍：2026-06-15 ~ 2026-06-21

## 本週重點摘要

本週態勢由**身分與邊界憑證的大規模失守**主導。最受矚目的是 FortiBleed 憑證外洩事件：攻擊者長期從對外暴露的 FortiGate 設備擷取設定檔、再破解其中儲存的憑證雜湊，外流資料涵蓋 73,932 台設備、橫跨 194 國，其中已交叉驗證可用的管理員帳密逾 3 萬組，台灣受影響數量居全球第三；CISA 在 6 月 18 日發布強化指引。漏洞面同樣嚴峻：Splunk Enterprise 爆出免驗證即可遠端執行程式碼的零時差 CVE-2026-20253（CVSS 9.8），CISA 6 月 18 日確認遭實際利用並列入 KEV、勒令 6 月 21 日前修補；Microsoft Defender 的提權零時差 RoguePlanet（CVE-2026-50656）在 6 月 17 日獲原廠證實、修補仍在開發中；Cisco Catalyst SD-WAN Manager 的零時差 CVE-2026-20262 也遭實際利用、可提權至 root。威脅情報面，資安公司 Sygnia 揭露的中國 APT 組織 Velvet Ant「Operation Highland」本週成為國際與台灣資安週報的頭條：該組織直接竄改 Linux 認證核心元件（後門 pam_unix.so 與木馬化 OpenSSH），在一個完全隔離的關鍵基礎設施網路潛伏將近十年。整體嚴重程度判為高——大規模可用憑證外流、多個遭實際利用的零時差、加上長達十年的隱匿滲透同時出現。

## 重大漏洞與威脅

1. **[Splunk Enterprise 未驗證 RCE 零時差 CVE-2026-20253 遭實際利用、CISA 勒令週日前修補](https://thehackernews.com/2026/06/critical-splunk-enterprise-flaw-lets.html)**
   - CVE-2026-20253 屬「關鍵功能缺少身分驗證」漏洞，CVSS 9.8，未經身分驗證的攻擊者可透過 PostgreSQL sidecar 服務端點建立或截斷任意檔案，進而執行程式碼接管主機，影響 Splunk Enterprise 10.2.0–10.2.3 與 10.0.0–10.0.6（已於 10.2.4、10.0.7 修補）。[CISA 於 6 月 18 日確認遭實際利用、將其列入 KEV，這是史上第一個進入 KEV 名單的 Splunk 漏洞](https://www.bleepingcomputer.com/news/security/cisa-splunk-enterprise-flaw-actively-exploited-patch-by-sunday/)，並依 BOD 26-04 要求聯邦機構於 6 月 21 日（週日）前完成修補。一個負責蒐集全公司日誌的 SIEM 平台本身可被免登入接管，等於監控中樞反成入口。

2. **[Microsoft Defender 提權零時差 RoguePlanet（CVE-2026-50656）獲原廠證實、修補開發中](https://thehackernews.com/2026/06/microsoft-defender-rogueplanet-zero-day.html)**
   - RoguePlanet 是 Microsoft Malware Protection Engine（Defender 核心掃描元件）的權限提升漏洞，CVSS 7.8，屬 CWE-59「不當連結解析」引發的檢查時間／使用時間（TOCTOU）競態條件。攻擊者把特製的 VHD／VHDX 檔透過網路共用或釣魚附件送達，受害者一掛載，Defender 即時掃描就觸發競態、產生具 SYSTEM 權限的命令列。[微軟在 6 月 17 日證實此漏洞、表示修補仍在開發中](https://www.bleepingcomputer.com/news/microsoft/microsoft-working-on-defender-patch-for-rogueplanet-zero-day/)；概念驗證程式在裝有 6 月 Patch Tuesday 更新的 Windows 10／11 上仍可成功，但因標準使用者無法掛載 ISO，目前對 Windows Server 無效。這是「防護工具本身變成攻擊面」的又一案例。

3. **[Cisco Catalyst SD-WAN Manager 零時差 CVE-2026-20262 遭利用、可提權至 root](https://thehackernews.com/2026/06/cisco-releases-security-updates-for.html)**
   - CVE-2026-20262 是 Cisco Catalyst SD-WAN Manager（vManage）的任意檔案寫入漏洞，CVSS 6.5，源於 Web 介面在檔案上傳時未正確驗證輸入；通過身分驗證的遠端攻擊者可送出特製 HTTP 請求建立或覆寫系統檔案，再藉此提權至 root（須先具備一組低權限帳號，這也是 CVSS 僅 6.5、低於 Splunk 9.8 的原因，但因已遭實際利用仍不可輕忽）。[Cisco 於 6 月 15 至 16 日揭露並釋出修補，表示在內部測試中發現問題、且已觀測到有限度的實際利用](https://www.bleepingcomputer.com/news/security/cisco-fixes-sd-wan-vmanage-flaw-exploited-in-zero-day-attacks/)，CISA 同步在 6 月 15 日列入 KEV、聯邦機構修補期限 6 月 29 日。修補版本包含 20.9.9.2、20.12.7.2、20.15.4.5、20.15.5.3、20.18.3.1、26.1.1.2。

## 攻擊趨勢與事件

1. **[FortiBleed：7.3 萬台 Fortinet 設備憑證外洩、台灣居全球第三重災](https://www.bleepingcomputer.com/news/security/fortibleed-leak-exposes-fortinet-vpn-credentials-for-73-000-devices/)**
   - 研究者在 6 月中旬揭露大規模憑證外洩事件 FortiBleed：攻擊者長期從對外暴露的 FortiGate 設備擷取設定檔、再破解其中儲存的憑證雜湊，外流資料含 73,932 個獨立防火牆網址、橫跨 194 國與 21,632 個網域，其中已交叉驗證可用的管理員帳密逾 3 萬組（外洩設備總數約 7.4 萬台，兩者口徑不同）。受影響最嚴重的依序為印度、美國、台灣、墨西哥、土耳其等，至少 4 個組織遭完全入侵（含一家被竊取機密國防文件的土耳其北約承包商）；資安研究者 Kevin Beaumont 已交叉驗證部分帳密為真。對使用 Fortinet 的組織而言，重點不只是修漏洞，而是「設定檔與憑證可能早已外流」，須以「已被攻破」為前提全面輪換。

2. **[中國 Velvet Ant「Operation Highland」：竄改 Linux 認證核心、潛伏隔離網路近十年](https://www.sygnia.co/blog/operation-highland-velvet-ant/)**
   - 資安公司 Sygnia 於 6 月 11 日揭露、並在本週成為國際與台灣資安週報頭條：中國背景的 Velvet Ant 自 2016 年起，在一個完全與網際網路隔離的關鍵基礎設施網路潛伏將近十年未被察覺。[手法是直接把後門埋進認證流程本身](https://thehackernews.com/2026/06/china-linked-hackers-backdoored-linux.html)——以 9 種變體的後門 pam_unix.so 模組取代正版（接受寫死的硬編碼密碼、並收割使用者憑證），同時木馬化 OpenSSH 的 ssh／sshd／scp，攔截每一次登入帳密、記錄 SSH 工作階段的所有指令。當控制權延伸到認證層，攻擊者不再依賴單一立足點，而是「嵌入到認證過程本身」，每一次登入、每一條指令都對其透明。此案直接打破「隔離網路就安全」的假設。

3. **本週社群（r/cybersecurity、r/netsec、r/blueteamsec）無單一突出且可獨立成條的新討論串**，熱度集中在上述 FortiBleed 憑證外洩、Splunk 與 Defender 零時差，以及 Velvet Ant 認證後門的偵測與清查；相關情報已併入前述與下節各條。

## 防禦與偵測

1. **[SANS ISC 6 月 17 日 Handler Diary：瀏覽器盲點——你的 CASB 可能沒擋到你以為擋住的東西](https://isc.sans.edu/diary/33084)**
   - 這篇客座 Handler Diary 點出一個常見的偵測盲點：QUIC（HTTP/3 底層協定）走 UDP，多數雲端存取安全代理（CASB）只檢測 TCP、無法檢視 UDP，導致 Chrome 可連到 CASB 理應封鎖的目的地，而紀錄裡完全看不到。問題根源在於 CASB 政策通常只用單一瀏覽器測一次就簽核通過，沒人驗證它是否在受管裝置上的每個瀏覽器都一致生效。實務動作：跨多個瀏覽器實測封鎖政策是否真的落地、考慮直接封鎖對外 UDP/443 或停用 QUIC，並把「政策是否一致生效」納入定期驗證，而非設一次就當完成。

2. **Velvet Ant 案的偵測重點：把認證層當成最高優先的完整性監控對象。** 對抗這類認證後門，傳統的端點偵測常失靈，因為惡意行為發生在 pam_unix.so 與 OpenSSH 這類「被信任的系統元件」內部。可行的防禦：對 `/lib*/security/pam_unix.so`、`sshd`、`ssh`、`scp` 等關鍵二進位檔做檔案完整性監控（FIM）與已知良好雜湊比對、留意非預期的修改時間與大小變化；監看「以硬編碼密碼成功登入」「同一帳號異常多主機登入」等跡象；對長壽、長期不重啟的 Linux 主機尤其要定期比對二進位檔指紋，而非只信任套件管理員回報的版本。

3. **FortiBleed 的善後即偵測：以「設定檔已外洩」為前提全面盤查。** CISA 6 月 18 日的強化指引精神是「假設已被攻破」：輪換所有 FortiGate 本機與管理員憑證、VPN 使用者密碼與預共享金鑰，啟用多因素驗證，檢視設定檔是否遭竄改（新增的管理員帳號、異常的政策或路由），並把非必要對外的管理介面收回內網。被破解的是「儲存在設定檔裡的憑證雜湊」，所以單純更新韌體並不足夠，必須換掉憑證本身。

## 台灣在地動態

1. **[iThome 資安週報 0615~0618：發現中國駭客入侵關鍵基礎設施、潛伏隔離網路環境近十年](https://www.ithome.com.tw/news/176729)**
   - iThome 本週資安週報以 Velvet Ant 的 Operation Highland 為頭條，整理 Sygnia 6 月 11 日的揭露——中國駭客篡改 Linux 認證核心元件、在完全隔離的關鍵基礎設施網路潛伏將近十年，Sygnia 評其為該組織迄今最複雜精密的行動。同期週報並涵蓋 Oracle PeopleSoft 零時差後續、M365 Copilot 資訊外洩手法，以及 FortiBleed 曝光逾 7 萬台 Fortinet 設備憑證、台灣受影響數量居全球第三。對台灣讀者的意義在於：國家級駭客對關鍵基礎設施的長期潛伏，加上邊界設備憑證的大規模外流，台灣都名列前段班，企業端的身分輪換與認證層稽核已不是可選項。

## 對 Simon 工作的影響評估

1. **FortiBleed ＋ 台灣全球第三重災 — 若公司有對外 FortiGate，本週最該做的是「假設憑證已外洩」全面輪換**
   這是本週對你環境最直接的一條。FortiBleed 外流的是「從設定檔破解出來的可用管理員憑證」，台灣受影響數量居全球第三，代表台灣企業是被鎖定盤查的重點。若公司任何 FortiGate 防火牆或 VPN 曾對外暴露，務必當成已被攻破處理：輪換所有本機與管理員帳密、VPN 使用者密碼與預共享金鑰，全面啟用多因素驗證，並逐項檢視設定檔是否被植入隱藏管理員帳號或異常政策。單純更新韌體不夠，因為被破解的是憑證本身。這正落在你身分與存取控制、端點與資產管理的職責核心，也可作為 ISO 27001 存取控制與技術弱點管理的具體佐證。

2. **Velvet Ant 認證層後門 ＋ 隔離網路淪陷 — 直接餵進你進行中的 ISO 27001 業務營運衝擊分析（BIA）**
   你目前正在做 BIA、盤點哪些系統會影響營運並列 RTO／RPO 與備份備援。Velvet Ant 案給 BIA 兩個必須納入的假設：其一，「隔離網路就安全」不成立，半導體廠常見的 OT 或隔離網段同樣可能被長期潛伏，BIA 要把「如何偵測並從長期潛伏的入侵中復原」當情境之一；其二，認證與身分系統（網域控制站、跳板機、Linux 認證元件）是皇冠寶石，應給最嚴格的 RTO／RPO 與離線、可信的還原基準。落地動作：對關鍵 Linux 主機的 pam_unix.so 與 OpenSSH 二進位檔建立已知良好雜湊基準並做檔案完整性監控，把「認證元件遭竄改」列為高優先偵測項目。

3. **Splunk 與 RoguePlanet「資安工具本身成攻擊面」— 把監控與防護元件納入弱點管理盤點，別預設它們安全**
   本週兩個零時差都打在「保護你的工具」上：Splunk（SIEM）可被免登入遠端執行程式碼、Microsoft Defender 可被提權到 SYSTEM。教訓是弱點管理盤點不能只涵蓋業務系統，連 SIEM、防毒、備份代理、管理主控台都要列入並追蹤原廠公告。若公司有用 Splunk，CVE-2026-20253 須比照緊急變更立即確認版本（升到 10.2.4／10.0.7）並確保管理介面不對公網暴露；Defender 端在 RoguePlanet 修補釋出前，留意來路不明的 VHD／VHDX 附件與掛載行為。可沿用上期提到的 CISA BOD 26-04 風險分級邏輯，把這類「遭實際利用、已列 KEV」的漏洞排到最前面。

4. **Cisco SD-WAN／邊界網管設備零時差 ＋ 你已完成的 Veeam 備份 — 把不可變與離線副本當長潛伏與勒索的最後防線**
   本週 Cisco SD-WAN Manager、Fortinet、Splunk 連環出事，凸顯對外網管與邊界設備是最容易被當入口的一環；若環境內有 Catalyst SD-WAN Manager，CVE-2026-20262 應排入修補。更重要的是把鏡頭拉到復原面：Velvet Ant 潛伏十年、勒索軟體分鐘級橫向，兩者都讓「備份是否真的能還原」變成生死線。你已完成的 Veeam 備份調整正是這道防線，建議再確認三件事——是否有不可變（immutable）副本、是否有離線副本、以及是否做過實際還原演練，確保即使認證層或邊界長期被滲透，仍能回到可信的基準點。這也直接呼應 BIA 裡 RPO／RTO 的可達成性驗證。
