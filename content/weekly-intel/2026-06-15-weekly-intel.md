---
title: "資安週報 2026-06-15"
date: 2026-06-15
type: weekly-intel
issue: "W05"
cover_range: "2026-06-08 ~ 2026-06-14"
tags:
  - 資安週報
  - zero-day
  - ransomware
  - edge-device
  - privilege-escalation
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "Ivanti Sentry 行動裝置閘道爆 CVSS 10.0 未驗證命令注入零時差 CVE-2026-10520，6 月 9 日修補後隨概念驗證程式公開即遭武器化，Shadowserver 掃到 19 台暴露主機、2 台已被植入後門；CISA 6 月 11 日列入 KEV、限 6 月 14 日前修補，成為新指令 BOD 26-04 三天修補令的首例"
  - "ShinyHunters（Mandiant 代號 UNC6240）以 Oracle PeopleSoft 零時差 CVE-2026-35273（RCE、CVSS 9.8、免登入）攻破逾 100 個組織、約 300 個脆弱執行個體，68% 為高等教育；諾丁漢大學遭竊 40GB 個資與帳務資料；Oracle 遲至 6 月 10 日才發布公告，全程皆為零時差"
  - "CISA 6 月 10 日發布 BOD 26-04《依風險排序安全更新》，以資產暴露、KEV 狀態、攻擊自動化、後利用技術衝擊四項標準判定，全部命中的高風險漏洞須三天內修補；同週 Linux 核心 nf_tables 一字元提權漏洞 CVE-2026-23111 的可用攻擊程式公開、The Gentlemen 勒索蠕蟲累計 478 受害者"
tldr: "本週主軸是邊界與身分基礎設施的零時差連環爆：Ivanti Sentry（CVSS 10.0）與 Oracle PeopleSoft（CVSS 9.8）兩個免驗證遠端執行漏洞遭實際利用，分別衝擊 MDM 閘道與高教 ERP；同時 Linux 核心一字元提權漏洞攻擊程式公開、會自我傳播的 The Gentlemen 勒索軟體擴散到製造等產業，CISA 並以 BOD 26-04 把高風險漏洞修補期限壓到三天。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W05 — 2026-06-15

> 涵蓋範圍：2026-06-08 ~ 2026-06-14

## 本週重點摘要

本週態勢由**邊界與身分基礎設施的零時差連環爆**主導，攻擊者鎖定「對外暴露、又握有高權限」的系統。Ivanti Sentry 行動裝置管理閘道揭露 CVSS 滿分 10.0 的未驗證遠端命令注入漏洞 CVE-2026-10520，6 月 9 日修補釋出後，概念驗證程式（PoC）一公開即遭武器化，Shadowserver 在網際網路掃描中發現 19 台暴露主機、其中 2 台已被植入後門；CISA 於 6 月 11 日將其列入 KEV、要求 6 月 14 日前修補，成為新指令 BOD 26-04 三天修補令的第一個適用案例。同一時間，勒索與資料竊取集團 ShinyHunters（Mandiant 追蹤代號 UNC6240）以 Oracle PeopleSoft 的零時差 CVE-2026-35273（遠端執行、CVSS 9.8、免登入即可接管伺服器）攻破逾 100 個組織、橫跨約 300 個脆弱執行個體，其中 68% 為高等教育機構，諾丁漢大學被竊走 40GB 學生個資與帳務資料；Oracle 遲至 6 月 10 日才發布公告，等於全程零時差。治理面，CISA 在 6 月 10 日發布 BOD 26-04《依風險排序安全更新》，改以資產暴露、KEV 狀態、攻擊自動化、後利用技術衝擊四項標準判風險，四項全中的漏洞須三天內修補。此外，Linux 核心 nf_tables 一字元提權漏洞 CVE-2026-23111 的可用攻擊程式於 6 月 8 日公開、可本機提權至 root 並逃逸容器，會自我傳播的 The Gentlemen 勒索軟體累計 478 個受害者並利用 FortiGate 漏洞入侵製造業。整體嚴重程度判為高。

## 重大漏洞與威脅

1. **[Ivanti Sentry 滿分漏洞 CVE-2026-10520 修補後即遭利用](https://www.bleepingcomputer.com/news/security/max-severity-ivanti-sentry-vulnerability-now-exploited-in-attacks/)**
   - CVE-2026-10520 是未驗證、可遠端觸發的作業系統命令注入漏洞，CVSS 滿分 10.0，攻擊者可取得 root 權限執行任意命令，影響 10.5.2、10.6.2、10.7.1 之前的 Ivanti Sentry（行動裝置管理閘道）；Ivanti 6 月 9 日同步修補另一個重大漏洞 CVE-2026-10523（[Help Net Security 分析](https://www.helpnetsecurity.com/2026/06/10/ivanti-sentry-cve-2026-10520-cve-2026-10523/)）。PoC 公開後即遭武器化，引發大規模掃描，[Shadowserver 觀測到 19 台暴露主機、2 台確認被植入後門](https://securityaffairs.com/193557/security/u-s-cisa-adds-ivanti-sentry-flaw-to-its-known-exploited-vulnerabilities-catalog-and-urges-patching-by-june-14.html)；CISA 於 6 月 11 日列入 KEV、限聯邦機構 6 月 14 日前修補，這也是 BOD 26-04 三天修補令的第一個實例。

2. **[Oracle PeopleSoft 零時差 CVE-2026-35273 攻破逾 100 個組織](https://thehackernews.com/2026/06/shinyhunters-exploits-oracle-peoplesoft.html)**
   - PeopleSoft Enterprise PeopleTools 的遠端程式碼執行漏洞，CVSS 9.8、免登入、免使用者互動，只要能以 HTTP 連到伺服器即可接管。[The Register 報導指 ShinyHunters 攻破逾 100 個組織、橫跨約 300 個脆弱執行個體](https://www.theregister.com/cyber-crime/2026/06/11/shinyhunters-claims-oracle-peoplesoft-0-day-hit-100-orgs/5254443)，68% 集中在高等教育、多數位於美國；諾丁漢大學遭竊 40GB 學生個資與帳務資料。Oracle 直到 6 月 10 日才發布公告，[Mandiant 將活動歸因於 UNC6240、時間落在 5 月 27 日至 6 月 9 日](https://cloud.google.com/blog/topics/threat-intelligence/shinyhunters-targets-education-sector-oracle-exploit)，等於整段期間都是零時差。

3. **[Linux 核心一字元漏洞 CVE-2026-23111 可用攻擊程式公開、可本機提權至 root](https://thehackernews.com/2026/06/one-character-linux-kernel-flaw-enables.html)**
   - 漏洞位於核心 nf_tables 封包過濾子系統，源於一個位置放錯的「!」造成的釋放後使用（UAF），讓本機無權限使用者可操控核心記憶體、洩漏指標、組 ROP 鏈進而取得 root，在容器環境還能逃逸宿主、危及同主機所有工作負載（Ubuntu 評為 CVSS 7.8）。漏洞已於 2 月 5 日修補（僅移除一個字元），但 [Exodus Intelligence 在 6 月 8 日公開可用攻擊程式](https://securityaffairs.com/193352/hacking/cve-2026-23111-linux-nf_tables-flaw-enables-root-exploits.html)，宣稱在多個 Linux 發行版上有逾 99% 的成功率。緩解方式為更新核心並重開機；無法立即更新者，先限制無權限使用者命名空間（user namespaces）以封住利用路徑。

## 攻擊趨勢與事件

1. **[ShinyHunters 以 PeopleSoft 零時差勒索高教機構](https://cyberscoop.com/oracle-peoplesoft-zero-day-vulnerability-shinyhunters-extortion/)**
   - 與上述 CVE-2026-35273 同一波，但聚焦攻擊行為：ShinyHunters 走「竊資後勒索」模式，先大規模掃描並植入後門，再竊取資料庫、向受害組織索討贖金以換取不公開。受害名單以大學為大宗，諾丁漢大學被竊走數十萬名在學與校友的個資與帳單紀錄。這波凸顯高教與大型企業常見的 ERP／人資系統一旦對外暴露，會成為一打就垮的單點；資產盤點時要把這類「業務核心、卻被當成內網系統管理」的服務列為高優先。

2. **[The Gentlemen 勒索軟體累計 478 個受害者、會像蠕蟲自我傳播](https://thehackernews.com/2026/06/the-gentlemen-ransomware-claims-478.html)**
   - 這個自 2025 年 6 月崛起的勒索軟體即服務（RaaS）持續擴張，累計至少 478 個受害者、橫跨 66 國與 20 多個產業，含製造、醫療、教育、金融、IT、政府與能源。[微軟分析指其為以 Go 語言寫成、可自我傳播的加密程式](https://www.microsoft.com/en-us/security/blog/2026/05/28/the-gentlemen-ransomware-dissecting-a-self-propagating-go-encryptor/)，能在數分鐘內於網路內橫向擴散，並具反鑑識與防禦規避能力；[Rescana 指其利用 Fortinet FortiGate 漏洞作為入口](https://www.rescana.com/post/gentlemen-ransomware-actively-exploiting-fortinet-fortigate-vulnerabilities-478-victims-hit-by-rapid-worm-like-attacks)。對製造業而言，「邊界設備未修補 → 蠕蟲式橫向 → 雙重勒索」是本週最該演練的完整攻擊鏈。

3. **r/netsec、r/cybersecurity 本週無單一突出且可獨立成條的新討論串**，社群熱度集中於上述 Ivanti Sentry、PeopleSoft 與 Linux 核心三個漏洞的利用與修補討論，相關情報已併入前述各條。

## 防禦與偵測

1. **[CISA BOD 26-04：把高風險漏洞修補期限壓到三天](https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk)**
   - 6 月 10 日發布的這份約束性作業指令改以四項標準判風險——資產暴露程度、是否列入 KEV、攻擊是否已自動化、後利用的技術衝擊；四項全中的漏洞須在三天內修補（[BleepingComputer 報導](https://www.bleepingcomputer.com/news/security/cisa-tells-govt-agencies-to-patch-critical-exploited-flaws-in-3-days/)）。指令給聯邦機構 60 天更新弱點管理流程、180 天全面達標，雖只約束聯邦民間機關，但提供了一套可直接借用的風險分級模型；本週的 Ivanti Sentry 正是第一個觸發三天修補令的案例。對企業而言，重點不是三天這個數字，而是「先問會不會被打，再排修補順序」的方法論。

2. **[Linux 核心 CVE-2026-23111 的偵測與加固](https://securityarsenal.com/blog/cve-2026-23111-linux-kernel-nftables-privilege-escalation-detection-and-hardening)**
   - 針對本週公開攻擊程式的 nf_tables 提權漏洞，防禦方在完成核心更新前可採三項緩解：限制無權限使用者命名空間（`sysctl kernel.unprivileged_userns_clone=0` 或等效政策）、監看異常的 nf_tables 操作與本機提權行為、對容器宿主特別留意逃逸跡象。這類「已修補但攻擊程式才剛公開」的漏洞，最危險的是尚未重開機套用更新的長壽主機，建議用設定管理工具盤點各主機實際運行的核心版本，而非只看已安裝套件。

3. **Ivanti Sentry 事件的偵測重點：對外暴露面盤點優先於規則調校。** Shadowserver 能掃到的暴露主機，攻擊者同樣掃得到；防禦第一步是確認對外管理閘道是否真的需要對外。建議比對自家對外資產清單與 Shodan／內部掃描結果，把「非必要對外的管理介面」收回內網或加上存取控制；對必須對外者，套用虛擬修補與異常命令執行告警，並把 KEV 新增當成每日例行檢查項目。

## 台灣在地動態

1. **[iThome 資安週報 0608-0612：全球漏洞治理迎來新變革](https://www.ithome.com.tw/news/176582)**
   - iThome 本週資安週報以國際治理與威脅為主軸，重點為美國 CISA 發布 BOD 26-04、開始勒令高風險漏洞三天內修補，並追蹤針對企業邊界設備的零時差攻擊（含本週 Ivanti Sentry）。內容多為國際重大事件的整理與在地化解讀，對台灣讀者的意義在於：邊界設備與身分系統的修補節奏正被國際監管拉快，企業端應預期供應鏈客戶與稽核要求隨之提高。

   窗口內（6 月 8 日至 14 日）iThome 與公開來源未見新增的台灣本土重大資安事件；先前傳出的互動資通遭駭與馬偕醫院舊資料外洩屬五月底事件，不計入本期。本週最貼近台灣讀者的在地動態為上述漏洞治理變革的轉載與解讀。

## 對 Simon 工作的影響評估

1. **Ivanti Sentry 滿分漏洞 ＋ MDM 閘道成箭靶 — 你的 Workspace ONE 導入要把「閘道暴露面」當第一控制點**
   你正在導入的 Omnissa Workspace ONE 與遭攻擊的 Ivanti Sentry 同屬行動裝置管理（MDM）基礎設施，攻擊者鎖定的正是這類「對外暴露、又能下發裝置政策」的高權限閘道。即使產品不同，教訓直接適用：確認 MDM 對外元件（如 Unified Access Gateway）只開必要連接埠、管理介面不對公網暴露、修補等級跟上原廠；把「對外管理閘道清單」做成一份定期比對的資產表，並把廠商安全公告納入每週追蹤。這對應 ISO 27001 的資產管理與技術弱點管理控制。

2. **CISA BOD 26-04 風險分級模型 — 直接搬進你的 ISO 27001 弱點管理流程**
   這份指令的四項標準（資產暴露、KEV 狀態、攻擊自動化、後利用衝擊）是一套現成、可稽核的風險排序框架。建議把它改寫成自家弱點管理政策的判斷表：四項全中者比照「緊急變更」限時處理、命中 KEV 者優先於高 CVSS 但無利用跡象者。這比單看 CVSS 分數更貼近實際風險，也讓修補優先序在稽核時有明確依據；可搭配 WSUS／Workspace ONE 的推送能力落地。

3. **Linux 核心 root 提權攻擊程式公開 — 伺服器與容器宿主要立即盤點核心版本**
   你負責伺服器管理，CVE-2026-23111 的可用攻擊程式已公開、可本機提權至 root 並逃逸容器，最危險的是「已裝更新但還沒重開機」或長期不重啟的主機。建議用設定管理工具盤點各 Linux 主機「實際運行中」的核心版本（`uname -r`）而非已安裝版本，排程重開機套用；容器宿主額外限制無權限使用者命名空間。這類本機提權常是攻擊者進入單一主機後擴大戰果的關鍵一步。

4. **The Gentlemen 勒索蠕蟲打製造業、走 FortiGate 入口 — 邊界修補 ＋ 備份不可變 ＋ 橫向移動圍堵三線並進**
   半導體製造正是這隻會自我傳播的勒索軟體的目標產業之一，且它以 Fortinet FortiGate 漏洞為入口。若你的環境有 FortiGate 或其他對外防火牆／VPN，務必確認已達最新修補。其「數分鐘內橫向擴散」的特性，凸顯兩道你既有專案的價值：Veeam 備份要確保有不可變（immutable）副本與離線副本，讓加密後仍能還原；SQL Server MFA 搭配 Kerberos 與 Silverfort 要把覆蓋面延伸到服務帳號與本機登入，正是用來掐斷蠕蟲橫向移動所倚賴的身分濫用。
