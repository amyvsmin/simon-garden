---
title: "資安週報 2026-10-26"
date: 2026-10-26
type: weekly-intel
issue: "W24"
cover_range: "2026-10-19 ~ 2026-10-25"
tags:
  - 資安週報
  - php2shell
  - supply-chain
  - backup
  - zero-day
  - ransomware
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "PHP2Shell（CVE-2026-109618、CVE-2026-109619，CVSS v4.0 皆 9.2）10 月 21 日修補，影響 2012 年以來的 PHP 預設設定，提前走漏導致公告前後數小時內攻擊嘗試從數千筆暴增到數百萬筆；EPSS 兩者都超過 99.9%，但到 KEV 目錄 2026.10.23 版仍未列入。數位發展部盤點國內約 2.8 萬個 PHP 對外網站，臺灣廠商眾至的防火牆與郵件產品也受影響"
  - "備份工具成了攻擊者的入口：AOMEI Backupper 的更新伺服器在 2026 年 4 月至 7 月間被短暫竄改、推送 CROSSROAD 下載器與 SHINYROAD 後門；ConnectWise Cloud Backup 的 Microsoft 365 API 密鑰遭竊，Huntress 統計至少 162 個租戶遭入侵，ConnectWise 已暫停該服務"
  - "CISA 一週新增 8 個 KEV 條目（Plex 四連、SiteGuard WAF、Siemens Software Center、Arista VeloCloud、Collabora），並發布 SafePay 勒索軟體聯合通報 AA26-293A，點名沒開 MFA 的 VPN 帳號與邊界設備；臺灣方面 91APP 查出入口是未修補的 Appsmith 漏洞，Zeabur 第二次遭駭後宣布年底停運"
tldr: "本週由 PHP2Shell 主導：一個影響 13 年 PHP 預設設定、無需驗證即可遠端執行的漏洞在修補前走漏，攻擊嘗試數小時內衝到數百萬筆，國內約 2.8 萬個網站受影響。對 Simon 最直接的另一條線是備份工具被當成入口：AOMEI 更新管道遭竄改、ConnectWise Cloud Backup 的 M365 金鑰遭竊；CISA 另發 SafePay 勒索軟體通報，點名沒有 MFA 的 VPN。整體嚴重程度判為高。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W24 — 2026-10-26

> 涵蓋範圍：2026-10-19 ~ 2026-10-25

## 本週重點摘要

本週幾乎被 PHP2Shell 一件事占滿。PHP 在 10 月 21 日釋出 8.5.12、8.4.27、8.3.36、8.2.35，修補兩個無需驗證就能遠端執行程式的漏洞，影響範圍是 2012 年以來所有對外提供網頁的 PHP 預設設定。漏洞細節在修補前一天走漏，Cloudflare 執行長描述的攻擊量是公告前 10 小時數千筆、公告後 2 小時數十萬筆、之後上看數百萬筆；Amazon 的蜜罐甚至在公開前就抓到利用。EPSS 兩者都超過 99.9%，但 CISA 到本週最後一版 KEV 目錄都還沒列入，SANS ISC 也說目前還沒看到穩定可用的公開攻擊程式。PHP 基金會另於 10 月 23 日表示還有第三個待修補的遠端執行漏洞 CVE-2026-115560。

第二條線是備份與管理工具的供應鏈。Google 揭露 AOMEI Backupper 的更新伺服器在 2026 年 4 月到 7 月間多次被竄改幾分鐘，剛好在那時檢查更新的電腦會被裝上後門；ConnectWise Cloud Backup（前身 SkyKick）的 Microsoft 365 API 密鑰遭竊，攻擊者直接用客戶當初授權給備份程式的權限進入租戶。這兩起事件的共通點是：備份工具本來就需要高權限，攻擊者只要拿下工具本身，就不必一台一台攻破客戶。

第三條線是官方通報與漏洞清單。CISA 一週新增 8 個 KEV 條目，並與 FBI 等機關發布 SafePay 勒索軟體通報 AA26-293A，入口集中在沒開 MFA 的 VPN 帳號、遭竊或猜中的密碼與未修補的邊界設備。同週還有 GitLab 滿分遠端執行漏洞、Arista VeloCloud 今年第三個零日、Oracle 季度更新 1,295 個漏洞。臺灣方面，91APP 公布調查結果，入口是未修補的 Appsmith 漏洞，並發現 AI 自動化攻擊工具 ARTEX 的痕跡；Zeabur 第二次遭駭後宣布年底停止營運。

## 重大漏洞與威脅

1. **[PHP2Shell：13 年來的 PHP 預設設定都能被無驗證遠端執行，修補前一天走漏](https://www.ithome.com.tw/news/179889)**
   - CVE-2026-109618 與 CVE-2026-109619 的成因都是請求處理到一半記憶體耗盡：第一個是 PHP 先登記一筆尚未建好的資料表項目，記憶體不足時的清理程式信任這筆半成品，釋放了攻擊者控制的記憶體；第二個發生在檔案上傳處理途中當掉，請求記憶體被釋放、工作階段資料卻還指著它（[Calif 技術說明](https://calif.io/php2shell/)）。Calif 在 8 月 11 日先找到，Wiz 與 OpenAI 隨後各自獨立發現。修補版是 **8.5.12、8.4.27、8.3.36、8.2.35；8.1 與更舊的版本官方已不再更新**，要問發行版或設備廠商有沒有回補。
   - 走漏過程本身也值得記下：PHP 基金會指 Calif 在影片中洩露細節、Chainguard 提前約 6 小時發布修補後的映像，研究人員據此不到一小時就重建出攻擊程式（DEW #171、2026-10-22）。SANS ISC 10 月 21 日把 InfoCon 調到黃色，10 月 23 日的總結說**修補是唯一可靠的防禦**，暫時無法升級的先把 `session.upload_progress.enabled` 設為 0、把應用隔離，WAF 規則只能爭取時間（[SANS ISC](https://isc.sans.edu/diary/PHP+Vulnerability+WrapUp/33450/)）。Censys 掃到約 620 萬台主機跑著受影響版本，Palo Alto Networks 估計對外實例逾 2,260 萬個；最讓人擔心的是不會再收到更新的嵌入式設備與網路設備。
   - 指標（CVE-2026-109618）：CVSS 9.2（v4.0）｜EPSS 99.98%（百分位 99.98）｜KEV：未列入
   - 指標（CVE-2026-109619）：CVSS 9.2（v4.0）｜EPSS 100.00%（原值 0.99997，百分位 99.99）｜KEV：未列入
   - 指標（CVE-2026-115560）：CVSS 查無｜EPSS 查無｜KEV：未列入（尚待修補）

2. **[GitLab CVE-2026-110264：自 7.0 以來所有版本，未登入即可遠端執行（CVSS 10.0）](https://bleepingcomputer.com/news/security/gitlab-warns-of-new-max-severity-code-execution-vulnerability)**
   - 10 月 22 日公告，漏洞在 Ruby 內建的正規表示式引擎 Onigmo，編譯特製正規表示式時發生整數溢位，在特定條件下沒有帳號的攻擊者也能在伺服器上執行程式；GitLab 一次替 7 個分支釋出修補（[iThome](https://www.ithome.com.tw/news/179906)）。各分支的確切修補版號搜得的來源說法不一，**請以 GitLab 官方公告為準**。
   - 這跟 10 月 12 日修補的 CI/CD 正規表示式漏洞 CVE-2026-97229（修補版 19.4.2、19.3.5、19.2.8）是同一類問題、不同編號，兩週內兩個，自架 GitLab 要連續追兩次更新。
   - 指標：CVSS 10.0｜EPSS 1.00%（百分位 62.6）｜KEV：未列入

3. **[Arista VeloCloud Orchestrator CVE-2026-114625：唯讀帳號就能經 SQL 注入取得操作員權限，今年第三個零日](https://bleepingcomputer.com/news/security/arista-patches-new-velocloud-orchestrator-zero-day-exploited-in-attacks)**
   - Arista 10 月 22 日公告已遭利用，影響地端部署的 VeloCloud Orchestrator：只要有任何有效登入，連唯讀帳號都算，就能取得操作員層級控制（[The Hacker News](https://thehackernews.com/2026/10/cisa-flags-two-actively-exploited.html)）。這是 VeloCloud 今年第三個被修補的零日，CISA 10 月 23 日列入 KEV、期限 10 月 26 日。修補版號本次未能從原廠公告查證，請以 Arista 公告為準。
   - 指標：CVSS 9.9（據 The Hacker News）｜EPSS 1.03%（百分位 63.3）｜KEV：已列入（2026-10-23）

4. **[Collabora 內建 CODE 伺服器 CVE-2026-110447 進 KEV](https://thehackernews.com/2026/10/cisa-flags-two-actively-exploited.html)**（本週新進展）
   - 上期報導攻擊者用它在 Nextcloud 伺服器植入網頁後門，本週 CISA 於 10 月 23 日列入 KEV，期限 10 月 26 日。修補版仍是 26.4.303；不需要內建文件伺服器的，直接移除該應用。EPSS 從上期的 1.23% 跳到 12.33%。
   - 指標：CVSS 9.2（據 The Hacker News）｜EPSS 12.33%（百分位 96.2）｜KEV：已列入（2026-10-23）

5. **[Plex2Shell 四漏洞串接，揭露隔天就被用來裝挖礦程式與代理後門](https://thehackernews.com/2026/10/hackers-exploit-plex2shell-flaws-to.html)**
   - Plex Media Server 的四個漏洞串起來可繞過驗證，概念驗證公開後一天就開始被利用，未修補的伺服器被裝上加密貨幣挖礦程式與 Linux 反向代理（Risky Bulletin、2026-10-21）。CISA 10 月 20 日一次把四個 CVE 全部列入 KEV。家用或部門自架影音伺服器常被當成「不重要」而沒人管，卻同樣是連上網的伺服器。
   - 指標（CVE-2026-96654）：CVSS 查無｜EPSS 1.95%（百分位 80.1）｜KEV：已列入（2026-10-20）
   - 指標（CVE-2026-96656）：CVSS 查無｜EPSS 1.79%（百分位 78.1）｜KEV：已列入（2026-10-20）
   - 指標（CVE-2026-96652）：CVSS 查無｜EPSS 1.82%（百分位 78.6）｜KEV：已列入（2026-10-20）
   - 指標（CVE-2026-96655）：CVSS 查無｜EPSS 1.64%（百分位 76.2）｜KEV：已列入（2026-10-20）

6. **[PwnEscape CVE-2026-99999：KVM 虛擬機可經網路堆疊逃逸到主機](https://www.csoonline.com/article/4236460/linux-kernel-gets-a-fix-for-a-flaw-that-enabled-attackers-to-escape-vms.html)（Risky Bulletin、2026-10-19）**
   - 漏洞在 Linux 核心的校驗和卸載路徑，客體虛擬機能在主機核心驗證完 IPv4 標頭之後再改動它，進而讀取主機記憶體，研究人員在受控環境中做到客體逃逸到主機。影響使用 virtio-net／TAP 網路的 KVM 主機，AWS 稱 4.4 到 6.18 的未修補核心都可能受影響，托管的 EC2、Lambda、Fargate 不受影響。據二手報導，穩定分支修補版如 6.1.190、6.6.159、6.12.113（另有 5.10、5.15、6.18、7.2 分支），實際以各發行版公告為準，更新後要重開機。
   - 這是 Pwn.ai 的 Paulos Yibelo 用 AI 漏洞研究工具找到的，起因是 Vercel 的 100 萬美元沙箱逃逸競賽，他拿到最高獎金 5 萬美元。目前沒有遭利用的報告。
   - 指標：CVSS 9.3（v3.1，據二手報導引述）｜EPSS 0.79%（百分位 55.9）｜KEV：未列入

7. **[BlackX UEFI 開機套件：已裝滿修補的 Windows 仍被 Baton Drop 繞過 Secure Boot](https://bleepingcomputer.com/news/security/blackx-uefi-bootkit-exploits-baton-drop-flaw-to-bypass-secure-boot)**
   - 卡巴斯基揭露的 BlackLotus 變種（Risky Bulletin 10 月 23 日已收錄、BleepingComputer 10 月 24 日報導），用來攻擊中亞目標。它利用的 Baton Drop 是 2022 年 1 月就修補的 CVE-2022-21894，**受害電腦的 Windows 更新都是最新的，問題出在管理者沒有手動套用額外的 Secure Boot 撤銷設定**，有漏洞的舊開機載入程式仍被信任。歸因說法不一：BleepingComputer 寫中等信心指向 APT41，Risky Bulletin 標題寫 APT41、內文寫 APT42（Risky Bulletin、2026-10-23）。
   - 這條的教訓跟 2023 年 BlackLotus 相同：微軟對 CVE-2023-24932 的修補也需要管理者分階段手動啟用撤銷，**「Windows Update 顯示已是最新」不等於開機鏈已受保護**。
   - 指標（CVE-2022-21894）：CVSS 查無｜EPSS 6.77%（百分位 93.9）｜KEV：未列入
   - 指標（CVE-2023-24932）：CVSS 6.7（據 The Hacker News 2023 年報導）｜EPSS 11.82%（百分位 96.1）｜KEV：未列入

8. **[Langflow CVE-2026-105740 遭利用，已登入即可遠端執行（CVSS 9.9）](https://thehackernews.com/2026/10/langflows-critical-authenticated-rce.html)**
   - 影響 1.9.0 以前的版本，GreyNoise 觀察到有來源 IP 嘗試取出環境變數；iThome 引述的蜜罐數據是 10 月 22 日前記錄 3,460 次攻擊嘗試。修補版是 1.9.0；暫時不能升級的把 `LANGFLOW_AUTO_LOGIN` 設為 false、不要直接對外開放。部分二手來源稱已進 KEV，本期以 KEV 原始檔實查為準：未列入。
   - 指標：CVSS 9.9｜EPSS 1.05%（百分位 64.0）｜KEV：未列入

9. **其他本週修補一覽**
   - Oracle 10 月季度更新修補 1,295 個漏洞；Fortinet 10 月 21 日修補 FortiOS、FortiManager、FortiAnalyzer、FortiMail、FortiAuthenticator 五大系列的多個漏洞，詳細資訊預計 11 月 10 日才公布（[iThome](https://www.ithome.com.tw/news/179889)）；BIND 修補 CVE-2026-94300；Apache Airflow 修補兩個讓 SSH／SFTP 連線預設停用主機金鑰驗證的漏洞（Risky Bulletin、2026-10-19、10-23）。
   - SiteGuard Server Edition（日本常見的網頁應用防火牆）的指令注入 CVE-2026-106931 遭利用來接管 WAF 本身，CISA 10 月 20 日列入 KEV；同日另列 Siemens Software Center 的搜尋路徑漏洞 CVE-2026-110936。
   - 指標（CVE-2026-106931）：CVSS 查無｜EPSS 2.53%（百分位 84.8）｜KEV：已列入（2026-10-20）
   - 指標（CVE-2026-110936）：CVSS 查無｜EPSS 0.97%（百分位 61.5）｜KEV：已列入（2026-10-20）
   - 指標（CVE-2026-94300）：CVSS 查無｜EPSS 0.95%（百分位 61.1）｜KEV：未列入

10. **本期 KEV 數量對照**
    - CISA 在 2026-10-19 至 2026-10-25 新增 8 個 KEV 條目，目錄版本 2026.10.23、總數 1,756 筆（上期 1,748 筆）。依加入日：10/20 Plex CVE-2026-96652、-96654、-96655、-96656，SiteGuard CVE-2026-106931，Siemens CVE-2026-110936；10/23 Arista CVE-2026-114625、Collabora CVE-2026-110447。
    - **本週最好的對照組是 PHP2Shell**：EPSS 幾乎頂到 100%、全世界都在掃，卻沒有進 KEV。KEV 要的是「已確認被成功利用」的證據，大量攻擊嘗試不等於成功入侵；EPSS 則是預測被利用的機率。兩個指標看的是不同的東西，這正是不能只等 KEV 才動手的例子。

## 攻擊趨勢與事件

1. **[勒索集團 n0n 經海運 IT 供應商打進 40 多家港務與航運公司（Risky Bulletin、2026-10-23）](https://news.risky.biz/risky-bulletin-supply-chain-attack-lets-ransomware-group-inside-40-shipping-companies/)**
   - 9 月中才出現的 n0n 在 10 月 12 日把 40 多家港務局、碼頭營運商與航運公司貼上外洩網站，跨 18 國、勒索金額合計約 12 億美元，多數受害者拒付、資料遭公開。資安公司 CyDome 指出約半數受害者是韓國海運 IT 平台商 CyberLogitec 的客戶，該公司網站已停擺數週，研判是共同入口。
   - n0n 上線一個多月已列出 140 多個受害者，NCC Group 估計若算進第三季，會是僅次於 Qilin 與 The Gentlemen 的第三活躍集團。**一個供應商被打，下游 40 家一起出事**，跟下面兩起備份工具事件是同一個模式。

2. **[備份工具被當成入口：AOMEI 更新伺服器遭竄改、ConnectWise Cloud Backup 的 M365 金鑰遭竊（Risky Bulletin、2026-10-19）](https://www.bleepingcomputer.com/news/security/hackers-hijack-aomei-update-servers-to-secretly-spread-malware/)**（上期未收錄，本期補上）
   - Google 10 月 15 日揭露，UNC7017 在 2026 年 4 月至 7 月間多次竄改 AOMEI Backupper 的更新與通知伺服器設定檔，每次只維持 5 到 10 分鐘，剛好在那時檢查更新的電腦會收到 CROSSROAD 下載器：它把合法的遠端管理工具 Radmin 解到本機、建立每 3 小時執行一次的排程工作、刪除自己，再由 SHINYROAD 後門接手遠端控制；同一套更新機制也服務 AOMEI 的遠端桌面工具 AnyViewer。最早的訊號是 5 月 28 日，ManageEngine 的端點軟體發現兩家不相干公司的 AOMEI Backupper 突然裝了 Radmin。
   - ConnectWise Cloud Backup（前身 SkyKick）則是它存取客戶 Microsoft 365 用的 API 密鑰被偷，攻擊者自約 10 月 15 日起從 144.172.64[.]128 登入，Huntress 統計至少 162 個租戶遭入侵、近千個租戶出現該 IP 的登入活動（[BleepingComputer](https://www.bleepingcomputer.com/news/security/hackers-breach-microsoft-365-tenants-via-connectwise-supply-chain-attack/)）。微軟研判攻擊者是濫用客戶先前授權給該應用程式的權限；ConnectWise 已暫停 Cloud Backup 及相連的 SaaS Security、Cloud Management，稱尚無備份資料遭竊的跡象。Risky Bulletin（2026-10-23）引述微軟，將此事件歸給中國背景的 Storm-0940，本期其他來源未能佐證。

3. **[CISA 等機關發布 SafePay 勒索軟體通報 AA26-293A](https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-293a)**
   - 10 月 20 日由 CISA、FBI、美國特勤局與國際夥伴聯合發布。SafePay 自 2024 年起活躍，報導引述受害組織約 600 個、以關鍵基礎設施為主；入口主要是外洩或暴力破解的帳密、利用 VPN 存取，以及有漏洞的邊界設備與釣魚。
   - 事件應變紀錄裡反覆出現的細節是**沒有 MFA 的 VPN 帳號**：NCC Group 記錄過 FortiGate 政策設定錯誤，讓本機與 LDAP 群組都能登入 VPN、等於繞過 MFA；Blackpoint 另記錄冒充 IT 服務台、經 Teams 要受害者裝遠端軟體的手法。通報建議落實 MFA 與身分存取管理，並優先修補 KEV 上的邊界設備漏洞。

4. **[AI 自動化攻擊走進實戰：ARTEX 代理打日韓與臺灣、有人花 5,000 美元 token 入侵百餘網站（Risky Bulletin、2026-10-21／10-23）](https://news.risky.biz/risky-bulletin-hacker-hijacks-10-of-tor-exit-nodes/)**
   - GMO Cybersecurity 稱有攻擊者用中國的 AI 代理 Artex 入侵至少 20 家日本企業，同一代理月初也被用來攻擊南韓銀行；臺灣 91APP 事件也查出 ARTEX 的攻擊痕跡（見臺灣段）。NorForge 記錄一名疑似中國駭客用 DeepSeek 與 Claude Code 入侵 John Deere、SharkNinja 等 100 多個網站，token 花費約 5,000 美元；VULONE 則記錄一個中國關聯集團從單一伺服器發動 66 起 AI 驅動的入侵。
   - 同週 tl;dr sec 收錄 ITRES Labs 的實驗：用 ChatGPT 依研討會投影片照片重建兩個 Windows 核心技巧，24 小時工時就在開著 VBS／HVCI 的 Windows 11 上拿到 SYSTEM，原作者花了四個月；作者的結論是「技巧沒有變得更危險，但重現的成本變低了」（tl;dr sec #351、2026-10-22）。

5. **[開發與 AI 工具供應鏈一週四起：LiteLLM、OVHcloud CLI、TeamUpdraft、Rank Math（Risky Bulletin、2026-10-19／10-21／10-23）](https://news.risky.biz/risky-bulletin-supply-chain-attack-lets-ransomware-group-inside-40-shipping-companies/)**
   - LiteLLM 的 PyPI 與 Docker 發行版被加料，1.107.0 版內含竊取雲端、開發與 AI 服務憑證的程式，是該專案今年第二次出事；OVHcloud 命令列工具 v0.11.0 到 v0.15.0 的惡意版本上架不到兩小時，攻擊者用的是一名開發者的 GitHub 帳號；WordPress 外掛開發商 TeamUpdraft 的後台資料庫遭入侵，攻擊者用偷來的連線金鑰把惡意外掛推到客戶網站；Rank Math SEO Pro 在 10 月 15 日 20:02 到 16 日 07:12（UTC）之間下載的版本含後門。
   - ProjectDiscovery 另示範用不到 50 美元、125 筆惡意訓練資料就能讓開源模型在聽到觸發詞時外洩 `.env` 與 SSH 金鑰，平常的測驗分數完全正常（tl;dr sec #351、2026-10-22）。**本機跑的模型與工具套件，跟其他軟體一樣要管來源與版本**。

6. **[有人駭入 330 多台 Tor 中繼站改成出口節點，竊聽一成的出口流量（Risky Bulletin、2026-10-21）](https://news.risky.biz/risky-bulletin-hacker-hijacks-10-of-tor-exit-nodes/)**
   - 攻擊者以 Ebury Linux 惡意程式感染中繼伺服器，10 月 2 日到 5 日之間攔截 SSH 連線、把郵件連線降級成未加密再竊取內容，規模超過 Tor 出口節點的 10%，由一名瑞士工程師發現。這是 Tor 史上最大的資安事件之一，也提醒：**經過不可信網路的連線，SSH 主機金鑰驗證與郵件強制加密不能關**。

## 防禦與偵測

1. **[DEW #171：偵測規則要對著「實際的事件欄位」驗證，資安代理要像新人一樣做到職訓練（DEW #171、2026-10-22）](https://www.detectionengineering.net/p/dew-171-threat-emulation-context)**
   - Elastic Security Labs 把軟體測試的單元、整合、回歸、端到端四層套到偵測測試上，並示範一條憑記憶寫的規則沒觸發，改用實際驗證過的 CloudTrail 欄位才觸發。1Password 的 Wade Wells 主張資安代理最缺的是脈絡：要給它規則庫加處置手冊、系統與負責人的對照表，以及一份列出關鍵日誌來源、類別與優先順序的日誌清冊。
   - Julien Vehent 指出 tcpdump、netcat 這類工具以前是很好的警報線，現在 AI 代理排錯也會用它們，偵測必須分得出「人、他的代理、攻擊者」三種身分，因此要給代理獨立身分。DePalma 的 AI DFIR 工具包整理了 Claude Code、Cursor 等工具留下的鑑識跡證（例如 Claude Desktop 的 MCP 日誌留有完整工具呼叫紀錄），並附 Sigma、YARA、Suricata 規則。

2. **[SANS ISC 值班日誌 10/19~10/25：PHP2Shell 三篇、YARA-X 1.22.0](https://isc.sans.edu/diary/Critical+PHP+Vulnerability+CVE2026109618+CVE2026109619+infocon+yellow/33440/)**
   - Johannes Ullrich 10 月 21 日把 InfoCon 調到黃色，10 月 23 日的總結（見上方漏洞第 1 條）建議做三件事：盤點系統找出受影響的應用、暫時無法修補的就隔離、把嵌入式設備與網路設備跟網際網路隔開，並做一次桌上演練；他特別提醒部分流出的「攻擊程式」可能是寄生型，會反咬執行它的人。Bojan Zdrnja 同日另一篇討論 PHP2Shell 的可利用穩定度（[原文](https://isc.sans.edu/diary/Reliable+php2shell+exploitability/33452/)）。
   - Didier Stevens 10 月 25 日記錄 YARA-X 1.22.0 發布（[原文](https://isc.sans.edu/diary/YARAX+1220+Release/33454/)）。本週唯一不是 PHP 的日誌就是這篇，也說明了這週值班人員的注意力全在哪裡。

3. **[PHP2Shell 偵測與檢查工具（tl;dr sec #351、2026-10-22；DEW #171、2026-10-22）](https://tldrsec.com/p/tldr-sec-351)**
   - OpenAI 釋出 `php2shell-checker`、Corelight 釋出 `php2shell-detect` 網路偵測規則，Datadog Security Labs 發布每個漏洞的觸發方式與利用步驟圖解；Syhunt 提供把 POST 請求限制在 8 MB 的 `.htaccess` 設定，**這只是緩解、不是修補**。Censys 架了一個追蹤 PHP2Shell 修補進度的網站。
   - 雲端方面，Datadog 開源 pathrunner，把 pathfinding.cloud 目錄裡的 AWS IAM 提權路徑自動化，每一步都對應到有時間戳的 CloudTrail 事件，可拿來檢查偵測規則有沒有涵蓋同一招的不同變形。

4. **[憑證生態本週三件事：GoDaddy 撤銷約 40 萬張、eMudhra 根憑證遭三大瀏覽器除名、Chrome 預設警告 HTTP 網站（Risky Bulletin、2026-10-21／10-23）](https://news.risky.biz/risky-bulletin-supply-chain-attack-lets-ransomware-group-inside-40-shipping-companies/)**
   - GoDaddy 因文件錯誤撤銷 40 多萬張憑證（多數由旗下 Starfield CA 簽發）；印度 CA eMudhra 有 8 張中繼憑證的私鑰幾乎全是零、上線 18 個月，可被用來偽造憑證，Apple、Google、Mozilla 已不再信任其根憑證，eMudhra 將退出 SSL 憑證業務。Chrome 另開始對所有使用者預設警告不安全的 HTTP 網站，並加入 ClickFix 攻擊的即時偵測：複製的指令會比對 Safe Browsing、可疑就警告。
   - 搭配上期 Let's Encrypt 縮短到 64 天的消息，**憑證被撤銷、被除名、效期縮短都會讓手動管理的服務突然斷線**，憑證清冊與到期提醒的價值越來越高。

## 台灣在地動態

1. **[數位發展部盤點約 2.8 萬個國內 PHP 對外網站，資安署發警訊要求儘速修補](https://www.ithome.com.tw/news/179878)**
   - 資通安全署 10 月 22 日發布兩則警訊，呼籲使用 PHP、Node.js、Go 的政府機關、學校與企業儘速確認版本並更新，已透過 N-ISAC 與 TWCERT/CC 通知相關單位；數位發展部緊急盤點約 2.8 萬個使用 PHP 的對外網站，要求儘速修補、必要時暫停服務（[iThome](https://www.ithome.com.tw/news/179884)）。日本首相高市早苗也公開呼籲網站管理者儘速修補。
   - 國內廠商眾至資訊 10 月 22 日公告旗下多款郵件防護與防火牆產品受影響，首波修補涵蓋防火牆 NU 與 HiGuard 系列、郵件伺服器 MS 系列與郵件歸檔 MA 系列，更新檔從官網下載專區或技術支援信箱取得（[iThome](https://www.ithome.com.tw/news/179924)）。**這是「設備裡面藏著 PHP」的實例**，用了這類設備的單位不能只看自己的網站。

2. **[91APP 公布調查：入口是未修補的 Appsmith 漏洞，查出 AI 攻擊工具 ARTEX 痕跡](https://www.ithome.com.tw/news/179923)**（本週新進展）
   - 接續上期的資安重訊。91APP 10 月 22 日公布，攻擊者利用內部系統未修補的 Appsmith 漏洞進入，取得 Commerce Cloud 的訂單資料；信用卡等支付資訊未外洩，Marketing Cloud、91APP Payments 與 iCHEF 未受影響，受影響的品牌與會員數預計下週公布。調查中發現 ARTEX 這類 AI 自動化攻擊工具的痕跡，顯示同一波攻擊不只在日韓、臺灣也有案例。
   - 下游影響已經出現：滿心、清淨海等多家上市櫃品牌陸續發布重訊或防詐提醒，部分消費者收到冒用商家名義的詐騙郵件，數位發展部數位產業署已啟動行政檢查（[iThome 資安週報](https://www.ithome.com.tw/news/179896)）。**入口是一套內部低程式碼工具**，這類「內部用、沒對外」的系統最容易被排在修補清單後面。

3. **[臺灣新創 Zeabur 第二次遭駭，攻擊者讀取逾 321 萬筆環境變數，宣布年底停運](https://www.ithome.com.tw/news/179804)**
   - Zeabur 10 月 19 日公布初步調查，攻擊者讀取超過 321 萬筆環境變數與 32 萬筆帳號資料，並發現 8 月那次事件後仍有部分憑證沒有完成輪替；攻擊者最初如何取得憑證仍未查明。創辦人林沅霖宣布平台年底結束營運，部分服務 12 月 1 日起陸續關閉，專用伺服器與共享叢集 12 月 31 日前關閉。
   - **事件後的憑證輪替沒做完，就等於把門留給同一批人**。用過 Zeabur 部署服務的使用者，存在環境變數裡的 API 金鑰與資料庫密碼都應視為已外洩、全部更換。

## 對 Simon 工作的影響評估

1. **PHP2Shell 先盤點「哪裡有 PHP」，設備也要算進去，順手補進 ISO 27001 的資產與 BIA 表**
   - 修補很單純（升到 8.5.12、8.4.27、8.3.36、8.2.35），難的是找出所有跑 PHP 的地方。**建議分三類清點**：自架的內部網站與管理工具（phpMyAdmin、WordPress、內部表單系統）；網路與安全設備的管理介面（防火牆、郵件閘道、NAS，眾至的產品就是本週的實例）；機房裡的 UPS、空調、溫濕度與門禁監控這類嵌入式網頁介面。前兩類問原廠要修補版本，第三類多半等不到修補，就確認它們只能從管理網段連到。
   - 這份清單可以直接變成資產清冊的一欄「是否含 PHP／版本」。ISO 27001 已在做 BIA，老闆要的「超細」，這種一查就能交代的欄位正好用得上；PHP 8.1 以前的版本官方已不更新，也可以順便在同一欄標出「已結束支援」。

2. **備份工具本身就是高權限入口：檢查端點上的 AOMEI、以及 M365 裡授權給第三方的應用程式**
   - AOMEI 與 ConnectWise 兩起事件的共同點是：攻擊者沒去打你，而是打你信任的備份工具。**建議做兩個低成本檢查**：一是公司端點有沒有裝 AOMEI Backupper 或 AnyViewer（員工自行安裝也算），有的話查有沒有不明的 Radmin 資料夾與每 3 小時執行一次的排程工作；二是到 Entra ID 的企業應用程式清單，看哪些第三方程式擁有讀寫整個租戶信箱或檔案的權限，用不到的撤銷，還在用的記下負責人。
   - 公司主力備份是 Veeam，這兩起事件不直接落在它身上，但道理相同：上期提到的 Veeam 12.3.2 P4 與 v12 將於 2027-02-28 結束支援仍要排程處理。可以在 BIA 表的備份備援做法欄多記一項「備份系統本身的權限範圍與更新來源」，這也對應 ISO 27001 的供應商管理要求。

3. **SafePay 通報點名「沒 MFA 的 VPN 帳號」，建議實查一次 VPN 帳號是否都真的被 MFA 管到**
   - 通報與事件紀錄都指出，問題常出在設定細節而不是有沒有買 MFA：NCC Group 的案例是 FortiGate 政策讓本機與 LDAP 群組都能登入 VPN，MFA 形同虛設。**實查方式**：把 VPN 允許登入的群組與本機帳號列出來，逐一確認是否都經過 MFA，並看最近一個月有沒有非上班時段或陌生來源的成功登入。
   - 同週 Fortinet 修補了 FortiOS 等五大系列、細節 11 月 10 日才公開，若公司邊界設備是 Fortinet，建議本週先更新、不要等細節公布後攻擊者也看懂了才動。

4. **Secure Boot 撤銷與年度災難復原演練的程序補件可以一起處理**
   - BlackX 證明 Windows 更新裝滿不代表開機鏈安全，微軟針對 CVE-2023-24932 的 Secure Boot 撤銷需要管理者手動分階段啟用。建議先挑幾台伺服器確認撤銷是否已啟用，再決定要不要全面推。
   - 10 月 3 日演練找出的兩個問題（還原後的 VM 網路名稱要與正式區一致、RED HAT 5 加網卡會改寫 HOST 檔）還在待補程序。補程序時可以順便加一條「還原後的開機與驗證檢查」，把 Secure Boot 狀態也列進去；另外，本期 8 個 KEV 條目與 PHP2Shell「EPSS 近 100% 卻沒進 KEV」的對照，可以放進 10 月份資安 KPI 簡報（11 月初交），說明為什麼修補優先順序不能只看 KEV。
