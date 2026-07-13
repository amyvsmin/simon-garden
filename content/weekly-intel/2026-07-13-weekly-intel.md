---
title: "資安週報 2026-07-13"
date: 2026-07-13
type: weekly-intel
issue: "W09"
cover_range: "2026-07-06 ~ 2026-07-12"
tags:
  - 資安週報
  - actively-exploited
  - kev
  - supply-chain
  - phishing
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "CISA 一口氣把 4 個已遭實際利用的漏洞列入 KEV、勒令 7 月 10 日前修補：Adobe ColdFusion 路徑穿越 RCE CVE-2026-48282（CVSS 10.0、EPSS 28.58%）在公開後數小時內就被印度 IP（103.207.14.220）利用；兩個 Joomla 外掛滿分檔案上傳漏洞（Joomlack Page Builder CVE-2026-56290、JoomShaper SP Page Builder CVE-2026-48908）分別遭植入 web shell 與建立 Super User 帳號；Langflow 跨租戶 IDOR CVE-2026-55255 被用來竊取 LLM 供應商憑證與 AWS 金鑰。ColdFusion 的 EPSS 28.58% 遠高於企業 1% 關注門檻，凸顯『揭露到武器化剩小時級』"
  - "郵件協作平台與伺服器韌體同週成焦點：Zimbra Classic Web Client 儲存型 XSS（Google TAG 通報、尚未指派 CVE、7 月 11 日以 ZCS 10.1.19 修補）可用畸形郵件在使用者 session 內執行程式碼、竊取信箱與 session 資料；Binarly 揭露 U-Boot 的 6 個 FIT 簽章驗證漏洞（BRLY-2026-037～042、其中 2 個可在簽章驗證前執行程式碼），波及資料中心伺服器 BMC 管理晶片、路由器與網路攝影機，修補已併入上游但穩定版要等 v2026.10"
  - "供應鏈與 AI 攻擊面續熱、台灣爆國家級社交工程案：Injective Labs 的 npm SDK（@injectivelabs/sdk-ts@1.20.21）遭植入竊取加密錢包助記詞的後門、連鎖污染 18 個套件；HalluSquatting 手法用 AI 常『幻覺』出的套件名毒化 GitHub Copilot、Cursor、Gemini CLI 等 AI 編程助理；台灣則由調查局破獲中共網軍『廈門市女帝信息科技有限公司』租用台灣 LINE 帳號、冒充天下雜誌總編與國際記者對政學界社交工程並夾帶惡意程式"
tldr: "本週主軸是『漏洞從揭露到被利用縮至小時級、且郵件協作平台與伺服器韌體同步成靶』：CISA 把含 Adobe ColdFusion 滿分 RCE 在內的 4 個已遭利用漏洞列入 KEV 並限 7 月 10 日前修補、Zimbra 與 U-Boot 分別揭露郵件 XSS 與 BMC 韌體漏洞；供應鏈面有 Injective npm SDK 竊錢包與 HalluSquatting 毒化 AI 編程助理，台灣則爆調查局破獲中共網軍冒充國際記者的社交工程案。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W09 — 2026-07-13

> 涵蓋範圍：2026-07-06 ~ 2026-07-12

## 本週重點摘要

本週態勢延續上週「漏洞從揭露到被武器化只剩小時級」的主軸並再度加劇。CISA 於 7 月 7 日一次把 4 個已遭實際利用的漏洞列入 KEV、勒令聯邦機構 7 月 10 日前修補，其中 Adobe ColdFusion 路徑穿越 RCE CVE-2026-48282（CVSS 10.0）在公開後數小時內就被印度 IP 利用、EPSS 已達 28.58%，是本週最需優先處理的一條。郵件協作與伺服器底層同週成靶：Zimbra Classic Web Client 儲存型 XSS 由 Google 威脅分析小組（TAG）通報、以 ZCS 10.1.19 修補，Binarly 又揭露 U-Boot 6 個 FIT 簽章驗證漏洞、直接觸及資料中心伺服器的 BMC 管理晶片。供應鏈與 AI 攻擊面持續升溫：Injective Labs 的 npm SDK 遭植入竊取加密錢包助記詞的後門並連鎖污染 18 個套件、HalluSquatting 手法用 AI 幻覺出的套件名毒化 AI 編程助理。台灣在地則由調查局破獲中共網軍以租用 LINE 帳號、冒充天下雜誌總編與國際記者對政學界發動社交工程並夾帶惡意程式。整體嚴重程度判為高——多個滿分且已遭實際利用的漏洞同時帶緊迫修補期限，攻擊面橫跨應用伺服器、郵件、韌體與軟體供應鏈。

## 重大漏洞與威脅

1. **[CISA 把 Adobe ColdFusion、兩個 Joomla 外掛與 Langflow 共 4 個已遭利用漏洞列入 KEV](https://thehackernews.com/2026/07/cisa-adds-4-actively-exploited-adobe.html)（Adobe ColdFusion 部分為本週新進展）**
   - CISA 於 7 月 7 日新增 4 個已遭實際利用的漏洞並要求聯邦機構 7 月 10 日前修補。核心是 **Adobe ColdFusion CVE-2026-48282**——一個路徑穿越導致任意程式碼執行的漏洞，在公開後數小時內就被來自印度的 IP（103.207.14.220）利用。上週（W08）週報曾報導 Adobe 修補 ColdFusion 7 個 CVSS 10.0 漏洞、當時列為 KEV 未列入；本週這條路徑穿越 RCE 已被實際利用並進入 KEV，是該事件的直接後續。同批另有 [Joomlack Page Builder CVE-2026-56290（CVSS 10.0、EPSS 2.91%、6 月 27 日起被植入 web shell）、JoomShaper SP Page Builder CVE-2026-48908（CVSS 10.0、EPSS 1.57%、以零時差上傳 PHP 檔建立 Super User 帳號），以及 Langflow 跨租戶 IDOR CVE-2026-55255（CVSS 6.1、EPSS 0.47%，用來列舉他人 flow ID 竊取 LLM 供應商憑證與 AWS 金鑰）](https://www.securityweek.com/cisa-urges-immediate-patching-of-exploited-coldfusion-langflow-joomla-flaws/)。Langflow 一案示範了 KEV 的價值：CVSS 僅 6.1、EPSS 未達 0.5%，但既已被實際利用即最優先——別只看嚴重度分數。
   - 指標（CVE-2026-48282）：CVSS 10.0｜EPSS 28.58%｜KEV：已列入（同批 CVE-2026-56290 EPSS 2.91%、CVE-2026-48908 EPSS 1.57%、CVE-2026-55255 EPSS 0.47%，皆已列入 KEV）

2. **[Zimbra 促請客戶修補 Classic Web Client 重大儲存型 XSS 漏洞](https://www.bleepingcomputer.com/news/security/zimbra-urges-customers-to-patch-critical-web-client-xss-flaw/)**
   - Zimbra 於 7 月 11 日以 ZCS 10.1.19 修補 Classic Web Client（Classic UI）的一個儲存型跨站腳本（XSS）漏洞：[攻擊者可用特製郵件，在使用者於 Classic Web Client 開啟該郵件時於其瀏覽器 session 內執行攻擊者控制的程式碼，進而竊取 session 資料、帳戶設定或信箱內容](https://thehackernews.com/2026/07/critical-zimbra-flaw-could-let-crafted_0483473395.html)。該漏洞由 Google 威脅分析小組（TAG）通報，TAG 慣於追蹤針對高風險對象的攻擊與國家級利用活動；Zimbra 尚未將其標記為已在野利用，但歷來 Zimbra 的 XSS 漏洞一直是攻擊磁鐵，Winter Vivern、APT29、APT28 等俄羅斯關聯組織都曾利用。凡使用 Classic Web Client 的組織應儘速升級到 10.1.19。
   - 指標：無 CVE 編號（尚未指派）｜EPSS：查無（無 CVE 可查）｜KEV：未列入

3. **[Binarly 揭露 U-Boot 6 個 FIT 簽章驗證漏洞，可在啟動時執行程式碼、波及伺服器 BMC](https://www.bleepingcomputer.com/news/security/new-u-boot-flaws-could-enable-stealthy-firmware-attacks/)**
   - Binarly 於 7 月 10 日揭露開源啟動載入器 U-Boot 的 6 個 FIT 簽章驗證漏洞（BRLY-2026-037～042）。[其中 BRLY-2026-037 與 038 可在簽章驗證前執行程式碼（源於 `fdt_get_name` 查詢未檢查回傳值，分別導致堆疊緩衝區溢位與覆寫返回位址），另外 4 個（039～042）為阻斷服務（DoS）、僅使載入器崩潰](https://thehackernews.com/2026/07/six-new-u-boot-flaws-could-let.html)。受影響範圍涵蓋家用路由器、智慧攝影機，以及資料中心伺服器的管理晶片（BMC）——在支援遠端韌體更新的 BMC 上，已取得管理介面存取權的攻擊者可上傳特製韌體映像觸發漏洞，不一定需要實體接觸。多數易受影響的程式碼自 U-Boot 2013.07 就存在、恐影響逾 50 個版本。修補已併入上游，但 7 月釋出版本早在 4 月凍結、穩定版要等 v2026.10（預計 10 月），目前尚無在野攻擊報告。
   - 指標：無 CVE 編號（僅 BRLY 研究編號）｜EPSS：查無（無 CVE 可查）｜KEV：未列入

## 攻擊趨勢與事件

1. **[SimpleHelp 遠端支援軟體驗證繞過 CVE-2026-48558 遭利用投放 Djinn Stealer，鎖定 MSP](https://www.helpnetsecurity.com/2026/06/30/simplehelp-vulnerability-exploited-cve-2026-48558/)（本週持續，iThome 週報仍列為活躍利用）**
   - 本週 iThome 資安週報把 SimpleHelp 列為仍在活躍遭利用的產品之一。CVE-2026-48558 是 SimpleHelp RMM 因未驗證 OpenID Connect（OIDC）權杖簽章而生的重大驗證繞過漏洞：遠端未驗證攻擊者可送出偽造權杖、直接取得完整技術員 session，部分部署還能繞過多因素驗證（MFA）。攻擊者藉此在受害主機投放新型 Djinn Stealer 惡意程式，可跨 Windows／macOS／Linux 收集雲端平台、原始碼控管、套件註冊庫、基礎設施工具、AI 開發助理、瀏覽器、SSH 與加密錢包的憑證。網路掃描顯示約 1.4 萬台 SimpleHelp 伺服器對外曝露、估計約 1,000 台直接可被利用；已修補於 5.5.16 與 6.0 RC2。此案是「一個 RMM 憑證外洩即擴散到整條供應鏈」的典型。
   - 指標：CVSS 資料未定｜EPSS 1.16%｜KEV：已列入

2. **[Injective Labs 的 GitHub 遭入侵，npm SDK 被植入竊取加密錢包私鑰的後門](https://www.bleepingcomputer.com/news/security/injective-sdk-on-npm-infected-with-cryptocurrency-wallet-stealer/)**
   - 7 月 8 日，攻擊者利用受信任開發者帳號的存取權，在 Injective 區塊鏈廣用的 SDK 植入後門。[遭污染的 @injectivelabs/sdk-ts@1.20.21 夾帶偽裝成遙測功能的程式碼，每當使用者建立或使用讀取助記詞（等同錢包主金鑰）的邏輯，惡意程式就讀走助記詞、以 HTTP POST 送到 Injective 公開基礎設施端點以偽裝成正常流量](https://thehackernews.com/2026/07/injective-labs-github-compromise-pushes.html)。該套件每週約 5 萬次下載，供開發者建構加密錢包、交易機器人、去中心化交易所與 DeFi 應用；攻擊者把 1.20.21 同步發布到另外 17 個相依並鎖定該版本的 @injectivelabs 套件、連鎖污染共 18 個套件，波及未直接安裝的傳遞相依使用者。惡意版本在被下架前遭下載 310 次、上線不到一小時即被 Socket、Ox Security 與 StepSecurity 偵測並修復，官方稱鏈上資金無虞。
   - 這起事件對有自動化建置或會抓取 npm 套件的組織的意義在於：受信任的上游套件也可能在數分鐘內被自動發布機制推送惡意版本，版本鎖定與相依鏈監控不可少。

3. **[HalluSquatting：用 AI 常「幻覺」出的套件名毒化 AI 編程助理、投放殭屍網路惡意程式](https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html)**
   - 研究者揭露一種供應鏈手法 HalluSquatting：攻擊者先分析熱門儲存庫與工具，探測大型語言模型（LLM）在被要求安裝套件時容易「幻覺」生成的假名稱，再搶先註冊這些不存在的套件名並埋入惡意指令，讓開發者與 AI 編程代理誤把它當成真實相依而安裝。與傳統提示注入不同，這種手法完全不需與目標直接互動。研究顯示幻覺率在「複製儲存庫」提示高達 85%、在「安裝 skill」提示更達 100%，且同一幻覺名稱會在不同基礎模型間重複出現；2026 年 1 月一個虛構的 npm 套件 `react-codeshift` 就已擴散到 237 個專案。Google Sites 研究者已對 GitHub Copilot、Cursor、Windsurf、Gemini CLI 等廣用工具實證成功。這把供應鏈風險延伸到 AI 輔助開發流程本身。

## 防禦與偵測

1. **[SANS ISC 7 月 10 日 Handler Diary：HTML 釣魚附件用「註解填充」規避 AI 偵測](https://isc.sans.edu/diary/33144)**
   - Jan Kopriva 拆解一封釣魚郵件的附件：一個竊取憑證的 HTML 頁面，後面接一段以重複「X」字元（並用 Unicode 轉義編碼）填充、把附件灌到約 2.5 MB 的巨大 HTML 註解。郵件標頭也異常——缺少 Date 欄位、信封寄件者為空，使 SPF 與 DMARC 檢查失敗。作者研判填充的用意是規避 AI／自然語言（NLP）郵件安全機制：一是稀釋惡意內容在分類器中的權重，二是逼有時間或大小上限的掃描器跳過或截斷分析。落地建議：確認郵件安全方案能處理大型附件、AI／NLP 偵測要能抵禦填充規避，並把「附件異常膨脹＋標頭缺 Date／信封寄件者為空」納入告警特徵。
2. **對抗本週 KEV 批次的偵測與修補優先序落地。** 針對 ColdFusion CVE-2026-48282，除了立即升級，應對 ColdFusion 主機監控路徑穿越樣式的請求、非預期的檔案寫入或 web shell 落地、以及由 ColdFusion 主機發出的異常對外連線；針對兩個 Joomla 外掛（CVE-2026-56290／48908），監控未驗證的檔案上傳（尤其 PHP web shell）與突然新建的 Super User 帳號。修補優先序照三指標排：已列入 KEV 者一律最優先（本批 4 個皆已列入、且 7 月 10 日已到期），其餘再看 CVSS 與 EPSS——ColdFusion 的 EPSS 28.58% 遠超企業 1% 門檻，屬「當作零時差節奏處理」等級。
3. **把 BMC／韌體管理面隔離納入偵測與防護（呼應 U-Boot 揭露）。** U-Boot 漏洞在伺服器 BMC 上的利用前提是「攻擊者已取得管理介面存取權、再上傳特製韌體」。落地建議有三：一是盤點哪些伺服器的 BMC／IPMI 對外或落在扁平網段，把管理面收斂到獨立管理網段、絕不對網際網路曝露；二是限制韌體更新權限、對 BMC 管理介面的登入與韌體上傳行為建立告警；三是追蹤設備商是否採用受影響的 U-Boot 程式碼、盯緊 v2026.10 穩定版修補時程。這也把「韌體層」補進資產盤點常被遺漏的角落。

## 台灣在地動態

1. **[調查局破獲中共網軍冒充國際記者，對台政學界進行社交工程攻擊](https://www.ithome.com.tw/news/177219)**
   - [法務部調查局台北市調處自 114 年 4 月起接獲通報，查獲不法人士偽冒天下雜誌總編輯陳一姍、國際調查記者聯盟（ICIJ）身分，對我國政治、學術界人士發動社交工程](https://www.mjib.gov.tw/news/Details/1/1196)。手法是由本地公司負責人受中共網軍「廈門市女帝信息科技有限公司」指使，蒐集國人以手機門號註冊的 LINE 帳號、以每個帳號人民幣 1,100 元出租給網軍；網軍再設定帳號名稱、盜用圖像冒充國際記者，加被害人為好友後以新聞採訪為由攀談刺探機敏資訊，並藉口「記者慣用加密通訊保護消息來源」寄送夾帶惡意程式的加密軟體、誘使下載安裝以駭入設備竊取資料。提供 LINE 帳號的兩名被告於 2026 年 7 月 7 日獲緩起訴。此案對本地讀者的意義在於：國家級社交工程的入口往往是「看似正常的通訊軟體帳號＋合理身分」，防線要落在使用者辨識與端點防護，而非只靠郵件閘道。

2. **[iThome 資安週報 0706~0709：漏洞從揭露到被利用的平均時間已驟降至兩小時](https://www.ithome.com.tw/news/177217)**
   - iThome 本週週報以「漏洞武器化提速」為主軸：資安界頻引的「ZeroDayClock」數據顯示，2026 年漏洞從揭露到被武器化利用的平均時間已縮短到「小時」級別；本週有 SimpleHelp、Langflow、Citrix、Progress Kemp、Gitea、微軟與 Joomla 外掛等產品傳出遭實際利用。同期技術焦點還有：HalluSquatting 手法可誘騙 AI 開發助理安裝惡意程式、GuardFall 攻擊可繞過開源 AI 開發代理的 Shell 命令防護、Linux KVM 被揭存在潛伏 16 年、可導致虛擬機逃逸並存取底層主機的漏洞，以及嵌入式常用的 FatFs 檔案系統元件被發現 7 個漏洞、恐波及大量 USB 隨身碟、SD 記憶卡與 IoT 裝置。整體訊號一致：修補節奏與弱點管理必須跟上「小時級」武器化速度。

## 對 Simon 工作的影響評估

1. **U-Boot BMC 韌體漏洞 ＋ 伺服器與機房管理 — 把「韌體／管理面」補進資產盤點與 BIA 情境**
   這是本週對你職責最貼近的一條。U-Boot 的 6 個漏洞直接觸及資料中心伺服器的 BMC 管理晶片，利用前提是攻擊者先拿到 BMC 管理介面、再上傳特製韌體。雖然目前無在野攻擊、穩定版修補要等 10 月的 v2026.10，但你負責伺服器與機房，可先做三件不必等修補就能落地的事：一是盤點哪些伺服器的 BMC／IPMI 管理介面對外或落在扁平網段，把管理面收斂到獨立、不對網際網路曝露的管理網段；二是限制韌體更新權限、對 BMC 登入與韌體上傳建立告警；三是把「韌體層被竄改導致隱蔽持久化」列進 ISO 27001 BIA 的威脅情境——你已完成資產盤點、正在做 BIA，BMC 這類常被漏掉的管理面正好補進「哪些系統受影響」與 RTO／RPO 的盤點。

2. **CISA 4-CVE KEV 批次（ColdFusion 滿分＋兩個 Joomla 外掛）— 一個可直接示範三指標排序的修補週**
   你負責伺服器管理與漏洞治理，本週是三指標分工的教科書案例。CVE-2026-48282（CVSS 10.0｜EPSS 28.58%｜已列入 KEV）公開後數小時就被利用、EPSS 遠高於企業 1% 關注門檻，屬「當零時差處理、立即排緊急變更」等級；兩個 Joomla 外掛滿分漏洞（EPSS 2.91%／1.57%、皆已列入 KEV）若公司對外網站有用 Joomla 也屬先修；Langflow IDOR 雖 CVSS 僅 6.1、EPSS 未達 0.5%，但已列入 KEV 就代表有實際利用實證、不能因分數低而延後。行動：盤點公司是否有地端 ColdFusion、Joomla（含外掛）或 Langflow，依「已列 KEV 者最優先、其餘看 CVSS 與 EPSS」排序修補。這套排序邏輯也可寫進你每月的資安 KPI 月簡報（7 月份下月初交），用來佐證修補節奏與弱點管理成效。

3. **Zimbra 郵件 XSS ＋ SANS 釣魚規避 ＋ 中共網軍社交工程 — 郵件、端點與身分三面同時受壓**
   三條線索都指向郵件與身分。若公司使用 Zimbra Collaboration，應儘速升級到 ZCS 10.1.19；即便沒用 Zimbra，SANS 揭露的「HTML 附件用巨大註解填充規避 AI 偵測」提醒你檢查郵件安全方案能否處理大型附件與填充規避。更值得對內宣導的是調查局破獲的中共網軍案：入口是租用的 LINE 帳號＋冒充國際記者、再以「加密通訊軟體」夾帶惡意程式——這正是使用者辨識與端點防護要擋的環節。建議把此在地案例納入資安意識宣導、並對高價值帳號補強 MFA；你們先前測試過 Silverfort＋MFA（測試完成未導入），這波國家級社交工程與憑證竊取正是重新評估「至少對特權與對外帳號上 MFA」的實務理由。

4. **供應鏈三連（Injective npm ＋ HalluSquatting ＋ SimpleHelp／Djinn Stealer）— 端點與資產、身分存取都要把「上游」納管**
   本週三條供應鏈線索對你負責的端點與資產管理、身分與存取控制都有落地點。其一，若公司內部有開發或自動化流程會抓取 npm／PyPI 套件，應導入版本鎖定與相依鏈監控（Injective 案顯示受信任上游可在數分鐘內被推送惡意版本），並提醒開發者別讓 AI 編程助理自動安裝套件、安裝前先確認套件確實存在（防 HalluSquatting 的幻覺假名）。其二，盤點公司是否使用 SimpleHelp 之類的遠端支援／RMM 工具，確認已修補（5.5.16／6.0 RC2）並把管理存取收斂——Djinn Stealer 專偷雲端、原始碼控管、AI 助理、SSH 與錢包憑證，正是「一組憑證外洩就橫向擴散」的典型，應把這條鏈寫進 ISO 27001 BIA 的威脅情境與相應的備份隔離、身分邊界設計。
