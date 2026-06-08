---
title: "資安週報 2026-06-08"
date: 2026-06-08
type: weekly-intel
issue: "W03"
cover_range: "2026-06-01 ~ 2026-06-07"
tags:
  - 資安週報
  - zero-day
  - data-breach
  - phishing
  - edge-device
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "Cisco Catalyst SD-WAN Manager 出現本年度第七個零時差漏洞 CVE-2026-20245，遭 UAT-8616 活動利用可取得 root，且至今無修補程式"
  - "Google 六月 Android 安全更新修補 124 個漏洞，含遭實際利用的零時差 CVE-2025-48595；CISA 同步將其與 Linux 核心 CVE-2022-0492 等列入 KEV"
  - "聯合國世界糧食計畫署（WFP）遭駭、外洩約 60 萬 Gaza 家戶個資；DentaQuest 260 萬筆帳戶資料遭 ShinyHunters 外洩"
tldr: "本週主軸是網路與邊界設備零時差持續被鎖定（思科 SD-WAN／Unified CM、SolarWinds Serv-U）、行動端零時差（Android CVE-2025-48595）與大規模個資外洩（WFP、DentaQuest）並行；攻擊者大量改用 SVG、ClickFix 與合法雲端服務投遞惡意程式以規避偵測。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W03 — 2026-06-08

> 涵蓋範圍：2026-06-01 ~ 2026-06-07

## 本週重點摘要

本週態勢由**網路與邊界設備的零時差漏洞**和**身分導向的大規模個資外洩**雙線主導。思科一週內兩起 Catalyst SD-WAN Manager 漏洞接連被點名：先前的驗證繞過 CVE-2026-20182（五月修補）之後，又出現本年度第七個遭利用的 SD-WAN 零時差 CVE-2026-20245，攻擊者可在裝置上以 root 身分執行任意指令，且官方至今未釋出修補；思科同時通報企業通訊平臺 Unified CM 的重大伺服器端請求偽造（SSRF）漏洞 CVE-2026-20230。行動端方面，Google 六月 Android 更新一次修補 124 個漏洞，其中 CVE-2025-48595 已遭實際利用，CISA 隨即把它與 Linux 核心提權漏洞 CVE-2022-0492 列入已知遭利用漏洞目錄（KEV）。檔案傳輸面也未倖免：SolarWinds Serv-U 的未驗證阻斷服務漏洞 CVE-2026-28318 被列管，聯邦修補期限訂在 6 月 19 日。個資外洩規模龐大，聯合國世界糧食計畫署證實自助登錄系統遭入侵、波及約 60 萬個 Gaza 家戶，勒索集團 ShinyHunters 則外洩牙科福利管理商 DentaQuest 約 260 萬筆帳戶資料。投遞手法持續往「規避偵測」演進：SANS 本週連續記錄到以 SVG 圖檔夾帶 JavaScript、以 WeTransfer 與 Cloudflare 免費網域分流惡意酬載、以及 ClickFix 假驗證頁誘導執行的攻擊鏈。

## 重大漏洞與威脅

1. **[思科 Catalyst SD-WAN Manager 零時差 CVE-2026-20245 遭利用，可取得 root 且無修補](https://thehackernews.com/2026/06/cisco-catalyst-sd-wan-manager-cve-2026.html)**
   - CVSS 7.8，已驗證的本機攻擊者可藉特製檔案的輸入驗證不當，以 root 身分執行任意指令。思科產品安全事件應變團隊（PSIRT）於六月得知遭實際利用，活動歸因於 UAT-8616 威脅群集，這是 2026 年第七個遭利用的 SD-WAN 零時差。[目前無修補或緩解措施](https://www.bleepingcomputer.com/news/security/new-cisco-sd-wan-flaw-exploited-in-zero-day-attacks-to-gain-root/)，官方僅建議先確保已套用 5 月 14 日釋出、針對驗證繞過 CVE-2026-20182 的修補（[SecurityWeek 同步報導](https://www.securityweek.com/cisco-warns-of-7th-sd-wan-zero-day-exploited-in-2026/)）。

2. **[Google 六月 Android 修補 124 個漏洞，含遭利用的零時差 CVE-2025-48595](https://www.bleepingcomputer.com/news/security/google-fixes-one-actively-exploited-android-zero-day-124-flaws/)**
   - CVE-2025-48595 位於 Android Framework 元件、CVSS 8.4，可用於權限提升，Google 表示有跡象顯示其遭「有限、針對性」的實際利用。這也是本月一次性修補量最大的行動端更新，企業應盡速把受管裝置推升到六月修補等級。

3. **[CISA 兩日內三度更新 KEV：Linux 核心、Android、Mirasvit](https://www.cisa.gov/news-events/alerts/2026/06/02/cisa-adds-two-known-exploited-vulnerabilities-catalog)**
   - 6 月 2 日新增 CVE-2022-0492（Linux 核心驗證不當提權）與 CVE-2025-48595（Android Framework 整數溢位）；[6 月 3 日](https://www.cisa.gov/news-events/alerts/2026/06/03/cisa-adds-one-known-exploited-vulnerability-catalog)再新增 CVE-2026-45247（Mirasvit Full Page Cache Warmer 反序列化，屬 Magento／Adobe Commerce 生態的擴充套件）。三者均確認遭主動利用，聯邦機構須於期限內修補。

4. **[SolarWinds Serv-U 未驗證阻斷服務漏洞 CVE-2026-28318 遭利用、列入 KEV](https://thehackernews.com/2026/06/cisa-adds-actively-exploited-solarwinds.html)**
   - CVSS 7.5。攻擊者無須驗證，即可送出帶有 `Content-Encoding: deflate` 的特製 POST 請求讓 Serv-U 服務崩潰（[BleepingComputer 報導](https://www.bleepingcomputer.com/news/security/cisa-hackers-now-exploit-solarwinds-serv-u-flaw-to-crash-servers/)）。已於 Serv-U 15.5.4 HF1 修補，臨時緩解可限制來源位址並阻擋含 content-encoding 標頭的請求；CISA 訂聯邦修補期限為 6 月 19 日。

## 攻擊趨勢與事件

1. **[聯合國世界糧食計畫署遭駭，約 60 萬 Gaza 家戶個資外洩](https://www.bleepingcomputer.com/news/security/un-world-food-programme-breach-affects-600-000-gaza-households/)**
   - WFP 證實其位於巴勒斯坦的自助登錄系統（SRA）於 5 月 14 日遭入侵，攻擊者竊得約 60 萬個 Gaza 家戶的姓名、身分證號、電話與位置資訊。人道組織的受助者名冊一旦外洩，極易被用於精準詐騙與身分冒用。

2. **[DentaQuest 約 260 萬筆帳戶資料遭 ShinyHunters 外洩](https://www.bleepingcomputer.com/news/security/dentaquest-data-breach-exposed-info-of-26-million-accounts/)**
   - 勒索集團 ShinyHunters 先將牙科福利管理商 DentaQuest 列上資料外洩網站、宣稱竊得逾 234 GB，本週進一步外洩約 260 萬筆帳戶資料，內容含姓名、地址、電郵、電話、生日、政府核發證件與健康保險資訊（[SecurityWeek 報導](https://www.securityweek.com/hackers-leak-dentaquest-information-impacting-2-6-million/)）。延續近期 ShinyHunters 鎖定 SaaS 與身分平臺、以社交工程為入口的攻擊趨勢。

3. **[FBI 警告 2026 世足賽詐騙網站大舉上線](https://www.bleepingcomputer.com/news/security/fbi-warns-of-fake-fifa-websites-running-world-cup-fraud-schemes/)**
   - 賽事將於 6 月 11 日至 7 月 19 日在美、加、墨舉行。FBI 指出自 2025 年 8 月以來已註冊逾 4,300 個假冒 FIFA 網域、另有約 3,800 個處於停泊待命狀態，手法包括近似網域（如 fiffa.com）、假售票與假徵才頁、夾帶銀行木馬的盜版串流 App，以及竊取護照掃描的假博弈站（[The Hacker News 分析](https://thehackernews.com/2026/06/fifa-world-cup-2026-scams-are-already.html)）。

4. **[SANS ISC：SmartApeSG ClickFix 活動投放 NetSupport RAT（6 月 1 日）](https://isc.sans.edu/diaryarchive.html)**
   - Brad Duncan 於 6 月 1 日發布的 Handler Diary，記錄 SmartApeSG 以 ClickFix 假驗證頁誘導使用者貼上指令，先植入未具名的初始遠端存取木馬（RAT），再透過其命令與控制（C2）通道送出合法工具 NetSupport Manager 改造的 RAT 套件。文中附完整入侵指標（IOC），含 C2 位址 `89.110.110[.]119:443`、落地腳本 `processor.vbs`／`token.bat`／`setup.cab`，可直接拿來在端點與代理伺服器日誌比對。

## 防禦與偵測

1. **[SANS ISC：SVG 圖檔夾帶 JavaScript 的網釣新潮（6 月 2 日，diary 33040）](https://isc.sans.edu/diary/33040)**
   - Xavier Mertens 觀察到大量以 SVG 圖檔為附件的釣魚信，信件本文沒有任何網址、只有「一張圖」。SVG 內不含任何圖形元素，只藏一段 JavaScript：以 XOR 解出跳轉網址（本批用便宜的 `.cfd` 頂級網域），並刻意用 `application/ecmascript` 這個較少見的 MIME 類型，繞過只比對 `text/javascript` 的網頁應用防火牆（WAF）特徵。偵測重點：把入站 `.svg` 附件視為可疑、在郵件閘道對含 `<script>` 的 SVG 告警，並留意非標準 script MIME 類型。

2. **[SANS ISC：惡意酬載藏進 JPEG、濫用 WeTransfer 與 Cloudflare 免費網域（6 月 5 日，diary 33054）](https://isc.sans.edu/diary/33054)**
   - 攻擊鏈以 WeTransfer 正式連結分享名為「Remittance Advice.js」的 JavaScript（檔案逾 2 MB、塞滿無作用的垃圾程式碼）開始，中段用 ROT13 解出 `powershell.exe -ExecutionPolicy Bypass -NoProfile -WindowStyle Hidden`，再透過 WMI（`Win32_Process.Create`）以隱藏視窗執行。PowerShell 從 Cloudflare 的 `workers.dev` 子網域取得偽裝成 MSI 背景的 JPEG，解出改造版 `Microsoft.Win32.TaskScheduler` 的 .NET 載入器，並再從 Cloudflare R2 的 `r2.dev` 下載夾帶隱寫術（steganography）的 `snake.png`。偵測重點：監控由 `wscript`／`.js` 衍生的 PowerShell、WMI 生成隱藏視窗程序、以及對 `workers.dev`／`r2.dev`／`we.tl` 等合法但常被濫用網域的可疑外連。

3. **[SANS ISC：攻擊者大量掃描 swagger.json，把 API 文件當入侵地圖（6 月 3 日）](https://isc.sans.edu/diaryarchive.html)**
   - Johannes Ullrich 指出，對 `/swagger.json`、`/swagger/v1/swagger.json` 等 OpenAPI 文件的掃描量持續攀高（單一路徑累計逾 3.2 萬次請求）。這類文件等同 API 的「目錄列表」，會洩露所有端點與底層應用版本，成為攻擊者鎖定弱點的捷徑。防禦做法不是停用，而是**主動在自家環境掃描有無不該對外公開的 swagger.json**，並把對外 API 文件的存取納入控管。

## 台灣在地動態

1. **[思科企業通訊平臺 Unified CM 重大 SSRF 漏洞 CVE-2026-20230，恐被用於提權](https://www.ithome.com.tw/news/176411)**
   - 思科將該 SSRF 漏洞評為重大等級、影響高於 CVSS 8.6 對應的高風險，原因是攻擊者成功利用後可將檔案寫入底層作業系統、作為日後提升至 root 的手段。未經身分驗證的遠端攻擊者只要送出特製 HTTP 請求即可觸發，但僅影響啟用 WebDialer 網頁撥號服務的 Unified CM 與 Unified CM SME 環境（WebDialer 預設停用）。概念驗證程式碼已公開、尚無實際攻擊案例；14 版修補為 14SU6、15 版 15SU5 預計 2026 年 9 月提供，正式修補前可先停用 WebDialer 降低風險。

本週 iThome 在地資安報導以國際漏洞與修補政策延燒為主（思科 SD-WAN／Unified CM、Android 零時差、印度 12 小時修補令），上述思科 Unified CM 通報最受台灣讀者關注；窗口內未見如上週 EVERY8D 等級的新增本土重大事件。

## 對 Simon 工作的影響評估

1. **Android 零時差 CVE-2025-48595 — 直接餵給你的 MDM 合規基準**
   你正在導入 Omnissa Workspace ONE，本週 Google 六月更新修補 124 個漏洞、且 CVE-2025-48595 已遭實際利用，正好是一個可立即落地的合規（compliance）規則：在 Workspace ONE 設定「最低 Android 安全修補等級＝2026 年 6 月」的合規政策，未達標的裝置自動標記不合規並限制存取公司資源。把「受管 Android 裝置達到當月修補等級的比例」做成月簡報指標，呼應 ISO 27001 的行動裝置與弱點管理控制。

2. **思科 SD-WAN／Unified CM 與 SolarWinds Serv-U — 盤點對外網路與檔案傳輸基礎設施**
   本週三起都打在你機房職責的核心面：網路邊界（Cisco SD-WAN Manager，root 零時差且無修補）、企業通訊（Cisco Unified CM SSRF）、檔案傳輸（SolarWinds Serv-U 未驗證即可癱瘓服務）。建議盤點公司是否使用這些產品與其版本，確認管理介面未直接暴露於網際網路；SD-WAN 在無修補期間至少先套用 CVE-2026-20182 的既有修補並收斂管理面存取，Serv-U 對標 CISA 6 月 19 日期限優先處理。可把 KEV 新增項目固定納入每月修補優先序清單，延續上週「先修真正被利用的漏洞」的做法。

3. **SVG／ClickFix／合法雲端服務投遞 — 強化端點與郵件的縱深防禦**
   本週 SANS 連續記錄的投遞手法，全部繞過傳統特徵偵測：SVG 夾帶 JavaScript、ClickFix 假驗證頁誘導貼指令、以 WeTransfer 與 Cloudflare 免費網域分流酬載、再用 WMI 生成隱藏的 PowerShell。對你的環境可做三件低成本的事：在郵件閘道把入站 `.svg`／`.js` 附件視為高風險、在端點防護（含 Workspace ONE 受管裝置）限制 `wscript`／`mshta` 與未簽署腳本執行、並對「`.js` 或 Office 衍生出帶 `-ExecutionPolicy Bypass`／`-WindowStyle Hidden` 的 PowerShell」設告警。這些正是 ClickFix 與 .NET 載入器鏈最容易被攔下的環節。

4. **ShinyHunters 系列外洩 — 為你的 MFA 專案再加一道「抗釣魚」要求**
   WFP 與 DentaQuest 都凸顯身分與第三方平臺是當前主要破口，ShinyHunters 一貫以社交工程（含語音釣魚）取得初始存取。你正在推進的 SQL Server MFA 搭配 Kerberos 與 Silverfort，建議把「抗釣魚 MFA」列為設計目標：優先採用 FIDO2／硬體金鑰或行動驗證器，而非簡訊 OTP（延續上週 EVERY8D 簡訊平臺癱瘓所暴露的單點與供應鏈風險）。Silverfort 可協助把 MFA 覆蓋到傳統不支援 MFA 的服務帳號與本機登入，正對應 ShinyHunters 常利用的「被忽略的身分」缺口。
