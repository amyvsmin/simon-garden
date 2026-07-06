---
title: "資安週報 2026-07-06"
date: 2026-07-06
type: weekly-intel
issue: "W08"
cover_range: "2026-06-29 ~ 2026-07-05"
tags:
  - 資安週報
  - ransomware
  - credential-theft
  - actively-exploited
  - ai-threat
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "邊界與應用伺服器漏洞本週集中爆發且多帶緊迫修補期限：Citrix 6 月 30 日緊急修補 6 個 NetScaler 漏洞，其中類 CitrixBleed 的 SAML 記憶體越界讀取 CVE-2026-8451（CVSS 8.8、未驗證即可外洩含 session 權杖的記憶體片段）由 watchTowr 揭露後，Lupovis 在公開不到 24 小時內就在誘捕系統上捕獲完整攻擊酬載；Adobe 7 月 1 日一口氣修補 ColdFusion 與 Campaign Classic 共 7 個 CVSS 10.0 的任意程式碼執行漏洞（列為優先級 1）；微軟 SharePoint 反序列化 RCE CVE-2026-45659（CVSS 8.8）遭 Storm-2603 用於投放 Warlock 勒索軟體，CISA 於 7 月 2 日列入 KEV、勒令 7 月 4 日前修補"
  - "FortiBleed 憑證竊取行動被正式歸因於勒索軟體管線：SOCRadar 威脅研究團隊比對到攻擊者曾登入 INC 與 Lynx 兩個勒索軟體集團的談判面板，判定這波以自製 FortiGate Sniffer 封包側錄工具、鎖定約 43 萬台 FortiGate、蒐得逾 1.1 億組憑證的行動，已直接導致至少 12 起勒索軟體部署——把『邊界設備憑證外洩』與『勒索軟體加密』之間的因果鏈坐實"
  - "AI 驅動攻擊與台灣在地事件同步升溫：研究者記錄到疑似首宗『全程由大型語言模型代理自動執行』的勒索軟體 JadePuffer，從偵察、竊憑證、橫向移動到加密皆由 AI 代理完成，初始入侵走 Langflow 未驗證 RCE CVE-2025-3248（EPSS 99.97%、已列入 KEV）；台灣則爆出 PChome 旗下拍付國際「Pi 拍錢包」遭 Settra 勒索軟體宣稱竊得 350 萬用戶個資、102 GB 資料，成為台灣第一家遭勒索軟體入侵的第三方支付業者，數位發展部 7 月 1 日進場行政檢查"
tldr: "本週主軸是『邊界與應用伺服器漏洞遭快速武器化、並直接餵給勒索軟體管線』：Citrix NetScaler 類 CitrixBleed 漏洞 24 小時內遭利用、Adobe 修補 7 個 CVSS 10.0 漏洞、SharePoint RCE 遭 Warlock 勒索軟體利用而進 KEV；同時 FortiBleed 憑證竊取被歸因 INC／Lynx 勒索軟體、AI 全自動勒索軟體 JadePuffer 現身、台灣 Pi 拍錢包成首家遭勒索的第三方支付業者。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W08 — 2026-07-06

> 涵蓋範圍：2026-06-29 ~ 2026-07-05

## 本週重點摘要

本週態勢由**邊界與應用伺服器漏洞被快速武器化、並直接接上勒索軟體管線**主導。Citrix 於 6 月 30 日發出緊急公告修補 6 個 NetScaler 漏洞，其中類 CitrixBleed 的 SAML 記憶體越界讀取 CVE-2026-8451（CVSS 8.8）在公開不到 24 小時內就被 Lupovis 於誘捕系統捕獲完整攻擊酬載，凸顯「從公開到被利用」已縮短到以小時計。Adobe 於 7 月 1 日一次修補 ColdFusion 與 Campaign Classic 共 7 個 CVSS 10.0 的任意程式碼執行漏洞、全列優先級 1；微軟 SharePoint 反序列化 RCE CVE-2026-45659 遭 Storm-2603 用於投放 Warlock 勒索軟體，CISA 於 7 月 2 日列入 KEV 並勒令聯邦機構 7 月 4 日前修補。攻擊面則有兩條主軸：其一，FortiBleed 憑證竊取行動被 SOCRadar 歸因於 INC 與 Lynx 勒索軟體集團，坐實「邊界憑證外洩 → 勒索軟體加密」的因果鏈；其二，研究者記錄到疑似首宗全程由大型語言模型代理自動執行的勒索軟體 JadePuffer，把攻擊自動化推進到新階段。台灣在地則爆出 PChome 旗下拍付國際「Pi 拍錢包」遭 Settra 勒索軟體宣稱竊得 350 萬用戶個資，成為台灣第一家遭勒索軟體入侵的第三方支付業者。整體嚴重程度判為高——多個遭實際利用或滿分的漏洞同時帶緊迫修補期限，且直接餵養勒索軟體行動。

## 重大漏洞與威脅

1. **[SharePoint RCE 漏洞 CVE-2026-45659 遭實際利用後列入 CISA KEV](https://thehackernews.com/2026/07/sharepoint-rce-cve-2026-45659-added-to.html)**
   - CVE-2026-45659 是 Microsoft SharePoint Server 的遠端程式碼執行漏洞，根因是對不可信資料的不安全反序列化。微軟已於 2026 年 5 月為 SharePoint Server 訂閱版、2019 版與 Enterprise Server 2016 修補；漏洞可由僅具「網站成員（Site Member）」低權限的已驗證攻擊者觸發、無須管理員權限即遠端執行程式碼。[部分攻擊被歸因於 Storm-2603——自 2025 年中起就慣於利用地端 SharePoint 漏洞投放 Warlock 勒索軟體的組織；CISA 於 7 月 2 日將其列入 KEV，依 BOD 26-04 要求聯邦機構 7 月 4 日前修補](https://www.securityweek.com/cisa-warns-of-actively-exploited-microsoft-sharepoint-vulnerability/)。地端 SharePoint 常承載組織內部文件與協作資料，一旦被接管即為勒索與資料外洩的跳板。
   - 指標：CVSS 8.8｜EPSS 3.22%｜KEV：已列入

2. **[Adobe 修補 ColdFusion 與 Campaign Classic 共 7 個 CVSS 10.0 漏洞](https://www.bleepingcomputer.com/news/security/adobe-patches-seven-max-severity-coldfusion-campaign-flaws/)**
   - Adobe 於 7 月 1 日揭露橫跨 ColdFusion 2023／2025 與地端 Campaign Classic v7 的多個漏洞，其中 7 個為 CVSS 10.0、皆可達成任意程式碼執行，另有 CVE-2026-48313／CVE-2026-48315（CVSS 9.3、路徑穿越與不當輸入驗證）。[代表性漏洞包含 ColdFusion 的 CVE-2026-48276 等，以及 Campaign Classic 的 CVE-2026-48286（CVSS 10.0、不當授權導致遠端程式碼執行）；全部列為優先級 1，Adobe 建議儘速（例如 72 小時內）安裝更新](https://thehackernews.com/2026/07/adobe-patches-7-cvss-100-flaws-in.html)。修補版本為 ColdFusion 2025 Update 10、ColdFusion 2023 Update 21，以及 Campaign Classic v7.4.3 build 9397。ColdFusion 歷來是攻擊者鎖定的高價值地端伺服器，滿分且低複雜度、無須使用者互動的漏洞應比照零時差節奏處理。
   - 指標：CVSS 10.0｜EPSS 0.92%（CVE-2026-48276）／0.71%（CVE-2026-48286）｜KEV：未列入

3. **[Citrix 緊急修補 6 個 NetScaler 漏洞，類 CitrixBleed 的 CVE-2026-8451 24 小時內遭利用](https://thehackernews.com/2026/07/citrix-patches-six-netscaler-flaws.html)**
   - Citrix 於 6 月 30 日發出緊急公告，修補 NetScaler ADC 與 Gateway 的 6 個漏洞（CVE-2026-8451、8452、8655、10816、10817、13474）。其中 [CVE-2026-8451 由 watchTowr 揭露，是設備設定為 SAML 身分提供者（IdP）時、對格式異常 SAML 請求解析所致的記憶體越界讀取——未經驗證的攻擊者可藉此外洩含 session 權杖與憑證在內的記憶體片段，被形容為「CitrixBleed 的延伸」](https://cyberscoop.com/citrix-netscaler-flaw-cve-2026-8451-citrixbleed/)。[Lupovis 觀測到公開不到 24 小時（6 月 30 日至 7 月 1 日）即遭實際利用，攻擊者送出僅由 476 個空格加換行符構成的裸 `samlp:AuthnRequest` 標籤，逼使 XML 解析器讀越緩衝區邊界](https://www.securityweek.com/new-citrixbleed-vulnerability-exploited-immediately-after-public-disclosure/)。修補版本為 NetScaler ADC／Gateway 14.1-72.61 與 13.1-63.18 以上。此類記憶體外洩漏洞的教訓與 CitrixBleed 一致：修補後仍須輪換所有 session 與憑證，否則已外洩的權杖仍可被重放。
   - 指標：CVSS 8.8｜EPSS 0.50%｜KEV：未列入

## 攻擊趨勢與事件

1. **[FortiBleed 憑證竊取行動被歸因於 INC 與 Lynx 勒索軟體](https://www.bleepingcomputer.com/news/security/fortibleed-credential-theft-campaign-linked-to-lynx-ransomware/)（本週新進展）**
   - 上週 iThome 資安週報曾以 FortiBleed 憑證外洩為要聞，本週有了明確歸因與勒索軟體連結。[SOCRadar 威脅研究團隊分析攻擊工件後發現，攻擊者曾登入 INC 與 Lynx 兩個勒索軟體集團的談判面板，判定這波行動直接服務於勒索軟體管線](https://thehackernews.com/2026/07/fortibleed-credential-theft-linked-to.html)。行動以自製的 FortiGate Sniffer 封包側錄工具部署在遭入侵的 FortiGate 防火牆上、直接從網路流量攔截 VPN 憑證與其他認證資料；一台外洩伺服器就含逾 7.3 萬台 Fortinet 設備的憑證，整體評估鎖定約 43 萬台 FortiGate、蒐得逾 1.1 億組憑證，並已造成至少 12 起勒索軟體部署、數百台端點被加密。Lynx 被研究者視為 INC 勒索軟體的改名版本。這條把「邊界設備憑證外洩」與「勒索軟體加密」之間常被低估的因果鏈坐實。

2. **[JadePuffer：疑似首宗全程由 AI 代理自動執行的勒索軟體](https://www.bleepingcomputer.com/news/security/jadepuffer-ransomware-used-ai-agent-to-automate-entire-attack/)**
   - 研究者記錄到疑似首宗全程由大型語言模型代理自動執行的勒索軟體行動 JadePuffer：自主 AI 代理負責對目標偵察、竊取憑證、橫向移動、建立持久化、提權，直到加密資料，幾乎不需人工介入。初始入侵透過 CVE-2025-3248——Langflow（熱門的開源 LLM 應用建構框架）的未驗證遠端程式碼執行漏洞。這代表攻擊自動化的門檻再降：過去需要熟練操作者的整條攻擊鏈，現在可由 AI 代理串起，意味著攻擊速度與規模都可能被放大。防守方應假設「暴露在外的 AI／開發框架端點會被自動化掃描與接管」，並把這類非傳統 IT 資產納入弱點管理。
   - 指標（初始入侵漏洞 CVE-2025-3248）：CVSS 9.8｜EPSS 99.97%｜KEV：已列入

3. **[Mini Shai-Hulud／Miasma 供應鏈蠕蟲持續演化，擴散至 Go 生態](https://thehackernews.com/2026/06/miasma-malware-targets-npm-packages-and.html)**
   - 與 Mini Shai-Hulud、Miasma、Hades 同源的自我傳播供應鏈蠕蟲近期再現新一波，除了 npm 上的 LeoPlatform、RStreams 與 @immobiliarelabs 範圍（含用於 GitLab、LDAP 認證的 Backstage 外掛），也已傳播到 Go 生態。其手法一貫：挾持受信任的開發者基礎設施、發布惡意套件版本、透過 Bun 載入 JavaScript 惡意程式、竊取開發者與 CI／CD 機密再向外擴散；並會投放名為「Run Copilot」的工作流以從執行器記憶體擷取 CI／CD 環境機密，且帶有俄語語系殺手開關與偵測端點防護軟體的檢查。對有自動化建置或會抓取開源套件的組織而言，這類蠕蟲直接威脅建置管線與相依鏈上游。

## 防禦與偵測

1. **[SANS ISC 7 月 1 日 Handler Diary：鎖定 MetaMask 秘密助記詞的釣魚郵件](https://isc.sans.edu/diary/33116)**
   - Xavier Mertens 拆解一封鎖定加密貨幣錢包 MetaMask 的釣魚郵件：攻擊瞄準密碼復原流程——MetaMask 的復原機制建立在帳戶建立時產生的秘密助記詞（secret recovery phrase）之上，一旦使用者被誘導交出助記詞，攻擊者即可完整接管錢包並掏空資產。偵測與防護重點是把「要求輸入助記詞／私鑰」的任何頁面一律視為釣魚，並在郵件閘道與端點層對這類仿冒錢包網域與登陸頁建立告警，別依賴使用者自行辨識。

2. **[Apple「Hide My Email」漏洞可還原匿名別名背後的真實信箱](https://cybersecuritynews.com/apple-hide-my-email-vulnerability/)**
   - 研究者揭露 Apple「Hide My Email」存在一個回報逾一年仍未修補的漏洞：攻擊者可從匿名轉寄別名反推出背後的真實電子郵件地址，且利用門檻極低——產生一組全新轉寄別名後數分鐘內即可取回真實信箱、無須任何特權存取。對防守方的意義在於：依賴別名做為身分區隔或反追蹤的假設可能失效，涉及帳號盤點與資產對應時，不應把「使用者用了匿名別名」當成真實身分無法被關聯的保證。

3. **偵測工程實務：把 SAML IdP 曝險與異常請求納入偵測規則。** 對抗本週的 CVE-2026-8451，除了升級到 NetScaler 14.1-72.61／13.1-63.18 以上，[Lupovis 誘捕系統捕獲的攻擊特徵值得直接轉成偵測規則：來自法蘭克福單一 IP、在約五小時視窗內對 `/saml/login` 端點送出「僅由大量空白字元加換行構成、無屬性也無結束標籤」的畸形 SAML 請求，並只對回應 200 OK 的目標投放酬載](https://labs.watchtowr.com/citrixbleed-to-infinity-and-beyond-citrix-netscaler-pre-auth-memory-overread-cve-2026-8451/)。落地建議有三：一是盤點哪些 NetScaler／閘道對外且設定為 SAML IdP，優先收斂曝險面；二是對 SAML 端點的異常長度、畸形結構請求建立告警；三是修補後強制輪換 session 與憑證，避免已外洩的權杖被重放。這也呼應勒索軟體管線的教訓——先堵住憑證外洩，才能斷開後續加密行動的燃料。

## 台灣在地動態

1. **[勒索軟體 Settra 宣稱竊得 PChome 旗下 Pi 拍錢包 350 萬用戶資料，數發部進場行政檢查](https://www.ithome.com.tw/news/177000)**
   - Settra 勒索軟體集團宣稱入侵 PChome 旗下拍付國際、竊得約 102 GB 檔案，內含 350 萬名 Pi 拍錢包用戶個資、內部系統架構、法遵與稽核文件、人資資料，以及長達 9 年的營運紀錄；拍付國際證實收到勒索。這是台灣第一家遭勒索軟體入侵的第三方支付業者。[數位發展部數位產業署為維護民眾權益，於 7 月 1 日進行實地行政檢查，釐清案情並檢視業者個資保護落實情形](https://www.ithome.com.tw/news/177001)。同期技術焦點另有台灣行動身分識別 MID Plus 接軌 GSMA 國際標準，被視為身分安全領域的進展。此案對台灣讀者的意義在於：金流與大量個資的服務業者一旦遭勒索軟體加密與竊取，衝擊同時落在營運中斷、個資外洩與主管機關檢查三面，凸顯備份備援與事故應變演練不能只停在紙上。

## 對 Simon 工作的影響評估

1. **FortiBleed → INC／Lynx 勒索軟體 ＋ Citrix NetScaler 記憶體外洩 — 邊界憑證外洩到勒索軟體加密的完整鏈條，正是 ISO 27001 BIA 要防的最壞情境**
   這是本週對你最直接的一條。FortiBleed 案坐實了「邊界設備憑證被側錄 → 餵給勒索軟體集團 → 加密內網端點」的因果鏈，而 Citrix NetScaler CVE-2026-8451 又示範了 SAML IdP 記憶體外洩如何在 24 小時內就被拿來偷 session 權杖。你正在做 ISO 27001 的業務營運衝擊分析（BIA），建議把這條鏈直接寫進威脅情境：一是盤點對外的 VPN／閘道／SAML IdP（FortiGate、NetScaler 或同類），確認韌體版本、收斂管理與認證端點曝險；二是修補後強制輪換 VPN 與 session 憑證（記憶體外洩類漏洞光修補不輪換無效），並對高權限帳號補強 MFA；三是在 BIA 裡把「邊界遭入侵後橫向擴散到核心系統」設為情境之一，據此定 RTO／RPO 與備份隔離（離線或不可變備份）需求——因為勒索軟體的第一步往往就是刪除或加密備份。

2. **SharePoint RCE ＋ Adobe ColdFusion 7 個滿分漏洞 — 地端應用伺服器要用 KEV／EPSS 三指標排修補序**
   你負責伺服器與機房管理，本週的地端應用伺服器漏洞值得立即盤點。SharePoint CVE-2026-45659 已遭 Warlock 勒索軟體利用、進了 KEV（CVSS 8.8｜EPSS 3.22%｜已列入），只要低權限帳號就能觸發，屬「先修」等級；Adobe ColdFusion／Campaign Classic 的 7 個 CVSS 10.0 雖尚未列入 KEV、EPSS 也還低（約 0.7–0.9%），但都是無須使用者互動的滿分 RCE、Adobe 自列優先級 1，屬「排進本週緊急變更」等級。這正好示範三指標的分工：CVSS 講嚴重度、EPSS 講被利用機率、KEV 是已被實際利用的實證——盤點公司是否有地端 SharePoint 或 ColdFusion，若有就依「已列 KEV 者最優先、其餘滿分 RCE 次之」排序修補，別只看 CVSS 而漏了 KEV 的實證訊號。

3. **PChome Pi 拍錢包遭勒索軟體 — 一個可直接寫進資安 KPI 月簡報的在地案例**
   台灣首家第三方支付業者遭勒索軟體加密與竊資、還招來數發部進場行政檢查，是一個董事會與主管都看得懂的在地實例。你每月要交的資安 KPI 月簡報（6 月份已於 2026-07-03 交，接下來是 7 月份），可以引用這個案例來佐證備份備援、離線／不可變備份與事故應變演練的投資必要性——用「同產業／同國別、後果同時涵蓋營運中斷＋個資外洩＋主管機關檢查」的真實事件，比抽象論述更有說服力。同時可自查：公司的關鍵系統備份是否與生產環境隔離、是否演練過「備份也被加密」情境下的復原，這兩點正是 ISO 27001 BIA 的 RTO／RPO 要回答的。

4. **JadePuffer AI 全自動勒索軟體 ＋ npm／Go 供應鏈蠕蟲 — 端點防護韌性與軟體相依鏈都要納入資產盤點**
   兩條趨勢指向攻擊自動化與供應鏈上游的風險。JadePuffer 顯示 AI 代理可串起整條攻擊鏈、放大速度與規模，且入侵點是暴露在外的開發／AI 框架（Langflow）；npm／Go 供應鏈蠕蟲則從建置管線與相依套件下手、竊 CI／CD 機密。對你負責的端點與資產管理有兩點落地：其一，把「非傳統 IT 資產」（對外的開發框架、AI 服務、管理介面）也納入資產盤點與弱點掃描，別假設它們安全；其二，若公司內部有自動化或開發流程會抓取 npm／PyPI 套件，應導入相依套件來源驗證與版本鎖定，並對 EDR 做「代理失聯即告警」的防竄改監控——因為 AI 全自動與供應鏈攻擊都傾向先關掉你的偵測、或從你信任的上游下手。
