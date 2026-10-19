---
title: "資安週報 2026-10-19"
date: 2026-10-19
type: weekly-intel
issue: "W23"
cover_range: "2026-10-12 ~ 2026-10-18"
tags:
  - 資安週報
  - zero-day
  - edge-devices
  - backup
  - supply-chain
  - ot-security
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "邊界設備零日一週連發：Ivanti Connect Secure CVE-2026-104935 被串成三段攻擊鏈，攻擊者拿到 root 後專挖 AD 裡的 LAPS 本機管理者密碼與 BitLocker 復原金鑰，還刪日誌躲過原廠完整性檢查工具，其中提權那一段至今未修；同週 Cisco 郵件閘道、PAN-OS 管理介面、BeyondTrust 遠端支援也都是遭利用中的零日，CISA 一週新增 9 個 KEV 條目"
  - "備份平台本週兩個訊號：Veeam 10 月 6 日釋出 12.3.2 P4，修補 CVE-2025-64393（CVSS 9.4），只要有 Backup Viewer 這個最低權限角色就能在備份伺服器上執行程式，且 v12 將於 2027-02-28 結束支援；上期提到的 AhsayCBS 兩漏洞本週進 KEV，原廠先前的修補確認無效，改發 hotfix 10.3.4.45"
  - "微軟 10 月例行更新修補 1,411 個漏洞（各家計數 1,407 至 1,417），含一個遭利用的 Windows Shell 零日 CVE-2026-96951 與 10 個 DHCP Server 遠端執行漏洞；另提醒 Windows Update 部分憑證將於 2027 年 5 月 17 日與 6 月 19 日到期，沒裝必要更新的機器屆時收不到修補。台灣方面，美方查封永信至誠網域並揭露約 20 所臺灣大專院校遭其釣魚工具入侵，91APP 發布 Commerce Cloud 資料庫遭自動化攻擊的重訊"
tldr: "本週是邊界設備零日的密集週：Ivanti VPN 被串成三段攻擊鏈、入侵後專偷 AD 的 LAPS 密碼與 BitLocker 金鑰，Cisco 郵件閘道、PAN-OS、BeyondTrust 也都是遭利用中的零日，CISA 一週新增 9 個 KEV。對 Simon 最直接的是 Veeam 12.3.2 P4 修補了只需最低權限角色就能在備份伺服器執行程式的漏洞，且 v12 明年 2 月底結束支援；微軟另提醒 Windows Update 憑證 2027 年中到期。整體嚴重程度判為高。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W23 — 2026-10-19

> 涵蓋範圍：2026-10-12 ~ 2026-10-18

## 本週重點摘要

本週 CISA 新增 9 個 KEV 條目，全部是近期遭利用的漏洞，而且多數落在邊界設備與遠端存取產品：Ivanti Connect Secure、PAN-OS、Cisco 郵件閘道、BeyondTrust Remote Support、FortiOS。其中最值得細讀的是 Volexity 對 Ivanti 攻擊鏈的分析。攻擊者 UTA0576 從 10 月 3 日起串接三個漏洞，在已安裝最新修補的設備上以 root 執行程式；進去之後不裝網頁後門，而是用 VPN 設備上存的 AD 服務帳號去撈 LAPS 本機管理者密碼與 BitLocker 復原金鑰，再刪除特定時段的日誌，原廠的完整性檢查工具完全沒察覺。三段漏洞中的提權那段，Ivanti 到本週仍未修好。

第二條線跟備份有關。Veeam 在 10 月 6 日釋出 Backup & Replication 12.3.2 P4，修補 CVE-2025-64393（CVSS 9.4），擁有 Backup Viewer 這個唯讀角色的使用者就能在備份伺服器上執行程式；同一份公告註明 v12 將於 2027-02-28 結束支援。這條上期沒收到，本期補上。上期報導的 AhsayCBS 攻擊則有新進展：兩個漏洞 10 月 14 日進 KEV，原廠確認先前的修補沒有完全封住漏洞，改發 hotfix 10.3.4.45。

第三條線是微軟。10 月例行更新的漏洞數再創新高，其中遭利用的是 Windows Shell 繞過「網路下載標記」（Mark of the Web）的 CVE-2026-96951，SANS ISC 另點名 10 個 DHCP Server 遠端執行漏洞。微軟同週提醒 Windows Update 部分憑證將在 2027 年年中到期，沒裝必要更新的機器屆時會收不到修補。台灣方面，美國司法部查封中國永信至誠的攻擊工具網域，法院文件顯示新竹與埔里各一所大學遭入侵、約 20 所臺灣大專院校是其釣魚工具的確認受害者；91APP 於 10 月 16 日發布資料庫遭自動化攻擊的重訊。

## 重大漏洞與威脅

1. **[Ivanti Connect Secure CVE-2026-104935：三段串接取得 root，入侵後專挖 LAPS 密碼與 BitLocker 金鑰](https://www.volexity.com/blog/2026/10/13/a-series-of-unauthenticated-events-chained-exploitation-of-ivanti-connect-secure-zero-days/)**
   - Volexity 10 月 13 日公布：`welcome.cgi` 的驗證繞過讓請求能碰到受保護的 CGI，`wu.cgi` 上傳檔案時的競爭條件造成遠端執行，再利用 `dsinvoked` 信任 DSCache 設定資料的缺陷提權到 root。前兩段 Ivanti 10 月 13 日已修，**提權那段還在開發修補、原廠說「未來幾週內」**。攻擊自 10 月 3 日開始，行為者 UTA0576 先前未見過，Volexity 以低信心評估動機偏犯罪而非間諜。
   - **入侵後的行為才是重點**：攻擊者取出設備上存的網域 LDAP 帳密，側錄 LDAP 流量收集明文帳密與 NTLM 雜湊，再用一支自製 Python LDAP 工具，以遭竊的 AD 服務帳號查詢 LAPS 本機管理者密碼、BitLocker 復原金鑰與帶密碼的屬性，並做 Kerberoasting 與密碼噴灑。資料經由攻擊用的 HTTPS 請求本身帶出，沒有另開命令與控制通道。之後選擇性刪除 `debuglog` 與 `audit.log` 中特定時段的紀錄、把 tcpdump 改名成 `dsstatmond` 藏在 `/data/.icscap`，**Ivanti 完整性檢查工具沒有偵測到這些修改**，Volexity 建議改做網路與記憶體鑑識，並追查從 VPN 設備發起的橫向移動。CISA 10 月 13 日列入 KEV、要求 3 天內修補。
   - 指標：CVSS 8.6（據 The Hacker News）｜EPSS 25.98%（百分位 98.0）｜KEV：已列入（2026-10-13）

2. **[Cisco Secure Email Gateway CVE-2026-76519：一封帶附件的信就能以 root 執行指令](https://www.bleepingcomputer.com/news/security/cisco-patches-actively-exploited-secure-email-gateway-zero-day/)**
   - Cisco 10 月 14 日發布公告，漏洞在進階惡意程式防護（AMP）元件，未經驗證的攻擊者寄出特製附件即可寫入任意檔案並以 root 執行指令。觸發條件是郵件政策啟用 File Reputation、且 Content Scanner Tools 版本早於 25.3.0.5525；更新 Content Scanner Tools 到 25.3.0.5525 以上即可修補、不必重開機。沒有替代緩解方案，16.0 分支沒有修補版、要遷移。
   - 這是 9 月中以來第二個遭利用的 Cisco 郵件閘道漏洞（前一個是 CVE-2026-76461，9 月 14 日進 KEV）。郵件閘道的特殊性在於攻擊者不需要連到管理介面，**只要能寄信給你就碰得到它**。
   - 指標：CVSS 9.8（v3.1）｜EPSS 1.57%（百分位 75.0）｜KEV：已列入（2026-10-14）

3. **[Palo Alto PAN-OS CVE-2026-0322 管理介面程式碼注入遭利用；舊漏洞 CVE-2026-0257 被勒索軟體 Settra 加入使用](https://www.bleepingcomputer.com/news/security/palo-alto-networks-warns-of-pan-os-rce-flaw-exploited-in-attacks/)**
   - CVE-2026-0322 於 10 月 14 日修補，影響 PA-Series、VM-Series 與 Panorama，Cloud NGFW 與 Prisma Access 不受影響。利用前提是**已有帳密且能連到管理介面**，原廠稱觀測到「非常有限的利用」並公布三個攻擊來源 IP（66.42.72[.]14、208.83.239[.]114、149.248.47[.]234）。CISA 在 KEV 中把它標為依 BOD 26-04 需要做鑑識分流，修補期限 10 月 17 日。
   - 同一家廠商的舊帳也還在發酵：iThome 引述 ReliaQuest 10 月 10 日的說法，GlobalProtect 驗證繞過漏洞 CVE-2026-0257（5 月公告、6 月修補）除了 Qilin，勒索軟體 Settra 也開始用它建立未授權的 VPN 連線，ReliaQuest 評估未來 3 個月利用會持續（[iThome](https://www.ithome.com.tw/news/179634)）。**攻擊者的登入看起來就是合法的 VPN 連線**，光看連線成功與否不會發現。
   - 指標（CVE-2026-0322）：CVSS 8.6（v4.0）｜EPSS 1.22%（百分位 68.1）｜KEV：已列入（2026-10-14）
   - 指標（CVE-2026-0257）：CVSS 7.8（原廠；NVD 評 9.1）｜EPSS 96.90%（百分位 99.9）｜KEV：已列入（2026-05-29，KEV 標註已知用於勒索軟體）

4. **[BeyondTrust Remote Support CVE-2026-102764：8 月底起被中國背景集團當零日利用](https://www.bleepingcomputer.com/news/security/beyondtrust-patches-zero-day-exploited-in-attacks-since-august/)**
   - 這是內部訊息元件的來源驗證不當，未經驗證者可在設備上做檔案操作，影響 Remote Support 26.2.3 與更早版本。Mandiant／GTIG 歸因於疑似中國背景的間諜集團 ARMORY CASTLE（又稱 UNC5221），首次利用是 2026-08-29，對象是一個原廠代管實例與一台自架設備；入侵後提權到 root、部署自製惡意程式、蒐集憑證並轉向下游系統。
   - BeyondTrust 10 月 8 日先修好雲端客戶，10 月 15 日以公告 BT26-05 公開。**自架版沒開自動更新的要手動套 BT26-05-RS**，版本太舊的要先升級才能套。Mandiant 依該集團過去的行為提醒，公開後可能出現大規模利用嘗試。CISA 10 月 16 日列入 KEV。
   - 指標：CVSS 9.3（v4.0）｜EPSS 1.18%（百分位 67.2）｜KEV：已列入（2026-10-16）

5. **[Veeam Backup & Replication 12.3.2 P4（KB4934）：Backup Viewer 角色即可在備份伺服器執行程式](https://www.veeam.com/kb4934)**（上期未收錄，本期補上）
   - Veeam 10 月 6 日發布，CVE-2025-64393 是 Mount Service 對不可信資料做不安全的反序列化，**只要有 Backup Viewer 這個低權限角色、不需任何使用者互動**，就能在 Veeam 備份伺服器上遠端執行程式。同批另修 CVE-2026-93026（Backup Viewer 可修改或刪除 Enterprise Manager 主金鑰、讀取或覆寫防毒更新憑證）與 CVE-2025-64392（Enterprise Manager 反射型跨站腳本，CVSS 4.8）。
   - 受影響的是 12.3.2.4854（P3）與更早的 v12 各版，修補版是 12.3.2.4934；**v13 不受影響**。公告另註明 **v12 將於 2027-02-28 結束支援**。目前沒有遭利用的公開報告，但 KEV 目錄裡已有四個 Veeam 漏洞（CVE-2022-26500、-26501、CVE-2023-27532、CVE-2024-40711）全部標註「已知用於勒索軟體」，這類漏洞不宜等到進 KEV 才處理。
   - 指標（CVE-2025-64393）：CVSS 9.4（v4.0）｜EPSS 0.36%（百分位 28.2）｜KEV：未列入
   - 指標（CVE-2026-93026）：CVSS 6.1（v4.0）｜EPSS 0.30%（百分位 21.1）｜KEV：未列入

6. **[AhsayCBS 兩漏洞進 KEV，原廠確認先前修補失效、改發 hotfix 10.3.4.45](https://www.esecurityplanet.com/news/news-ahsaycbs-patch-fails-two-exploited-vulnerabilities/)**（本週新進展）
   - 上期提到 Huntress 原本建議升級 10.3.4、後來改口說該版也受影響。本週有了結論：Ahsay 於 10 月 10 日確認先前的修補沒有完全封住兩個漏洞，要求 v10 合作夥伴從需登入的合作夥伴入口下載 hotfix 10.3.4.45 並重開機。CISA 10 月 14 日把兩個漏洞同時列入 KEV，期限 10 月 17 日。
   - 指標（CVE-2026-105133）：CVSS 5.5｜EPSS 0.85%（百分位 57.6）｜KEV：已列入（2026-10-14）
   - 指標（CVE-2026-105134）：CVSS 9.3｜EPSS 4.78%（百分位 91.8）｜KEV：已列入（2026-10-14）

7. **[微軟 10 月例行更新：1,411 個漏洞、Windows Shell 零日遭利用、10 個 DHCP Server 遠端執行漏洞](https://isc.sans.edu/diary/October+2026+Microsoft+Patch+Tuesday/33422/)**
   - 10 月 13 日發布。BleepingComputer 計 1,411 個、SANS ISC 計 1,417 個（76 個重大），差異來自計數方式。遭利用的零日是 CVE-2026-96951，Windows Shell 繞過「網路下載標記」，讓下載來的檔案不跳 SmartScreen 警告，但仍需受害者開檔；已公開但未遭利用的有 .NET Framework 安全功能繞過 CVE-2026-108398（CVSS 8.8）與 MessagePack-CSharp 阻斷服務漏洞。
   - ISC 的 Johannes Ullrich 點名 **Windows DHCP Server 有 10 個遠端執行漏洞、其中 5 個重大**，最高的 CVE-2026-96934 為 CVSS 9.8；另有 Exchange Server 遠端執行 CVE-2026-70571（CVSS 8.1，攻擊複雜度高，透過特製郵件在內容轉換時觸發）。他的優先順序是：遭利用的 Shell 零日、已公開的 .NET 繞過、DHCP Server 與 Exchange、再來是數量很多的 Office。另外，Windows 11 24H2 家用版／專業版與 Windows 10 Enterprise LTSB 2016 本月是最後一次更新。
   - 指標（CVE-2026-96951）：CVSS 8.8（據 BleepingComputer 搜尋摘要）｜EPSS 1.51%（百分位 74.1）｜KEV：已列入（2026-10-13）
   - 指標（CVE-2026-108398）：CVSS 8.8｜EPSS 0.48%（百分位 39.6）｜KEV：未列入

8. **[Collabora 內建 CODE 伺服器漏洞遭利用，Nextcloud 伺服器被植入網頁後門](https://thehackernews.com/2026/10/hackers-backdoor-nextcloud-servers.html)**
   - CVE-2026-110447 位於 Nextcloud 選用的 Collabora Online「Built-in CODE Server」應用，攻擊者自至少 9 月起利用它在 Nextcloud 伺服器上植入網頁後門，據報導是在文件伺服器停擺時下手。Collabora 已在 26.4.303 版修補。自架 Nextcloud 當內部檔案分享平台的組織，要確認有沒有裝這個內建應用。
   - 指標：CVSS 查無｜EPSS 1.23%（百分位 68.3）｜KEV：未列入

9. **[Docker Hub「GhostPat」CVE-2026-105445：帳號轉組織時權杖被一併移交，可冒充任意使用者推送映像](https://docker.com/blog/docker-hub-security-advisory-cve-2026-105445)**
   - 把個人帳號轉成組織時，該帳號的個人存取權杖會移交給指定的新擁有者，原建立者手上的權杖仍然有效。攻擊者因此可以建帳號、產權杖、轉組織並把目標設成擁有者，之後用那支權杖以目標身分對其儲存庫拉取、推送或刪除映像。影響僅限映像倉庫，無法改密碼或兩步驟驗證。
   - Docker 10 月 12 日公告，暴露期是 2024-08-26 到 2026-09-30 修補為止，**長達兩年**，原廠稱沒有發現遭利用的跡象。修補後轉換不再移交權杖，官方建議改用組織存取權杖。
   - 指標：CVSS 9.4（v4.0）｜EPSS 0.41%（百分位 34.2）｜KEV：未列入

10. **本期 KEV 數量對照**
    - CISA 在 2026-10-12 至 2026-10-18 新增 9 個 KEV 條目，目錄版本 2026.10.16、總數 1,748 筆（上期 1,739 筆）。依加入日：10/13 Ivanti CVE-2026-104935、微軟 CVE-2026-96951；10/14 PAN-OS CVE-2026-0322、Cisco CVE-2026-76519、AhsayCBS CVE-2026-105133 與 -105134；10/15 Atlassian CVE-2026-21589；10/16 BeyondTrust CVE-2026-102764、FortiOS CVE-2025-61624。
    - **上期提醒「KEV 是落後指標」本週得到印證**：上期在目錄截止時還不在清單上的 Atlassian 與 AhsayCBS，本週都進來了，分別晚了約 10 天與 7 天。FortiOS CVE-2025-61624（CVSS 5.4，4 月就修補的路徑穿越）則被 Unit 42 追到用來植入常駐記憶體的 PEERSTITCH 惡意程式，分數不高但已在被用。Atlassian 的 EPSS 本週查詢回傳空值（上期為 1.77%），標「查無」。
    - 指標（CVE-2026-21589）：CVSS 9.3｜EPSS 查無｜KEV：已列入（2026-10-15）
    - 指標（CVE-2025-61624）：CVSS 5.4｜EPSS 1.08%（百分位 64.6）｜KEV：已列入（2026-10-16）

## 攻擊趨勢與事件

1. **[法國數百家超市冷藏系統遭遠端加熱，食品報廢損失估計數千萬歐元（Risky Bulletin、2026-10-14）](https://news.risky.biz/risky-bulletin-spyware-chip-found-in-ledger-crypto-wallets/)**
   - 10 月 11 日至 12 日，攻擊者把法國超市（以 Intermarché 為主）的冷凍與冷藏設備溫度調高，母公司 Les Mousquetaires 稱約 150 家店受影響、櫃溫升到約 50°C 長達六小時；其他媒體的 300 家是兩家連鎖合計、未經證實。CERT-FR 首份警示只點名 Danfoss AK-SC 與 AK-SM 控制器，要求更新韌體、安全等級設為「strict」並確認預設密碼已改；後續擴大到 Copeland 與 Dixon 設備（[CSO Online](https://www.csoonline.com/article/4235107/unplug-your-smart-fridges-french-supermarkets-warned-after-cyberattack.html)）。
   - 入侵路徑尚未確定：Danfoss 歸咎於過舊韌體，ANSSI 找到一個可能被利用的軟體漏洞，「預設帳密」只出現在強化建議裡、沒有來源證實是實際入口。Censys 統計法國曝露在網路上的 Danfoss 管理介面從 10 月 12 日的 1,700 多台，兩天內降到 530 多台（Risky Bulletin、2026-10-16）。**這是直接造成實體財損的營運技術（OT）攻擊**，被打的是「裝好就沒人管、又連上網」的控制器。

2. **[ShinyHunters 嫌犯在美國與約旦落網（Risky Bulletin、2026-10-12）](https://news.risky.biz/risky-bulletin-shinyhunters-suspects-arrested-in-us-and-jordan/)**（本週新進展）
   - FBI 在賓州逮捕加拿大籍的 Edward Dubrovsky，FBI 局長稱他與上月 FBI 求職入口遭駭有關；約旦當局拘留化名「Rey」的 Saif al-Din Khader，路透社報導他正協助 FBI 追查其他成員。上期報導的「FBI 因承包商漏裝修補而撤換」也在本期確認對象是 Accenture、平台是 Oracle PeopleSoft，外洩資料涵蓋幾乎所有 FBI 特別探員。
   - 後續還有插曲：一名自稱 Hasanbr0ker 的人宣稱接手 ShinyHunters，研究者因為沒有有效的簽章金鑰而存疑（Risky Bulletin、2026-10-14）。

3. **[Ledger 硬體錢包在供應鏈中被植入間諜晶片，相關損失超過 8,600 萬美元（Risky Bulletin、2026-10-14）](https://news.risky.biz/risky-bulletin-spyware-chip-found-in-ledger-crypto-wallets/)**
   - 區塊鏈資安公司 Tibane Labs 發現，經東南亞經銷商 CryptoBilis 售出的 Ledger Nano X 被焊入一顆晶片，夾在安全元件與螢幕之間側錄畫面上的字元，再透過內建數據機與 eSIM 把助記詞傳給攻擊者。植入物從去年 9 月的手工焊接，演進到塗成原廠零件顏色的軟性電路板；10 月 14 日前後 Ledger Flex 也發現同樣植入物，兩天後連 Trezor 錢包都傳出類似案例（Trezor 否認，Risky Bulletin、2026-10-16）。
   - Ledger 要求從該經銷商購買的使用者丟棄設備並盡快把資產轉到新地址。**這是「通路」而非「原廠」被滲透的硬體供應鏈案例**，提醒採購安全設備時，購買管道本身就是風險控制點。

4. **[美國破獲 40 處北韓「筆電農場」，查扣 187 台筆電（Risky Bulletin、2026-10-16）](https://news.risky.biz/risky-bulletin-russia-arrests-datasuckers-hacking-group/)**
   - 美國當局在德州瓦解 40 處替北韓 IT 工作者代管公司配發筆電的據點，司法部起訴 14 人、拘留 2 人，案件影響超過 70 家美國企業、替北韓工作者賺進約 300 萬美元；FBI 同步發布公告，CrowdStrike 協助調查。
   - 同期另一起大規模行動：日本警方與微軟等單位瓦解中文網路釣魚套件 CoGUI、Iron Man 與販售帳號的 YAM Store，微軟稱這些套件送出約 10 億則釣魚訊息、四分之三鎖定微軟帳號，查扣 2 萬多個帳號與網域。

5. **[開源供應鏈本週三起：Shai Hulud 蠕蟲借 Tensorlake 套件回歸、GhostAction 再擴及 772 個儲存庫、Zod 帳號遭劫持（Risky Bulletin、2026-10-12／10-16）](https://news.risky.biz/risky-bulletin-shinyhunters-suspects-arrested-in-us-and-jordan/)**
   - Shai Hulud 蠕蟲透過遭入侵的 Tensorlake npm 套件再度出現，多家供應鏈資安公司同步追蹤；2025 年的 GhostAction 活動在 8 月 31 日至 9 月 30 日間又入侵 772 個公開 GitHub 儲存庫，目標是 CI 中的雲端憑證。10 月 16 日的期別另記錄 JavaScript 驗證函式庫 Zod 的 GitHub 帳號遭劫持、近期版本被加料，但在推上 npm 前被攔下。
   - 這些事件與上期 Graphalgo 鎖定 Terraform provider 是同一個方向：**攻擊者瞄準的是開發與部署環境裡的憑證**，而不是終端使用者。

6. **[AI 代理資安三則：XBOW 六天做出 Chrome 完整攻擊鏈、AWS Bedrock AgentCore 單一提示詞拿下帳號內所有代理、Copilot for Word 文件蠕蟲（tl;dr sec #350、2026-10-15）](https://tldrsec.com/p/tldr-sec-350)**
   - XBOW 以約 4 萬美元的 API 費用、六天時間串起 V8 編譯器、動畫 WebP 解碼與 Crashpad 三個漏洞，從一般分頁的 JavaScript 逃出沙箱，拿到 Google 25 萬美元最高獎金。Zenity Labs 的 AgentCorruption 則指出 AgentCore 代理可經由伺服器端請求偽造連到執行個體中繼資料端點，**一個提示詞就能取出憑證、拿下同帳號同區域的所有代理**；AWS 兩度審查都沒改預設角色，直到發表前才收緊，官方聲明仍稱屬已記載的預期行為。
   - Håkon Måløy 示範在外部文件藏白底白字指令，讓 Copilot for Word 竄改財務數字並把指令複製到每份下游文件，經 SharePoint、Teams、OneDrive 擴散。微軟 144 天內上了兩次緩解，作者在新模型上仍能重現，認為這是架構問題。

7. **Detection Engineering Weekly 本週無編號期**：索引頁最新編號期仍是 DEW #170（2026-10-08，已於 W22 收錄），本週只有一篇未編號的教學文，收在下方「防禦與偵測」。

## 防禦與偵測

1. **[Detection Engineering Field Manual：什麼是資安日誌（第一部）（DEW 未編號文、2026-10-15）](https://www.detectionengineering.net/p/what-are-security-logs-part-1)**
   - Zack Allen 從基本功講起：每筆日誌都該有動作、行為者、脈絡（應用程式、來源 IP）、時間戳記與結果，偵測規則多半是比對某個欄位的值。真正的痛點是同一個使用者身分在 CSV 叫 `user`、在 syslog 是巢狀的 `email`、在 Windows 事件是 `TargetUserName`、在 JSON 是 `user.email`，不先正規化就得為每種來源各寫一版同樣的規則。
   - 實務建議是把格式複雜度留在擷取、轉換、載入（ETL）管線裡處理：統一欄位名與時區，跨來源關聯（例如身分加端點）才做得起來。**「沒有遙測就沒有規則」**這句話值得放進任何監控規劃的第一頁：要先確認某個來源到底記了什麼。

2. **[SANS ISC 值班日誌 10/12~10/18：Panchan 挖礦蠕蟲、AI 代理要從權限設計開始收、DWG 檔裡的孤兒 VBA](https://isc.sans.edu/diary/Panchans+Mining+Island+Guest+Diary/33426/)**
   - 10/14 的客座日誌（SANS.edu 實習生 Zachary Norwood）分析 DShield 蜜罐抓到的 Panchan：Go 寫的點對點挖礦蠕蟲，入侵後偷 SSH 私鑰，再依 `known_hosts` 往其他主機擴散，這個變種用 Discord 頻道當命令與控制。建議包括 SSH 只開給跳板機、停用密碼登入與 root 登入、啟用 `HashKnownHosts`、搭 Fail2Ban，以及改用 CA 簽發的短效 SSH 憑證讓偷到的金鑰很快失效。
   - Mark Baggett（10/16）主張別先給 AI 代理大權限再補護欄，而是**一開始就做成只有單一任務所需權限的小代理**：調查用代理只給唯讀，處置走另一條只對指定目標動作的流程；工具從清單上隱藏不夠，執行端仍接受就等於沒擋；文件裡寫著「已核准」只能當證據，不能當授權（[原文](https://isc.sans.edu/diary/Small+Agents+Smaller+Blast+Radius+Controlling+What+AI+Can+Do/33430/)）。Didier Stevens（10/14、10/18）則分析 AutoCAD DWG 檔內藏的孤兒 VBA 專案並釋出 YARA 規則，VirusTotal 回溯搜尋只命中兩個檔案（[YARA 規則](https://isc.sans.edu/diary/Orphaned+VBA+Projects+Inside+DWG+Files+YARA+Rule/33434/)）。

3. **[Windows Update 部分憑證 2027 年到期，未裝必要更新的機器將收不到修補](https://www.ithome.com.tw/news/179666)**
   - 微軟提醒，Windows Update 用來驗證更新伺服器身分的部分憑證將在 2027 年 5 月 17 日與 6 月 19 日到期。Windows Server 2016、2019 與 Windows 10 Enterprise 2019 LTSC 須在 5 月 17 日前裝上 2026 年 7 月或之後的安全更新；Windows Server 2022 與其他仍受支援的 Windows 10／11 期限是 6 月 19 日；Windows 11 24H2 與 Server 2025 只需裝 2025 年 9 月或之後的更新，25H2 以後不必處理。
   - **透過 WSUS 取得更新的裝置不受影響**；來不及的機器可從 Microsoft Update Catalog 手動下載必要更新。這條的風險在於「長期沒更新的機器」會在 2027 年中突然連修補都收不到，而那通常正是最需要修補的機器。

4. **[藍隊工具與資料集：EntraGoat、CAIRN、Cobalt Strike Beacon 語料庫（tl;dr sec #350、2026-10-15；Risky Bulletin、2026-10-14）](https://tldrsec.com/p/tldr-sec-350)**
   - Semperis 開源 EntraGoat，用 PowerShell 與 Microsoft Graph 部署刻意設錯的 Entra ID 實驗環境，情境涵蓋服務主體濫用 Graph 權限、經由應用程式擁有權提權、PIM 啟用鏈、動態管理單位汙染等，每題都從一個已遭入侵的身分開始。Cisco Talos 發布 CAIRN，只從 VirusTotal 中繼資料萃取提示詞範本、AI 服務網域等「認知痕跡」來追蹤整合 AI 的惡意程式，觀察到一年內從「選用的 LLM 功能」演進到「自主多模型協調」。
   - Fox-IT 10 月 13 日釋出超過 56,000 筆 Cobalt Strike Beacon 特徵（[Fox-IT](https://blog.fox-it.com/2026/10/13/releasing-the-cobalt-strike-beacon-corpus/)），可直接用來比對網路與端點上的可疑 Beacon 設定。

5. **[Let's Encrypt 2027 年 2 月起預設簽發 64 天憑證（Risky Bulletin、2026-10-16）](https://letsencrypt.org/2026/10/07/64-day-certs)**
   - Let's Encrypt 宣布自 2027 年 2 月 10 日起預設簽發 64 天效期的 TLS 憑證，作為邁向一個月效期的過渡。**還在手動換憑證的服務，換證頻率會從一年幾次變成一年近六次**，沒有自動化續約的環境要提早規劃。

## 台灣在地動態

1. **[美方查封永信至誠攻擊工具網域，臺灣兩所大學遭 Microscan 掃描後被植入 SoftEther VPN](https://www.ithome.com.tw/news/179572)**（本週新進展）
   - 接續上期十國聯合通報 AA26-281A。美國司法部與 FBI 查封中國永信至誠科技（Integrity Technology Group）的 7 個網域，涵蓋漏洞掃描工具 Microscan 與釣魚工具 FishHub。依 FBI 提交法院的宣誓陳述書，新竹與埔里各有一所大學曾遭 Microscan 掃描後被入侵，其中新竹的大學在 2024 年 8 月遭未授權存取並被安裝 SoftEther；**FishHub 的確認受害者包括約 20 所臺灣大專院校**（[iThome 資安日報](https://www.ithome.com.tw/news/179581)）。
   - 上期通報提到的「把 SoftEther VPN 偽裝成系統程式常駐」，本期在臺灣有了具體受害案例。

2. **[91APP 發布資安重訊：Commerce Cloud 資料庫遭自動化攻擊，部分資料遭擷取](https://www.ithome.com.tw/news/179741)**
   - 電商技術服務商 91APP（6741）於 10 月 16 日公告，旗下 Commerce Cloud 資料庫遭自動化攻擊、部分資訊遭擷取，已向警方報案並委請第三方資安單位協助調查。受影響的資料種類、筆數與攻擊手法，搜得的報導均未載明。
   - 91APP 替許多品牌經營官網與購物 App，**這類平台業者出事，影響的是下游眾多品牌的會員**，後續要留意是否有品牌端補發通知。

3. **[UAT-11985 以 AI 撰寫的假活動邀請鎖定臺灣研究機構，竊取 Google 帳密與 MFA 驗證碼](https://thehackernews.com/2026/10/uat-11985-uses-fake-event-invites-to.html)**（上期未收錄，本期補上）
   - Cisco Talos 追蹤的魚叉式釣魚活動，對象是與臺灣研究機構相關的人士，冒用臺灣歐盟中心、政大國際關係研究中心與臺灣研究院的名義（三者均未涉入），甚至竄改真實活動海報上的 QR code，把受害者導向中間人（AitM）釣魚框架，同時收走 Google 帳密與一次性驗證碼。Talos 評估郵件內容很可能由 AI 輔助生成；歸因說法不一，有來源稱中等信心指向中國，但僅單一來源，暫不採信。
   - **中間人釣魚能繞過簡訊與驗證器 App 這類一次性驗證碼**，只有通行金鑰（passkey）或實體金鑰這類綁定網域的驗證方式擋得住。

## 對 Simon 工作的影響評估

1. **Veeam 12.3.2 P4 是本期唯一直接落在你環境裡的修補，順便把 v12 結束支援排進計畫**
   - 你們的備份用 Veeam，CVE-2025-64393 只需要 Backup Viewer 這個唯讀角色就能在備份伺服器上執行程式。**先做兩件事**：確認備份伺服器的組建編號是否已到 12.3.2.4934（或已在 v13）；再到 Veeam 主控台的使用者與角色清單看看誰有 Backup Viewer，這個角色常被當成「只能看、給了也沒關係」而發得很寬，現在它等於備份伺服器的執行權限。
   - 另一件要記下的是 **v12 將於 2027-02-28 結束支援**，距今約四個月。這可以直接寫進 ISO 27001 BIA 表的備份備援做法欄：備份系統本身的版本支援狀態與升級時程。上期建議的「Veeam 管理主控台能不能從一般使用者網段連到」，在本期這條之後更值得確認，因為權限低的帳號一旦能連到，就碰得到這個漏洞。

2. **Ivanti 那條攻擊鏈示範了「VPN 一破，AD 裡最值錢的是 LAPS 與 BitLocker 金鑰」，值得盤點誰讀得到這兩個屬性**
   - 不管公司 VPN 是不是 Ivanti，這條的教訓通用：攻擊者用 VPN 設備上存的 AD 服務帳號去撈 LAPS 本機管理者密碼與 BitLocker 復原金鑰，拿到就等於拿到每台電腦的本機管理者與每顆硬碟。**建議檢查兩處**：VPN、防火牆這類邊界設備用來查 AD 的服務帳號，有沒有讀取 LAPS 與 BitLocker 復原資訊的權限（照理不需要）；以及 AD 中能讀這兩個屬性的群組是否只剩必要的人。這是身分與存取控制的盤點，成本低、做一次就有效。
   - 本週 PAN-OS、FortiOS、Cisco 郵件閘道、BeyondTrust 都有遭利用中的漏洞。若公司邊界設備是其中之一，依序確認版本、管理介面是否只開給管理網段、以及 VPN 登入紀錄中有沒有異常時段或來源的成功連線（Settra 與 Qilin 的手法就是看起來合法的 VPN 登入）。BeyondTrust 自架版沒開自動更新的，要手動套 BT26-05-RS。

3. **10 月例行更新先看 DHCP Server，Windows Update 憑證到期排進伺服器維護清單**
   - 若公司 DHCP 跑在 Windows Server 上，10 個 DHCP Server 遠端執行漏洞（最高 CVSS 9.8）應排在 Shell 零日之後優先處理，DHCP 伺服器通常放在內網、平常最少被想到要更新。若還有地端 Exchange，CVE-2026-70571 也在本月清單內，上期提到的第二期延伸安全更新 10 月底就到期。
   - Windows Update 憑證那條，若公司伺服器的更新是透過 WSUS 派送，就不受影響；直接連 Windows Update 的機器則要確認 Server 2016／2019 在 2027 年 5 月 17 日前已裝 2026 年 7 月以後的累積更新。**可以借這次在資產清冊或 BIA 表加一欄「最後一次安裝累積更新的月份」**，同時抓出長期沒更新的機器，老闆要的「超細」也包含這類能具體交代的欄位。

4. **機房環境設備與釣魚防護：法國超市冷藏事件與 UAT-11985 各提醒一件事**
   - 法國超市事件被打的是連上網、預設設定沒人改的冷藏控制器。機房裡對應的是空調、UPS、溫濕度與門禁監控這類設備的網頁管理介面：**建議確認它們沒有從外部或一般辦公網段直接連得到、預設密碼都已更改**，這也是機房管理稽核常被問到的項目。
   - UAT-11985 用中間人釣魚同時收走帳密與一次性驗證碼。公司 Microsoft 365 若用簡訊或驗證器 App 驗證碼，對這類攻擊擋不住；管理者帳號優先改用通行金鑰或實體金鑰，是成本最低、效果最確定的一步。本期 9 個 KEV 條目與 Ivanti、Atlassian 進 KEV 晚了好幾天的數據，也可以放進 10 月份資安 KPI 簡報（11 月初交）當「邊界設備修補時效」的佐證。
