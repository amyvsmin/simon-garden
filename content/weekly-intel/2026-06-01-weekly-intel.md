---
title: "資安週報 2026-06-01"
date: 2026-06-01
type: weekly-intel
issue: "W02"
cover_range: "2026-05-25 ~ 2026-05-31"
tags:
  - 資安週報
  - supply-chain
  - data-breach
  - vpn-exploit
  - ai-security
  - taiwan-incident
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "台灣 EVERY8D 企業簡訊平臺遭勒索軟體癱瘓逾一週，市占第一 OTP 通道中斷，F-ISAC 發布黃燈級警訊，升為國家級供應鏈危機"
  - "CISA 一週兩度更新 KEV 並罕見發布供應鏈專文，將 Nx Console（CVE-2026-48027）、DAEMON Tools Lite（CVE-2026-8398）等惡意程式碼植入案列管"
  - "Charter（Spectrum）遭 ShinyHunters 以語音釣魚入侵，外洩逾 1,300 萬筆、宣稱握有 4,200 萬筆客戶資料"
tldr: "本週主軸是供應鏈與第三方信任崩解：台灣 EVERY8D 簡訊平臺遭勒索軟體癱瘓、衝擊全國銀行與電商 OTP，CISA 同步把多起惡意程式碼植入案列入 KEV；對外 VPN／EMS 設備（PAN-OS GlobalProtect、FortiClient EMS）持續被主動利用投放竊資軟體；攻擊者大量假冒 AI 工具（Claude Code、Gemini CLI）散布惡意程式。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W02 — 2026-06-01

> 涵蓋範圍：2026-05-25 ~ 2026-05-31

## 本週重點摘要

本週資安態勢由**第三方與供應鏈信任崩解**主導。台灣最大事件為企業簡訊龍頭互動資通（Teamplus）旗下、市占第一的 EVERY8D 企業簡訊平臺遭勒索軟體入侵並全面癱瘓，因該平臺每月發送逾一億封簡訊、是全國銀行身分驗證、電商交易確認與政府機關 OTP（一次性密碼）通知的關鍵基礎設施，金融資安資訊分享與分析中心（F-ISAC）於 5 月 26 日發布黃燈級資安事件警訊，事件升級為國家級供應鏈危機。國際方面，CISA 在 5 月 27 日與 28 日連續更新已知遭利用漏洞目錄（KEV），並罕見發布供應鏈專文，將 Nx Console（CVE-2026-48027）與 DAEMON Tools Lite（CVE-2026-8398）等「惡意程式碼遭植入正版軟體」案件正式列管。對外設備持續成為破口：Palo Alto PAN-OS GlobalProtect 驗證繞過（CVE-2026-0257）自 5 月 17 日起遭主動利用，FortiClient EMS（CVE-2026-35616）被用於散布竊資軟體。資料外洩規模龐大：ShinyHunters 對美國電信商 Charter（Spectrum）發動語音釣魚（vishing）攻擊，外洩逾 1,300 萬筆客戶資料。AI 主題攻擊明顯升溫——攻擊者透過搜尋引擎最佳化（SEO）投毒與 AI 聊天機器人，散布假冒 Claude Code、Gemini CLI 的惡意安裝包。

## 重大漏洞與威脅

1. **[CISA 新增三個漏洞至 KEV 目錄（5/27）](https://www.cisa.gov/news-events/alerts/2026/05/27/cisa-adds-three-known-exploited-vulnerabilities-catalog)**
   - CVE-2026-8398（DAEMON Tools Lite 內嵌惡意程式碼）、CVE-2026-45321（TanStack 未明漏洞）、CVE-2026-48027（Nx Console 內嵌惡意程式碼）。三者均屬「正版軟體被植入惡意程式碼」的供應鏈型態，已確認遭主動利用，聯邦機構須於期限內修補。

2. **[PAN-OS GlobalProtect 驗證繞過漏洞遭主動利用（CVE-2026-0257）](https://thehackernews.com/2026/05/pan-os-globalprotect-authentication.html)**
   - 自 2026 年 5 月 17 日起遭主動利用，未經授權的攻擊者可繞過 GlobalProtect 驗證、取得 VPN 存取權並進一步暴露內網。BleepingComputer 同步證實 Palo Alto 已發出攻擊中警告。延續上週 PAN-OS（CVE-2026-0300）後又一起 edge 設備事件。

3. **[FortiClient EMS 驗證繞過漏洞遭利用散布竊資軟體（CVE-2026-35616）](https://www.bleepingcomputer.com/news/security/hackers-exploit-forticlient-ems-flaw-to-push-infostealer-malware/)**
   - 攻擊者利用 FortiClient Enterprise Management Server 的驗證繞過漏洞投放未公開的竊資軟體；iThome 報導攻擊者[假借提供修補程式散布 EKZ Infostealer](https://www.ithome.com.tw/news/176207)，以「修補」為餌反向誘導受害。

4. **[Gogs 自架 Git 服務零時差 RCE 漏洞](https://www.bleepingcomputer.com/news/security/new-gogs-zero-day-flaw-lets-hackers-get-remote-code-execution/)**
   - CVSS 9.4，攻擊者利用 git rebase 注入手法，在對外暴露的 Gogs 實例上取得遠端程式碼執行（RCE）。The Hacker News 指出全球約 1,141 個對外暴露實例受影響，任何已驗證使用者皆可觸發。

5. **[微軟修補 SharePoint 遠端程式碼執行漏洞（CVE-2026-45659）](https://thehackernews.com/2026/05/microsoft-patches-sharepoint-rce-flaw.html)**
   - CVSS 8.8，影響多個 SharePoint 版本，微軟已釋出修補。SharePoint 為企業文件協作主力，暴露於內外網者應優先更新。

6. **[Linux 核心新本機權限提升漏洞「CIFSwitch」可取得 root](https://www.bleepingcomputer.com/news/security/new-cifswitch-linux-flaw-gives-root-on-multiple-distributions/)**
   - 攻擊者可偽造 CIFS 驗證金鑰，在多個 Linux 發行版上提升至 root 權限。iThome [5 月 29 日資安日報](https://www.ithome.com.tw/news/176217)同步收錄，當週另有 22 個重大、123 個高風險漏洞，記憶體釋放後再利用（Use-After-Free）仍為大宗。

7. **[CISA 要求聯邦機構修補遭利用的 Drupal SQL 注入漏洞](https://www.bleepingcomputer.com/news/security/cisa-orders-feds-to-patch-actively-exploited-drupal-vulnerability/)**
   - CISA 給出緊迫期限，要求聯邦機構修補 Drupal 內容管理系統的 SQL 注入漏洞。Drupal 廣用於政府與企業官網，遭利用後可導致資料庫遭存取。

8. **[CISA 給聯邦機構 4 天修補遭利用的 cPanel 外掛漏洞](https://www.bleepingcomputer.com/news/security/cisa-gives-feds-4-days-to-patch-actively-exploited-cpanel-plugin-flaw/)**
   - 一週內第二度發出短期限修補令，凸顯 web 託管環境的外掛供應鏈正被積極鎖定。

## 攻擊趨勢與事件

1. **[CISA 發布 Nx Console 與 GitHub 儲存庫供應鏈專文（5/28）](https://www.cisa.gov/news-events/alerts/2026/05/28/supply-chain-compromises-impact-nx-console-and-github-repositories)**
   - 攻擊者藉先前對 Nx 開發系統的入侵，透過遭投毒的 Nx Console VS Code 擴充（惡意版本 18.95.0、經 VS Code 自動更新散布）入侵 GitHub 員工裝置並竊取內部儲存庫，CVE-2026-48027 隨之列入 KEV。CISA 同時點名「Megalodon」攻擊活動注入惡意 GitHub Action 工作流以竊取 CI/CD 機密、雲端憑證與權杖，並建議：回溯撤銷 5 月 18 日後自動化帳號（如 `build-bot`、`ci-bot`）的提交、輪換所有 CI/CD secrets、拉取套件前至少等待 3 小時、釘選（pin）可信版本。

2. **[微軟揭露大規模惡意 npm 套件投毒，濫用依賴混淆](https://www.microsoft.com/en-us/security/blog/2026/05/29/33-malicious-npm-packages-abuse-dependency-confusion-profile-developer-environments/)**
   - 微軟威脅情報於 5 月 28~29 日揭露分三波釋出、累計達 45 個（初報 33 個）的惡意 npm 套件，攻擊者註冊與企業內部命名空間同名的套件、刻意拉高版本號（100.100.100）以在解析時優先於合法內部套件。內含名為「RECON_ONLY」的偵察酬載，蒐集主機名、環境變數與開發者情境，並預留升級為完整攻擊模式的能力；命令與控制（C2）網域為 `oob.moika.tech`。

3. **[Charter（Spectrum）遭 ShinyHunters 入侵，外洩逾 1,300 萬筆客戶資料](https://www.securityweek.com/charter-communications-data-breach-could-impact-nearly-5-million/)**
   - 勒索集團 ShinyHunters 透過語音釣魚（vishing）並入侵 Microsoft Entra／SaaS 環境，宣稱竊得 4,200 萬筆紀錄；Charter 拒絕付贖後，駭客外洩逾 1,300 萬筆含姓名、電郵與地址的客戶資料，官方估計最多影響近 500 萬名客戶。

4. **[7-Eleven 加盟申請者資料外洩，逾 60 萬筆經 Salesforce 環境洩露](https://www.esecurityplanet.com/weekly-roundup/ai-threats-data-breaches-and-supply-chain-risks-define-this-week-of-may-2026-in-cybersecurity/)**
   - 與 ShinyHunters 相關的攻擊者透過遭入侵的 Salesforce 環境，竊取逾 60 萬筆加盟申請者紀錄。延續近期針對 SaaS 與身分平臺的攻擊趨勢。

5. **[Glassworm 殭屍網路遭瓦解，C2 基礎設施被端掉](https://www.bleepingcomputer.com/news/security/glassworm-botnet-disrupted-after-resilient-c2-infrastructure-takedown/)**
   - 鎖定開發者、用於軟體供應鏈攻擊的 Glassworm 殭屍網路，在研究人員（含 CrowdStrike、Google、Shadowserver 等）端掉其具韌性的命令與控制基礎設施後遭瓦解。

6. **[攻擊者以 SEO 投毒與 AI 聊天機器人散布假 AI 安裝包進行挖礦](https://www.ithome.com.tw/news/176246)**
   - 微軟發現新一波挖礦攻擊，除常見的搜尋引擎最佳化投毒外，更透過 AI 聊天機器人接觸受害者，散布假冒 Gemini CLI、Claude Code 等 AI 工具的安裝包，鎖定高效能運算主機植入 GPU 挖礦惡意程式（BleepingComputer 亦同步報導）。

7. **[北韓 Kimsuky 部署 HTTPSpy，擴充 HelloDoor 等武器庫](https://thehackernews.com/2026/05/kimsuky-deploys-httpspy-expands-arsenal.html)**
   - 北韓國家級駭客組織 Kimsuky（又稱 Velvet Chollima）以新一組工具鎖定南韓目標，顯示國家級威脅行為者持續汰換工具以規避偵測。

8. **[SANS ISC 分析 Akira 勒索軟體入侵手法（5/28 Stormcast）](https://isc.sans.edu/podcastdetail/9948)**
   - 該案未使用特定漏洞，而是先取得初始存取、再進行內部探查與橫向移動，凸顯「無漏洞、靠憑證與探查」的勒索入侵模式，偵測重點應放在異常內網行為而非僅看漏洞。

## 防禦與偵測

1. **[Cisco Talos：別再只靠 CVSS，改用 EPSS 與 GCVE 精準修補](https://blog.talosintelligence.com/less-panic-patching-more-precision/)**
   - Talos 主張停止單看 CVSS 嚴重性分數，改以 EPSS（漏洞利用預測評分系統，預測實際被利用機率）與 GCVE 聚焦真正會被攻擊的漏洞，把修補資源從「恐慌式全修」轉為「精準優先修」。

2. **[Verizon 2026 資料外洩調查報告（DBIR）重點](https://www.helpnetsecurity.com/2026/05/25/lessons-from-verizon-dbir-2026-findings/)**
   - 2026 年 DBIR 指出攻擊者持續利用漏洞、勒索軟體威脅上升，且資安基本功仍存在缺口，呼應本週多起「基礎防護失效」的事件。

3. **[印度 CERT-In 要求對外設備漏洞 12 小時內修補](https://thehackernews.com/2026/05/cert-in-mandates-12-hour-patching-for.html)**
   - 印度電腦緊急應變小組發布新指引，要求組織在 12 小時內修補對外暴露的重大漏洞，反映各國對 edge 設備修補時效的要求正快速收緊。

4. **[Microsoft Defender for Endpoint 測試自動隔離被駭端點](https://www.ithome.com.tw/news/176157)**
   - 名為「自動攻擊阻斷」（automatic attack disruption）的功能，可在特定裝置被駭時自動隔離，防止攻擊在企業網路橫向擴散。對端點防護縱深布署有參考價值。

5. **[SANS ISC：YARA-X 1.17.0 釋出（5/31 Diary）](https://isc.sans.edu/diary/0)**
   - YARA-X 1.17.0 帶來 5 項改進（多項效能優化）與 1 項錯誤修正，惡意程式偵測規則引擎持續演進。

## 台灣在地動態

1. **[市占第一 OTP 簡訊平臺 EVERY8D 遭駭，F-ISAC 發布黃燈級警訊](https://www.ithome.com.tw/news/176142)**
   - 互動資通旗下、每月發送逾一億封簡訊的 EVERY8D 全面癱瘓，自 5 月 18 日起電商與金流業者陸續通報 OTP 驗證碼無法送達。駭客自 5 月 21 日在地下論壇兜售其網域控制器（AD 主機）帳號與平臺資料，外洩網路拓樸顯示攻擊者已掌控逾 200 臺活躍主機、攻破生產環境網域控制器，並公布涉及五院、總統府、軍隊、各部會的真實簡訊日誌；隨後服務主機遭加密勒索。部分銀行對外宣稱「機房搬遷、系統升級」的說法在 F-ISAC 警訊後遭打臉。[iThome 資安週報 0525~0529](https://www.ithome.com.tw/news/176215) 將此列為頭條，最大隱憂是外洩簡訊紀錄可被用於精準社交工程與偽冒攻擊。

2. **[FortiClient EMS 被鎖定，駭客假借提供修補程式散布 EKZ Infostealer](https://www.ithome.com.tw/news/176207)**
   - 對應前述 CVE-2026-35616，攻擊者以「提供修補」為幌子誘導下載，反向利用管理者的修補心態散布竊資軟體 EKZ Infostealer。

3. **[微軟譴責 Chaotic Eclipse 未經協調逕自公開多項零時差漏洞](https://www.ithome.com.tw/news/176228)**
   - 微軟公開譴責研究團體 Chaotic Eclipse 在未協調揭露的情況下逕自公布多個零時差漏洞，凸顯漏洞揭露倫理與廠商修補時程的拉鋸。

4. **[馬偕醫院再傳遭駭，駭客宣稱握有 1.2TB 醫療資料](https://www.ithome.com.tw/news/176130)**
   - 駭客組織 The BlackH4t MD-Ghost 宣稱取得全臺 5 家院區共 1.2TB 醫療資料並公開部分紀錄；馬偕[聲明澄清疑似為 2025 年舊案](https://www.ithome.com.tw/news/881215)、目前流量監測正常。醫療資料外洩的真偽與時序仍待釐清。

5. **[數發部資安署揭露實測高德地圖等四款中國 App 結果](https://www.ithome.com.tw/news/176187)**
   - 資安署公布對高德地圖等四款中國 App 的實測結果，延續官方對中國軟體個資與資料外傳風險的檢視，對企業「中國軟體使用政策」具參考價值。

## 對 Simon 工作的影響評估

1. **EVERY8D 事件 — 立即盤點簡訊 OTP 供應鏈，納入 ISO 27001 供應商管理**
   這是本週對台灣企業 IT 最直接的衝擊。若公司任何系統（VPN、ERP、郵件、後臺）以企業簡訊平臺發送 OTP 或重要通知，應立即盤點是否使用 EVERY8D 或同類服務、回溯近期簡訊發送紀錄與收件對象，並留意是否出現偽冒簡訊。建議把此案當作 ISO 27001 供應商關係控制（A.5.19~A.5.22）的實例，補強對關鍵第三方的資安盡職調查（Security Due Diligence）。更要點：正在推進的 SQL Server MFA 專案，若規畫以簡訊 OTP 作為驗證因素，本案正好說明簡訊通道的單點故障與供應鏈風險，應優先評估 app-based 驗證器或 FIDO2／硬體金鑰，而非 SMS OTP。

2. **VPN／Edge 設備主動利用潮 — 確認對外設備修補與管理介面暴露**
   繼上週 SonicWall 之後，本週再添 PAN-OS GlobalProtect（CVE-2026-0257）與 FortiClient EMS（CVE-2026-35616）兩起 edge 設備遭主動利用、且被用來投放竊資軟體。建議盤點公司所有對外 VPN、防火牆與端點管理伺服器（EMS）的型號與韌體版本，確認管理介面未直接暴露於網際網路，並把 edge 設備修補時效對標 CERT-In「12 小時」級別的緊迫度。

3. **CISA 供應鏈最佳實踐 — 檢視 CI/CD 與開發者／自動化裝置**
   Nx Console 經 VS Code 自動更新散布惡意版本，提醒任何使用 VS Code 擴充、npm／PyPI 套件的環境（含 Simon 自架的 Claude Code 與腳本自動化）都應採行 CISA 建議：拉取套件前等 3 小時、釘選可信版本、只用可信來源、定期輪換 CI/CD secrets，並回溯 5 月 18 日後自動化帳號的可疑提交。

4. **修補優先序方法論 — 納入資安 KPI 月簡報**
   Talos 的 EPSS／GCVE 觀點搭配 Verizon DBIR 與 KEV，可作為月簡報的修補策略升級依據：把「KEV 修補達成率」與「以 EPSS 排序的高風險修補」列為指標，呼應 ISO 27001 弱點管理流程，讓修補從「全部都修」轉向「先修真正被利用的」，同時提供主管可量化的進度數字。
