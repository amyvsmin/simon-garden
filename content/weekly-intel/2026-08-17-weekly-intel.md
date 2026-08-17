---
title: "資安週報 2026-08-17"
date: 2026-08-17
type: weekly-intel
issue: "W14"
cover_range: "2026-08-10 ~ 2026-08-16"
tags:
  - 資安週報
  - kev
  - patch-tuesday
  - ai-driven-attack
  - ransomware
  - vmware
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "8/11 微軟 Patch Tuesday 修補 398 個漏洞（62 個重大），唯一在野零時差是 Windows AFD WinSock 驅動 use-after-free 提權 CVE-2026-68820（Check Point 歸因北韓 Lazarus「Dream Job 行動」）；同日 CISA 一次把三案列入 KEV：Metabase 免驗證 SQL 注入 CVE-2026-72898（CVSS 10.0、EPSS 10.40%）、Cisco Secure Firewall ASA/FTD 遠端阻斷 CVE-2026-20349（近五萬台曝險）與上述 Windows 驅動零時差，聯邦機關限 8/14 前修補"
  - "VMware vCenter Syslog 目錄穿越 RCE CVE-2026-59310（CVSS 9.8）遭疑似 APT 的行動大規模利用：波及 47 國 361 個受害 IP，攻擊者植入惡意 cron、以開源工具 reverse_ssh 建立「由內向外」的反向 SSH 通道規避入向管制；截至 2026-08-17 尚未進 KEV，但在野利用已多方確認"
  - "台灣在地重大事件：以色列 Dream Security 揭露疑中國駭客「AI 自主攻擊框架」在 7 月初 4 天內對台發動 12 波攻擊、最多同時派 8 個 AI 代理、以貝氏機率動態切換 14 條攻擊鏈，攻破 85 組政府員工帳號、竊取逾 2,564 筆人員資料並橫向移動，鎖定核能安全委員會與至少 7 家能源業者；資安署 8/13 證實已完成調查與應變"
tldr: "本週主軸是「KEV 連環爆＋邊緣與虛擬化平台遭鎖定＋AI 自主攻擊實戰攻台」：微軟 8 月 Patch Tuesday 唯一在野零時差 CVE-2026-68820 被北韓 Lazarus 利用，CISA 同日把 Metabase（CVSS 10.0）、Cisco 防火牆、Windows 驅動三案列入 KEV、限 8/14 修補；VMware vCenter CVE-2026-59310（9.8）遭 APT 以 reverse_ssh 橫掃 47 國；Clop 續打 PTC Windchill 勒索、殼牌受害，中國 Storm-1175 改用 StormEncryptor 經 N-central 漏洞投放；台灣則傳疑中國 AI 自主攻擊框架 4 天 12 波攻破 85 組政府帳號、鎖定核安會與能源業者。整體嚴重程度判為高。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W14 — 2026-08-17

> 涵蓋範圍：2026-08-10 ~ 2026-08-16

## 本週重點摘要

本週的主軸是「KEV 連環爆、邊緣與虛擬化平台被集中鎖定、加上 AI 自主攻擊實戰攻台」。微軟 8 月 Patch Tuesday 修補 398 個漏洞（62 個列為重大），唯一遭在野利用的零時差是 Windows AFD（WinSock 輔助函式驅動程式）的 use-after-free 提權漏洞 CVE-2026-68820、Check Point 把利用行動歸因北韓 Lazarus 的「Dream Job 行動」；同一天 CISA 一次把三個漏洞列入 KEV——CVSS 10.0 的 Metabase 免驗證 SQL 注入 CVE-2026-72898、Cisco Secure Firewall ASA/FTD 的遠端阻斷 CVE-2026-20349、以及上述 Windows 驅動零時差，聯邦機關限 8 月 14 日前修補。虛擬化戰線上，VMware vCenter Syslog 元件的目錄穿越 RCE CVE-2026-59310（CVSS 9.8）遭疑似 APT 的行動大規模利用、波及 47 國 361 個受害 IP，攻擊者以 reverse_ssh 排程建立反向通道規避入向防火牆。供應鏈與勒索面，Clop 續打 PTC Windchill 反序列化漏洞 CVE-2026-12569 的雙重勒索、殼牌（Shell）與奇異（GE）、飛利浦傳出受害；中國背景的 Storm-1175（前 Medusa 附庸）改用全新的 StormEncryptor 勒索軟體、疑經上期本報寫過的 N-central 驗證繞過漏洞入侵——是 N-central 事件的本週新進展。最受矚目的是台灣在地事件：以色列 AI 資安新創 Dream Security 揭露疑中國駭客打造的「AI 自主攻擊框架」在 7 月初 4 天內對台發動 12 波攻擊、最多同時派出 8 個 AI 代理、以雙層貝氏機率決策動態切換 14 條並行攻擊鏈，自主攻破 85 組政府員工帳號、竊取逾 2,564 筆人員資料並橫向移動到內部系統，鎖定核能安全委員會與至少 7 家能源業者，資安署 8 月 13 日證實已完成調查與應變。整體嚴重程度判為高：一個滿分免驗證漏洞已零時差利用、一個被北韓利用的 Windows 零時差、一波涵蓋 47 國的虛擬化平台 APT 行動，再加上首度公開的 AI 代理自主攻台案例。

## 重大漏洞與威脅

1. **[微軟 8 月 Patch Tuesday 修補 398 個漏洞，唯一在野零時差 CVE-2026-68820 遭北韓 Lazarus 利用](https://thehackernews.com/2026/08/microsoft-patches-398-flaws-including.html)**
   - 微軟本月 Patch Tuesday 共修補 398 個漏洞、62 個列為重大。唯一已遭在野利用的是 **CVE-2026-68820**——Windows AFD（WinSock 輔助函式驅動程式、afd.sys）的 **use-after-free 提權**漏洞、CVSS 7.0：攻擊者需先在目標機器上取得執行權，再觸發競態條件把權限提升到 SYSTEM。Check Point Research 把利用行動歸因北韓 **Lazarus 的「Dream Job 行動」**。同批另有四個 CVSS 9.8 的免驗證 RCE 在釋出時尚無在野利用，其中 **CVE-2026-62878** 是被官方形容為「可蠕蟲化（wormable）」的 Windows DNS Server 堆疊溢位，對外開放的 DNS 主機應優先排修。（附帶一提：SANS ISC 同日記為 418 項、The Hacker News 記為 398 項，係計數口徑不同、非矛盾。）
   - 指標（CVE-2026-68820）：CVSS 7.0｜EPSS 0.33%｜KEV：已列入（2026-08-11）
   - 指標（CVE-2026-62878、可蠕蟲化 DNS）：CVSS 9.8｜EPSS 0.91%｜KEV：未列入（依 2026-08-17 查詢、尚無在野利用）

2. **[Metabase 免驗證 SQL 注入 CVE-2026-72898（CVSS 10.0）遭零時差利用，8 月 11 日列入 KEV、限 8/14 修補](https://thehackernews.com/2026/08/metabase-zero-day-exploited-in-wild.html)**
   - CVE-2026-72898 是開源商業智慧平台 Metabase 在 `/reset_password` 端點的 **SQL 注入**漏洞、CVSS 10.0 滿分：未經驗證的遠端攻擊者可注入任意 SQL、取得管理員權限，進而竄改應用設定、竊取所連資料庫的憑證與全部內容、匯出敏感資料。它是零時差——Metabase Cloud 早在 8 月 2 日就遭攻擊、四天後才被發現。CISA 於 8 月 11 日列入 KEV、聯邦機關限 8 月 14 日前修補。修補版依分支分列（如 1.58.24、1.59.21、1.60.17、1.61.11、1.62.9、1.63.5）。CVSS 滿分＋免驗證＋已零時差利用，屬本期最該立即處理的一條；凡把 Metabase 直接掛上公網者都應假設已被掃描。
   - 指標（CVE-2026-72898）：CVSS 10.0｜EPSS 10.40%｜KEV：已列入（2026-08-11）

3. **[Cisco Secure Firewall ASA/FTD 遠端阻斷 CVE-2026-20349 遭在野利用，8 月 11 日列入 KEV，近五萬台曝險](https://thehackernews.com/2026/08/cisco-asa-and-ftd-flaw-exploited-in.html)**
   - CVE-2026-20349 是 Cisco Secure Firewall ASA 與 FTD 的**堆積檢查（heap inspection）**漏洞、CVSS 8.6：處理 HTTP 請求時錯誤檢查不足，未經驗證的遠端攻擊者只要對啟用「遠端存取 SSL VPN」的裝置送出特製 HTTP 請求，即可讓裝置非預期重載、造成阻斷服務。Cisco PSIRT 於 8 月確認在野利用，CISA 8 月 11 日列入 KEV、限 8 月 14 日前修補；[BleepingComputer 另報導全球近五萬台 Cisco 防火牆曝險](https://www.bleepingcomputer.com/news/security/nearly-50-000-cisco-firewalls-vulnerable-to-actively-exploited-flaws/)。這雖是 DoS 而非 RCE，但邊界防火牆一旦被打掛，遠端存取與網路分段防護同時失效，對維運衝擊直接。
   - 指標（CVE-2026-20349）：CVSS 8.6｜EPSS 0.87%｜KEV：已列入（2026-08-11）

4. **[VMware vCenter 目錄穿越 RCE CVE-2026-59310（CVSS 9.8）遭 APT 大規模利用，波及 47 國、以 reverse_ssh 建立反向通道](https://thehackernews.com/2026/08/attackers-exploit-vmware-vcenter.html)**
   - CVE-2026-59310 是 VMware vCenter「Syslog 伺服器」元件的**目錄穿越**漏洞、CVSS 9.8：具備網路存取的未經驗證攻擊者可藉此執行任意程式碼。Broadcom 於 7 月底揭露並釋出修補，攻擊在 8 月 3 日（揭露後五天）啟動，QUIRSO 統計已波及 47 國 361 個受害 IP，德國、美國、土耳其、伊朗、法國最集中。攻擊鏈的特徵是植入惡意 cron 排程、以開源工具 **reverse_ssh** 建立「由內向外」的反向 SSH 連線，藉此繞過入向防火牆、維持持久存取；研究者研判為 APT 等級行動。截至 2026-08-17 查詢尚未列入 KEV，但在野利用已獲多方確認——跑 VMware 虛擬化的環境應視同緊急排修，並回查 vCenter 主機上有無非預期的 cron 與可疑對外連線。
   - 指標（CVE-2026-59310）：CVSS 9.8｜EPSS 1.14%｜KEV：未列入（依 2026-08-17 查詢；在野利用已確認）

5. **[WordPress 核心 pre-auth XSS CVE-2026-64638 可串到 PHP 程式碼執行，影響所有版本](https://thehackernews.com/2026/08/new-wordpress-pre-auth-xss-could-lead.html)**
   - CVE-2026-64638 是 WordPress 核心登入頁的**預先驗證（pre-auth）跨站指令碼（XSS）**漏洞、CVSS 8.9、影響所有版本、利用無需任何權限：只要特製的使用者名稱進到「登入失敗」錯誤頁，JavaScript 就會在訪客瀏覽器執行。發現者 pwn.ai 進一步示範可串到 **PHP 程式碼執行**——但這條利用鏈需要一名已登入的管理員、且對攻擊者控制的頁面做一次點擊，因此不是無條件的免驗證 RCE，實務風險介於「純 XSS」與「完整 RCE」之間。WordPress 已釋出修補；因屬核心漏洞、影響面廣，自架站台應盡速更新並提醒管理員別隨意點擊外部連結。
   - 指標（CVE-2026-64638）：CVSS 8.9（v4.0）｜EPSS 0.89%｜KEV：未列入（依 2026-08-17 查詢）

> 本期排序延續既有原則：**已列入 KEV → 再看 CVSS 嚴重度 → EPSS 作為機率參考**。本期一個明顯現象是「KEV 的機率分數普遍不高」——Windows 驅動零時差（0.33%）、Cisco 防火牆（0.87%）的 EPSS 都低，Metabase（10.40%）稍高，但三案都已在野利用；再次印證「進 KEV 就是既成利用事實、不能拿 EPSS 低當延後理由」。反過來，未進 KEV 的 VMware vCenter（1.14%）與 WordPress（0.89%）則要靠實際攻擊觀測與影響面判斷輕重，vCenter 已被 APT 橫掃 47 國，不能因為沒進 KEV 就輕忽。

## 攻擊趨勢與事件

1. **[Clop 續打 PTC Windchill 反序列化漏洞行雙重勒索，殼牌證實調查、奇異與飛利浦傳受害](https://www.bleepingcomputer.com/news/security/shell-investigates-potential-incident-after-clop-data-theft-claims/)**
   - Clop 勒索集團持續鎖定對外曝露的 **PTC Windchill 與 FlexPLM**（產品生命週期管理平台），利用不安全反序列化漏洞 **CVE-2026-12569**（CVSS 9.3、早在 6 月 25 日已入 KEV、EPSS 30.20%）取得未經驗證 RCE、部署 JSP webshell 竊取工程與設計資料，進行「先竊資料再勒索」的雙重勒索。本週 Clop 一次公布 43 個新受害者，能源巨頭**殼牌（Shell）證實正調查一起「潛在事件」**；此前 Clop 宣稱從奇異（GE）與飛利浦竊得備份、系統檔、專案圖檔與藍圖等敏感資料，受害橫跨製造、汽車、航太與零售。提醒：對外開放的 PLM／工程協作平台是製造業常被忽略的高價值資料庫，應優先收斂到公網之外並確認已補 CVE-2026-12569。

2. **[中國 Storm-1175 改用新勒索軟體 StormEncryptor、疑經 N-central 漏洞投放（承上期 N-central 事件、本週新進展）](https://thehackernews.com/2026/08/china-linked-hackers-deploy-new.html)**
   - **本週新進展**：微軟威脅情報追蹤到中國背景的 **Storm-1175**——曾是 Medusa 勒索軟體的附庸——改用全新的 **StormEncryptor** 勒索軟體（C++ 撰寫、加密後附 `.encrypted` 副檔名）。這波攻擊很可能是透過上期本報寫過的 **N-central 驗證繞過漏洞 CVE-2026-18577**（CVSS 8.1、8 月 3 日已入 KEV、EPSS 4.10%）取得初始存取。Storm-1175 慣以 living-off-the-land 手法（PowerShell、PsExec、Impacket、PDQ Deployer）快速從入侵到竊資料再投放勒索、常在數天內完成。把上期「N-central 主控台遭接管」與本週「經同一漏洞投放勒索」連起來看，正說明 RMM／遠端維運平面被拿下後的下一步就是全網勒索——RMM 主控台的修補與存取收斂不能拖。

> 註：本期 Reddit 社群來源（r/cybersecurity、r/netsec、r/blueteamsec）同前幾期一樣無法穩定取得——搜尋工具對 reddit.com 的抓取常被導向非討論串內容，並非該站本週無討論。社群與研究視角本期改以廠商情報（微軟、Check Point、QUIRSO）、CISA KEV 通報與媒體報導填補。

## 防禦與偵測

1. **[SANS ISC 8 月 12 日 Handler Diary：用本機端 LLM（Gemma4 + Ollama）分析蜜罐惡意雜湊、加速威脅獵捕](https://isc.sans.edu/diary/33242)**
   - 資深值班分析師 Guy Bruneau 於 8 月 12 日示範用「本機端」大型語言模型（Gemma4 搭配 Ollama）分析 DShield 蜜罐（honeypot）過去 30 天蒐集到的惡意檔案雜湊，並與 VirusTotal、CyberGordon 交叉比對；案例中蜜罐出現逾 126 次下載事件、研判為殭屍網路散布、後門與竊密程式的持久化與外傳跡象，且 LLM 是靠行為型態而非特徵碼判別。可直接落地的偵測與威脅獵捕建議：一是拿「前 10 大惡意雜湊」到全企業 EDR 查詢、找出蜜罐以外是否也中鏢；二是強化 Cowrie 這類蜜罐的紀錄、把「檔案執行」而非只有「下載」也記下來；三是收緊出向（egress）流量過濾與存取控制；四是把已連線的主機一律當成已淪陷、立即做鑑識取像。Bruneau 也提醒本機 LLM 的摘要要搭配正規威脅情資才有用、即時風險評估上 VirusTotal 仍優於學術替代方案。這條的另一層意義是「防守方也能用本機 AI 加速分析」，正好與本週攻擊方大量借助 AI 的趨勢對照。

2. **對抗本期「KEV 連環爆 ＋ 邊緣與虛擬化平台遭鎖定 ＋ AI 加速攻擊」的收斂作法。** 本週的共通線索，是攻擊者集中打「暴露在網路邊界、或掌握大量下游的平面」：防火牆（Cisco ASA/FTD）、虛擬化主控台（VMware vCenter）、直連資料庫的應用（Metabase、PTC Windchill）、RMM（N-central）。三個不必等完整修補窗口就能先做的動作：一是盤點所有對外或跨區可達的邊界與管理平面（VPN 閘道、vCenter、BI／報表平台、PLM、RMM），能收斂就先收到管理專網或跳板機；二是把本週的 KEV 條目（CVE-2026-68820、CVE-2026-72898、CVE-2026-20349）與在野利用但未進 KEV 的 VMware vCenter、WordPress 依「KEV 優先、對外可達優先」排進緊急變更，對外 DNS 主機另留意可蠕蟲化的 CVE-2026-62878；三是針對「由內向外」的反向連線（vCenter 事件的 reverse_ssh、勒索前的橫向移動）建立出向流量與異常排程（cron／排程工作）的偵測，別只防入向。

## 台灣在地動態

1. **[疑中國駭客「AI 自主攻擊框架」對台實戰攻擊，資安署 8/13 證實已完成調查與應變](https://www.ithome.com.tw/news/178145)**
   - 本週台灣最受矚目的是疑中國駭客打造的「AI 自主攻擊框架」對台實戰攻擊。以色列 AI 資安新創 Dream Security 揭露，該框架在 7 月初 4 天內發動 12 波攻擊、最多同時派出 8 個 AI 代理分頭作業，並[以雙層貝氏機率（Bayesian）決策動態切換 14 條並行攻擊鏈的優先序](https://www.ithome.com.tw/news/178113)，自主完成破解政府員工帳號、從未授權 API 端點竊取數百筆人員資料、找出政府身分驗證服務的簽章驗證缺陷、並在政府網站應用植入後門維持存活。統計上攻破 85 組政府員工帳號、取得逾 2,564 筆人員資料並成功橫向移動到內部系統，鎖定核能安全委員會（核安會）與至少 7 家能源業者。數位發展部資安署 8 月 13 日證實 7 月偵測到政府機關異常攻擊、已完成調查、受害單位陸續處理完畢；[TeamT5 執行長蔡松廷評論「自動化攻擊早已進入下一個時代」](https://www.ithome.com.tw/news/178135)。這是「AI 代理自主決策發動實戰攻擊」少見的公開案例，值得台灣公私部門警惕。
   - 指標：本條為 AI 攻擊事件分析、非單一 CVE，未對應 KEV／EPSS 分數。

2. **[歐盟 CRA 漏洞與重大事件通報義務 9 月上路；iThome 也在地報導 CISA 對三個漏洞的積極利用示警](https://www.ithome.com.tw/pr/178158)**
   - 另兩則在地動態：一是叡揚資訊攜手電電公會示警，歐盟《網路韌性法》（CRA）的漏洞與重大資安事件通報義務將於 9 月上路，會牽動有產品輸往歐盟的台灣製造業者，需及早盤點產品安全治理與合規落地。二是 iThome 也以在地管道報導了[美國 CISA 對本週 Cisco 防火牆、Windows WinSock 驅動、Metabase 三個漏洞被積極利用的示警](https://www.ithome.com.tw/news/178064)（詳見本報「重大漏洞與威脅」段）。本週未見以台灣本地企業為單一受害主體的新增重大事故（AI 攻台事件的受害者為政府與能源機關、已如上述），故本段以在地監理動態與國際事件的在地報導為主，不硬湊本地受害案例。

## 對 Simon 工作的影響評估

1. **邊界與虛擬化平面連環進 KEV／遭 APT 利用 — 本期你最該先盤點的一類**
   你負責伺服器與機房管理，本期打的都是你手上會有的東西。若公司邊界防火牆用 Cisco ASA/FTD 且開了遠端存取 SSL VPN，CVE-2026-20349 已在野利用（CISA 限 8/14）、全球近五萬台曝險，先確認版本與是否已補；若虛擬化跑 VMware，vCenter 的 CVE-2026-59310（CVSS 9.8）正被 APT 以 reverse_ssh 大規模利用、涵蓋 47 國，即使尚未進 KEV 也要當緊急排修，並回查 vCenter 主機有無非預期的 cron 排程與由內向外的可疑連線；Windows 伺服器則要納入 8 月 Patch Tuesday，尤其對外 DNS 主機留意可蠕蟲化的 CVE-2026-62878。這一類直接牽涉你職責中的資產管理與修補治理。

2. **vCenter／管理平面 — 直接餵進你進行中的 ISO 27001 BIA**
   你目前進行中的 ISO 27001 BIA 正在盤點哪些系統會影響營運、逐一定 RTO／RPO。本期很適合把「虛擬化主控台（vCenter）」與「邊界防火牆」明確列為高衝擊資產：vCenter 被接管等於一次掌握其下所有虛擬機，衝擊面遠大於單一主機，應對應更嚴格的存取控制、更短的 RTO／RPO 與更頻繁的離線備份驗證。這也連到你職責中的備份備援——若管理或虛擬化平面可能被入侵，備份的完整性與「能不能真的還原」都要重新驗證。本期 Clop 專偷備份與藍圖、正是反例警示：備份本身也是攻擊者的竊取目標。

3. **AI 自主攻擊攻台 — 身分存取控制與對外 API 的直接提醒**
   本週攻台的 AI 框架靠「破解 85 組帳號 ＋ 從未授權 API 端點竊資料 ＋ 鑽身分驗證服務的簽章缺陷」達成目的，命中你負責的身分與存取控制。可對照檢查的點：對外服務是否有未經驗證就能撈資料的 API 端點、身分驗證（SSO／簽章）流程有無驗證不全的破口、以及重要帳號是否已上 MFA 與異常登入偵測。你先前在 SQL Server 這條做過 MFA／Silverfort 的測試，本事件正好佐證「身分是 AI 攻擊優先攻破的軟肋」——不必為此重啟已收尾的專案，但把它當成 IAM 加固優先序的依據是合理的。

4. **AI 加速攻防 ＋ IST 導入的資安基線 — 節奏與新系統上線都要收緊**
   本週攻防兩端都出現 AI：攻擊方用 AI 代理自主攻台、防守方（SANS ISC）示範用本機 LLM 加速蜜罐雜湊分析。對你負責的資安治理，訊號是「從揭露到利用的時間持續被壓縮」，對外可達系統的修補窗口要更短、偵測要更靠出向流量與異常行為。另外你正在進行的 IST 導入（原廠 8 月 3 日已到場、進入測試階段），建議在這階段就把資安基線納入驗收：新系統的對外暴露面、預設帳密與 API 授權、以及是否納入既有的修補與備份排程，趁測試期一次收斂，別等上線後再補。
