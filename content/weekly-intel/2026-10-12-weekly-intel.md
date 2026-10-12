---
title: "資安週報 2026-10-12"
date: 2026-10-12
type: weekly-intel
issue: "W22"
cover_range: "2026-10-05 ~ 2026-10-11"
tags:
  - 資安週報
  - edge-devices
  - n-day
  - supply-chain
  - data-breach
  - ai-agent
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "修補公開到被打的時間差再縮短：Atlassian 自架版 CVE-2026-21589（CVSS 9.3）在 watchTowr 公開技術細節與概念驗證後約兩小時就出現利用嘗試，SANS ISC 蜜罐 10 月 7 日也記錄到相同手法；SonicWall SMA1000 滿分漏洞 CVE-2026-102255（CVSS 10.0）在原廠 10 月 6 日釋出修補後數天即被蜜罐觀測到利用嘗試"
  - "備份平台成為入口：AhsayCBS 兩個漏洞 CVE-2026-105133、CVE-2026-105134 被串成攻擊鏈，Huntress 10 月 7 日起觀測到至少五個組織遭植入網頁後門與挖礦程式，原本被認為安全的 10.3.4 版後來也確認受影響，等於目前沒有可確認有效的修補"
  - "舊漏洞的帳還沒算完：美英日澳等十國聯合通報 AA26-281A 揭露中國 Integrity Tech 支援的攻擊行動，CISA 同日把 2015 至 2023 年的五個舊漏洞（BIND、ProFTPD、Apache Struts、ONLYOFFICE、Strapi）一次加進 KEV，其中三個 EPSS 超過 96%。台灣則有一零四約 12 萬筆履歷遭未經授權讀取、鈊象確認玩家個資外洩"
tldr: "本週主線是「修補一公開就開打」：Atlassian 自架版檔案讀取漏洞在概念驗證公開後約兩小時就有人掃，SonicWall SMA1000 滿分漏洞修補後數天就出現利用嘗試，AhsayCBS 備份平台則是被打時連有效修補都還沒有。另一條線是十國聯合通報 AA26-281A，CISA 因此把五個 2015 至 2023 年的舊漏洞補進 KEV，提醒還在跑的老系統一樣在名單上。台灣方面，一零四與鈊象接連發布個資外洩重訊，微軟報告把臺灣上半年遭網路威脅影響程度排到全球第 4。整體嚴重程度判為高。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W22 — 2026-10-12

> 涵蓋範圍：2026-10-05 ~ 2026-10-11

## 本週重點摘要

本期最清楚的訊號是「修補公開」與「開始被打」之間的距離已經以小時計。Atlassian 在 10 月 5 日公告自架版產品的未驗證檔案讀取漏洞 CVE-2026-21589，watchTowr 隨後公開根因分析與概念驗證，蜜罐業者回報約兩小時內就出現利用嘗試，SANS ISC 的蜜罐 10 月 7 日也收到同一套請求。SonicWall SMA1000 的滿分漏洞走的是同一條路：原廠 10 月 6 日的公告還寫「無利用跡象」，10 月 9 日研究者的蜜罐網路就已記錄到相符的利用嘗試。上期 Google GTIG 說的「成長來自 n-day 的快速武器化」，本週有了兩個具體實例。

第二條線比較少見：被打的是備份平台。AhsayCBS 兩個漏洞被串起來，從繞過認證一路到執行程式，Huntress 從 10 月 7 日起觀測到至少五個組織遭植入 JSP 網頁後門，並被裝上偽裝成 Microsoft Edge 更新服務的 XMRig 挖礦程式。更麻煩的是，Huntress 原本建議升級到 10.3.4，後來更正為該版也受影響，所以目前唯一可靠的處置是收掉管理介面的對外存取並做入侵檢查。

第三條線是舊帳。美、英、日、澳、加、紐、西等十國機關於 10 月 8 日發布聯合通報 AA26-281A，揭露中國營利公司 Integrity Technology Group 支援的攻擊行動，CISA 同日把通報中列出、但之前沒進 KEV 的五個舊漏洞一次補上，最舊的是 2015 年的 BIND 與 ProFTPD 漏洞，EPSS 都在 99% 以上。台灣方面，一零四於 10 月 6 日發布重大訊息，約 12 萬筆履歷資料遭未經授權讀取；鈊象 10 月 7 日補充說明確認部分玩家姓名、電話與電子郵件外洩；Rapid7 則揭露 AVERAT 後門鎖定臺灣設備，並把臺灣的 NAS、網路設備與錄影設備當成中繼站。

## 重大漏洞與威脅

1. **[Atlassian 自架版 CVE-2026-21589 未驗證檔案讀取，概念驗證公開後約兩小時即遭利用嘗試](https://www.bleepingcomputer.com/news/security/hackers-exploit-critical-atlassian-flaw-after-public-poc-release/)**
   - Atlassian 於 10 月 5 日公告，影響 Jira Software、Jira Service Management、Confluence、Bitbucket、Bamboo、Crowd、Fisheye／Crucible 等八項產品的 Data Center 與 Server 自架版，雲端版已由原廠修補。watchTowr 追到根因是共用的網頁資源函式庫會把「::」轉換成「/」，攻擊者因此能經由外掛資源端點做目錄穿越，讀取網站根目錄內已知路徑的檔案。Atlassian 強調必須事先知道目標檔名與完整路徑，且無法列出目錄內容。
   - **真正的風險在後續串接**：watchTowr 指出，與 Crowd 整合的 Jira 部署中，攻擊者可讀到 `crowd.properties` 裡的明文應用程式憑證，再透過 Crowd API 建立 Jira 管理者帳號。SANS ISC 的 Johannes Ullrich 於 10 月 7 日記錄蜜罐收到鎖定 `WEB-INF/web.xml` 等檔案的請求，來源多為 DigitalOcean 位址，他判斷屬同一行為者（[ISC 值班日誌](https://isc.sans.edu/diary/Scans+for+Atlassian+vulnerablity+CVE202621589/33406/)）。修補版本依產品分支不同，例如 Confluence Data Center 9.2.26、10.2.19，Jira Software Data Center 9.12.40、10.3.26、11.3.12；暫時無法升級時，限制可連入的 IP 位址能大幅提高利用難度。
   - 指標：CVSS 9.3（原廠評，據 The Hacker News）｜EPSS 1.77%（百分位 77.6）｜KEV：未列入（截至目錄版本 2026.10.08）

2. **[SonicWall SMA1000 滿分漏洞 CVE-2026-102255，修補釋出數天後即出現利用嘗試](https://www.bleepingcomputer.com/news/security/max-severity-sonicwall-sma1000-flaw-now-exploited-in-attacks/)**
   - 這是 SMA1000 Appliance WorkPlace 介面的驗證前伺服器端請求偽造（SSRF）漏洞，影響 6210、7210、8200v 機型的 12.4.3-03526（platform-hotfix）與更早版本、12.5.0-02952（platform-hotfix）與更早版本。SMA 100 系列與 SonicWall 防火牆上的 SSL-VPN 不受影響。原廠於 10 月 6 日透過 MySonicWall 釋出修補，**明言沒有替代緩解方案**；同批另修了三個需要管理者權限的漏洞（CVE-2026-102256、-102257、-102258）。
   - 原廠 10 月 6 日的公告寫無利用跡象，但 Previdian 創辦人 Ryan Dewhurst 於 10 月 9 日告訴 BleepingComputer，其蜜罐網路已偵測到與此漏洞相符的利用嘗試。SMA1000 在 2026 年稍早已有 CVE-2026-83548、CVE-2026-83549 兩個零日被利用，屬於攻擊者會持續回頭的產品線。
   - 指標：CVSS 10.0（v3.1）｜EPSS 0.48%（百分位 39.3）｜KEV：未列入（截至目錄版本 2026.10.08）

3. **[AhsayCBS 備份平台兩漏洞串接遭利用，植入網頁後門與挖礦程式，目前無確認有效的修補](https://www.bleepingcomputer.com/news/security/unpatched-ahsaycbs-flaws-exploited-to-deploy-webshells-mine-crypto/)**
   - 攻擊者先用 CVE-2026-105133 繞過認證，再用 CVE-2026-105134 執行程式。Huntress 自 10 月 7 日起觀測到攻擊，截至 10 月 8 日已有五個組織受害；入侵後的動作包含偵察、部署 JSP 網頁後門，以及下載偽裝成 `edge.exe` 的 XMRig 挖礦程式，並以名為 `MicrosoftEdgeUpdateSvc` 的服務搭配改造過的 NSSM 工具常駐（[Huntress 原文](https://www.huntress.com/blog/ahsaycbs-flaws-exploit)）。
   - **修補狀態前後矛盾，要以最保守的版本為準**：Huntress 原文說 10.3.4 不受影響、建議升級，後續更新卻改稱 10.3.4 同樣受影響。在原廠確認修補之前，可行的作法只有收掉管理介面的對外存取並檢查入侵痕跡。這條的特殊之處在於受害的是備份伺服器本身，它通常握有全公司資料的讀取權限。
   - 指標（CVE-2026-105133）：CVSS 5.5（v4.0，據 The Hacker News；SecurityOnline 列 6.9）｜EPSS 0.38%（百分位 30.4）｜KEV：未列入
   - 指標（CVE-2026-105134）：CVSS 9.3（v4.0，據 The Hacker News；SecurityOnline 列 10.0）｜EPSS 1.84%（百分位 78.4）｜KEV：未列入

4. **[十國聯合通報 AA26-281A：中國 Integrity Tech 支援的攻擊行動，CISA 同日把五個舊漏洞補進 KEV](https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-281a)**
   - 10 月 8 日由 FBI、CISA、NSA 與英國、澳洲、加拿大、日本、紐西蘭、西班牙的機關共同發布。Integrity Technology Group 是與中國政府有關的營利公司，負責取得或開發攻擊工具、代管基礎設施並入侵網路，其手法與 Flax Typhoon、Ethereal Panda、Red Juliett 一致。自動化部分包含 BBScan、Fscan、masscan 等開源掃描器，以及內含 1,300 多支漏洞測試腳本的 MicroScan；人工部分包含用 EBurst 對 Exchange／Office 365 做密碼噴灑、以 XSS 注入假的帳密欄位竊取憑證、把 SoftEther VPN 偽裝成 `conhost.exe` 或 `dllhost.exe` 常駐、用 `DC.exe` 做 DCSync 複製網域帳號憑證，再以 PHP 程式 Curlc4 透過 Exchange Web Services 批次拉信。美國受害產業包含政府、關鍵製造、醫療與資訊科技。
   - 通報附錄列出八個被利用的漏洞，其中五個在 10 月 8 日新進 KEV、修補期限只給三天（10 月 11 日）。**這五個全是舊漏洞，EPSS 也高得驚人**，說明「漏洞老」從來不等於「沒人用」：
     - CVE-2015-5477（ISC BIND 阻斷服務）：CVSS 7.5（v3.1，NVD）｜EPSS 99.41%（百分位 99.9）｜KEV：已列入（2026-10-08）
     - CVE-2015-3306（ProFTPD 存取控制不當）：CVSS 10.0（v3.1，NVD）｜EPSS 99.50%（百分位 99.9）｜KEV：已列入（2026-10-08）
     - CVE-2016-3081（Apache Struts 指令注入）：CVSS 8.1（v3.1，NVD）｜EPSS 96.05%（百分位 99.9）｜KEV：已列入（2026-10-08）
     - CVE-2021-3199（ONLYOFFICE Docs 路徑穿越）：CVSS 9.8（v3.1，NVD）｜EPSS 19.35%（百分位 97.3）｜KEV：已列入（2026-10-08）
     - CVE-2023-22894（Strapi 明文儲存敏感資訊）：CVSS 4.9（v3.1，NVD）｜EPSS 3.61%（百分位 89.2）｜KEV：已列入（2026-10-08）
   - 通報的緩解建議很基本但完整：關閉未使用的服務與連接埠、網頁應用程式淨化輸入、網頁郵件與 VPN 強制多因素認證、監控非預期的 Active Directory 複寫（DCSync 的痕跡）與異常對外流量。

5. **[Citrix NetScaler 再出 CVE-2026-107406，SAML 設定下可遠端執行程式](https://www.bleepingcomputer.com/news/security/citrix-warns-admins-to-patch-new-netscaler-rce-flaw-immediately/)**（本週新進展）
   - Citrix 於 10 月 8 日發布公告 CTX697191，這是記憶體溢位漏洞，可導致遠端程式碼執行或阻斷服務，**只影響設定為 SAML 身分提供者（IdP）或服務提供者（SP）的設備**，也波及使用 NetScaler 的 Secure Private Access 混合部署。修補版本為 14.1-73.46、13.1-64.29 與對應的 FIPS／NDcPP 版本。原廠表示公告時未發現遭利用，CISA 在 10 月 9 日把它補進原本的 NetScaler 零日警示。
   - 這是 NetScaler 一個多月內的第四個重大漏洞。**上期剛修到 14.1-73.41／13.1-64.28 的設備，本期又要再升一次**。DEW #170 整理的數據也說明為何要急：Censys 在 9 月 28 日統計到 42,000 台以上 NetScaler ADC 或 Gateway 曝露在網際網路上，其中 CVE-2026-88771 在預設設定下就可被利用。
   - 指標：CVSS 9.5｜EPSS 0.47%（百分位 38.9）｜KEV：未列入

6. **[Cisco NX-OS 五個重大漏洞，Nexus 3000／9000 交換器可被取得 root](https://www.bleepingcomputer.com/news/security/cisco-warns-of-critical-flaws-allowing-nexus-switch-takeover/)**
   - Cisco 於 10 月 7 日發布，五個漏洞都是 CVSS 9.8，可讓攻擊者以 root 身分執行程式，無法執行程式時也能讓設備重新開機。觸發條件依功能而定：CVE-2026-76471 需要啟用 NX-API（預設關閉），CVE-2026-76485、-76486、-76501 需要 NGOAM（部分還要搭配 SRv6 或 NV Overlay），CVE-2026-76465 需要 MPLS OAM。
   - Cisco 表示這批是內部測試發現、尚無遭利用紀錄。**處置的第一步是確認上述功能有沒有開**：沒開就不在攻擊面上，有開就要限制管理介面存取並升級。
   - 指標（CVE-2026-76471）：CVSS 9.8｜EPSS 0.52%（百分位 42.7）｜KEV：未列入

7. **[Microsoft Exchange 自架版 CVE-2026-96940：已驗證使用者可讀取同組織他人信箱](https://www.techradar.com/pro/security/microsoft-exchange-flaw-allows-hackers-to-read-mailboxes-across-an-organization-so-patch-now)**
   - 影響 Exchange Server Subscription Edition RTM、Exchange 2019 CU14／CU15、Exchange 2016 CU23，攻擊者只要擁有組織內任一帳號，就能讀取其他人的信件與附件（無法跨租用戶）。修補是 9 月份安全更新的 V2 版，**先前已裝過原始 9 月更新的也要重裝**；混合式部署的所有地端 Exchange 伺服器（含只裝管理工具的機器）都要更新。Exchange Online 不需動作。
   - 微軟評估「較可能被利用」但尚未觀測到攻擊。另有報導指出 Exchange 2016／2019 的更新只提供給加入第二期延伸安全更新（ESU）的組織，該計畫到 2026 年 10 月底結束且不再延長。各來源對首次揭露日期說法不一（10 月 2 日或 10 月 5 日的 V2 版），修補前請以微軟公告的版本號為準。
   - 指標：CVSS 8.8｜EPSS 0.50%（百分位 40.7）｜KEV：未列入

8. **[AnyDesk Linux 驗證前取得 root 的漏洞，可用的攻擊程式已公開](https://thehackernews.com/2026/10/researchers-publish-working-exploit-for.html)**
   - 研究者 10 月 8 日在 GitHub 公開名為 AnyPwn 的攻擊程式，利用 AnyDesk Linux 工作階段協定的堆積溢位，在對方按下同意之前就取得 root。公開程式只適用 TCP 7070 埠的直接連線、針對 8.0.2 版，且成功率是機率性的（失敗時服務會當掉）。Windows 與 macOS 不受影響。
   - **這條沒有 CVE、也沒有正式安全公告**：AnyDesk 在 6 月的 8.0.3 版就修好了，但更新紀錄只寫「修正可能造成當機的錯誤」。也就是說，依賴 CVE 清單或弱點掃描器追蹤修補的組織，會完全看不到這一條。建議升到 8.0.3 以上（最新為 8.1.0）。
   - 指標：CVSS 查無｜EPSS 查無（無 CVE）｜KEV：未列入

9. **本期 KEV 數量對照**
   - CISA 在 2026-10-05 至 2026-10-11 只新增五個 KEV 條目，全部是 10 月 8 日因 AA26-281A 補進的舊漏洞，目錄版本停在 2026.10.08、總數 1,739 筆。上期是六個條目、全為近期零日；本期則沒有任何新漏洞進 KEV，**本期遭利用的 Atlassian、SonicWall、AhsayCBS 三條在目錄截止時都還不在清單上**。這是 KEV 的使用限制：它是「已確認被利用」的落後指標，正在被掃的新漏洞往往要晚幾天才會進來，判斷優先順序時不能只等 KEV。

## 攻擊趨勢與事件

1. **[FBI 撤換承包商：一個漏裝的修補導致 ShinyHunters 入侵](https://thehackernews.com/2026/10/fbi-removes-accenture-contractor-after.html)**
   - FBI 表示，一家承包商沒有替第三方代管的平台安裝「專為保護該平台而發布」的修補，FBI 因此撤換該承包商；聲明未指名平台與廠商，兩名知情人士指向 Oracle PeopleSoft 人資系統與 Accenture。Mandiant 先前報告指出 ShinyHunters 利用 PeopleSoft CVE-2026-35273 的繞過手法，以網址編碼避開封鎖 `/PSEMHUB/` 端點的網頁應用程式防火牆規則，並在 5 月 27 日至 6 月 9 日間以零日形式利用。
   - 各方說法並不一致：也有報導認為這次用的是另一個尚未公開的漏洞，「漏裝修補」與「防火牆繞過」之間的關聯也還沒有被串成一條確定的攻擊路徑。**可以確定的是 FBI 把責任明確歸到承包商的修補義務**，這在公部門事件中很少見。

2. **[Warlock 勒索軟體持續利用地端 SharePoint 漏洞，打進自來水、電信與政府單位](https://www.bleepingcomputer.com/news/security/warlock-ransomware-breach-sharepoint-in-water-telecom-operator-attacks/)**
   - Symantec 與 Carbon Black 記錄這個中國背景的集團（Symantec 稱 Longlegs、微軟稱 Storm-2603）近兩個月至少打下四個組織：一家自來水公司、一家電信業者、一個地方政府單位與一所大學，都位於葡萄牙語或西班牙語國家。入侵手法仍是地端 SharePoint 漏洞，之後植入可跨多個 SharePoint 版本運作的網頁後門。
   - 其中一起從 7 月 22 日開始的入侵，攻擊者在約兩小時內停用至少 40 台主機的防護軟體，接著在至少 33 台主機部署勒索軟體。該集團 2025 年 6 月首度出現，**當時就因 ToolShell SharePoint 零日攻擊鏈受到關注，受害地區曾包含臺灣**。一年多後同一類漏洞仍有效，說明地端 SharePoint 的修補落差很大。

3. **[Google GTIG 完整報告：AI 時代的漏洞發現與利用趨勢（tl;dr sec #349、2026-10-08）](https://cloud.google.com/blog/topics/threat-intelligence/vulnerability-discovery-and-exploitation-trends-in-the-ai-era)**（本週新進展）
   - 上期引用的是 The Record 的報導，本期 tl;dr sec 收錄 GTIG 原始報告，多了幾組數字：2025 年 1 月到 2026 年 8 月，每月揭露的 CVE 從 5,045 個倍增到 10,740 個；每月遭實際利用的漏洞從 10.5 個增加到 18 個，零日只從 8 個增加到 11 個；2026 年 5 月起利用數成長（+127%）幾乎與揭露數成長（+128%）同步。所有揭露的 CVE 中只有 0.23% 最終被利用。
   - **另一組數字跟 AI 直接相關**：AI 發現的漏洞有 58% 屬中風險（非 AI 發現者為 28%），其中 50% 可導致遠端程式碼執行；GTIG 統計到 2,076 個 AI 相關 CVE，半數落在 Flowise、Langflow 這類代理編排框架，其中 LiteLLM 指令注入與 Langflow 未驗證遠端程式碼執行已遭利用。

4. **[Graphalgo 惡意程式擴散到 Terraform provider 與 Go 模組（tl;dr sec #349、2026-10-08）](https://www.aikido.dev/blog/graphalgo-terraform-go-modules)**
   - Aikido 在兩個 Terraform provider（`gocommunity-io/dockerd` 與 `kreuzwenker/docker`）與兩個 Go 模組中發現惡意程式，這是它首次看到經由 Terraform provider 散布的惡意程式。攻擊者仿冒一個下載量 5,600 萬次的 provider 名稱，架設假的 Go 生態網站，並回填 commit 日期讓 pkg.go.dev 顯示 2025 年 11 月的發布日。
   - 惡意程式平時休眠，只有當兩個特定 Terraform 變數的 SHA256 雜湊符合寫死的值才會解密執行遠端存取木馬，命令經由 Slack 與 Arbitrum Sepolia 上的以太坊智慧合約傳遞。攻擊者的 Slack 頻道顯示自 2026 年 7 月以來有 18 台主機受感染。**鎖定 Terraform 使用者的理由很直接：這些人部署基礎設施，通常離正式環境憑證只有一步之遙。**

5. **Risky Business News 本週無新內容**：索引頁最新一篇仍是 Risky Bulletin（2026-10-02），已於 W21 收錄；以網域限定搜尋也沒有找到 10 月 5 日之後的新期。

## 防禦與偵測

1. **[Detection Engineering Weekly 復刊：DEW #170 整理 NetScaler 零日獵捕與憑證透明度紀錄獵捕（DEW #170、2026-10-08）](https://www.detectionengineering.net/p/dew-170-zack-on-a-podcast-hunting)**（本週新進展）
   - 休刊一個月後於 10 月 8 日復刊。NetScaler 段整理了四個來源：watchTowr 從修補差異找到處理 NSPPE 當機傾印檔時的驗證前指令注入（特權 Perl 腳本用日誌文字組檔名、未驗證就交給 shell 展開）；Mandiant／GTIG 指出攻擊者用 PHP 網頁後門，並改寫 `httpd.conf` 把像圖示的請求（如 `/vpn/media/e6ee7c85.ico`）對應到被當成 PHP 執行的 `.sig` 檔；eSentire 追到三個攻擊群組，其中一個用的是合法的 Platypus 機群管理代理程式，屬新發現。**作者特別指出 Citrix 的入侵指標只提供給客戶，對公開防守方是缺口**，而主機端遙測仍能抓到這類常駐手法。
   - 另一段是 THOR Collective 的憑證透明度（CT）紀錄獵捕教學：用憑證的 CN、SAN 欄位與「同一基礎設施在短時間內大量簽發」這個特徵，把攻擊者的網域群聚起來，`crt.sh` 可直接透過其 Postgres 資料庫查詢。開源工具推薦裡最實用的是 runZero 的 **sshamble**，專找不尋常的 SSH 暴露（認證方式、帳號列舉時間差、已知弱金鑰），輸出 JSONL 可直接進 SIEM 或資產清冊。

2. **[SANS ISC 值班日誌 10/5~10/11：Action1 遠端管理工具被濫用、AI 代理鑑識腳本、TLP 不該取代內部分級](https://isc.sans.edu/diary/More+RMM+Tools+In+the+Wild/33400/)**
   - Xavier Mertens（10/6）記錄另一起遠端監控與管理（RMM）工具濫用：釣魚郵件附 PDF，導向 VBS 腳本，再以 MSI 安裝 Action1 的遠端管理代理並註冊為服務常駐，攻擊者很可能用免費或試用帳號借用 Action1 的雲端基礎設施，另有一個 DHL 主題的變種。**這是連續第二週 ISC 記錄合法 RMM 被當成後門**，上期是 ScreenConnect。
   - Jim Clausing（10/8）發布兩支 Python 腳本，可從 OpenCode 的 SQLite 資料庫與 Hermes 的狀態、日誌與 API 請求傾印中重建 AI 代理的對話與產物，強調以唯讀快照處理證據（[原文](https://isc.sans.edu/diary/Reconstructing+AI+Agent+Activity+Two+New+Scripts+for+Forensic+Review/33410/)）。Jan Kopriva（10/10）則提醒，TLP（Traffic Light Protocol，情資分享時標示可轉傳範圍的紅黃綠白標籤）是對外分享用的，不應拿來取代組織內部的資訊分級制度（[原文](https://isc.sans.edu/diary/Why+TLP+should+not+replace+your+internal+information+classification/33414/)）。

3. **[AI 沙箱逃逸實測：Perplexity 與 Vercel 的兩份報告（tl;dr sec #349、2026-10-08）](https://www.perplexity.ai/hub/blog/escaping-space-part-i)**
   - Perplexity 讓九個模型在 Firecracker 微型虛擬機裡以 root 權限嘗試逃逸，108 次虛擬機逃逸嘗試全部失敗；但一旦允許連到套件庫，有四個模型在 54 次部分連網測試中成功 11 次繞過網路限制，手法是利用「以網域名稱寫政策、以 IP 執行管制」之間的落差：偽造 DNS 回應讓允許的網域解析到被封鎖的 IP，或借用與允許網域共用 IP 的 CDN 服務。加上來源位址驗證與檢查 SNI／Host 標頭的 TLS 終結代理後，沒有模型成功；接著測試的十個第三方沙箱平台中有八個有同樣缺口。
   - 同期 Vercel 舉辦兩週、獎金上限 100 萬美元的沙箱逃逸挑戰，收到 1,285 份報告、實付約 32.5 萬美元，含 1 個重大與 7 個高風險發現，其中一個被執行長確認為 KVM 零日。**這兩份報告的共同結論適用於任何以網域白名單管控對外連線的環境，不只 AI 沙箱。**

4. **[套件管理器的安裝期沙箱現況（tl;dr sec #349、2026-10-08）](https://nesbitt.io/2026/09/24/package-manager-sandboxing.html)**
   - Andrew Nesbitt 整理各套件管理器怎麼處理「安裝時就會執行的程式碼」：白名單、沙箱，或改成宣告式資料。結論是「多數提過沙箱，少數真的做出來」：Homebrew 7.0.0 把連網下載與離線安裝分開並禁止建置讀取家目錄，opam 自 2018 年就有沙箱，Swift 的限制在 Linux 上靜默無效，Cargo 的沙箱議題從 2018 年開到現在。
   - 搭配上面 Graphalgo 那條一起看：**供應鏈攻擊多半發生在安裝或建置階段，而那正是大多數套件管理器仍以完整使用者權限執行任意程式碼的時刻。**

## 台灣在地動態

1. **[一零四資訊科技 App 系統遭異常讀取，約 12 萬筆履歷資料外流](https://www.ithome.com.tw/news/179476)**
   - 一零四（3130）於 10 月 6 日傍晚在公開資訊觀測站發布重大訊息，表示察覺 App 系統有異常讀取，已採取防護與阻斷措施，向主管機關通報並向調查局臺北市調處報案。調查確認約 12 萬筆履歷資料遭未經授權讀取，公司初步評估對營運無重大影響，影響範圍仍在評估，並以電子郵件通知疑似受影響會員。
   - 履歷資料的敏感度高於一般會員資料，通常包含學經歷、聯絡方式與求職意向，**正好是精準魚叉式網釣與假徵才詐騙最需要的素材**。受影響的求職者短期內收到的「面試邀約」值得多一分戒心。

2. **[鈊象補充說明：營運資訊設備遭入侵，部分玩家個資外洩](https://www.ithome.com.tw/news/179504)**
   - 鈊象（3293）於 9 月 29 日發布重大訊息，表示不明 IP 入侵營運資訊設備；10 月 7 日補充說明確認遊戲營運資料外洩，包含部分玩家姓名、電話與電子郵件，已依法通報個資主管機關並以電子郵件與簡訊通知當事人。外洩筆數未公布。
   - 公司未說明入侵原因，但表示將**強化第三方系統與自行研發系統之間的網路隔離**。媒體據此推測入口可能是第三方系統，這點尚未證實。

3. **[Rapid7 揭露 AVERAT 後門鎖定臺灣設備，疑似專為眾至產品開發](https://www.ithome.com.tw/news/179425)**
   - Rapid7 發現 6 個部署在臺灣設備上的 AVERAT 樣本，另有 3 台位於臺南、板橋與桃園的設備被當成中繼基礎設施，分別是 NAS、中小企業網路設備與錄影設備。部署 AVERAT 的安裝程式以「ShareTech」字串衍生加密金鑰，Rapid7 因此認為它疑似專為眾至資訊的產品開發；眾至回應已透過設備內部檢查機制掌握相關程式並著手處理。
   - AVERAT 用 TCP 25 埠與 SMTP 協定偽裝命令與控制流量，混在正常郵件流量裡不易區分。Rapid7 認為這類設備符合中國背景隱蔽中繼網路（ORB）的常見組成，但尚未能歸因到已知網路。**被拿來當中繼的是 NAS 與錄影設備這類「裝好就沒人管」的設備**，與前幾期邊界設備被打是同一個方向的延伸。

4. **[微軟 2026 數位防禦報告：臺灣上半年遭網路威脅影響程度升至全球第 4](https://www.ithome.com.tw/news/179405)**
   - 這項排名以各國客戶遭惡意網路活動鎖定的頻率計算，美國 25.5% 居首，其後是以色列 7.6%、烏克蘭 4.8%，臺灣 3.9% 排第四；去年臺灣是第 10 名、1.8%，占比增加一倍以上。國內受影響最嚴重的是政府機關與公共服務（27%），其次是 IT 產業。
   - 同一份報告另一個統計口徑：2025 年 7 月至 2026 年 6 月的國家級駭客活動，臺灣 193 起排全球第三，僅次於美國 531 起與以色列 210 起（[iThome 另篇](https://www.ithome.com.tw/news/179391)）。**兩個排名量的東西不同，引用時要分開講**，一個是整體惡意活動的鎖定頻率，一個是國家級行為者的事件數。

## 對 Simon 工作的影響評估

1. **AA26-281A 那五個舊漏洞，正好接上你 10 月 3 日災難復原演練踩到的 RED HAT 5**
   - 本期 CISA 補進 KEV 的是 2015 年的 BIND、ProFTPD 與 2016 年的 Apache Struts，其中三個 EPSS 在 96% 以上，被一家有規模的攻擊服務商拿來當常規武器。你的年度演練記錄到環境裡還有 RED HAT 5 主機（新增網卡會改寫 HOST 檔的那個問題），這類早已停止支援的作業系統，內建的 BIND、FTP 套件版本多半就停在這個年代。
   - **具體建議是在 ISO 27001 的 BIA 表多加一欄「作業系統支援狀態」**，把已停止支援的主機逐台標出來，並註明它對外或對其他網段開了哪些服務。這不代表要立刻汰換，核心系統換作業系統的成本很高；但它應該被列成「已知且已接受的風險」並寫下補償措施（網段隔離、只開必要連接埠、存取來源白名單），而不是在盤點裡隱形。老闆要的「超細」內容，這一欄就是能具體交代的那種。演練找到的兩個問題寫進復原程序時，可以順便把「此主機為停止支援版本」一併記在程序前言。

2. **AhsayCBS 被打這件事，值得拿來檢查你自己的備份伺服器管理介面**
   - 你們用的是 Veeam 而不是 Ahsay，這條漏洞本身不直接相關；但它示範的情境相關：備份伺服器擁有讀取全公司資料的權限，管理介面一旦能從外部或一般辦公網段連到，就是比單一應用伺服器更值錢的入口。這次的修補還前後矛盾，原本以為安全的版本後來確認也受影響，唯一可靠的處置是讓管理介面根本連不到。
   - **建議確認一件事：Veeam 備份伺服器與其管理主控台，能不能從一般使用者網段直接連到**。如果可以，把它收進管理網段或加上來源 IP 限制，成本低、效果確定。這也可以寫進 BIA 的備份備援做法裡，備份系統本身的 RTO 與存取控制，常被當成「它是保護別人的」而漏列。

3. **修補時效的論點，本期多了兩個「幾小時」與一個「漏裝就撤換」的實例**
   - Atlassian 那條從概念驗證公開到利用嘗試約兩小時，SonicWall 從修補釋出到蜜罐看到攻擊只隔幾天，而且兩者在目錄截止時都還沒進 KEV。這補強了上期的判讀原則：**只等 KEV 會晚好幾天**，對外服務的重大漏洞在原廠公告當下就要啟動評估。如果九月份資安 KPI 簡報還沒交，這兩條可以接在上期 GTIG 數據後面當佐證。
   - FBI 撤換承包商那條則是供應商管理的教材：責任被明確歸給「沒裝修補的代管廠商」。ISO 27001 的供應商關係控制項要求在合約裡寫清楚安全義務，**公司若有委外代管的系統（含機房設備維護、雲端服務），值得確認合約或服務水準協議裡有沒有修補時限與通報義務**。鈊象那條也指向同一處：入口疑似是第三方系統，事後補救是加強第三方與自有系統的隔離。

4. **遠端管理工具與交換器功能盤點，兩件小事做一次就有效**
   - ISC 連續兩週記錄合法 RMM 工具被當成後門（上期 ScreenConnect、本期 Action1），AnyDesk Linux 又出了一個沒有 CVE、弱點掃描器看不到的驗證前取得 root 漏洞。上期建議的「盤點允許哪些 RMM 工具、對清單外的合法簽章 RMM 建立告警」本期更有理由做；若 Linux 主機有裝 AnyDesk，確認版本在 8.0.3 以上，並確認 7070 埠沒有對外開放。
   - Cisco NX-OS 那五個 CVSS 9.8 的漏洞要看功能有沒有開：機房若有 Nexus 3000／9000，查一下 NX-API、NGOAM、MPLS OAM 是否啟用，沒開就不在攻擊面上，有開再排升級。Exchange 方面，若公司仍有地端 Exchange 2016／2019，要注意兩件事：本期 CVE-2026-96940 的修補要重裝 V2 版，以及第二期延伸安全更新到 2026 年 10 月底就結束，之後地端 Exchange 不再有安全更新，這是值得提早向主管說明的風險。
