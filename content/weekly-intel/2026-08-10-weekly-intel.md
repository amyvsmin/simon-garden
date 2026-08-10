---
title: "資安週報 2026-08-10"
date: 2026-08-10
type: weekly-intel
issue: "W13"
cover_range: "2026-08-03 ~ 2026-08-09"
tags:
  - 資安週報
  - supply-chain
  - kev
  - rce
  - npm-worm
  - credential-theft
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "三天內五個 CVE 連環列入 KEV（8/3~8/5）、全部已在野利用，靶心落在開發與管理平面：JetBrains TeamCity 免驗證反序列化 RCE CVE-2026-63077（CVSS 9.8、8/5 入 KEV、CISA 只給三天修到 8/8）、Langflow 免驗證程式碼注入 CVE-2026-9198（CVSS 9.8、EPSS 17.05%、自 7/6 起 244 個 IP 逾 650 次攻擊）、Apache Tomcat 叢集加密繞過 CVE-2026-34486（EPSS 高達 81.16%、被中文母語攻擊者借 DeepSeek 與 Hermes Agent 框架武器化）、N-able N-central 兩個驗證繞過 CVE-2026-18577／18556（修補不完整導致伺服器遭接管）"
  - "npm 生態爆本年度最大自我傳播蠕蟲「ChainDrop」：8/4 攻擊者挾持 keyv／cacheable 維護者的 GitHub 帳號，蠕蟲靠竊取 CI/CD 執行器與開發者工作站的 npm 發布權杖橫向擴散、波及 452 個套件的 2,251 個版本、合計每月約 20 億次下載；Microsoft 威脅情報判定為 Mini Shai-Hulud 變種，酬載以合法 Bun 執行環境為跳板、二階段偷憑證並回頭汙染下游套件"
  - "憑證竊取戰線同步升溫：俄羅斯 SVR 相關的 Storm-2945（Midnight Blizzard）操弄旅館與公共 Wi-Fi 的 DNS／HTTP、以 ClickFix 假更新頁散布 CornFlake／ChocoShell 竊取 Microsoft 365 權杖（iThome 8/3 頭條）；Palo Alto Unit 42 另揭 Google 同步通行密鑰的三種竊取手法、最嚴重的 Golden Pass-ta-key 可取出私密金鑰（iThome 8/4）"
tldr: "本週主軸是「開發與管理平面連環進 KEV ＋ npm 供應鏈蠕蟲 ＋ 憑證竊取升溫」：三天內 TeamCity（9.8）、Langflow（9.8）、Tomcat（EPSS 81%）、N-able N-central 兩個 CVE 五案接連列入 KEV 且均在野利用；ChainDrop 自我傳播蠕蟲橫掃 452 個 npm 套件、每月約 20 億次下載；俄羅斯 Storm-2945 以公共 Wi-Fi 竊取 M365 憑證、Unit 42 揭 Google 通行密鑰可被取出私密金鑰。整體嚴重程度判為高。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W13 — 2026-08-10

> 涵蓋範圍：2026-08-03 ~ 2026-08-09

## 本週重點摘要

本週的主軸是「開發與管理平面連環爆漏洞、加上 npm 供應鏈自我傳播蠕蟲與憑證竊取同步升溫」。CISA 在 8 月 3 日到 5 日短短三天內把五個 CVE 列入 KEV、且全部已在野利用：JetBrains TeamCity 的免驗證反序列化 RCE CVE-2026-63077（CVSS 9.8、8/5 入 KEV、只給三天修補期到 8/8）、Langflow 的免驗證程式碼注入 CVE-2026-9198（CVSS 9.8、EPSS 高達 17.05%）、Apache Tomcat 叢集節點加密繞過 CVE-2026-34486（EPSS 衝到 81.16%、且被中文母語攻擊者借助 AI 工具武器化）、以及 N-able N-central 的兩個驗證繞過 CVE-2026-18577／18556（首次修補不完整、導致 RMM 伺服器遭接管）。這批漏洞的共同點是靶心不在使用者端，而在建置系統、AI 應用平台、應用伺服器與遠端維運主控台這些「開發與管理平面」。供應鏈面上，8 月 4 日 npm 生態爆發本年度規模最大的自我傳播蠕蟲「ChainDrop」：攻擊者挾持 keyv／cacheable 套件維護者的 GitHub 帳號，蠕蟲靠竊取 CI/CD 執行器與開發者工作站上的 npm 發布權杖橫向擴散，波及 452 個套件的 2,251 個版本、合計每月約 20 億次下載，Microsoft 威脅情報判定為 Mini Shai-Hulud 變種。憑證竊取戰線同步升溫：俄羅斯 SVR 相關的 Storm-2945（Midnight Blizzard）操弄旅館與公共 Wi-Fi 竊取 Microsoft 365 權杖，Palo Alto Unit 42 則揭露 Google 同步通行密鑰可被取出私密金鑰。整體嚴重程度判為高：兩個 CVSS 9.8 的免驗證 RCE 正被當零時差打、一個 EPSS 逾 80% 的 Tomcat 漏洞已被 AI 輔助武器化，加上一波每月 20 億次下載規模的供應鏈蠕蟲與多起針對身分憑證的攻擊。

## 重大漏洞與威脅

1. **[JetBrains TeamCity 免驗證反序列化 RCE CVE-2026-63077 遭在野利用，8 月 5 日列入 KEV、CISA 限三天修補](https://thehackernews.com/2026/08/cisa-flags-teamcity-cve-2026-63077-rce.html)**
   - CVE-2026-63077 是 TeamCity On-Premises 的**不受信任資料反序列化**漏洞、CVSS 9.8：攻擊者只要能以 HTTP(S) 連到 TeamCity 伺服器，就能透過代理輪詢協定（agent polling protocol）繞過驗證、以伺服器程序權限執行任意作業系統命令，進而竊取組態、憑證、竄改伺服器狀態並汙染整條 CI/CD 管線。CISA 於 8 月 5 日將其列入 KEV、依 BOD 26-04 只給到 8 月 8 日的異常短修補期。JetBrains 在 7 月 27 日時尚未觀察到攻擊，CISA 8 月 5 日確認在野利用；目前攻擊者身分與手法細節未公開。修補版為 2025.11.7 與 2026.1.3。建置伺服器一旦被接管等於拿到簽章金鑰與部署權，屬本期最該緊急處理的一條。
   - 指標（CVE-2026-63077）：CVSS 9.8｜EPSS 1.01%｜KEV：已列入（2026-08-05）

2. **[Langflow 免驗證程式碼注入 CVE-2026-9198 遭大規模掃描利用，8 月 4 日列入 KEV](https://thehackernews.com/2026/08/cisa-flags-langflow-rce-tomcat-and-n.html)**
   - Langflow（現屬 IBM）是熱門的視覺化 AI 工作流建構平台。CVE-2026-9198 是**程式碼注入**漏洞、CVSS 9.8：未經驗證的攻擊者可在預設部署上取得完整的遠端命令執行。它不是理論風險——遙測顯示自 2026 年 7 月 6 日起已累積逾 650 次攻擊、來自 41 國的 244 個獨立攻擊 IP，這也反映在偏高的 EPSS 17.05%（遠高於本期其他條目）。修補版為 1.10.1（2026 年 7 月釋出）。這條提醒兩件事：一是新興 AI 平台正快速成為初始入侵面，二是把 AI 應用直接掛上公網、卻沿用一般網頁服務的防護強度，風險被低估。
   - 指標（CVE-2026-9198）：CVSS 9.8｜EPSS 17.05%｜KEV：已列入（2026-08-04）

3. **[Apache Tomcat 叢集加密繞過 CVE-2026-34486 被 AI 輔助武器化，8 月 4 日列入 KEV](https://thehackernews.com/2026/08/cisa-flags-langflow-rce-tomcat-and-n.html)**
   - CVE-2026-34486 是 Apache Tomcat 的**敏感資料未加密**漏洞、CVSS 7.5：可繞過 EncryptInterceptor——這是替叢集節點間訊息加上預共享金鑰加密的元件；一旦被繞過，叢集節點之間的通訊就等於明文暴露。值得注意的是它的 EPSS 高達 81.16%，是本期唯一衝破 80% 的條目；The Hacker News 報導指出，這條已被中文母語的攻擊者（追蹤代號 knaithe／KnYuan）**借助 DeepSeek 與 Hermes Agent 代理框架**完成武器化，是本週「AI 加速漏洞利用」的具體案例。修補早在 2026 年 4 月釋出（11.0.21、10.1.54、9.0.117），但仍在 8 月被列入 KEV，反映不少單位延誤更新。EPSS 逾八成 ＋ 已在野利用，屬應立即排修的一條。
   - 指標（CVE-2026-34486）：CVSS 7.5｜EPSS 81.16%｜KEV：已列入（2026-08-04）

4. **[N-able N-central 兩個驗證繞過 CVE-2026-18577／18556 遭利用、伺服器在首次修補不完整後仍被接管](https://thehackernews.com/2026/08/cisa-adds-exploited-n-able-n-central.html)**
   - N-able N-central 是 MSP（受管服務供應商）廣泛使用的**遠端監控與管理（RMM）平台**。CVE-2026-18577 與 CVE-2026-18556 都是「以替代路徑或通道繞過驗證」的漏洞、CVSS 均為 8.2：攻擊者可繞過登入、進而接管 N-central 伺服器與其管理的下游端點。關鍵在於這是一起**修補不完整**事件——第一個修補未堵死問題，攻擊者續打、才有第二個 CVE。CISA 於 8 月 3 日先列入 CVE-2026-18577、8 月 4 日再補上 CVE-2026-18556。RMM 主控台被拿下等於一次掌握大量受管主機，是供應鏈式橫向擴散的高價值跳板；使用 N-central 者應立即升級到含兩個修補的版本並輪換管理憑證。
   - 指標：CVE-2026-18577 → CVSS 8.2｜EPSS 4.10%｜KEV：已列入（2026-08-03）；CVE-2026-18556 → CVSS 8.2｜EPSS 0.49%｜KEV：已列入（2026-08-04）

5. **[18 年老洞「SCTPhantom」CVE-2026-64564：Linux SCTP use-after-free，可本機提權到 root 並逃出容器（本週揭露、已修補、尚無在野利用）](https://thehackernews.com/2026/08/18-year-old-linux-sctp-flaw-could-let.html)**
   - CVE-2026-64564（暱稱 SCTPhantom）是 Linux 核心 SCTP 網路程式碼的 **use-after-free** 漏洞、CVSS 8.5（v4.0；NVD 截至 8/7 尚未評分）：本機攻擊者可藉此提權到 root，並從容器逃逸到宿主。研究者已在 Debian 13、Ubuntu 24.04、Rocky Linux 9、RHEL 9、OpenCloudOS 上重現取得 root。受影響範圍極廣——涵蓋自 2008 年 Linux 2.6.25 至 2026 年 8 月初的幾乎所有版本；修補已於 8 月 3 日隨穩定核心 7.1.6、6.18.42、6.12.101、6.6.148 釋出，漏洞細節於 8 月 6 日公開。截至目前僅騰訊實驗室公開示範、無公開利用程式碼、未列入 KEV。它與上面四條的差別是「尚未被實際利用」，但因容器逃逸影響面大，屬應納入常規核心更新排程優先處理的一條。
   - 指標（CVE-2026-64564）：CVSS 8.5（v4.0、NVD 未評）｜EPSS 0.48%｜KEV：未列入（依 2026-08-10 查詢）

> 本期排序邏輯延續既有原則：**已列入 KEV → 再看 CVSS 嚴重度 → EPSS 作為機率參考**。本期一個特別點是 EPSS 的兩極：Tomcat CVE-2026-34486 高到 81.16%、Langflow CVE-2026-9198 也有 17.05%，代表利用普及度已很高、不容延後；而 TeamCity（1.01%）與 N-central（4.10%／0.49%）的 EPSS 偏低，卻同樣在 KEV、都已在野利用——再次印證「已進 KEV 就是既成利用事實，機率分數不能作為延後理由」。

## 攻擊趨勢與事件

1. **[npm 生態爆本年度最大自我傳播蠕蟲「ChainDrop」：452 個套件遭汙染、每月約 20 億次下載](https://www.microsoft.com/en-us/security/blog/2026/08/04/chaindrop-supply-chain-compromise-anatomy-self-propagating-worm/)**
   - 8 月 4 日，攻擊者挾持了 keyv 與 cacheable 這兩組被廣泛依賴的 npm 套件維護者的 GitHub 帳號，植入名為 ChainDrop 的**自我傳播蠕蟲**。它的擴散機制是關鍵：蠕蟲會從受害的 CI/CD 執行器與開發者工作站上**竊取有效的 npm 發布權杖**，用來把惡意酬載注入下游依賴套件並重新發布，形成跨組織邊界的連鎖汙染，因此得以逃出原本的 keyv／cacheable 命名空間。截至 Elastic 與多家廠商統計，已擴散到 452 個套件的 2,251 個版本、合計每月約 20 億次下載，波及 Deliveroo、Picsart、Qlik、ServiceTitan 等組織。酬載形態一致：先以 preinstall 掛鉤下載合法的 Bun JavaScript 執行環境當跳板，再放出約 710 KB 的高度混淆二階段程式偷憑證、續發惡意套件、並鑽進 AI 開發工具。Microsoft 威脅情報判定為 **Mini Shai-Hulud 變種**（Elastic 直接冠以「Shai-Hulud 再現」）。防守重點：CI/CD 是本次的主要竊取目標，發布權杖應改為短時效、綁定來源、並對 preinstall 腳本與非預期的對外連線建立監控。

2. **[俄羅斯 Storm-2945（Midnight Blizzard）操弄旅館與公共 Wi-Fi，竊取企業旅客的 Microsoft 365 憑證](https://www.ithome.com.tw/news/177829)**
   - Microsoft 於 8 月 3 日確認，一波針對旅館與公共 Wi-Fi 的攻擊源自俄羅斯 SVR 相關的 Storm-2945（隸屬 Midnight Blizzard）。自 2026 年 5 月起，攻擊者操弄旅館／公共 Wi-Fi 的 DNS 設定與 HTTP 流量，把使用者導向假更新頁、以 ClickFix 手法誘導下載並執行惡意程式，投放三件工具：CornFlake（Windows 遠端存取木馬）、ChocoShell（PowerShell 竊密工具）、FruitStone（管理攻擊的網頁控制台），可側錄鍵盤、擷取畫面、竊取瀏覽器 cookie／密碼、Microsoft 365 登入權杖與 Wi-Fi 憑證。更棘手的是自 7 月起，該組織開始濫用 Microsoft **裝置代碼（Device Code）登入流程**：誘導受害者在正版微軟登入頁輸入攻擊者提供的驗證碼，藉此取得 OAuth 權杖、直接接管 M365 帳號。這類手法繞過「只防釣魚網址」的直覺，因為受害者操作的是真正的微軟頁面。

> 註：本期原定的 Reddit 社群來源（r/cybersecurity、r/netsec、r/blueteamsec）同前幾期一樣無法取得——搜尋工具對 reddit.com 的抓取被導向維基百科與求職頁等非討論串內容，並非該站本週無討論。社群視角本期改以廠商研究（Microsoft、Elastic、Palo Alto Unit 42）、CISA KEV 通報與媒體報導填補。

## 防禦與偵測

1. **[SANS ISC 8 月 7 日 Handler Diary：Linux Shell 鑑識——用 Atuin 補齊 .bash_history 的先天缺口](https://isc.sans.edu/diary/33226)**
   - 資深值班分析師 Xavier Mertens 於 8 月 7 日撰文，切入一個藍隊常忽略的鑑識盲點：傳統 shell 歷史（如 `~/.bash_history`）先天不可靠——命令先存在記憶體、要等 shell 結束才寫檔，預設不帶時間戳、容易被竄改、還受檔案大小上限而丟棄舊紀錄，事故調查時往往缺角。文章介紹以 **Atuin ＋ SQLite** 取代平面歷史檔的做法：每一筆命令都記下奈秒級時間戳、工作目錄、離開碼、執行時長、工作階段 ID 與主機名，大幅擴充可調查的維度。鑑識時要注意的證據位置：`~/.local/share/atuin/history.db`（主資料庫）、`.db-wal`（尚未寫入的紀錄、對還原很關鍵）、`~/.config/atuin/config.toml`（可看出同步目標與過濾規則）。實務要點：檢查以 `deleted_at` 標記的「軟刪除」紀錄（常可用 SQLite carving 還原）、比對標準歷史檔與 Atuin 資料庫、確認同步設定（端到端加密的歷史可能存在遠端）、並審視 `history_filter` 正規表示式——缺席的命令可能是被刻意過濾掉、而非未執行。這條對事後鑑識與威脅獵捕都是可直接落地的加固方向。

2. **對抗本期「開發與管理平面被連環打 ＋ 供應鏈蠕蟲」的收斂作法。** TeamCity、Langflow、Tomcat、N-central 與 ChainDrop 的共通點，是攻擊者鎖定了平時被當作「內部信任、疏於收斂」的建置系統、AI 平台、應用伺服器、RMM 主控台與套件供應鏈。三個不必等完整修補窗口就能先做的動作：一是盤點所有管理與建置介面（CI/CD 主機、RMM／遠端維運主控台、應用伺服器管理埠、AI 應用平台）是否對網際網路或過廣的內網開放，能收斂就先收到跳板機或管理專網；二是把 **CI/CD 與套件供應鏈的憑證**（npm／套件發布權杖、部署金鑰、服務帳號）列為輪換與最小權限的優先對象，改用短時效、綁定來源的權杖，並對 preinstall 這類安裝期腳本與建置環境的異常對外連線建立告警；三是把弱點排序改成「已列入 KEV → CVSS 高 → EPSS 參考」，本期尤其別漏掉 EPSS 81% 的 Tomcat CVE-2026-34486 與已在野利用但 EPSS 偏低的 TeamCity、N-central。

## 台灣在地動態

1. **[iThome 8/4 資安日報：Google 同步通行密鑰被找出弱點，研究人員揭露三種竊取私密金鑰手法](https://www.ithome.com.tw/news/177859)**
   - Palo Alto Networks 旗下 Unit 42 揭露 Google 同步通行密鑰（synced passkeys）的三種攻擊手法：攻擊者可冒充受信任裝置登入受通行密鑰保護的第三方服務帳號、可把自控的使用者驗證金鑰（UV Key）註冊到 Google Cloud Authenticator、甚至取得保護同步通行密鑰的主金鑰。研究鎖定「配備 TPM、使用 Chrome 與 Google Password Manager 的 Windows 裝置」，**前提是裝置已先遭惡意程式入侵**。影響最大的 Golden Pass-ta-key 攻擊會操控 Chrome 本機的通行密鑰狀態、迫使 Chrome 重跑裝置註冊流程，進而取出該 Google 帳號既有與後續建立的同步通行密鑰對應私密金鑰。要點是：通行密鑰仍比密碼安全，但這份研究提醒「端點一旦被入侵，連通行密鑰的同步私鑰也可能外洩」，端點防護仍是無密碼登入的地基。
   - 指標：本條為攻擊研究、非單一 CVE，未對應 KEV／EPSS 分數。

2. **iThome 本週資安日報也以在地管道報導了兩起本報前段已深入分析的國際事件**——8/3 頭條為 [Microsoft 確認旅館 Wi-Fi 攻擊源自俄羅斯駭客、鎖定企業旅客竊取 M365 憑證](https://www.ithome.com.tw/news/177813)（詳見本報「攻擊趨勢與事件」第 2 條）、以及 keyv 供應鏈攻擊事故 ChainDrop 的蠕蟲行為分析（微軟威脅情報指出蠕蟲會依受害電腦是開發工作站或 CI/CD 系統採取不同行為，詳見「攻擊趨勢與事件」第 1 條）。另值得留意的產業動態是趨勢科技於 8 月 4 日 Black Hat AI Summit 邀 Anthropic、Nvidia、AWS 共談 AI 平台、雲端基礎設施與威脅情資融合的必要性。本週未見以台灣本地企業或機構為主體的新增重大資安事故，故本段以在地媒體對國際事件的報導與產業動態為主，不硬湊本地受害案例。

## 對 Simon 工作的影響評估

1. **開發／管理平面連環進 KEV ＋ CI/CD 供應鏈蠕蟲 — 這是本期你最該優先盤點的一類**
   你負責伺服器與機房管理、資訊安全治理，本期五個 KEV 條目與 ChainDrop 蠕蟲都命中「建置系統、應用伺服器與管理主控台被免驗證接管或當供應鏈跳板」的情境。立刻可做的盤點：公司是否自架 JetBrains TeamCity（若有，CVE-2026-63077 是 CVSS 9.8 免驗證 RCE、CISA 修補期 8/8 已過，屬零時差節奏排緊急變更）、是否有對外或跨區可達的 Apache Tomcat（CVE-2026-34486 的 EPSS 已達 81%、且被 AI 輔助武器化，即使 4 月的修補已釋出也要確認是否漏更）、以及內部或委外的 npm／JavaScript 建置管線是否用到 keyv／cacheable 等受汙染套件。特別提醒：本期 TeamCity 與 N-central 的 EPSS 都偏低（1.01%／4.10%／0.49%），若你的弱點管理仍以單一分數門檻篩選就會延後它們，但它們都已在野利用——把 KEV 當硬性優先訊號。這牽涉你職責中的資產管理與身分存取控制。

2. **N-able N-central 與「管理平面」被打 — 直接餵進你正在做的 ISO 27001 BIA**
   你目前手上進行中的 ISO 27001 BIA 正在盤點哪些系統會影響營運、逐一定 RTO／RPO，本期很適合把「管理與維運主控台」明確列為一類高衝擊資產。N-central 是 RMM 平台、被接管等於一次掌握大量受管主機；同理，公司內用來集中管理伺服器、備份、端點或網路設備的任何主控台（含你負責的 Veeam 備份管理面、AD／身分系統、遠端維運工具），都應在 BIA 裡標為「一旦被接管、衝擊面遠大於單一主機」的節點，並對應更嚴格的存取控制與復原目標。這也連到你職責中的備份備援——管理平面若被入侵，備份的完整性與可還原性都要重新驗證。

3. **Storm-2945 公共 Wi-Fi 竊取 M365 憑證 ＋ 通行密鑰可被取出私鑰 — 身分存取與端點的雙重提醒**
   你負責身分與存取控制、端點管理，本週兩條都直接相關。一是俄羅斯 Storm-2945 藉旅館／公共 Wi-Fi 竊取 Microsoft 365 權杖、並濫用裝置代碼（Device Code）登入流程繞過釣魚偵測：如果公司用 Microsoft 365／Entra ID，建議檢查是否可在條件式存取（Conditional Access）中限制或封鎖 Device Code 流程、對商務出差者加強「別在公共 Wi-Fi 連內部服務、慎防假更新頁」的提醒。二是 Unit 42 的通行密鑰研究提醒——無密碼登入的安全前提仍是端點乾淨；把端點惡意程式防護與異常登入偵測顧好，才談得上通行密鑰的價值。

4. **AI 加速漏洞武器化 ＋ Linux 容器逃逸 — 伺服器與弱點管理的節奏要再收緊**
   本期 Tomcat CVE-2026-34486 被借 DeepSeek 與 Hermes Agent 框架武器化，是「攻擊者用 AI 縮短從揭露到利用的時間」的具體案例；同時 SCTPhantom（CVE-2026-64564）雖尚無在野利用，卻是一個影響幾乎所有 Linux 版本、可容器逃逸的核心漏洞。對你負責的伺服器與機房管理，這兩條合起來的訊號是：修補窗口正在被壓縮，尤其是對外可達的應用伺服器與跑容器的 Linux 主機。建議把「已在野利用或高 EPSS」的條目排進緊急修補、把 SCTPhantom 這類已釋出修補的核心漏洞納入常規核心更新排程，別讓「尚未被利用」變成延後的理由——它的容器逃逸影響面夠大。
