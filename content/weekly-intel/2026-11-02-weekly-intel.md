---
title: "資安週報 2026-11-02"
date: 2026-11-02
type: weekly-intel
issue: "W25"
cover_range: "2026-10-26 ~ 2026-11-01"
tags:
  - 資安週報
  - php2shell
  - brotli
  - zero-day
  - edge-devices
  - social-engineering
concepts:
  - incident-response
  - vulnerability-management
  - patch-management
  - vulnerability-prioritization
highlights:
  - "PHP2Shell 本週確認被成功利用：CISA 10 月 26 日把 CVE-2026-109618、CVE-2026-109619 列入 KEV，Palo Alto Networks 證實對外開放的防火牆管理介面遭攻擊；攻擊者再串 Linux 核心漏洞 Fragnesia（CVE-2026-46300，10 月 28 日進 KEV）從網頁伺服器權限升到 root。Qualys 與 Ox Security 掃描仍有超過 99% 受影響的 PHP 伺服器未修補"
  - "第二個「到處都是」的漏洞接棒：Google Brotli 壓縮函式庫的 CVE-2026-111497 影響所有語言的實作，Node.js、.NET、PHP、Python、Envoy、Istio 陸續修補，概念驗證公開兩天後就出現攻擊，10 月 27 日進 KEV；PHP 的 Windows 版重新建置卻沒改版號，要比對雜湊值才知道裝的是不是修補版"
  - "邊界與基礎設施設備一週多起：Cisco ASA／FTD 的 SSL VPN 零日 CVE-2026-76418、Ivanti Connect Secure 三漏洞串接、VMware ESX 日誌漏洞 CVE-2026-41709 被中國背景的 Warp Panda 用來關掉稽核紀錄；CISA 一週新增 10 個 KEV。臺灣方面全家行動購因 91APP 事件發重訊，中選會財產申報網站外洩 1,573 名候選人身分證字號"
tldr: "PHP2Shell 從「大量嘗試」進入「確認成功入侵」，並被串上 Linux 核心漏洞取得 root；同週 Brotli 漏洞又是一個橫跨所有程式語言的遠端執行問題。防火牆、VPN 與虛擬化平台一週內各有一個已遭利用的漏洞進 KEV，整體嚴重程度判為高。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W25 — 2026-11-02

> 涵蓋範圍：2026-10-26 ~ 2026-11-01

## 本週重點摘要

上週 PHP2Shell 的狀態是「EPSS 近 100%、卻還沒進 KEV」，本週這個落差補上了。CISA 10 月 26 日把兩個 PHP2Shell 漏洞列入 KEV，Palo Alto Networks 證實攻擊者打的是對外開放的 PAN-OS 管理介面，Perplexity 的 Adel Karimi 在蜜罐上記錄到 35 次成功啟動的 shell。更麻煩的是串接：攻擊者用 PHP2Shell 拿到網頁伺服器權限後，再用 Linux 核心漏洞 Fragnesia（CVE-2026-46300）升到 root，CISA 10 月 28 日也把它列入 KEV。另一方面，Wordfence 到本週仍未發現有 WordPress 網站因此被駭，SANS ISC 也說穩定通用的攻擊程式不好寫；但 Qualys 與 Ox Security 的掃描顯示超過 99% 受影響的伺服器還沒修補。

第二條線是 Google Brotli 壓縮函式庫的 CVE-2026-111497。漏洞在 Brotli 的解壓縮程式碼本身，所以 Node.js、.NET、PHP、Python、Bun、Envoy、Istio 全部要各自修補；概念驗證公開兩天後就出現攻擊，10 月 27 日進 KEV，EPSS 82.64%。它跟 PHP2Shell 一樣，是由 AI 工具找到、橫跨大量軟體的遠端執行漏洞，DEW 的作者把這兩週稱為「漏洞末日第二週」。

第三條線是邊界與基礎設施設備：Cisco ASA／FTD 的 SSL VPN 零日、Ivanti Connect Secure 三漏洞串接、VMware ESX 一個 CVSS 只有 2.7 的日誌漏洞被中國背景的 Warp Panda 用來讓管理員操作不留紀錄，全都進了 KEV，CISA 一週共新增 10 筆。攻擊事件方面，摩爾多瓦政府因一個沒設驗證的日誌服務外洩約 75 萬名公民資料、關閉 82 項線上服務；Arctic Wolf 記錄到至少 400 起冒充 IT 支援、經 Teams 外部聊天進入企業的案例。臺灣方面，全家行動購因 91APP 事件發布重訊，中選會財產申報網站的背景資料含 1,573 名候選人身分證字號。

## 重大漏洞與威脅

1. **[PHP2Shell 確認遭成功利用：CISA 列入 KEV，攻擊防火牆管理介面，並串接 Fragnesia 取得 root](https://www.bleepingcomputer.com/news/security/cisa-confirms-php2shell-vulnerabilities-now-exploited-in-attacks/)**（本週新進展）
   - CISA 10 月 26 日把 CVE-2026-109618、CVE-2026-109619 列入 KEV，修補版仍是 **8.5.12、8.4.27、8.3.36、8.2.35**（[CISA](https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching)）。Palo Alto Networks 確認攻擊者利用 PHP2Shell 打對外開放的 PAN-OS 管理介面（[Palo Alto 公告](https://security.paloaltonetworks.com/CVE-2026-109618)）；CyFirma 觀察到北韓相關基礎設施篩出 216 台可能未修補的 PHP 主機，臺灣在目標範圍內（[iThome](https://www.ithome.com.tw/news/180068)）。Arctic Wolf 把部分攻擊連到 Mirai 衍生的 Potassium 殭屍網路（Risky Bulletin、2026-10-26）。
   - **串接 Fragnesia（CVE-2026-46300）**：這是 Linux 核心 XFRM ESP-in-TCP 子系統的邏輯錯誤，本機一般使用者可改寫唯讀檔案的頁面快取而取得 root，公開的概念驗證直接改 `/usr/bin/su`；2026-05-13 以前釋出的核心受影響（[BleepingComputer](https://bleepingcomputer.com/news/security/cisa-warns-of-fragnesia-linux-flaw-chained-in-php2shell-attacks)）。Dream Security 稱有攻擊者借 AI 工具串接兩者，在近 25 台伺服器上拿到 root，含美國政府相關環境（Risky Bulletin、2026-10-30），也有報導說是 24 台防火牆，數字未能對到原始報告。**修 PHP 跟修核心兩件事都要做**，只修其中一個，另一個仍可被利用。
   - 第三個 PHP 遠端執行漏洞 CVE-2026-115560 本期未查到修補版本；PHP 安全團隊說既有的 PHP2Shell 緩解措施也適用（Risky Bulletin、2026-10-26）。
   - 指標（CVE-2026-109618）：CVSS 9.2（v4.0）｜EPSS 100.00%（原值 0.99999，百分位 99.98）｜KEV：已列入（2026-10-26）
   - 指標（CVE-2026-109619）：CVSS 9.2（v4.0）｜EPSS 100.00%（原值 0.99999，百分位 99.99）｜KEV：已列入（2026-10-26）
   - 指標（CVE-2026-46300）：CVSS 7.8（v3.1，據 BleepingComputer 引述 NVD）｜EPSS 16.13%（百分位 96.9）｜KEV：已列入（2026-10-28）
   - 指標（CVE-2026-115560）：CVSS 查無｜EPSS 查無｜KEV：未列入

2. **[Brotli CVE-2026-111497：壓縮函式庫本身的漏洞，所有語言的實作都受影響，公開兩天後遭利用](https://news.risky.biz/risky-bulletin-while-everyone-was-looking-at-php-another-rce-is-wrecking-whats-left-of-the-internet/)（Risky Bulletin、2026-10-26）**
   - 攻擊者送出格式錯誤的 Brotli 壓縮資料，就能在解壓縮時寫出記憶體範圍外，可能導致遠端執行程式。Node.js 最先修補（所以最早被叫做 Node2Shell），之後 Python 的多個 Brotli 套件、Bun、Envoy、Istio 陸續跟進，微軟另為 .NET 8、9、10 發布頻外更新（[SANS Stormcast 10/27](https://isc.sans.edu/podcastdetail/10152)）。Imperva 的分析指出兩種暴露途徑：伺服器解壓縮外部送進來的資料，以及程式用 `fetch()` 去抓攻擊者控制的網址、收到惡意的壓縮回應（DEW #172、2026-10-29）。
   - **PHP 的 Windows 版重新建置時沒有改版號**，SANS 建議比對雜湊值確認裝的是修補後的版本。Trail of Bits 釋出 `brotli-checker` 協助盤點程式碼有沒有用到 Brotli。CISA 10 月 27 日列入 KEV，攻擊在概念驗證公開兩天後開始（Risky Bulletin、2026-10-30）。
   - 指標：CVSS 查無｜EPSS 82.64%（百分位 99.7）｜KEV：已列入（2026-10-27）

3. **[Cisco ASA／FTD SSL VPN 零日 CVE-2026-76418：未登入即可讓防火牆重開機](https://www.bleepingcomputer.com/news/security/cisco-warns-of-firewall-zero-day-exploited-to-crash-ssl-vpn-devices/)**
   - 問題在 SSL 遠端存取 VPN 功能，未經驗證的遠端攻擊者可讓設備意外重新載入、造成服務中斷；Cisco 是在調查一件客服案時發現已遭利用，未說明攻擊者與規模（Risky Bulletin、2026-10-30）。CISA 10 月 29 日列入 KEV、聯邦機構期限 11 月 1 日。
   - 二手來源列出的修補版本：ASA 9.16.4.104、9.18.4.96、9.20.4.50、9.22.3.200、9.23.1.48、9.24.1.27；FTD 7.0.11、7.2.13、7.4.9、7.6.7、7.7.14、10.0.3、10.1.1，沒有替代緩解措施。另有日本來源提醒，**為 8 月 CVE-2026-20349 已更新過的設備仍受影響、要再更新一次**。版號請以 Cisco 公告 `cisco-sa-asaftd-tunnel-dos-s6mgkb75` 為準。
   - 指標：CVSS 8.6（據 The Hacker News）｜EPSS 0.82%（百分位 57.3）｜KEV：已列入（2026-10-29）

4. **[Ivanti Connect Secure 三漏洞串接成未登入 root，兩個新進 KEV](https://thehackernews.com/2026/10/attackers-chain-three-ivanti-connect.html)**
   - Volexity 記錄的攻擊鏈是：驗證繞過 CVE-2026-104935（10 月 13 日已進 KEV）＋可預測識別碼造成的任意檔案上傳 CVE-2026-118527＋本機權限提升 CVE-2026-111357，串起來就能未登入取得 root。CISA 10 月 30 日把後兩個列入 KEV，CVE-2026-111357 的聯邦期限是 11 月 2 日，也就是今天。
   - The Hacker News 稱修補版是 ICS 25.1.1.3 與 22.8R2.6，但同一篇也說 Ivanti 當時仍在開發本機提權漏洞的修補，兩種說法有衝突，**請以 Ivanti 公告為準**。
   - 指標（CVE-2026-111357）：CVSS 8.8（據 The Hacker News）｜EPSS 0.53%（百分位 45.0）｜KEV：已列入（2026-10-30）
   - 指標（CVE-2026-118527）：CVSS 4.3（據 The Hacker News）｜EPSS 查無｜KEV：已列入（2026-10-30）
   - 指標（CVE-2026-104935）：CVSS 8.6（據 The Hacker News）｜EPSS 86.77%（百分位 99.7）｜KEV：已列入

5. **[VMware ESX CVE-2026-41709：CVSS 只有 2.7 的日誌漏洞，被 Warp Panda 當零日用來抹掉稽核軌跡](https://securityweek.com/chinese-hackers-quietly-used-low-severity-esxi-logging-flaw-as-zero-day/)**
   - 有管理員權限的攻擊者可執行某些操作而不被記錄。CrowdStrike 指出中國背景的 Warp Panda 在入侵美國律師事務所等組織時，把它當零日使用以大幅降低稽核紀錄的能見度，最晚到 2026 年初仍在用。CISA 10 月 28 日列入 KEV、期限兩週。
   - 修補版：ESXi-9.1.0.0-25370933、ESXi-9.0.2.0100-25595025、ESXi80U3j-25429389 以後；Cloud Security Alliance 的研究筆記提醒 **ESXi 7.0 不要假設會有修補**。這條是本期「嚴重度分數低、但已遭利用」的例子：攻擊者拿到管理員後最想做的就是不留痕跡。
   - 指標：CVSS 2.7（Broadcom 評分）｜EPSS 0.69%（百分位 52.8）｜KEV：已列入（2026-10-28）

6. **[GitLab：CVE-2026-97229 進 KEV，Alpine Linux 的 GitLab 遭攻擊；CVE-2026-110264 修補版號確定](https://www.bleepingcomputer.com/news/security/hackers-now-exploiting-max-severity-gitlab-flaw-in-attacks/)**（本週新進展）
   - 10 月 12 日修補的 CI/CD 正規表示式漏洞 CVE-2026-97229，CISA 10 月 29 日列入 KEV。Alpine Linux 公布自家 GitLab 伺服器遭攻擊，攻擊者找到驗證繞過但沒能變成遠端執行，Alpine 在對方回來前已偵測並修補（[Alpine Linux](https://alpinelinux.org/posts/GitLab-security-incident-CVE-2026-97229.html)；Risky Bulletin、2026-10-30）。
   - 上期修補版號說法不一的 CVE-2026-110264（Onigmo 正規表示式引擎整數溢位，CVSS 10.0），官方修補版是 **19.5.1、19.4.3、19.3.6、19.2.9、19.1.9、19.0.10、18.11.13**，GitLab 另公開了偵測 Onigmo 工作程序當掉的 Sigma 規則（[GitLab](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-1-released/)；DEW #172、2026-10-29）。
   - 指標（CVE-2026-97229）：CVSS 查無（BleepingComputer 稱最高嚴重等級）｜EPSS 27.30%（百分位 98.1）｜KEV：已列入（2026-10-29）
   - 指標（CVE-2026-110264）：CVSS 10.0｜EPSS 1.35%（百分位 71.5）｜KEV：未列入

7. **[Veeam Management Pack for System Center 三個遠端執行漏洞，9.x 版不再修補](https://www.veeam.com/kb4961)**
   - Veeam 10 月 29 日發布 KB4961：未經驗證者可在執行 Veeam Virtualization Extensions 服務的伺服器上遠端執行程式（CVE-2023-22793，CVSS v4.0 9.3）；一般網域使用者可在執行 Collector 服務的伺服器上以 LocalSystem 遠端執行（CVE-2026-107238，8.7）；Veeam Virtualization Extensions Users 群組成員可遠端執行（CVE-2026-107239，8.8）。影響 9.1 以前所有 9.x 版，含 Veeam Backup & Replication 13 的相容性修補（KB4876）。
   - **9.x 不會出修補**，唯一做法是升到 13.1（build 13.1.0.334），原廠未提供替代緩解措施。這只影響有用 Microsoft System Center 監控 Veeam 的環境，Veeam Backup & Replication 本身不在本 KB 範圍內。
   - 指標（CVE-2023-22793）：CVSS 9.3（v4.0）｜EPSS 0.53%（百分位 44.6）｜KEV：未列入
   - 指標（CVE-2026-107238）：CVSS 8.7（v4.0）｜EPSS 0.45%（百分位 39.1）｜KEV：未列入
   - 指標（CVE-2026-107239）：CVSS 8.8（v4.0）｜EPSS 0.65%（百分位 51.1）｜KEV：未列入

8. **其他本週修補與遭利用漏洞**
   - Adobe Commerce／Magento 檔案上傳漏洞 CVE-2026-48356 於 10 月 27 日進 KEV。文件轉 PDF 服務 Gotenberg 的 CVE-2026-42589 遭利用來植入後門（VulnCheck）；Wing FTP Server 修補 CVE-2026-105420（cert.pl）（Risky Bulletin、2026-10-30）。
   - TeamViewer 公告 TV-2026-1011，修補遠端控制畫面處理元件的遠端執行漏洞；Tailscale 承諾修補被稱為 Tailworm 的 11 個漏洞，這批問題揭露前已拖了數月；Cisco Secure Email Gateway、Juniper、Jenkins、WinRAR、Zimbra、WordPress 7.1.4 等也有更新（Risky Bulletin、2026-10-26／10-28／10-30）。
   - 指標（CVE-2026-48356）：CVSS 查無｜EPSS 44.58%（百分位 98.8）｜KEV：已列入（2026-10-27）
   - 指標（CVE-2026-42589）：CVSS 查無｜EPSS 3.01%（百分位 87.4）｜KEV：未列入
   - 指標（CVE-2026-105420）：CVSS 查無｜EPSS 0.52%（百分位 44.1）｜KEV：未列入

9. **本期 KEV 數量對照**
   - CISA 在 2026-10-26 至 2026-11-01 新增 10 個 KEV 條目，目錄版本 2026.10.30、總數 1,766 筆（上期 1,756 筆）。依加入日：10/26 PHP CVE-2026-109618、-109619；10/27 Brotli CVE-2026-111497、Adobe CVE-2026-48356；10/28 Linux 核心 CVE-2026-46300、VMware ESX CVE-2026-41709；10/29 Cisco CVE-2026-76418、GitLab CVE-2026-97229；10/30 Ivanti CVE-2026-111357、-118527。十筆的「已知被勒索軟體使用」欄位都是 Unknown。
   - **本週的對照組是 VMware ESX 與 PHP2Shell**：一個 CVSS 2.7、EPSS 0.69%，一個 CVSS 9.2、EPSS 近 100%，兩者都已遭利用。CVSS 與 EPSS 都低不等於可以晚點修，KEV 是唯一直接證明「已被用」的指標。

## 攻擊趨勢與事件

1. **[摩爾多瓦政府遭駭、約 75 萬名公民資料外洩，入口是一個沒設驗證的日誌服務（Risky Bulletin、2026-10-28）](https://news.risky.biz/risky-bulletin-moldova-takes-down-80-public-services-after-cyberattack/)**
   - IT 人員 10 月 23 日發現資料被大量取出，約占全國人口三分之一；外洩內容含姓名、出生資料、家庭成員、社會保險與退休金、駕照、照片、車輛與公司持有、銀行帳戶與負債。政府關閉 82 項線上服務與 30 個政府網路，經資安稽核後逐步恢復；攻擊者週日與週二試圖再進入，未成功（[e-gov](https://egov.md/ro/node/41145)）。
   - **入口是對外開放、沒有驗證的日誌服務**。日誌系統常被當成「內部工具」而沒人管權限，但它集中了大量系統的資料，本身就是高價值目標。

2. **[冒充 IT 支援、經 Teams 外部聊天進入企業：Arctic Wolf 記錄至少 400 起（Risky Bulletin、2026-10-28）](https://arcticwolf.com/resources/blog/threat-actors-abuse-microsoft-teams-external-chat-for-initial-access/)**
   - 攻擊者從外部租戶發 Teams 訊息冒充公司 IT，再把受害者拉到電話上、要求執行安裝遠端存取工具的檔案，部分案例最後導致 Chaos、3AM、Cactus、Black Basta 等勒索軟體。上期 SafePay 通報也提過同樣手法。
   - 同期 Expel 指出 Storm-0940（入侵 ConnectWise Cloud Backup 的同一集團）用 Artex AI 代理攻擊全球目標，並濫用一家公司的 Okta 自助註冊功能維持存取（Risky Bulletin、2026-10-26）。**員工可自己加帳號、外部人可直接私訊員工**，這兩個預設方便的設定都成了入口。

3. **[針對裝置管理平台與 SD-WAN 的國家級行動：Volt Typhoon 用至少 5 個零日、UAT-11473 在 Cisco SD-WAN 植入 KeyDrift（Risky Bulletin、2026-10-30）](https://bleepingcomputer.com/news/security/hackers-exploit-cisco-sd-wan-flaw-to-deploy-custom-keydrift-malware)**
   - Cisco Talos 10 月 29 日把在 Cisco SD-WAN 設備上植入 KeyDrift 惡意框架的攻擊歸給 UAT-11473，入口是今年初就被利用的驗證繞過 CVE-2026-20127，目標包括太空衛星、國防航太與政策研究機構。Lumen 則把 2023 年起活躍的 Silent Train 行動連到 Volt Typhoon，對象是集中式裝置管理平台、SD-WAN 協調器與控制平面，至少用了 5 個零日。
   - ESET 同期報告：白俄羅斯背景的 FrostyNeighbor（又名 GhostWriter）首次對烏克蘭一家運輸相關製造業者發動資料抹除攻擊，白俄羅斯成為第六個被記錄執行抹除攻擊的國家；ESET 也說過去半年沒看到 AI 實質改變國家級攻擊的樣貌。
   - 指標（CVE-2026-20127）：CVSS 查無｜EPSS 89.29%（百分位 99.8）｜KEV：已列入

4. **[軟體更新管道與開發者帳號再被利用：撲克軟體裝 MeshAgent、Gheist 竊用 GitHub 權杖、LiteLLM 主金鑰 5 月就外洩（Risky Bulletin、2026-10-26／10-28／10-30）](https://www.wiz.io/blog/gheist-attempted-scaled-abuse-of-stolen-github-tokens-stumbles)**
   - 攻擊者入侵兩家撲克牌桌軟體商的更新系統，替玩家電腦裝上遠端管理工具 MeshAgent、即時偷看對手畫面，可能騙走最多 400 萬美元；發現的是一名玩家用來追蹤戰績的 Claude 代理，它注意到背景多跑了 MeshAgent（[WIRED](https://www.wired.com/story/a-hacker-targeted-high-stakes-poker-players-with-malware-that-exposed-their-cards/)）。Wiz 記錄的 Gheist 行動從 9 月中起用偷來的 GitHub 權杖，在儲存庫執行把秘密印進工作流程日誌的指令、幾秒後刪掉日誌，已波及超過 850 個帳號、13,500 個儲存庫。
   - 上期報導的 LiteLLM 加料事件（本週新進展）：入口是 5 月就外洩的一把主金鑰，屬於一個實驗性的雲端代理專案。**一把沒被輪替的舊金鑰，五個月後變成發行版被植入竊資程式的入口**。

5. **[惡意 LLM API 中轉站實測：428 個裡有 9 個在回應裡注入惡意程式碼（tl;dr sec #352、2026-10-29）](https://arxiv.org/abs/2604.08407)**
   - 研究人員從淘寶、閒魚、Shopify 買了 28 個付費中轉站、另收集 400 個免費的，付費組 1 個、免費組 8 個在回應中注入惡意程式碼，2 個有規避偵測的觸發機制，17 個動過研究人員埋的 AWS 誘餌憑證，1 個把研究人員私鑰裡的以太幣轉走。中轉站看得到經過它的所有明文，包括提示詞與金鑰。
   - 同週 Risky Bulletin 也收錄：韓國警方逮捕 7 人，他們用 AI 工具入侵 60 多家醫院、大學與企業，竊取逾 820 萬人資料；Warp 創辦人說攻擊者用一群 AI 代理打進他們的一家基礎設施供應商（Risky Bulletin、2026-10-28）。

## 防禦與偵測

1. **[DEW #172：在環境裡埋「脈絡炸彈」拖慢攻擊用的 AI 代理，以及何時把獵捕結果轉成偵測規則（DEW #172、2026-10-29）](https://www.detectionengineering.net/p/dew-172-context-bombing-gates-method)**
   - Tracebit 讓 AI 代理拿低權限 AWS 存取、限時兩小時做任務，再在環境裡放誘導線索，例如一個聲稱存有敏感憑證的 S3 儲存貯體，裡面是層層加密的物件，代理會一路解下去。這既拖住對方，也會產生下載工具、偵察儲存貯體這類可偵測的紀錄（[Tracebit](https://agentic.tracebit.com/)）。讀者留言點出的盲點也值得記：內部自己的代理掃同一個儲存貯體時也會觸發。
   - Nebulock 提出 GATES 方法，用「可通用、有增益、可調校、經暴露測試、可長期維護」五個條件決定獵捕結果要不要升成正式規則，避免低價值規則塞滿系統；並附一支實作此方法的 Claude skill。Adversarial Detection Engineering 框架則把漏報原因分成格式錯誤、替代比對、脈絡建構、邏輯操弄四類。麥當勞的 Matt Clemons 分享把偵測工程從「拚規則數量」轉成要求擁有者、驗證、同儕審查與維護計畫，早期只看數量的指標讓團隊過勞。

2. **[讓 14 個 LLM 拿到 AWS 金鑰後會做什麼：它們用的都是老招，現有偵測規則接得住（tl;dr sec #352、2026-10-29）](https://medium.com/@adan.alvarez/i-gave-14-llms-aws-keys-heres-what-they-wanted-to-do-next-48585761a11b)**
   - Adan Alvarez 讓 14 個模型在 13 個入侵後情境各回答 20 次，並把提出的指令對應到 CloudTrail 事件：14 個裡 12 個第一步都是 `GetCallerIdentity`；維持存取最常選的是建 IAM 使用者（113 次中 63 次）；情境提到有秘密時 87% 會去讀。沒提到防禦時只有約 1% 會想規避，但一旦告知會被記錄或 GuardDuty 已示警，約三分之一會想去動 CloudTrail 或 GuardDuty。
   - 同期 Datadog Security Labs 示範「偽造政策」攻擊：在不可信的內容前面加一段假的分類規則，就能讓 Jev 這類提示詞注入分類器的偵測召回率從 82.90% 掉到 3.88%（[Datadog](https://securitylabs.datadoghq.com/articles/jev-as-a-judge-how-counterfeit-policy-steers-jev/)）。**用 AI 判斷內容是否惡意，本身也會被內容操弄**。

3. **[SANS ISC 10/26~11/01：PHP2Shell 攻擊程式為何難穩定、Brotli 修補追蹤、OneNote 檔案拆解](https://isc.sans.edu/podcastdetail/10150)**
   - 10 月 26 日的 Stormcast 延續 Bojan Zdrnja 的分析：記憶體位移會隨 PHP 版本與 Linux 發行版不同，所以還沒出現穩定的公開攻擊程式，暫時無法升級的仍建議把 `session.upload_progress.enabled` 設為 0；同集另提 HPE ArubaOS 8／10 修補 72 個漏洞。10 月 27 日那集涵蓋 Apple 修補 304 個漏洞（含一個已遭利用的 CoreGraphics 漏洞）與用 DShield SIEM 搭配 ELK 做威脅獵捕，並提醒 PHP Windows 版的 Brotli 修補要比對雜湊值（[Stormcast 10/27](https://isc.sans.edu/podcastdetail/10152)）。
   - 值班日誌方面，Xavier Mertens 10 月 29 日寫如何在惡意程式分析實驗室架本機 Ghidra 伺服器（[ISC 日誌](https://isc.sans.edu/diary.html)），Didier Stevens 11 月 1 日記錄 OneNote 檔案的內嵌物件拆解（[原文](https://isc.sans.edu/diary/OneNote+File+Extraction/33478/)）。威脅等級在 10 月 22 日的黃色之後已回到綠色。

4. **[eMudhra 憑證後續：Windows 緊急移除 7 張憑證的預設信任；NIST 發布後量子密碼轉移指引](https://www.ithome.com.tw/news/180104)**（本週新進展）
   - 接續上期 eMudhra 中繼憑證私鑰幾乎全為零的事件，微軟發布 Windows 緊急更新，移除 7 張問題憑證的預設信任（iThome 資安日報 10 月 30 日）。若公司內有系統用的是 eMudhra 簽發的憑證，更新後連線會失敗。
   - NIST 完成協助企業轉移到後量子密碼標準的指引，配合今年白宮行政命令的期限（[NIST](https://www.nist.gov/news-events/news/2026/10/nist-report-provides-guidelines-transition-post-quantum-cryptography)；Risky Bulletin、2026-10-30）。這類轉移要先有一份「哪些系統用什麼加密與憑證」的清冊，跟憑證到期管理是同一份底稿。

## 台灣在地動態

1. **[全家行動購部分會員資料遭非法擷取，起因是委外廠商 91APP 資料庫遭自動化攻擊](https://www.ithome.com.tw/news/180105)**（本週新進展）
   - 全家 10 月 29 日發布重訊，已啟動應變、通報主管機關並通知會員，初步評估對財務、業務與營運無重大影響，並透過網站、電子郵件、簡訊與 App 提醒會員防詐。據 iThome 報導，91APP 公布的最大可能影響範圍涉及 1,329 家品牌、近 480 萬名消費者，攻擊紀錄可追溯到 10 月 3 日。
   - **一家委外的電商平台出事，上千個品牌要各自發公告、各自處理客訴**。這是本期「供應商一個入口、下游一起出事」的臺灣版本。

2. **[中選會財產申報網站的背景資料含 1,573 名候選人身分證字號，初判委外廠商疏失](https://www.ithome.com.tw/news/180037)**
   - 查詢畫面只顯示姓名與選區，但網站回傳給瀏覽器的 JSON 資料裡帶著身分證字號，打開瀏覽器開發者工具就看得到、不需登入。中選會 10 月 27 日暫停網站修正程式、當晚 7 時重新開放並通報主管機關；中選會稱資料以亂碼呈現，但專家指出那是機器可讀的 JSON、並未受到保護。
   - **後端沒過濾不該送到前端的欄位**，是委外開發驗收時最容易漏看的地方，因為畫面上看起來完全正常。

3. **[北韓駭客篩出 216 台可能未修補的 PHP 主機，臺灣在目標範圍內](https://www.ithome.com.tw/news/180068)**
   - CyFirma 揭露北韓相關基礎設施鎖定 PHP2Shell 的掃描活動（見上方漏洞第 1 條），臺灣列入主要目標。上期數位發展部盤點國內約 2.8 萬個對外 PHP 網站，這條說明已經有特定攻擊者在挑還沒修的對象。

4. **[DEVCORE 研究員公布 Pwn2Own 的 Edge 攻擊鏈：只用邏輯漏洞，串 5 個弱點突破沙箱](https://www.ithome.com.tw/news/180088)**
   - Orange Tsai 在 Pwn2Own Berlin 2026 展示的攻擊鏈，串連 5 個邏輯漏洞並濫用兩項 Windows 功能，從瀏覽器跳到作業系統層級執行程式，程式碼約 100 行、研究費時兩個月；微軟已於 5 月 15 日在 Edge 148.0.3967.70 修補 CVE-2026-45492、-45494、-45495。部分報導寫 4 個漏洞，數量以原始說明為準。
   - 這是臺灣研究者的成果，也提醒瀏覽器要保持自動更新：攻擊鏈公開後，任何還沒更新的舊版都成了有說明書的目標。

## 對 Simon 工作的影響評估

1. **PHP2Shell 從「嘗試」變成「已成功入侵」，Linux 主機要同時補 PHP 與核心，並優先處理有對外管理介面的設備**
   - 上期建議的「哪裡有 PHP」盤點，本週要再加一欄「核心版本」：Fragnesia 讓拿到網頁伺服器權限的攻擊者直接升到 root，2026-05-13 以前的核心都受影響。**建議的順序**：先處理有對外開放管理介面的網路設備（本週 Palo Alto 防火牆管理介面就是被這樣打的，管理介面應只從管理網段可達）；再處理對外的 Linux 網頁主機，PHP 與核心一起更新、核心更新後要重開機；最後是內部主機。
   - Brotli 那條也順手查：若有 .NET 8／9／10 或 Node.js 的內部系統，跟著原廠更新；在 Windows 上跑 PHP 的，用雜湊值確認是重新建置後的版本。這兩件事可以直接寫進 ISO 27001 BIA 表裡各系統的「修補責任人與修補來源」欄。

2. **邊界設備與虛擬化平台本週各有一個已遭利用的漏洞，建議對照機房實際使用的產品逐項確認**
   - Cisco ASA／FTD（SSL VPN 開著就受影響，8 月已更新過的也要再更新）、Ivanti Connect Secure、VMware ESX，全部已進 KEV。公司邊界設備與虛擬化平台的廠牌本期未掌握，**有用到哪一個就當週排更新**。若機房是 ESXi，特別注意 7.0 分支可能等不到修補，要排升級計畫；也建議確認 ESXi 的日誌有送到外部的日誌伺服器，主機本身的紀錄可能被抹掉。
   - 10 月 3 日災難復原演練用的是虛擬機還原，若還原平台正是 ESXi，待補的復原程序裡可以加一項「還原平台的版本與修補狀態」。另外，若公司有用 Microsoft System Center 監控 Veeam，Veeam Management Pack 9.x 已確定不會修補，要升到 13.1；只用 Veeam Backup & Replication 的不在這次範圍內。

3. **Teams 外部聊天冒充 IT、Okta 自助註冊被濫用：建議確認外部存取與自助註冊設定**
   - Arctic Wolf 記錄的 400 起案例都是從外部租戶私訊員工開始的。**建議兩個低成本檢查**：到 Teams 系統管理中心確認外部存取是「開放所有網域」還是只允許合作夥伴網域，能收緊就收緊；再發一則簡短公告給同仁：IT 不會用 Teams 外部帳號聯絡、也不會在電話裡要人安裝遠端軟體，遇到就回報。
   - 身分管理方面，檢查 Entra ID 或其他身分平台是否開了「使用者可自行註冊或加入應用程式」，以及是否有不明的新帳號或新裝置註冊。TeamViewer 本週也修補了遠端執行漏洞（TV-2026-1011），公司端點若有裝，順便一起更新。

4. **摩爾多瓦的入口是沒設驗證的日誌服務，可以放進 10 月份資安 KPI 簡報當案例**
   - 建議盤點機房裡的日誌與監控介面（日誌伺服器、Grafana、Kibana、設備的網頁管理頁）是否都要登入、是否只在管理網段可達；這也是 ISO 27001 資產清冊可以補的一欄。
   - 10 月份資安 KPI 簡報 11 月初要交，本期可直接用的材料：CISA 一週新增 10 個 KEV，加上「VMware ESX CVSS 2.7 卻已遭利用」對照「PHP2Shell CVSS 9.2、EPSS 近 100%」，說明修補優先順序要同時看 KEV、EPSS 與 CVSS，不能只看分數高低。
