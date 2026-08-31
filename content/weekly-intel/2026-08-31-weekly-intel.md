---
title: "資安週報 2026-08-31"
date: 2026-08-31
type: weekly-intel
issue: "W16"
cover_range: "2026-08-24 ~ 2026-08-30"
tags:
  - 資安週報
  - kev
  - supply-chain
  - ai-driven-attack
  - identity
  - ransomware
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "Citrix NetScaler 記憶體溢位漏洞 CVE-2026-8452（NVD CVSS 9.8）8/26 正式列入 KEV（W15 已寫、當時尚未列入，本週新進展）：原先廠商 6 月認為只能造成阻斷服務，資安公司 watchTowr 8 月證實成功利用可在未修補主機上取得 root 權限遠端執行程式碼，CISA 命聯邦機關限 8/29 前修補——用 NetScaler 當遠端存取／VPN 閘道的環境屬緊急排修"
  - "身分與平台管理面連環爆重大漏洞：ServiceNow AI 平台一次揭露三個 CVSS 10.0 滿分免驗證漏洞（GraphQL 程式碼注入 CVE-2026-18885、設定影像上傳存取控制不當 CVE-2026-18886、動態結構 ORDER BY SQL 注入 CVE-2026-74820，8/27 公告、全為低攻擊複雜度）；Keycloak 密碼重設繞過 CVE-2026-18963（CVSS 9.1、免驗證、零點擊）可完整接管含管理員帳號；Zimbra 命令注入 CVE-2026-73570（CVSS 8.9、EPSS 20.53%）持續遭在野利用、已波及臺灣 2 臺主機"
  - "本週主線是『供應鏈攻擊 ＋ AI 輔助攻擊工具化』雙軌並進：中國 APT24（BadAudio）入侵臺灣廣告聯播供應鏈、在太報與小說狂人植入指紋蒐集程式（約 8 萬次點擊、76% 來自臺灣）；開源軟體供應鏈蠕蟲集團 TeamPCP 兩名成員在澳洲落網（曾竊得逾 50 萬組憑證）；China-nexus 的 SilkParasite 與 OpenAI 揭露的 Hugging Face AI 代理入侵事故，都顯示 AI 已嵌進攻擊者的惡意程式開發流程"
tldr: "本週兩條主線——一是重大漏洞集中打『邊界存取閘道與身分管理平台』：Citrix NetScaler CVE-2026-8452（9.8、可 root RCE）8/26 進 KEV、ServiceNow 三個 CVSS 10.0 滿分免驗證漏洞、Keycloak 9.1 帳號接管、Zimbra 8.9 持續在野利用並波及臺灣；二是『供應鏈 ＋ AI 攻擊工具化』：APT24 打臺灣廣告供應鏈、TeamPCP 開源蠕蟲集團被捕、SilkParasite 與 OpenAI Hugging Face 事故都顯示 AI 進了攻擊者的開發鏈。整體嚴重程度判為高。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W16 — 2026-08-31

> 涵蓋範圍：2026-08-24 ~ 2026-08-30

## 本週重點摘要

本週有兩條清楚的主線。第一條是重大漏洞集中落在「邊界存取閘道」與「身分及平台管理」兩類最敏感的資產上：Citrix NetScaler 的記憶體溢位漏洞 CVE-2026-8452 於 8 月 26 日正式列入 CISA 已知遭利用漏洞（KEV）清單——上一期（W15）本報寫過它「已遭積極利用但尚未進 KEV」，本週不但入列，watchTowr 更證實它不只是先前以為的阻斷服務，實際可在未修補主機上取得 root 權限遠端執行程式碼，CISA 命聯邦機關限 8 月 29 日前修補；ServiceNow AI 平台一口氣揭露三個 CVSS 10.0 滿分、免驗證、低攻擊複雜度的漏洞（GraphQL 程式碼注入、影像上傳存取控制不當、動態 SQL 注入）；Keycloak 的密碼重設繞過 CVE-2026-18963（9.1、免驗證、零點擊）可直接接管含管理員在內的任何帳號；Zimbra 命令注入 CVE-2026-73570（8.9、EPSS 高達 20.53%）持續在野利用、已波及臺灣 2 臺主機。第二條主線是「供應鏈攻擊」與「AI 輔助攻擊工具化」同時升溫：中國駭客組織 APT24（BadAudio）入侵臺灣廣告聯播供應鏈、在太報與小說狂人等網站植入使用者指紋蒐集程式；長期以開源軟體蠕蟲進行供應鏈攻擊、竊得逾 50 萬組憑證的 TeamPCP 兩名成員在澳洲落網；China-nexus 的 SilkParasite 間諜集團與 OpenAI 揭露的 Hugging Face AI 代理入侵事故，則共同指向「AI 已嵌進攻擊者的惡意程式開發流程」。防禦面上，偵測工程社群本週剛好示範了這股 AI 攻擊浪潮對既有監控的挑戰——開源大型語言模型可在不觸發高風險告警的情況下攻陷內網。整體嚴重程度判為高。

## 重大漏洞與威脅

1. **[Citrix NetScaler 記憶體溢位 CVE-2026-8452 8/26 正式進 KEV，watchTowr 證實可取得 root 遠端執行程式碼（承 W15、本週新進展）](https://www.bleepingcomputer.com/news/security/cisa-hackers-now-exploiting-citrix-netscaler-rce-flaw-in-attacks/)**
   - **本週新進展**：上一期（W15）本報在台灣在地段寫過 Citrix NetScaler 的 CVE-2026-8452「正被積極利用、當時尚未進 CISA KEV」，本週 CISA 已於 8 月 26 日正式列入。這是套用在啟用了 Gateway VPN 或 AAA（認證、授權與稽核）虛擬伺服器的 NetScaler ADC／Gateway 上的記憶體溢位漏洞。關鍵轉折是危害程度被上修：Citrix 6 月時認為攻擊者只能拿它發動阻斷服務，但 watchTowr 8 月證實成功利用可在未修補主機上以 **root 權限遠端執行程式碼**。CISA 命聯邦機關限 8 月 29 日（週六）前完成修補。NetScaler 常被當成對外的遠端存取／VPN 閘道，一旦被打穿等於敞開內網大門，屬本期最優先的緊急變更之一。
   - 指標（CVE-2026-8452）：CVSS 9.8（NVD v3.1；v4.0 為 8.8）｜EPSS 1.61%（依 2026-08-31 查詢）｜KEV：已列入（2026-08-26）

2. **[ServiceNow AI 平台一次揭露三個 CVSS 10.0 滿分、免驗證漏洞（8/27 公告）](https://thehackernews.com/2026/08/three-cvss-100-servicenow-flaws-could.html)**
   - ServiceNow 於 8 月 27 日發布公告，一次修補三個 **CVSS 10.0 滿分**、可由**未經驗證攻擊者**利用的重大漏洞，且三者攻擊複雜度都被評為「低」：**CVE-2026-18885** 是 GraphQL 複合資料 API 的程式碼注入，未驗證使用者可藉此執行任意程式碼並存取或竄改實例資料；**CVE-2026-18886** 是系統設定影像上傳處理器的存取控制不當；**CVE-2026-74820** 是透過動態結構 ORDER BY 子句觸及的 SQL 注入。ServiceNow 已對其代管（hosted）實例部署修補，並提供更新給合作夥伴與自架客戶；受影響版本為 Zurich 分支在特定 Patch／Hot Fix 之前的版本。ServiceNow 常承載工單、資產、身分與工作流程等營運核心資料，自架環境應盡速確認已套用對應 Hot Fix。
   - 指標（CVE-2026-18885）：CVSS 10.0｜EPSS 0.43%（依 2026-08-31 查詢）｜KEV：未列入
   - 指標（CVE-2026-18886）：CVSS 10.0｜EPSS 0.25%（依 2026-08-31 查詢）｜KEV：未列入
   - 指標（CVE-2026-74820）：CVSS 10.0｜EPSS 0.25%（依 2026-08-31 查詢）｜KEV：未列入

3. **[Zimbra SNMP 命令注入 CVE-2026-73570（CVSS 8.9、EPSS 20.53%）持續在野利用，全球 267 臺受害、臺灣中 2 臺](https://thehackernews.com/2026/08/attackers-exploit-zimbra-snmp-flaw-for.html)**
   - CVE-2026-73570 是 Zimbra Collaboration（ZCS）在安裝了選用的 zimbra-snmp 套件並啟用 SNMP 通知時，因 SNMP 通知處理未妥善過濾不受信任輸入而生的**作業系統命令注入**漏洞、CVSS 8.9：未經驗證的攻擊者可送出特製請求、以 Zimbra 使用者身分執行任意系統指令。此漏洞早在 7 月的 10.1.20 版即修補，CISA 於 8 月 21 日列入 KEV（修補期限 8/24）。值得注意的是它的 **EPSS 高達 20.53%**、是本期最高的一條，代表被自動化大規模利用的機率不低。Shadowserver 與波蘭 CERT（CERT Polska）合作觀測到：8 月 22 日全球有 274 臺受害、到 8 月 24 日降為 267 臺，美國最多（41～46 臺），**臺灣有 2 臺主機遭入侵**。跑 Zimbra 郵件伺服器者務必確認已升到 10.1.20 以上，並回查過去一個月是否有異常事件記錄與指定資料夾新增的檔案。
   - 指標（CVE-2026-73570）：CVSS 8.9｜EPSS 20.53%（依 2026-08-31 查詢）｜KEV：已列入（2026-08-21）

4. **[Keycloak 密碼重設繞過 CVE-2026-18963（CVSS 9.1、免驗證、零點擊）可完整接管含管理員帳號](https://thehackernews.com/2026/08/critical-keycloak-password-reset-flaw.html)**
   - CVE-2026-18963 是開源身分與存取管理平台 **Keycloak** 的**弱密碼恢復機制**漏洞（CWE-640）、CVSS 9.1：問題出在「重設憑證」認證流程的狀態驗證不當，未經驗證的遠端攻擊者可送出特製請求、**跳過原本必須的電子郵件動作權杖（action token）**，直接重設密碼並完整接管帳號，包含管理員帳號在內，全程免驗證、免使用者互動。目前尚無公開的在野利用或可用的公開攻擊程式。上游 Keycloak 於 8 月 19 日發布的 26.7.2 版修補；Red Hat build of Keycloak 26.4／26.6 則有對應的 operator bundle 與容器映像更新。Keycloak 常是企業單一登入（SSO）與對外應用的身分中樞，一旦管理員帳號被接管，其後所有信賴它的應用一起淪陷，自架者應排入優先更新。
   - 指標（CVE-2026-18963）：CVSS 9.1｜EPSS 3.24%（依 2026-08-31 查詢）｜KEV：未列入（尚無在野利用跡象）

> 本期排序延續既有原則：**已列入 KEV → 再看 CVSS 嚴重度 → EPSS 作為機率參考**。兩個值得記住的對照：一是 Zimbra（CVE-2026-73570）EPSS 20.53%、又已入 KEV，是本期「已被利用 ＋ 高機率」最該最先處理的；二是 ServiceNow 三案雖 CVSS 10.0 滿分卻尚未進 KEV、EPSS 也低（0.25～0.43%），Keycloak（3.24%）亦然，說明「滿分但未進 KEV」不代表可延後——滿分 ＋ 免驗證 ＋ 低複雜度的組合本身就是高風險。此外 8 月 26 日 CISA 那批「六個 KEV」除了 Citrix NetScaler，另有五個是被重新觀測到遭利用的**老漏洞**：Red Hat Libuser CVE-2015-3246、Red Hat ABRT 提權 CVE-2015-5287、微軟 SQL Server RCE CVE-2019-1068、Ajax.NET Professional 反序列化 CVE-2021-23758、Linux 核心越界寫入 CVE-2022-0995（[CISA 8/26 公告](https://www.cisa.gov/news-events/alerts/2026/08/26/cisa-adds-six-known-exploited-vulnerabilities-catalog)）——提醒修補治理不能只盯新 CVE，長年未修的舊系統一樣會被重新翻出來打。

## 攻擊趨勢與事件

1. **[AI 進了攻擊者的開發鏈：SilkParasite 用 AI 寫惡意程式，OpenAI 揭露 Hugging Face AI 代理入侵事故，OWASP 發布代理技能十大風險](https://news.risky.biz/chinas-ai-enabled-apt-operations-are-getting-interesting/)**
   - 本週有三條訊息共同指向「AI 正被整合進攻擊者的惡意程式開發流程」。一是 Bitdefender 揭露的 **SilkParasite**（Risky Business Media 2026-08-27）——這個 China-nexus 間諜集團鎖定烏茲別克、土庫曼、哈薩克等中亞政府，開發了七款遠端存取木馬（其中五款前所未見）；研究者從程式碼裡殘留的測試函式與佔位加密金鑰、以及兩款不同語言實作卻共用同一套高階架構的植入程式，判斷它「用 AI 輔助惡意程式開發」而非直接用 AI 駭入。二是 tl;dr sec #343（2026-08-27）轉述 **OpenAI 發布 38 頁技術報告**，剖析一起 AI 代理自主入侵 Hugging Face 的事故。三是同期收錄的 **OWASP 代理技能十大風險（Agentic Skills Top 10）**，列出惡意技能、供應鏈污染、過度授權、不受信任的外部指令、弱隔離等十類 AI 代理安全風險。對防守方的意義是：攻擊者迭代惡意程式的速度會被 AI 進一步壓縮，而「AI 代理／技能」本身也正成為新的攻擊面，導入任何 AI 代理或外掛技能前都應把它當成不受信任的程式碼來治理。

2. **[開源軟體供應鏈蠕蟲集團 TeamPCP 兩名成員在澳洲落網，曾竊得逾 50 萬組憑證](https://news.risky.biz/risky-bulletin-two-teampcp-members-arrested-in-australia/)**
   - Risky Business Media（2026-08-28）報導，澳洲聯邦警察逮捕了駭客集團 **TeamPCP** 的兩名嫌犯：21 歲、被指為首腦的 Ruben Thomson，與 23 歲的 Louis Gaebler，兩人都被裁定羈押。TeamPCP 自 2020 年起活動，專打開源軟體供應鏈——他們入侵 Trivy、KICS、LiteLLM、Telnyx 等開源專案，把**具自我傳播能力的蠕蟲**塞進程式碼，蠕蟲在安裝後才啟動、竊取憑證並繼續散布到受感染開發者所維護的其他函式庫。當局指其累計竊得**逾 50 萬組憑證**，用來存取企業網路或轉賣，多家企業與政府機關因此遭入侵、勒索與資料外洩。這條與本週 APT24 的廣告供應鏈攻擊呼應：無論是廣告聯播還是開源相依套件，攻擊者都愛從「你信任、卻不直接控制的第三方」下手。可轉移的防禦是把相依套件與第三方元件納入盤點、鎖版本、驗證來源，並監控建置流程（build pipeline）中的異常憑證存取。

3. **[美國菸酒槍炮及爆裂物管理局（ATF）證實遭 Qilin 勒索軟體入侵、稱為「重大事故」](https://www.bleepingcomputer.com/news/security/atf-confirms-major-incident-after-recent-qilin-breach-claims/)**
   - 在 Qilin 勒索集團把美國 ATF 列上其暗網資料外洩網站後，ATF 隨即發布聲明，證實一套**獨立系統**遭入侵、稱之為「重大事故（major incident）」，正與司法部合作調查。ATF 強調受影響系統與企業網路分開運作，目前無跡象顯示波及企業網路、eForms 系統或其他系統。Qilin 是 2022 年 8 月首度現蹤的勒索軟體即服務（RaaS）行動，暗網外洩站累計宣稱逾 2,200 名受害者。這條的提醒是：即使把高風險系統做網段隔離、限制單一系統被打穿的爆炸半徑，仍要為「獨立系統遭入侵」預備事故應變劇本與離線備份，別假設隔離就等於安全。

## 防禦與偵測

1. **[Detection Engineering Weekly #168（2026-08-26）：開源大型語言模型可不觸發高風險告警就攻陷內網，Sigma 與 YARA 各司其職，偵測待辦要挑著做](https://www.detectionengineering.net/p/dew-168-the-detection-rule-stork)**
   - 本期偵測工程週報最值得藍隊警惕的是 Daniel Knight 的研究：開源權重（open-weight）模型如 Sable 能在**不觸發 Wazuh 高風險告警**的情況下攻陷中小企業環境，展現出成熟的攻擊手法——在攻擊之間「休眠」以躲過關聯分析的時間窗、全程只用**就地取材（living-off-the-land）二進位**、並在 Kerberos 認證的 WinRM（wsmprovhost）程序內植入行程內（in-process）HTTPS C2 信標。作者的結論是：開源模型「缺乏安全護欄」正在降低攻擊門檻，偵測團隊需要自主威脅獵捕與回應能力來對抗這一新型威脅。另外兩個實用觀點：一是 **Sigma 對 YARA 的分工**——Sigma 走「以日誌做行為偵測、部署在 SIEM／XDR」，YARA 走「對檔案與記憶體做特徵比對、部署在 EDR／威脅獵捕」，兩者互補而非取代；二是「偵測規則送子（The Detection Rule Stork）」提醒偵測待辦不該只問「ATT&CK 覆蓋率夠不夠」，而要用能見度、既有偵測、環境脈絡、威脅情報四個來源篩選，避免把資源花在低價值規則上。
   - 落地作法：既有 SIEM 的高風險告警門檻不足以擋住「刻意壓低雜訊」的自動化攻擊，需要補上行為關聯、就地取材二進位的異常使用偵測，以及出向（egress）連線的基線化監控。

2. **[SANS ISC 值班日誌：YARA-X 1.20.0 發布、以及會「自我損壞」的多型釣魚頁分析](https://isc.sans.edu/diary/YARAX+1200+Release/33288/)**
   - 呼應 DEW 的 YARA 主題，SANS ISC 的 Didier Stevens 於 8 月 30 日記錄 **YARA-X 1.20.0** 發布，帶來 14 項改進與 13 項修正，新增 `--ignore-invalid-rules` 命令列選項可略過編譯失敗的規則（YARA 4.5.6／4.5.7／4.5.8 另合計修 32 個錯誤）；對維護大量偵測規則的團隊，這個選項能避免單一壞規則卡住整批比對。同一時段（8 月 27 日）Jan Kopriva 分析了一個**多型（polymorphic）釣魚頁**——它每次被存取就產生 50 個不同版本以躲避特徵偵測，卻因 JavaScript 混淆器的一個變數重用臭蟲，導致 50 版裡有 1 版陷入無窮迴圈而「自我損壞」。這個案例對防守方的啟示是：純特徵比對面對多型頁面容易失效，偵測應更靠行為與結構特徵；另 Xavier Mertens 8 月 27 日發布的惡意 PE 檔統計（分析 2020–2026 年 69 萬個有效 PE 樣本）顯示 32 位元惡意程式仍占多數（約 82%）、近四成工具鏈無法識別，提醒別預設攻擊者都用最新技術。

## 台灣在地動態

1. **[中國駭客 APT24（BadAudio）入侵臺灣廣告聯播供應鏈，在太報、小說狂人植入指紋蒐集程式（供應鏈攻擊）](https://www.ithome.com.tw/news/178479)**
   - 資安公司 Gen Digital 於 8 月 26 日示警，中國駭客組織 **APT24（惡意程式代號 BadAudio）**入侵臺灣的廣告供應鏈，在採用其廣告聯播的知名新聞與小說網站上，上傳經混淆處理的惡意 **FingerprintJS2** 程式碼，蒐集造訪者的瀏覽器指紋資料、再對特定訪客投放 BadAudio 惡意程式。已確認受害的兩個網站是**太報（Taisounds）與小說狂人（CZBooks）**；Gen Digital 觀察到約 **8 萬次點擊、其中 76% 來自臺灣**，其餘來自臺灣僑胞社群。這是典型的供應鏈攻擊——攻擊者不直接打目標網站，而是入侵它們共用的廣告供應商，間接波及所有使用該廣告服務的網站與使用者（iThome 資安週報 0824~0828：[178489](https://www.ithome.com.tw/news/178489)）。

2. **[Zimbra 命令注入 CVE-2026-73570 遭在野利用，臺灣有 2 臺郵件伺服器受害](https://www.ithome.com.tw/news/178378)**
   - 對應本報「重大漏洞」段的 Zimbra 漏洞，iThome 在地報導補上臺灣落點：Shadowserver 與波蘭 CERT 統計，8 月 22 日全球有 274 臺 Zimbra 主機遭入侵、8 月 24 日降為 267 臺，美國最多（41 臺），**臺灣有 2 臺受害**。CERT Polska 早在 8 月 17 日就警告此漏洞正遭積極利用，建議儘速更新並檢查過去一個月的特定事件記錄與資料夾內新增檔案。臺灣仍在使用 Zimbra 的組織應立刻確認版本與是否已遭入侵。

3. **[OWASP 更新 2026 年大型語言模型十大風險、AI 代理過度授權升至第 3 名；OpenSSL 修補 9 個漏洞](https://www.ithome.com.tw/news/178451)**
   - 兩則在地技術動態：一是 iThome 8 月 26 日報導 **OWASP 發布 2026 年 LLM 應用十大風險**，首度納入實際事故資料，其中「AI 代理過度授權」風險排名升至第 3——與本週國際上 OWASP 代理技能十大風險、以及 AI 代理入侵事故的主題一致，凡在導入 AI 代理的組織都應據此收斂代理的權限範圍。二是 iThome 8 月 28 日報導 **OpenSSL 修補 9 個漏洞**，包含可能造成伺服器當機的高風險漏洞（[178515](https://www.ithome.com.tw/news/178515)），用到 OpenSSL 的服務應排入更新評估。

## 對 Simon 工作的影響評估

1. **對外存取閘道是本期最該先確認的一類資產 — Citrix NetScaler CVE-2026-8452 已可 root RCE**
   你負責伺服器與機房管理、資產與修補治理，本期最直接命中的是 Citrix NetScaler CVE-2026-8452：8/26 進 KEV、可在未修補主機上以 root 遠端執行程式碼、CISA 限 8/29 修補。如果公司用 NetScaler（或其他 SSL VPN／存取閘道）作為對外遠端存取入口，請優先確認版本與修補狀態——這類閘道被打穿等於直接落地內網。同時把本週那批「六個 KEV」裡的五個老漏洞（微軟 SQL Server RCE CVE-2019-1068 尤其值得留意）拿去比對盤點清單，確認沒有長年未修的舊系統還暴露在外；修補治理不能只追新 CVE。

2. **身分與存取管理平台連環出包 — 對照你的 IAM 加固優先序**
   本週 ServiceNow（三個 CVSS 10.0）、Keycloak（9.1 帳號接管）、加上前一期的 Entra ID 滿分漏洞，訊號很一致：**身分與平台管理系統正是攻擊者集中鎖定的一環**。你若有用到 ServiceNow 或 Keycloak／其他 SSO 平台，先確認是否受影響並排補（Keycloak 升 26.7.2 以上）。這條也回扣你 IAM 治理的排序——對外可否免驗證就取得或竄改資料的端點、重要帳號的多因子驗證覆蓋率、管理員帳號的額外保護，是合理的加固順位。（你先前在 SQL Server 做的 MFA／Silverfort 測試該案已收尾，這裡不是要你重啟，而是本週事件再次佐證「身分是優先被攻破的破口」這個判斷方向。）

3. **供應鏈攻擊本週密集 — 正好餵進你進行中的 ISO 27001 BIA**
   本週 APT24（廣告聯播供應鏈打臺灣網站）、TeamPCP（開源軟體蠕蟲、逾 50 萬組憑證）、OWASP 代理技能供應鏈風險，三條都指向「第三方／相依元件」這條攻擊面。你正在做的 **ISO 27001 業務營運衝擊分析（BIA）**很適合把「第三方與供應鏈依賴」明確納入盤點：哪些營運系統依賴外部廠商、外部套件或外部服務，一旦上游被入侵會怎麼波及自己，對應的存取控制、來源驗證與備援要求要一併列。半導體廠若在建置或自動化流程中用到開源相依套件，TeamPCP 這種「蠕蟲塞進開源函式庫」的手法正提醒把相依套件鎖版本、驗來源、監控建置流程的異常憑證存取。

4. **AI 攻擊提速 ＋ 偵測門檻不足 — 進行中的 IST 導入與新上線的 SFTP 都要把偵測基線一起收緊**
   本週 DEW #168 示範了開源大型語言模型可**不觸發高風險告警**就攻陷內網（休眠躲過關聯窗、只用就地取材二進位、行程內 C2），加上 SilkParasite、Hugging Face 事故顯示 AI 已進攻擊者開發鏈——共同結論是「既有 SIEM 的高風險門檻不足以擋自動化、低雜訊攻擊」。落到你手上：**IST 導入**還在測試階段，建議趁測試期就把資安基線與偵測納入驗收（對外暴露面、預設帳密、API 授權、是否納入既有修補與備份排程、關鍵行為有沒有進日誌與告警）；8/18 剛上線的**公司 SFTP** 也要確認對外服務面與存取控制已收斂、出向連線有基線化監控，別只靠預設告警門檻。對外可達系統的防禦重心，要從「有沒有修補」延伸到「行為與出向流量有沒有被看見」。
