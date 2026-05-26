---
title: "資安週報 2026-05-26"
date: 2026-05-26
type: weekly-intel
issue: "W01"
cover_range: "2026-05-19 ~ 2026-05-25"
tags:
  - 資安週報
  - supply-chain
  - zero-day
  - phishing
  - ai-security
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "供應鏈攻擊全面爆發：GitHub 3,800 repos 洩露、Laravel Lang 700+ 惡意版本、Megalodon 6 小時 5,500 repos 投毒"
  - "CISA 一週內將 9 個漏洞加入 KEV，含 Microsoft Defender 與 Trend Micro Apex One 遭主動利用"
  - "SANS ISC 揭露冒充 Claude AI 頁面散佈 ACR Stealer 竊資軟體"
tldr: "本週供應鏈攻擊密度為 2026 年新高，GitHub、Laravel、Packagist、NPM/PyPI/Crates.io 多條鏈路同時遭攻擊；CISA 密集更新 KEV 目錄；冒充 AI 工具的惡意軟體散佈成為新趨勢。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W01 — 2026-05-26

> 涵蓋範圍：2026-05-19 ~ 2026-05-25

## 本週重點摘要

本週資安態勢以**供應鏈攻擊密集爆發**為最顯著特徵：GitHub 因員工安裝惡意 VS Code 擴充功能導致 3,800 個內部儲存庫洩露，Laravel Lang 在不到兩天內被推送逾 700 個惡意套件版本，GitHub 平台更出現名為「Megalodon」的大規模自動化攻擊——六小時內推送近 6,000 筆惡意提交、波及 5,500 個儲存庫。CISA 在 5 月 20 日與 21 日密集將 9 個漏洞加入已知遭利用漏洞目錄（KEV），其中包含 Microsoft Defender 提權漏洞與 Trend Micro Apex One 目錄走訪漏洞。SANS ISC 揭露攻擊者冒充 Claude AI 下載頁面散佈 ACR Stealer 竊資軟體，顯示 AI 工具的品牌信任正被武器化。台灣方面，iThome 本週報導涵蓋 SonicWall 防火牆掃描量暴增 46 倍、Ghost CMS SQL 注入被用於 ClickFix 攻擊、以及 FBI 對 Kali365 釣魚即服務平台的警告。

## 重大漏洞與威脅

1. **[CISA 將 7 個漏洞加入 KEV 目錄（5/20）](https://www.cisa.gov/news-events/alerts/2026/05/20/cisa-adds-seven-known-exploited-vulnerabilities-catalog)**
   - 包含 CVE-2026-41091（Microsoft Defender 提權）與 CVE-2026-45498（Microsoft Defender 阻斷服務）等 7 個漏洞。均已確認遭主動利用，聯邦機構須於指定期限內完成修補。

2. **[CISA 將 2 個漏洞加入 KEV 目錄（5/21）](https://www.cisa.gov/news-events/alerts/2026/05/21/cisa-adds-two-known-exploited-vulnerabilities-catalog)**
   - 包含 CVE-2026-34926（Trend Micro Apex One 目錄走訪漏洞）。Apex One 為企業端點防護主力產品，遭利用後攻擊者可存取敏感檔案。

3. **[Palo Alto PAN-OS 遠端程式碼執行漏洞遭主動利用](https://thehackernews.com/2026/05/palo-alto-pan-os-flaw-under-active.html)**
   - CVE-2026-0300，CVSS 9.3。當 User-ID 驗證入口暴露於網際網路時，未經驗證的攻擊者可執行任意程式碼。Palo Alto 已釋出修補。

4. **[Ivanti EPMM RCE 漏洞遭主動利用，可取得管理員權限](https://thehackernews.com/2026/05/ivanti-epmm-cve-2026-6973-rce-under.html)**
   - CVE-2026-6973，影響 Ivanti Endpoint Manager Mobile（EPMM）。攻擊者可遠端執行程式碼並取得管理員等級存取權。這是 Ivanti 產品 2026 年第三個遭主動利用的嚴重漏洞。

5. **[SonicWall Gen6 SSL-VPN MFA 繞過導致勒索軟體部署](https://www.bleepingcomputer.com/news/security/hackers-bypass-sonicwall-vpn-mfa-due-to-incomplete-patching/)**
   - 攻擊者利用不完整修補，暴力破解 VPN 憑證後繞過多因素驗證（MFA），在 SonicWall Gen6 SSL-VPN 設備上部署勒索軟體工具。

6. **[Ghost CMS SQL 注入漏洞被用於大規模 ClickFix 攻擊](https://www.ithome.com.tw/news/176112)**
   - CVE-2026-26980，兩組駭客團體利用此 SQL 注入漏洞對 Ghost CMS 網站投毒，植入惡意 JavaScript 觸發 ClickFix 釣魚攻擊流程。

7. **[向量資料庫 ChromaDB 嚴重 RCE 漏洞](https://www.ithome.com.tw/news/176107)**
   - CVE-2026-45829，開源向量資料庫 ChromaDB 的 Python FastAPI 伺服器在驗證前即載入 Hugging Face 模型，攻擊者可藉惡意模型執行任意程式碼。AI 基礎設施安全問題再次浮現。

8. **[Cisco Secure Workload 最高嚴重性漏洞可授予攻擊者 Site Admin 權限](https://www.bleepingcomputer.com/news/security/cisco-max-severity-secure-workload-flaw-gives-hackers-site-admin-privileges/)**
   - Cisco Secure Workload 被發現最高嚴重性漏洞，攻擊者可利用此漏洞取得 Site Admin 權限，完全掌控受影響的微分段（microsegmentation）環境。

## 攻擊趨勢與事件

1. **[GitHub 確認 3,800 個內部儲存庫因惡意 VS Code 擴充功能洩露](https://www.bleepingcomputer.com/news/security/github-confirms-breach-of-3-800-repos-via-malicious-vscode-extension/)**
   - 駭客組織 TeamPCP 透過植入惡意程式碼的 Nx Console VS Code 擴充功能，感染 GitHub 員工裝置後竊取約 3,800 個內部儲存庫。這是 2026 年上半年最具規模的開發工具鏈攻擊事件之一。

2. **[GitHub 出現 Megalodon 大規模自動化惡意提交活動](https://www.ithome.com.tw/news/176093)**
   - 六小時內推送近 6,000 筆惡意提交、5,500 個儲存庫受害。駭客藉此散佈惡意程式以竊取憑證、CI/CD 權杖、雲端金鑰等機密資料。

3. **[Laravel Lang 供應鏈攻擊：不到兩天推送逾 700 個惡意版本](https://www.ithome.com.tw/news/176082)**
   - PHP 框架 Laravel 的第三方語言套件專案 Laravel Lang 遭挾持，駭客疑似取得組織級憑證或發布基礎設施存取權，在套件中植入竊資軟體。

4. **[DAEMON Tools 供應鏈攻擊：官方安裝程式被植入惡意軟體](https://thehackernews.com/2026/05/daemon-tools-supply-chain-attack.html)**
   - DAEMON Tools 官方安裝程式遭竄改，成為 2026 年上半年繼 eScan（1 月）、Notepad++（2 月）、CPUID（4 月）之後又一起軟體供應鏈入侵事件。

5. **[TrapDoor 橫跨 NPM、PyPI、Crates.io 三大生態圈的供應鏈攻擊](https://www.ithome.com.tw/news/176113)**
   - Socket 揭露此攻擊鎖定加密貨幣、去中心化金融（DeFi）、區塊鏈與 AI 社群開發者，透過三種套件管理系統同步散佈竊資軟體。

6. **[Packagist 遭供應鏈攻擊，8 個套件被感染](https://www.ithome.com.tw/news/176103)**
   - Socket 揭露鎖定 Linux 開發環境的攻擊行動，駭客透過 GitHub 散布惡意軟體，可能是更大規模攻擊活動的一部分。

7. **[INTERPOL「Ramz 行動」逮捕 200 人、查扣 53 台伺服器](https://www.bleepingcomputer.com/news/security/interpol-operation-ramz-seizes-53-malware-phishing-servers/)**
   - 聚焦中東與北非的跨國執法行動，查扣用於釣魚、惡意軟體與網路詐騙的伺服器，已確認至少 3,867 名受害者。

8. **[Visa 春季威脅報告：AI 驅動社交工程取代技術性盜刷](https://www.ithome.com.tw/news/176108)**
   - Visa 5 月 20 日發布報告指出，犯罪集團轉向利用 AI 與社交工程誘使消費者主動授權非法交易，去年下半年偵測的詐騙企圖金額逼近 10 億美元。

## 防禦與偵測

1. **[SANS ISC：冒充 Claude AI 頁面散佈 ACR Stealer](https://isc.sans.edu/forums/diary/Possible+ACR+Stealer+From+Page+Impersonating+Claude/33018/)**
   - Brad Duncan 於 5 月 26 日發布的 Handler Diary 揭露，攻擊者透過 Google 搜尋惡意廣告將使用者導向冒充 Claude 的下載頁面，依作業系統分別提供 Windows/macOS 惡意軟體。Windows 版感染鏈為 ZIP → PowerShell 腳本 → ACR Stealer。IoC 包含 `fairpoint29[.]com`、`primemetricsa[.]com`、C2 網域 `yw.enhanceblabber[.]cc`。

2. **[NIST 發布 SP 800-172 第三版，強化對抗 APT 韌性](https://www.ithome.com.tw/news/176118)**
   - 美國 NIST 於 5 月 13 日發布的增強型安全要求，在 SP 800-171 基礎合規框架之上，針對高度組織化攻擊提出更嚴格的防護措施。與 ISO 27001 推進工作直接相關。

3. **[SonicWall 防火牆掃描活動激增 46 倍](https://www.ithome.com.tw/news/176119)**
   - GreyNoise 觀察到 5 月 12 日鎖定 SonicWall 防火牆管理介面的掃描流量較前 30 天典型每日流量高出 46 倍，類似模式曾在 CVE-2026-0400 揭露前出現，可能預示新漏洞即將公開。

4. **[微軟推出 .NET 版 MCP 代理治理套件](https://www.ithome.com.tw/news/176111)**
   - 預覽版套件讓開發者在 MCP 伺服器加入工具呼叫控管、啟動前掃描、回應內容遮蔽與稽核機制，降低 AI 代理誤用工具或接收惡意輸出的風險。

5. **[CDM 發明人推出 AI Defense Matrix 框架](https://www.ithome.com.tw/news/176115)**
   - Sounil Yu 與 Lenny Zeltser 合作發表 AI 防禦矩陣（AI Defense Matrix），為「Security For AI」建構系統性分析框架。

## 台灣在地動態

1. **[iThome 資安週報 0518~0522：Windows 零時差漏洞連環揭露可串成攻擊鏈](https://www.ithome.com.tw/news/176056)**
   - 回顧 5 月第 3 週，Windows 零時差漏洞揭露不斷，資安公司警告已能串成完整攻擊鏈。AI 漏洞風暴引發修補潮，多家軟體供應商 CVE 揭露數量明顯成長。PQC（後量子密碼學）導入動向成為焦點，NVMe 協定與 WD 相繼投入規格更新。

2. **[FBI 警告 Kali365 釣魚即服務竊取 Microsoft 365 權杖](https://www.ithome.com.tw/news/176121)**
   - 新興釣魚即服務平台 Kali365 鎖定 Microsoft 365 用戶，冒充雲端生產力服務，誘導使用者在真正的 Microsoft 驗證頁面輸入裝置代碼，藉此繞過 MFA 取得帳號存取權。企業應限制裝置代碼流程（Device Code Flow）。

3. **[2026 世界盃倒數一個月，偽冒 FIFA 網站大量湧現](https://www.ithome.com.tw/news/176124)**
   - ESET 偵測到大量設計極為逼真的冒牌 FIFA 官方網站，以虛假門票與紀念品誘騙使用者輸入個資與信用卡資訊。

4. **[賓士德國、土耳其分公司分傳資安事件，數十萬客戶資料外洩](https://www.ithome.com.tw/news/176127)**
   - 駭客組織將賓士土耳其分公司 Mercedes-Benz Türk 列入勒索外洩名單，另有駭客宣稱持有 13 萬筆客戶與車輛資料。

5. **[Universal Robots 工控機器人重大漏洞，CISA 發布 ICS 公告](https://www.ithome.com.tw/news/176116)**
   - CVE-2026-8153，工控機器人作業系統 PolyScope 5 存在指令注入漏洞，攻擊者可能藉此控制工業機器人與周邊設備。CISA 已列入工業控制系統漏洞公告。對半導體廠的 OT 環境有參考價值。

## 對 Simon 工作的影響評估

1. **SonicWall 防火牆掃描量暴增 — 檢查防火牆版本與管理介面暴露狀態**
   GreyNoise 觀察到的 46 倍掃描流量激增，與過去新漏洞揭露前的模式一致。如果公司使用 SonicWall 防火牆，建議立即確認韌體版本是否為最新，並驗證管理介面是否有對外暴露（不應從網際網路直接存取）。同時，SonicWall Gen6 SSL-VPN 的 MFA 繞過問題已被用於部署勒索軟體，應確認 SSL-VPN 設備修補狀態。

2. **Microsoft Defender 漏洞遭主動利用 — 確認 Windows 端點修補狀態**
   CVE-2026-41091（提權）與 CVE-2026-45498（阻斷服務）均已被 CISA 加入 KEV，且與 5 月 Patch Tuesday 的 137 個修補項目重疊。建議透過現有的端點管理機制（Omnissa Workspace ONE / MDM）確認所有 Windows 裝置已套用最新更新，並在下次資安 KPI 月簡報中納入修補達成率數據。

3. **Kali365 釣魚即服務繞過 MFA 竊取 Microsoft 365 權杖 — 檢視裝置代碼流程設定**
   此攻擊手法直接繞過 MFA，對正在推進 SQL Server MFA + Kerberos 專案的 Simon 特別值得關注。建議在 Azure AD / Entra ID 條件式存取原則中，評估是否需要限制或停用裝置代碼流程（Device Code Flow），尤其對特權帳號應優先實施。此外，NIST SP 800-172 第三版的發布可作為 ISO 27001 推進工作的參考依據。
