---
title: "資安週報 2026-09-07"
date: 2026-09-07
type: weekly-intel
issue: "W17"
cover_range: "2026-08-31 ~ 2026-09-06"
tags:
  - 資安週報
  - kev
  - credential-theft
  - zero-day
  - supply-chain
  - cloud-security
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "CISA 本週兩批列管：9/2 一次新增七個已遭利用漏洞（JFrog Artifactory 免驗證繞過 CVE-2026-82329，CVSS 9.8、EPSS 7.67%、遭用於產生管理權杖；SonicWall SMA1000 SSRF CVE-2026-83548，CVSS 10.0；Kestra CVE-2026-49869，CVSS 10.0、投遞反向 shell 與挖礦程式；Starlette 走私 CVE-2026-48710，EPSS 36.26% 為本期最高），9/4 再加 Chrome V8 零日 CVE-2026-85046（CVSS 8.8、實際遭利用、聯邦機關限 9/18 前修補）"
  - "本週主線是『開發者與雲端基礎設施的憑證／權杖竊取』集中爆發：JFrog Artifactory 產管理權杖、LiteLLM 任意 Bearer 權杖 CVE-2026-59822、JetBrains Cadence 經未修補的 TeamCity 被抽走 AWS 憑證、Langflow 漏洞遭用於竊取 OpenAI 與 AWS 金鑰，台灣雲端平臺 Zeabur 也因高權限 AWS 管理憑證外流而外洩（駭客宣稱竊得約 612 GB）"
  - "網路與邊界設備續爆重大漏洞：Cisco Nexus 9000 資料中心交換器 CVE-2026-20212（CVSS 9.8、免驗證即可用 root 遠端執行程式碼、已有修補、尚無在野利用）；Citrix NetScaler 另一個免驗證繞過 CVE-2026-19490 於 9/3 開始遭在野利用（承 W16 的 NetScaler 主題、但本週是不同的漏洞）"
tldr: "本週最清楚的主線是『開發者與雲端基礎設施的憑證與權杖竊取』集中爆發——JFrog Artifactory（9.8）產管理權杖、LiteLLM 任意 Bearer 權杖、TeamCity 遭入侵抽走 AWS 憑證、Langflow 竊 OpenAI/AWS 金鑰，台灣 Zeabur 也因高權限 AWS 憑證外流而外洩；同時 CISA 9/2 一次列管七個已遭利用漏洞、9/4 再加 Chrome V8 零日，邊界設備（SonicWall SMA1000 10.0、Citrix NetScaler 免驗證繞過）與資料中心交換器（Cisco Nexus 9000 免驗證 root RCE）也持續受壓。整體嚴重程度判為高。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W17 — 2026-09-07

> 涵蓋範圍：2026-08-31 ~ 2026-09-06

## 本週重點摘要

本週最清楚的一條主線是「開發者與雲端基礎設施的憑證與權杖竊取」集中爆發。多個事件指向同一種攻擊價值：不打應用本身，而是奪取能橫向擴散的存取權杖或雲端管理憑證——JFrog Artifactory 的免驗證繞過（CVE-2026-82329、CVSS 9.8）被用來產生管理權杖並列舉憑證與拓撲、LiteLLM 的驗證缺陷（CVE-2026-59822）可任意送出 Bearer 權杖、JetBrains 內部服務 Cadence 經未修補的 TeamCity 遭入侵並被抽走 AWS 憑證、Langflow 漏洞遭用於竊取 OpenAI 與 AWS 金鑰，台灣雲端部署平臺 Zeabur 更因內部高權限 AWS 管理憑證外流而外洩（駭客論壇宣稱竊得約 612 GB 客戶資料）。第二條主線是 CISA 本週密集列管與邊界資產受壓：9 月 2 日一次新增七個已遭利用漏洞（含 SonicWall SMA1000 的 SSRF、Kestra 的作業系統命令注入兩個 CVSS 10.0，以及 EPSS 高達 36.26% 的 Starlette 走私漏洞），9 月 4 日再把實際遭利用的 Chrome V8 零日 CVE-2026-85046 列入、命聯邦機關限 9 月 18 日前修補；同時資料中心核心設備 Cisco Nexus 9000 出現免驗證即可 root 遠端執行程式碼的漏洞（CVE-2026-20212、CVSS 9.8），Citrix NetScaler 也有另一個免驗證繞過（CVE-2026-19490）於本週開始被在野利用。防禦面上，偵測工程社群本週剛好示範了這股風險的另一面——即便導入 AI 輔助的資安維運，前沿模型在複雜供應鏈事故的判讀正確率仍偏低，且 Windows 事件追蹤（ETW）遙測可被偽造來騙過端點防護。整體嚴重程度判為高。

## 重大漏洞與威脅

1. **[CISA 9/2 一次列管七個已遭利用漏洞，JFrog Artifactory 免驗證繞過遭用於產生管理權杖](https://www.cisa.gov/news-events/alerts/2026/09/02/cisa-adds-seven-known-exploited-vulnerabilities-catalog)**
   - CISA 於 9 月 2 日一口氣把七個**已有在野利用證據**的漏洞列入已知遭利用漏洞（KEV）清單（[The Hacker News 整理](https://thehackernews.com/2026/09/cisa-adds-seven-exploited-flaws-as.html)）。本批最該優先的是 **JFrog Artifactory 的免驗證繞過 CVE-2026-82329（CVSS 9.8）**：攻擊者藉此取得管理權限、產生管理權杖，並讀取憑證、聯邦式拓撲與使用者／群組設定作為後續攻擊跳板——Artifactory 常是企業軟體建置與製品（artifact）的中樞，一旦被接管等於掌握內部發布鏈。其餘六個各有威脅：**SonicWall SMA1000 SSRF CVE-2026-83548（CVSS 10.0）**可讓未驗證攻擊者存取敏感功能、搭配同批的命令注入 **CVE-2026-83549（CVSS 7.8、需驗證）**可執行系統指令；**Kestra OSS 命令注入 CVE-2026-49869（CVSS 10.0）**被用來投遞反向 shell、安裝挖礦程式並探查 Docker；**Sangoma Switchvox SQL 注入 CVE-2026-9586（CVSS 9.3、EPSS 11.85%）**可操弄資料庫並導致遠端執行程式碼；**Starlette HTTP 走私 CVE-2026-48710（CVSS 6.5、EPSS 36.26%，本期最高）**可繞過驗證；**LiteLLM 驗證缺陷 CVE-2026-59822（CVSS 8.8）**可任意送出 Bearer 權杖。用到上述任一元件的環境應立即比對版本並排補。
   - 指標（CVE-2026-82329，JFrog Artifactory）：CVSS 9.8｜EPSS 7.67%（依 2026-09-06 查詢）｜KEV：已列入（2026-09-02）
   - 指標（CVE-2026-83548，SonicWall SMA1000）：CVSS 10.0｜EPSS 0.71%（依 2026-09-06 查詢）｜KEV：已列入（2026-09-02）
   - 指標（CVE-2026-49869，Kestra OSS）：CVSS 10.0｜EPSS 1.92%（依 2026-09-06 查詢）｜KEV：已列入（2026-09-02）
   - 指標（CVE-2026-9586，Sangoma Switchvox）：CVSS 9.3｜EPSS 11.85%（依 2026-09-06 查詢）｜KEV：已列入（2026-09-02）
   - 指標（CVE-2026-48710，Starlette）：CVSS 6.5｜EPSS 36.26%（依 2026-09-06 查詢）｜KEV：已列入（2026-09-02）
   - 指標（CVE-2026-59822，LiteLLM）：CVSS 8.8｜EPSS 0.87%（依 2026-09-06 查詢）｜KEV：已列入（2026-09-02）

2. **[Google 修補實際遭利用的 Chrome V8 零日 CVE-2026-85046，9/4 進 KEV、聯邦限 9/18 前修補](https://thehackernews.com/2026/09/google-releases-chrome-update-to-patch.html)**
   - CVE-2026-85046 是 Chrome **V8 JavaScript／WebAssembly 引擎**的型別混淆（type confusion）漏洞、CVSS 8.8：一個帶有 `PACKED_ELEMENTS` 的陣列被指派了錯誤的 map，可被轉成對 JavaScript 堆積（heap）的任意讀寫，遠端攻擊者只要誘使受害者開啟特製網頁，即可在沙箱內執行任意程式碼。Google 證實它**已在野遭利用**（屬零日），由研究者 Salvatore Gulizia 通報。修補版本為 Windows／macOS 的 152.0.7977.82／.83 與 Linux 的 152.0.7977.82；CISA 於 9 月 4 日列入 KEV、命聯邦機關限 **9 月 18 日**前修補。這是 Google 自 2026 年初以來處理的第六個 Chrome 零日，端點與資產管理面應盡快確認瀏覽器已自動更新到位。
   - 指標（CVE-2026-85046）：CVSS 8.8｜EPSS 1.16%（依 2026-09-06 查詢）｜KEV：已列入（2026-09-04）

3. **[Cisco Nexus 9000 資料中心交換器 CVE-2026-20212：免驗證即可 root 遠端執行程式碼](https://thehackernews.com/2026/09/critical-cisco-nexus-9000-flaw-lets.html)**
   - CVE-2026-20212（CVSS 9.8）出在部分以 Silicon One 為基礎的 **Nexus 9000 系列交換器**：因服務綁定到不受限的 IP 位址，使 TCP 通訊埠 43210 與 43211 對外可達，未驗證的遠端攻擊者可直接連入、送出特製輸入並**以 root 權限執行程式碼**，也可能造成 S1HAL 程序崩潰並重載設備。受影響為執行 NX-OS 10.3(1) 至 10.6(3s) 的十款機型。Cisco 表示截至揭露時**尚無已知惡意利用**、修補已釋出，並提供臨時緩解（基礎架構存取控制清單、Live Protect）。資料中心核心交換器一旦被打穿，等於攻擊者站上內網骨幹，機房設備的韌體版本盤點與存取面收斂應排入優先。
   - 指標（CVE-2026-20212）：CVSS 9.8｜EPSS 0.53%（依 2026-09-06 查詢）｜KEV：未列入（尚無在野利用跡象）

4. **[Citrix NetScaler 另一個免驗證繞過 CVE-2026-19490 本週開始遭在野利用（承 W16、本週為不同漏洞）](https://www.bleepingcomputer.com/news/security/hackers-target-critical-citrix-netscaler-auth-bypass-in-attacks/)**
   - **與 W16 的關係要先講清楚**：上一期本報寫的是 NetScaler 記憶體溢位 CVE-2026-8452（已進 KEV、可 root RCE）；本週遭利用的是**另一個**重大等級的**免驗證繞過 CVE-2026-19490**，屬同一產品家族但不同漏洞。BleepingComputer 報導，9 月 3 日有一具 NetScaler 感測器收到與概念驗證（PoC）相符的請求，來源分別位於澳洲、美國與德國三個不同 IP，顯示已進入實際利用階段。NetScaler 長期被當成對外遠端存取／VPN 閘道，兩個漏洞接連被打，代表這類邊界設備正處於攻擊者的集中火力下，用到 NetScaler 的環境應同時確認這兩個漏洞的修補狀態、並回查存取記錄。
   - 指標（CVE-2026-19490）：CVSS：廠商評為重大（Critical）、NVD 分數查無｜EPSS 3.37%（依 2026-09-06 查詢）｜KEV：未列入

> 本期排序延續既有原則：**已列入 KEV → 再看 CVSS 嚴重度 → EPSS 作為被利用機率參考**。三個對照值得記住：一是 **JFrog Artifactory（CVE-2026-82329）**已列 KEV、CVSS 9.8、EPSS 7.67%、又直接掌握內部發布鏈，是本期最該最先處理的一條；二是 **Starlette（CVE-2026-48710）EPSS 高達 36.26%**——雖然 CVSS 只有 6.5，但被自動化大規模掃打的機率是本期最高，別只看嚴重度就把中分漏洞往後排；三是 **Cisco Nexus 9000（CVE-2026-20212）與 Citrix NetScaler（CVE-2026-19490）目前都尚未進 KEV**，但一個是免驗證 root RCE 的機房核心設備、一個已有在野利用跡象，「未進 KEV」不代表可延後，資產所在位置（對外／核心）本身就是排序依據。

## 攻擊趨勢與事件

1. **[BGP 劫持鎖定 Virtualizor，攻擊者以假 TLS 憑證架設複製站散布惡意更新（Risky Bulletin、2026-09-02）](https://news.risky.biz/risky-bulletin-bgp-hijack-targets-virtualizor-to-deliver-malicious-updates/)**
   - Risky Business Media 於 9 月 2 日報導，一名不明攻擊者在 8 月 28 日至 30 日間**劫持 BGP 路由約 33 小時**，把原本要送往 Softaculous IP 位址段（承載 Virtualizor 虛擬主機管理系統）的流量導向自己。攻擊者取得一張**偽造的 TLS 憑證**、架設複製網站，向 Virtualizor 使用者（多為管理虛擬私人伺服器的主機商）散布惡意更新。由於被劫流量完全繞過 Virtualizor 自家基礎架構，該公司無法確認受害人數，並警告在攻擊期間付款的客戶財務資料很可能已外洩；官方未歸因特定組織。這條的提醒是：路由層（BGP）本身可被當成供應鏈攻擊的入口，連「更新來源看起來憑證有效」都不足以完全信任——軟體更新應搭配發布方的簽章驗證，而非只靠傳輸層加密。

2. **[美國司法部瓦解中國民營公司經營的 QScan／QTRouter 殭屍網路（Srsly Risky Biz、2026-09-03）](https://news.risky.biz/srsly-risky-biz-chinas-private-sector-botnets-are-worth-disrupting/)**
   - Risky Business Media 於 9 月 3 日分析，美國司法部瓦解了 **QScan** 與 **QTRouter**——由民營企業「南京新九維網路科技（Nanjing Xinjiuwei Network Technology）」為中國國家機關經營的系統元件。QScan 負責漏洞掃描、物色可納入殭屍網路的物聯網（IoT）設備；QTRouter 則透過被入侵的設備轉送流量、**混淆流量的中國來源**。這類殭屍網路長期支援對美國聯邦機關、參議院與民間單位的持續性間諜活動。分析強調即便被瓦解，中國這套「由商業基礎設施承載」的模式仍難以根除——過往有殭屍網路運作長達 4.5 年、後繼網路持續擴張。對防守方的可轉移意義是：邊緣物聯網設備（路由器、攝影機、NAS）長期是這類網路的補給來源，把這些「不常被盤點」的設備納入修補與汰換排程，才是斷源之道。

3. **[雲端與開發鏈的憑證竊取潮：JetBrains Cadence 經未修補 TeamCity 遭入侵、AWS 憑證被抽走，Langflow 漏洞遭用於竊取 OpenAI／AWS 金鑰](https://thehackernews.com/2026/09/attackers-breached-jetbrains-cadence.html)**
   - 本週有數起事件共同勾勒出「攻擊者專挑開發與雲端基礎設施的憑證下手」這條趨勢。The Hacker News 報導，攻擊者透過一臺**未修補的 TeamCity** 入侵 JetBrains 的內部服務 Cadence、抽走 AWS 憑證；另有攻擊者利用 **Langflow** 的重大漏洞在憑證探測與命令控制（C2）活動中[竊取 OpenAI 與 AWS 金鑰](https://thehackernews.com/2026/09/attackers-exploit-critical-langflow-and.html)。把這條和「重大漏洞」段的 JFrog Artifactory（產管理權杖）、LiteLLM（任意 Bearer 權杖）以及下方台灣段的 Zeabur（高權限 AWS 憑證外流）併看，訊號很一致：2026 年 9 月這一波的核心不是加密勒索，而是**奪取能橫向擴散的雲端與服務存取權杖**。可轉移的防禦是把長期存在的高權限雲端憑證與服務權杖視為首要風險，落實輪替、最小權限與生命週期管理，並監控建置流程與內部工具的異常憑證存取。

## 防禦與偵測

1. **[Detection Engineering Weekly #169（2026-09-03）：AI 輔助資安維運的判讀落差，與被偽造的 ETW 遙測](https://www.detectionengineering.net/p/dew-169-realistic-ai-soc-evaluation)**
   - 本期偵測工程週報最值得藍隊留意的有三點。一是 **AI 資安維運（SOC）評測**：一套端到端的入侵情境不只量測告警的真陽／假陽分類，更看調查報告的品質與可行動性；在一個結合 GitHub Actions 污染、Kubernetes 淪陷與 AWS 提權的複雜供應鏈攻擊情境中，前沿模型 Claude Opus 5 的判讀正確率僅 **29%**，凸顯「把告警判讀交給 AI」目前仍有明顯落差。二是 **ETW 遙測偽造**（Olaf Hartong）：在缺乏妥善驗證時，合成的 Windows 事件追蹤（ETW）事件可以騙過 Microsoft Defender——提醒偵測管線需要「攻擊到告警」的完整端到端測試，才不會被偽造的遙測蒙蔽。三是 **PaperCut RCE 的偵測機會**（Threat Road）：針對正在被利用的 PaperCut 攻擊鏈（對外暴露的伺服器、授權前的設定變更、反序列化 RCE 三個條件），提供了以日誌為基礎的具體偵測建議。
   - 落地作法：AI 告警判讀可輔助但不可全信，關鍵事故仍需人為覆核；針對端點防護的遙測偽造，需補上「攻擊到告警」的完整驗證與行為關聯，而非只信任單一遙測來源。

2. **[SANS ISC 值班日誌：SonicWall SMA1000 零日修補與 SSRF 驗證問題，AI 代理過度信任 Git 內容（2026-09-03 前後）](https://isc.sans.edu/podcastdetail/10080)**
   - SANS ISC 於 9 月 3 日的值班摘要涵蓋 **SonicWall SMA1000 的零日修補、SSRF 驗證問題與 Faronics 濫用**——與 CISA 本週把 SMA1000 兩個漏洞列入 KEV 相互呼應；SSRF 之所以危險，是因為攻擊者可拿前端網頁伺服器當代理去存取內部 API，讓內部 API 誤以為請求來自自己而繞過驗證。同一週 SANS ISC 另有兩則值得一提：一是測試的**八個 AI 代理全數會信任從網際網路取得的內容**（例如自動複製或下載的 Git 儲存庫），八個中已有四個修正——提醒導入 AI 代理時應把外部取得的程式碼與內容當成不受信任來源治理；二是 8 月 31 日分析的 **Guildma（Astaroth）惡意程式**以巴西葡萄牙文郵件投遞、連結經地理圍籬（geofencing）限定只對巴西 IP 送出惡意程式、其餘送正常安裝檔，顯示針對性投遞越來越精細、單看樣本容易誤判為無害。

## 台灣在地動態

1. **[台灣雲端平臺 Zeabur 資料外洩：高權限 AWS 管理憑證失守，駭客宣稱竊得約 612 GB](https://www.ithome.com.tw/news/178540)**
   - iThome 報導，台灣雲端部署平臺 **Zeabur** 於 8 月 28 日察覺環境變數外洩事故，導致部分用戶的 AI 服務用量突然暴增。經調查，攻擊者是取得該公司**內部 AWS 管理憑證**後，存取位於東京的共享 AWS 叢集，再透過 VPN 進入控制臺網路環境並連上主要資料庫（[Zeabur 說明](https://www.ithome.com.tw/news/178543)）。8 月 29 日暗網情報平臺指出有人在駭客論壇聲稱竊得原始碼、雲端憑證與約 612 GB 客戶資料庫；Zeabur 則表示，依系統記錄與觀察到的攻擊者活動，尚未找到攻擊者取得完整資料集的證據。凡在 Zeabur 存放 OpenAI、Anthropic、OpenRouter 等第三方 API 金鑰的用戶，應依官方指引**輪替金鑰並檢查用量與帳單**。這起事件是本週「雲端管理憑證失守即全盤皆輸」最貼近台灣的案例。

2. **[Langflow 重大漏洞遭用於竊取 OpenAI 與 AWS 金鑰](https://www.ithome.com.tw/news/178706)**
   - iThome 報導，開源 AI 流程建構工具 **Langflow** 的重大漏洞遭攻擊者用於竊取 OpenAI 與 AWS 金鑰，屬於本週「AI 與雲端開發工具成為金鑰竊取入口」趨勢的一環。凡在內部自架 Langflow、n8n 這類低程式碼／AI 編排工具的組織，應確認版本、限制對外暴露面，並把工具內保存的第三方服務金鑰改以最小權限、可輪替的方式管理，別把長期有效的高權限金鑰直接塞在流程節點裡。

3. **[PaperCut 列印管理零日遭實際攻擊，全球仍有近 200 臺未修補（截至 8/31）](https://www.ithome.com.tw/news/178716)**
   - 依 iThome 資安週報（0831~0904）整理，列印管理軟體 **PaperCut** 遭零日漏洞實際攻擊、廠商三度釋出緊急更新，但截至 8 月 31 日全球仍有近 200 臺系統未修補；遭利用漏洞為 CVE-2026-82078 與 CVE-2026-81578，被用於產生偽裝的管理員權杖。PaperCut 常對內部網路開放、又持有帳號與列印稽核資料，企業若有部署應確認已套用最新緊急更新並收斂對外可達面。

## 對 Simon 工作的影響評估

1. **資料中心核心網路與對外存取設備是本期最該先盤點的一類資產**
   你負責伺服器與機房管理，本期最直接命中機房的是 **Cisco Nexus 9000 CVE-2026-20212**：免驗證即可用 root 遠端執行程式碼、影響 NX-OS 10.3(1)–10.6(3s)。若機房核心／匯聚層用到受影響的 Nexus 9000 機型，請優先確認 NX-OS 版本並排補，臨時可用基礎架構存取控制清單擋住 TCP 43210／43211。同一類還有兩個對外邊界設備要一起看：**SonicWall SMA1000**（CVE-2026-83548 SSRF、CVSS 10.0，已進 KEV）與 **Citrix NetScaler**（CVE-2026-19490 免驗證繞過、本週開始被在野利用，加上 W16 的 CVE-2026-8452）——這類遠端存取閘道被打穿等於直接落地內網，若公司用到請確認版本與修補、並回查存取記錄。

2. **端點與瀏覽器修補：Chrome V8 零日已實際遭利用、有明確期限**
   Chrome V8 零日 **CVE-2026-85046** 已在野遭利用、CISA 命聯邦機關 9 月 18 日前修補。落到你的端點與資產管理：確認公司瀏覽器已更新到 Chrome 152.0.7977.82／.83（Linux 為 .82）以上，特別是關掉自動更新或用受管映像的機器。這裡不是要你重啟已評估不採購的端點管理工具，而是用既有的更新派送或群組原則機制，把「零日已修補」這件事做到可稽核的覆蓋率。

3. **憑證與雲端金鑰治理，正好餵進進行中的 ISO 27001 BIA**
   本週最強的訊號是「奪取雲端與服務存取權杖」：台灣 Zeabur 因高權限 AWS 管理憑證外流而外洩、JFrog Artifactory 被用來產管理權杖、JetBrains 經 TeamCity 被抽走 AWS 憑證、Langflow 竊 OpenAI／AWS 金鑰。你正在做的 **ISO 27001 業務營運衝擊分析（BIA）**很適合把「雲端與第三方憑證」明確納入盤點：哪些營運系統依賴外部雲端或 SaaS、誰持有高權限雲端／服務管理憑證、這些憑證是否輪替、是否最小權限、是否有長期有效的金鑰散落在 CI／CD 或內部工具裡。這條也回扣你的身分與存取控制職責——管理員與服務帳號的權限收斂、金鑰生命週期管理，是本週事件反覆佐證的加固順位。

4. **供應鏈與偵測基線：把 IST 導入與新上線的 SFTP 一起收緊，別過度信任自動化告警**
   供應鏈面本週有兩條可餵進 BIA：一是 **BGP 劫持 Virtualizor**（供應商流量被劫、以假 TLS 憑證散布惡意更新）提醒「更新來源看似憑證有效也不能全信」，軟體更新應要求發布方簽章驗證；二是 **Clop 勒索集團持續打 PTC Windchill／FlexPLM**（CVE-2026-12569、CVSS 9.3、EPSS 高達 40.59%、自 6 月 25 日即在 KEV），已點名的四十多個受害者中包含**光電同業大立光（Largan Precision）**——PLM 與工程資料系統是製造業的高價目標，若公司有對外可達的 PLM／工程資料平臺，屬需要特別盤點的一類（此為 6 月起延燒的活動、非本週新爆，但與你的產業直接相關）。偵測面上，你進行中的 **IST 導入**還在測試階段、8 月 18 日剛上線的**公司 SFTP** 也還新，建議趁測試與磨合期就把資安基線與偵測納入驗收（對外暴露面、預設帳密、存取授權、是否納入既有修補與備份排程、關鍵行為有沒有進日誌與告警）；本週 DEW #169 顯示 AI 輔助的告警判讀正確率偏低、ETW 遙測也可被偽造，提醒別把自動化告警當成唯一防線，要補上行為關聯與出向（egress）連線的基線化監控。
