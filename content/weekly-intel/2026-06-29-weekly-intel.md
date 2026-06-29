---
title: "資安週報 2026-06-29"
date: 2026-06-29
type: weekly-intel
issue: "W07"
cover_range: "2026-06-22 ~ 2026-06-28"
tags:
  - 資安週報
  - actively-exploited
  - edge-device
  - supply-chain
  - ot-security
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "PTC Windchill / FlexPLM 爆未驗證遠端程式碼執行零時差 CVE-2026-12569（CVSS 9.3），源於不安全的反序列化，免登入即可植入 JSP webshell 取得持久控制；CISA 6 月 25 日將其列入 KEV（史上第一個進 KEV 的 PTC 產品）、勒令聯邦機構 6 月 28 日前修補。Windchill 是製造業核心的產品生命週期管理（PLM）平台，廣布於汽車、航太、國防與重機械等高機敏產業，攻擊者可藉此竊取智慧財產與設計資料——這對半導體與電子製造供應鏈是最該警覺的一條"
  - "本週 CISA 連續三天把多個『正遭實際利用』的邊界與 OT 設備漏洞列入 KEV：Ubiquiti UniFi OS 三連漏洞 CVE-2026-34908／34909／34910（皆 CVSS 10.0，可串接成免驗證 root 遠端程式碼執行、已遭 Mirai／Gafgyt 殭屍網路掃描利用，6 月 23 日列入、6 月 26 日前修補）；Lantronix EDS5000 序列轉 IP 轉換器 CVE-2025-67038（CVSS 9.8、命令注入提權至 root、Forescout 觀測到 Chaya_006 自 4 月起利用、OT/ICS 環境的特權跳板，6 月 23 日列入）；Cisco Unified Communications Manager CVE-2026-20230（CVSS 8.6、WebDialer 服務 SSRF 寫檔提權至 root、自 6 月 21–22 週末起遭利用投放 webshell，6 月 25 日列入、6 月 28 日前修補）"
  - "供應鏈雙重事件本週發酵：6 月 17 日的 Mastra AI npm 投毒事件，微軟於 6 月 19 日更新部落格歸因為北韓國家級駭客 Sapphire Sleet，本週（6/22 起）經媒體大幅報導擴散——攻擊者挾持維護者帳號、在約 45 分鐘內發布 141 個植入惡意相依套件 easy-day-js（typosquat 仿冒 dayjs）的 @mastra 套件，受影響套件群合計週下載量約 800 萬，postinstall 腳本下載並隱蔽執行第二階段酬載；另一起 Klue 競爭情報平台遭威脅組織 Icarus 以舊憑證盜取 OAuth 權杖、橫向存取多家客戶的 Salesforce 並大量外洩資料，受害名單橫跨 HackerOne、Huntress、Snyk、Tanium、Recorded Future、BeyondTrust 等多家資安業者"
tldr: "本週主軸是『正被利用的邊界與製造業核心系統漏洞集中爆發』：CISA 一週內把 PTC Windchill（製造業 PLM）、Ubiquiti UniFi、Lantronix（OT 序列轉 IP）、Cisco Unified CM 等多個已遭實際利用的漏洞列入 KEV，多數帶 3 天內修補的緊迫期限；同時 Mastra npm 投毒被歸因北韓、Klue SaaS 整合遭 OAuth 權杖濫用波及多家資安業者，把『邊界設備、製造軟體與 SaaS 整合都是攻擊面』推到檯面。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W07 — 2026-06-29

> 涵蓋範圍：2026-06-22 ~ 2026-06-28

## 本週重點摘要

本週態勢由**正遭實際利用的邊界與製造業核心系統漏洞集中爆發**主導，CISA 在一週內連續把多個已被攻擊者利用的漏洞列入 KEV、且多帶 3 天內修補的緊迫期限。最值得製造業警覺的是 PTC Windchill／FlexPLM 的未驗證遠端程式碼執行零時差 CVE-2026-12569（CVSS 9.3），這是史上第一個進入 KEV 的 PTC 產品，而 Windchill 正是汽車、航太、國防與半導體電子等產業核心的產品生命週期管理（PLM）平台，攻擊者免登入即可植入 webshell、竊取設計資料與智慧財產。邊界與 OT 設備同樣失守：Ubiquiti UniFi OS 三連漏洞（皆 CVSS 10.0、可串成免驗證 root 遠端執行、已遭 Mirai／Gafgyt 殭屍網路利用）、Lantronix EDS5000 序列轉 IP 轉換器命令注入（CVSS 9.8、OT/ICS 特權跳板）、Cisco Unified Communications Manager 的 WebDialer SSRF 寫檔提權（CVSS 8.6、遭投放 webshell）三者接連列入 KEV。供應鏈面，微軟把 6 月 17 日的 Mastra npm 投毒事件歸因北韓 Sapphire Sleet，另一起 Klue 競爭情報平台遭 OAuth 權杖濫用、波及多家資安業者的 Salesforce 資料。執法面則有歐洲刑警組織（Europol）6 月 24 日公布的 Operation Endgame，瓦解 SocGholish、Amadey、StealC 三大惡意程式基礎設施。整體嚴重程度判為高——多個遭實際利用、CVSS 逼近或滿分的漏洞同時帶緊迫修補期限，加上打中製造業核心系統與供應鏈。

## 重大漏洞與威脅

1. **[CISA 將遭利用的 PTC Windchill RCE 漏洞列入 KEV，webshell 攻擊持續](https://thehackernews.com/2026/06/cisa-adds-exploited-ptc-windchill-rce.html)**
   - CVE-2026-12569 是 PTC Windchill PDMLink 與 FlexPLM 的未驗證遠端程式碼執行漏洞，CVSS 9.3，根因是對不可信資料的不安全反序列化；未經身分驗證的遠端攻擊者正主動利用此漏洞植入持久化的 JSP webshell，達成完整遠端命令執行與資料外洩。[CISA 於 6 月 25 日將其列入 KEV、聯邦機構修補期限 6 月 28 日，這是史上第一個進入 KEV 的 PTC 產品](https://securityaffairs.com/194290/security/u-s-cisa-adds-cisco-and-ptc-windchill-and-flexplm-flaws-to-its-known-exploited-vulnerabilities-catalog.html)。Windchill 廣布於汽車、航太、國防與重機械等高機敏製造業，作為集中管理產品設計與物料的 PLM 平台，一旦被免登入接管，等於把整個產品智慧財產暴露在外。

2. **[CISA 警告 Ubiquiti UniFi OS 滿分漏洞遭實際利用](https://www.bleepingcomputer.com/news/security/cisa-warns-of-max-severity-ubiquiti-flaws-exploited-in-attacks/)**
   - CVE-2026-34908、CVE-2026-34909、CVE-2026-34910 是 Ubiquiti UniFi OS 的三個漏洞，CVSS 皆為滿分 10.0，分屬不當存取控制、路徑穿越與不當輸入驗證；三者可串接，讓具網路存取能力的攻擊者在未經身分驗證下取得 root 權限的遠端程式碼執行，已觀測到 Mirai／Gafgyt 殭屍網路campaign 進行掃描利用。[CISA 於 6 月 23 日將三者列入 KEV，依 BOD 26-04 要求 6 月 26 日前完成修補](https://www.cisa.gov/news-events/alerts/2026/06/23/cisa-adds-four-known-exploited-vulnerabilities-catalog)；修補版本依裝置而定（UniFi OS Server 軟體版升 5.0.8 以上、UDM／UCG 等硬體裝置升 5.1.12 以上，詳見 Ubiquiti 安全公告 SAB-064）。網管邊界設備被滿分漏洞接管，等於攻擊者直接拿到內網的控制制高點。

3. **[Cisco Unified CM 漏洞 CVE-2026-20230 現遭實際利用](https://www.bleepingcomputer.com/news/security/cisco-unified-cm-sme-flaw-cve-2026-20230-now-exploited-in-attacks/)**
   - CVE-2026-20230 是 Cisco Unified Communications Manager（與 SME 版）的伺服器端請求偽造（SSRF）漏洞，CVSS 8.6，源於 WebDialer 服務的不當輸入驗證；未經身分驗證的遠端攻擊者可送出特製 HTTP 請求寫入任意系統檔案，進而提權至 root 並接管這套 VoIP 平台。[資安公司 Defused 觀測到自 6 月 21–22 週末起遭實際利用，攻擊者透過 Tor 自動化掃描、濫用 WebDialer SSRF 部署惡意 Apache Axis 服務投放 webshell](https://thehackernews.com/2026/06/cisco-unified-cm-flaw-exploited-after.html)。Cisco 已於 6 月 3 日釋出修補，CISA 6 月 25 日列入 KEV、期限 6 月 28 日。WebDialer 預設停用，但已為點擊撥號功能啟用的組織須當成已暴露處理。

4. **[CISA 警告 Lantronix EDS5000 關鍵漏洞正遭實際利用](https://thehackernews.com/2026/06/cisa-warns-critical-lantronix-eds5000.html)**
   - CVE-2025-67038 是 Lantronix EDS5000 序列轉 IP 轉換器的命令注入漏洞，CVSS 9.8；HTTP RPC 模組在使用者認證失敗時會執行 shell 指令寫入日誌，卻把使用者名稱未經消毒直接串接進指令，攻擊者只要在 username 參數注入作業系統指令即可，且以 root 權限執行。[Forescout Vedere Labs 觀測到名為 Chaya_006 的攻擊者自 4 月 5 日起就針對其誘捕系統利用此漏洞](https://www.securityweek.com/lantronix-serial-to-ip-converter-flaw-exploited-in-attacks-after-ot-threat-warning/)，CISA 於 6 月 23 日列入 KEV。EDS5000 作為 OT/ICS 環境中的序列轉 IP 橋接器，被攻破後等於成為監控、操縱甚至中斷工業流程的特權據點；Lantronix 已於 2 月 20 日於韌體 2.2.0.0R1 修補。

## 攻擊趨勢與事件

1. **[微軟將 Mastra AI npm 供應鏈攻擊歸因北韓駭客](https://www.bleepingcomputer.com/news/security/microsoft-links-mastra-ai-supply-chain-attack-to-north-korean-hackers/)（本週新進展）**
   - 6 月 17 日發生的 Mastra AI 框架 npm 投毒事件，微軟於 6 月 19 日更新部落格、歸因為北韓國家級威脅組織 Sapphire Sleet，本週（6/22 起）經 BleepingComputer 等媒體大幅報導而擴散到更廣的視野。攻擊者挾持具發布權限的維護者帳號「ehindero」，在約 45 分鐘的視窗內發布 141 個 @mastra 範圍套件、植入惡意相依套件 easy-day-js（typosquat 仿冒合法的 dayjs 日期函式庫），受影響的 Mastra 套件群合計週下載量約 800 萬。混淆過的 postinstall 投放器會下載第二階段酬載、寫入暫存目錄、以隱藏的背景行程執行後自我刪除以掩蓋痕跡。Sapphire Sleet 向來以加密貨幣竊取、假求職與供應鏈入侵著稱，這次把目標延伸到開發者與 CI/CD 管線。

2. **[多家資安業者受 Klue 供應鏈攻擊波及](https://www.securityweek.com/cybersecurity-firms-impacted-by-klue-supply-chain-attack/)**
   - 競爭情報平台 Klue 遭自稱 Icarus 的威脅組織以一組外洩的舊憑證入侵，產生 OAuth 權杖橫向存取 Klue 所整合的第三方平台（主要是 Salesforce），再以自動化腳本大量外洩客戶資料。Salesforce 已於 6 月 11 日停用 Klue Battlecards 應用整合。受害名單橫跨 HackerOne、Huntress、Insurity、Jamf、OneTrust、Recorded Future、Snyk、Sprout Social、Tanium、BeyondTrust 等多家資安與科技業者，外洩內容多為業務聯絡人、報價與銷售相關資料（多數業者聲明未涉及產品環境、密碼或工程資料）。此案凸顯 SaaS 對 SaaS 的 OAuth 整合一旦被濫用，信任鏈會沿著供應鏈整片擴散。

3. **[Operation Endgame 瓦解 Amadey、StealC 與 SocGholish 惡意程式基礎設施](https://www.bleepingcomputer.com/news/security/amadey-stealc-malware-operations-disrupted-in-operation-endgame-action/)**
   - 歐洲刑警組織（Europol）於 6 月 24 日公布最新一輪 Operation Endgame 成果：6 月 15 至 19 日的協同行動針對 SocGholish、Amadey、StealC 三大構成攻擊鏈初期階段的惡意程式家族，由加拿大、丹麥、德國、荷蘭、英國、美國等國執法單位偕同微軟、Bitdefender、IBM X-Force、Proofpoint 等私部門夥伴執行。行動共處置 326 台伺服器與 142 個網域、凍結約 4,100 萬歐元加密資產、回收 2,700 萬組遭竊登入憑證，並指認逾 38.5 萬台遭入侵主機。對防守方而言，這也是一份現成的失竊憑證清單，值得比對自家帳號是否在列。

## 防禦與偵測

1. **[SANS ISC 6 月 24 日 Handler Diary：Linux 行程名稱偽裝](https://isc.sans.edu/diary/33102)**
   - Xavier Mertens 拆解 Linux 上的行程名稱偽裝手法（MITRE ATT&CK T1036）：行程名稱存於兩處，`prctl(PR_SET_NAME)` 可改寫 `/proc/<pid>/comm`（即 `ps`／`top` 顯示的名稱），而 `/proc/<pid>/cmdline` 的完整命令列則靠 `memset`／`memcpy` 覆寫 argv 與 environ 記憶體區塊來竄改，讓惡意行程偽裝成不起眼的正常程序。文中以上週的中國 Velvet Ant 為實例，呼應「攻擊者藏在被信任的系統元件與行程之中」。實務偵測建議：改用 eBPF 類工具（如 Kunai）攔截真實的命令列，比對行程監控顯示與實際執行的落差，而非只信任 `ps` 的表面名稱。

2. **UniFi 三連漏洞的偵測與善後：先確認是否已被植入、再修補。** 對抗 CVE-2026-34908 等滿分漏洞，除了升級到 5.1.12 以上版本，[BishopFox 已釋出開源檢測工具 CVE-2026-34908-check 可安全判斷 UniFi OS Server 是否仍存在弱點](https://github.com/BishopFox/CVE-2026-34908-check)。由於已有 Mirai／Gafgyt 殭屍網路在掃描利用，建議把對外暴露的 UniFi 管理介面收回內網、檢視是否有非預期的設定變更或新增帳號，並把這類網管設備納入持續的弱點掃描範圍，別預設它們安全。

3. **EDR killer 與 CI/CD 工作流攻擊成形：防護工具與管線本身都要納入威脅模型。** 本週情報顯示勒索軟體即服務組織 Gentlemen 正開發以 GentleKiller 為核心的一整套 EDR 終止工具，專門癱瘓端點偵測；同時研究者揭露名為 Cordyceps 的新型 CI/CD 工作流弱點，可劫持工作流、滲透開源供應鏈。兩者共同的教訓是防禦不能只靠單一端點代理：應對 EDR 服務本身做防竄改與「代理失聯即告警」的監控、對 CI/CD 管線收緊權限與相依套件來源驗證，避免攻擊者先關掉你的眼睛、或從建置流程的上游下手。

## 台灣在地動態

1. **[iThome 資安週報 0622-0626：FortiBleed 憑證外洩事件受矚目，Klue 供應鏈攻擊風暴更延燒至多家資安業者](https://www.ithome.com.tw/news/176892)**
   - iThome 本週資安週報以 FortiBleed 憑證外洩的後續為要聞，資安專家強調管理員帳號改採 PBKDF2 雜湊機制的重要性，並點出該事件高效率、工業化的攻擊流程；同期並大篇幅追蹤 Klue 供應鏈攻擊延燒至 BeyondTrust 等多家資安業者的 Salesforce 環境。其餘涵蓋北韓駭客挾持 npm 維護者帳號、對 Mastra 框架逾 140 個套件植入後門；印度 Tata Electronics 證實資安事件、傳出與 Apple、Tesla 硬體零組件設計相關的資料外洩；Grafana Labs 於 6 月 23 日發布事件後報告；以及 Europol 於 6 月 24 日公布 Operation Endgame 凍結逾 4,100 萬歐元加密資產。對台灣讀者的意義在於：邊界憑證外洩、製造業設計資料遭竊與 SaaS 供應鏈擴散，都直接命中以製造與電子代工為主的台灣產業結構。

## 對 Simon 工作的影響評估

1. **PTC Windchill PLM 零時差 ＋ Tata Electronics 設計資料外洩 — 把製造業核心系統列為 ISO 27001 BIA 的皇冠寶石**
   這是本週對你產業最直接的一條。PTC Windchill 是汽車、航太到半導體電子製造共用的 PLM／PDM 平台，CVE-2026-12569 讓攻擊者免登入植入 webshell、竊取產品設計與智慧財產；同週 Tata Electronics 傳出 Apple／Tesla 零組件設計資料外洩，正是「製造核心系統失守即 IP 外洩」的真實案例。你正在做 ISO 27001 的業務營運衝擊分析（BIA），建議把 PLM／PDM／MES 這類承載產品設計與製程資料的系統明確標為皇冠寶石、給最嚴格的 RTO／RPO 與還原基準，並把這類製造專用軟體納入弱點管理盤點與原廠公告追蹤——很多組織的弱點管理只涵蓋 IT 通用系統，卻漏了這些「工程／製造側」平台。即使公司未必用 Windchill，同類 PLM／PDM 都該比照盤點。

2. **Lantronix 序列轉 IP 漏洞 ＋ OT/ICS 特權跳板 — 半導體廠的 OT 與邊界轉換設備要進資產盤點與 BIA 情境**
   EDS5000 這類序列轉 IP 轉換器常出現在工廠把老舊機台、感測器串上網路的場景，被攻破後就成為監控甚至干擾產線的特權據點，且此漏洞 2 月已修補、卻自 4 月就遭利用，凸顯 OT 設備「修補延遲」的結構性風險。你的 BIA 應把 OT 網段與這類橋接設備納入：盤點哪些機台與轉換器對外或跨網段可達、評估一旦遭操縱對產線的衝擊，並把「OT 設備修補節奏落後」列為需要補償控制（網段隔離、白名單、唯讀監控）的風險項。這也呼應上週 Velvet Ant 打破「隔離網路就安全」的教訓。

3. **Cisco Unified CM ＋ Ubiquiti UniFi 邊界網管零時差 — 你直接管的 IT 邊界設備本週是攻擊熱區**
   本週多個遭實際利用的漏洞都打在你日常維運的 IT 邊界與網管設備上：VoIP 主控（Cisco Unified CM，WebDialer SSRF 提權 root）與網管設備（Ubiquiti UniFi，CVSS 10.0 串接 root RCE，已遭殭屍網路掃描）。落地動作有三：一是確認版本並比照緊急變更修補（Cisco 已有修補、UniFi 升 5.1.12+）；二是停用非必要服務（例如未用到就關閉 WebDialer），以縮小攻擊面；三是把所有管理介面收回內網、別對公網暴露，並沿用 CISA BOD 26-04 的風險分級邏輯，把「已遭實際利用、列入 KEV」的漏洞排到修補序列最前面。

4. **Klue SaaS OAuth 濫用 ＋ Mastra npm 投毒 — 第三方與 SaaS 整合風險要寫進 ISO 27001 供應商管理**
   兩起供應鏈事件指向同一個盲點：你信任的第三方一旦被攻破，攻擊會沿著整合鏈擴散。Klue 案中攻擊者用一組舊憑證產生 OAuth 權杖、橫向存取多家客戶的 Salesforce；Mastra 案則是惡意套件混進開發相依鏈。對你的意義有二：其一，盤點公司有哪些 SaaS 對 SaaS 的 OAuth 整合（CRM、協作、IT 工具串接），定期檢視已授權的第三方應用與權杖、撤銷不再使用的整合、對高權限整合啟用最小授權，這正是 ISO 27001 供應商與存取控制條款的具體落地；其二，若內部有自動化或開發流程會抓 npm／PyPI 套件，應導入相依套件來源驗證與版本鎖定，避免 typosquat 與 postinstall 投放。可一併把「失竊憑證比對」納入——本週 Europol 行動回收 2,700 萬組憑證，正好提醒定期輪換並檢查自家帳號是否外流。
