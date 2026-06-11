---
title: "資安週報 2026-06-12"
date: 2026-06-12
type: weekly-intel
issue: "W04"
cover_range: "2026-06-05 ~ 2026-06-11"
tags:
  - 資安週報
  - supply-chain
  - zero-day
  - patch-tuesday
  - data-breach
concepts:
  - incident-response
  - vulnerability-management
highlights:
  - "微軟六月 Patch Tuesday 修補逾 200 個漏洞、創單月紀錄，含 6 個零時差（可提權至 SYSTEM 的 GreenPlasma CVE-2026-45586、可繞過 BitLocker 的 YellowKey CVE-2026-45585）；修補數小時後研究者再揭露未修補的 Defender 零時差 RoguePlanet CVE-2026-47281"
  - "Miasma／TeamPCP npm 供應鏈自我傳播蠕蟲擴散：自 Red Hat 雲端服務套件起，6 月 3 日兩小時內再陷 57 個套件、6 月 5 日波及微軟四大 GitHub 組織共 73 個儲存庫，竊取 npm／GitHub／雲端／Kubernetes 憑證"
  - "CISA 6 月 9 日新增三項 KEV：Arista EOS CVE-2026-7473、Chromium V8 CVE-2026-11645、思科 Catalyst SD-WAN Manager CVE-2026-20245（上週的零時差本週正式列管）"
tldr: "本週主軸是微軟創單月紀錄的 Patch Tuesday（逾 200 漏洞、多個 SYSTEM 級零時差）與一隻會自我傳播、橫掃 Red Hat 與微軟 GitHub 的 npm 供應鏈蠕蟲（Miasma／TeamPCP）並行；攻擊者鎖定建置流程與 CI／CD 憑證、用 binding.gyp 安裝期執行繞過腳本檢查，舊版 WinRAR 漏洞也仍被俄系 APT 持續利用。"
impact: high
stage: evergreen
icon: "🛡️"
---

# 資安週報 W04 — 2026-06-12

> 涵蓋範圍：2026-06-05 ~ 2026-06-11

## 本週重點摘要

本週態勢由**創紀錄的微軟修補日**與**會自我傳播的軟體供應鏈蠕蟲**雙線主導。微軟六月 Patch Tuesday（6 月 9 日）一次修補逾 200 個漏洞、是史上單月最大量，其中含 6 個零時差：可提權到 SYSTEM 的 GreenPlasma、需實體接觸即可繞過 BitLocker 的 YellowKey，以及一個已遭實際利用的 Microsoft Defender 權限提升漏洞；修補釋出僅數小時，研究者又公開另一個未修補的 Defender 零時差 RoguePlanet（CVE-2026-47281），在全面更新的 Windows 上仍可取得 SYSTEM。供應鏈面，名為 Miasma（SANS 稱 TeamPCP 活動）的 npm 蠕蟲從 Red Hat 雲端服務套件起手，6 月 3 日兩小時內再感染 57 個套件、上傳逾 286 個惡意版本，6 月 5 日進一步波及微軟 Azure、Microsoft、MicrosoftDocs 等四大組織共 73 個 GitHub 儲存庫；它濫用僅 157 位元組的 `binding.gyp` 在 `npm install` 階段執行、繞過多數安裝腳本檢查，竊取 npm、GitHub、AWS、GCP、Azure、HashiCorp Vault 與 Kubernetes 憑證後自我複製。CISA 於 6 月 9 日新增三項 KEV（Arista EOS、Chromium V8、思科 SD-WAN Manager），ServiceNow 也揭露未驗證 API 端點遭利用、查詢到部分客戶資料，舊版 WinRAR 漏洞 CVE-2025-8088 則被俄系 Gamaredon 持續用於攻擊烏克蘭。整體嚴重程度判為高。

## 重大漏洞與威脅

1. **[微軟六月 Patch Tuesday 修補逾 200 個漏洞、含 6 個零時差](https://www.bleepingcomputer.com/news/microsoft/microsoft-june-2026-patch-tuesday-fixes-6-zero-days-200-flaws/)**
   - 本月修補量創單月紀錄（部分來源計為 208 個 CVE）。已遭實際利用的是一個 Microsoft Defender 權限提升零時差 CVE-2026-41091（CVSS 7.8，微軟 5 月 19 日已先行帶外修補、六月正式納入）。公開揭露的具名零時差含 [GreenPlasma CVE-2026-45586（Windows 協同翻譯框架 CTFMON 提權至 SYSTEM）與 YellowKey CVE-2026-45585](https://www.bleepingcomputer.com/news/microsoft/microsoft-patches-yellowkey-greenplasma-miniplasma-zero-days/)——後者是 Windows 復原環境（WinRE）的後門，攻擊者只要能實體接觸未修補的 Windows 11 與 Windows Server 2022／2025 即可繞過 BitLocker 加密。各家對零時差確切數量標題略有出入（6 與 3 並見），建議以微軟官方公告與 KEV 為準排序修補。

2. **[修補後數小時揭露的 Defender 零時差 RoguePlanet CVE-2026-47281，全面更新仍可取得 SYSTEM](https://www.bleepingcomputer.com/news/microsoft/microsoft-defender-rogueplanet-zero-day-grants-system-privileges/)**
   - Patch Tuesday 釋出僅數小時，研究者即公開新的 Microsoft Defender 競態條件（race condition）漏洞 RoguePlanet，可在已完全更新的 Windows 10／11 上經由 Visual Studio Code 觸發、以 SYSTEM 身分開啟命令列，揭露時尚無修補且已有實際利用跡象。所幸 Defender 對多數使用者會自動更新元件；在隔離環境或關閉自動更新的主機須留意手動處置。

3. **[CISA 6 月 9 日新增三項 KEV：Arista EOS、Chromium V8、思科 SD-WAN Manager](https://www.cisa.gov/news-events/alerts/2026/06/09/cisa-adds-three-known-exploited-vulnerabilities-catalog)**
   - 三項均確認遭主動利用：CVE-2026-7473（Arista 可延伸作業系統 EOS，比較不完整漏洞）、CVE-2026-11645（Google Chromium V8 越界讀寫）、CVE-2026-20245（思科 Catalyst SD-WAN Manager，可取得 root）。其中思科 SD-WAN 零時差正是上週（W03）追蹤、當時僅通報尚未列管的同一漏洞，**本週新進展**為 CISA 正式列入 KEV、要求聯邦機構限期修補。Chromium V8 漏洞同步影響所有 Chromium 系瀏覽器，企業端應確認 Chrome／Edge 已更新。

## 攻擊趨勢與事件

1. **[Miasma／TeamPCP npm 供應鏈蠕蟲：從 Red Hat 蔓延到微軟 73 個 GitHub 儲存庫](https://www.microsoft.com/en-us/security/blog/2026/06/02/preinstall-persistence-inside-red-hat-npm-miasma-credential-stealing-campaign/)**
   - 攻擊始於 Red Hat 員工 GitHub 帳號遭入侵、循 `RedHatInsights/javascript-clients` 的 CI／CD 管線以合法的 GitHub Actions OIDC 發布流程上架被植入木馬的 `@redhat-cloud-services` 套件。6 月 3 日攻擊規模暴增，[兩小時內再感染 57 個套件、上傳逾 286 個惡意版本](https://www.stepsecurity.io/blog/binding-gyp-npm-supply-chain-attack-spreads-like-worm)（最大受害者為月下載逾 40 萬次的 `@vapi-ai/server-sdk`）；6 月 5 日蠕蟲更[波及微軟 Azure、Azure-Samples、Microsoft、MicrosoftDocs 四大組織共 73 個儲存庫](https://www.rescana.com/post/miasma-worm-supply-chain-attack-73-microsoft-github-repositories-compromised-via-ai-coding-tools)。手法核心是濫用一個僅 157 位元組的 `binding.gyp`，在 `npm install` 時觸發程式碼執行、繞過大多數只檢查 `package.json` scripts 的安裝腳本防護，竊取 npm、GitHub、AWS、GCP、Azure、HashiCorp Vault 與 Kubernetes 憑證後，再以取得的維護者帳號重新發布套件自我傳播。

2. **[舊版 WinRAR 漏洞 CVE-2025-8088 仍遭俄系 Gamaredon 用於攻擊烏克蘭](https://thehackernews.com/2026/06/winrar-flaw-exploited-by-russia-aligned.html)**
   - 漏洞修補已近一年，Trend Micro 仍觀察到 Earth Dahu（即 Gamaredon）與 SHADOW-EARTH-066（UAC-0226）持續利用它攻擊烏克蘭組織（[Trend Micro 研究](https://www.trendmicro.com/en_us/research/26/f/old-winrar-flaw-fuels-attacks-on-ukraine.html)）。攻擊鏈以夾帶誘餌 PDF、並把三個酬載藏在解壓目錄外替代資料流（ADS）的特製 RAR 檔起手，依序投放 GammaPhish（HTA）→ GammaLoad（VBScript 下載器）→ GammaSteel 竊密程式，竊取 Chromium 系與 Firefox 的密碼與 Cookie，並即時監看特定副檔名文件。凸顯「未納管的桌面軟體」是長尾破口。

3. **[ServiceNow 揭露未驗證 API 端點遭利用、查詢到部分客戶資料](https://www.bleepingcomputer.com/news/security/servicenow-discloses-security-incident-exposing-customer-data/)**
   - 惡意活動自 6 月 2 日起，ServiceNow 於 6 月 5 日對受託管的客戶執行個體套用修補（[The Hacker News 報導](https://thehackernews.com/2026/06/servicenow-flaw-exploited-to-gain.html)）。根因是 API 端點 `/api/now/related_list_edit/create` 被設為 `requires_authentication=false`，未驗證的 HTTP 請求即可查詢客戶執行個體資料表；攻擊者已對部分客戶成功執行查詢，可能觸及 IT 工單、員工紀錄、資產清冊與資安事件報告等。揭露時尚未指派 CVE，且公司早在 4 月 22 日即收到類似問題的漏洞回報、卻遲至 6 月 5 日才修補。

## 防禦與偵測

1. **[SANS ISC：TeamPCP 供應鏈活動追蹤（6 月 8 日，作者 Kenneth Hartman）](https://isc.sans.edu/diaryarchive.html)**
   - 針對本週 Miasma／TeamPCP npm 蠕蟲的防禦分析，核心提醒是「有效的來源證明（provenance）擋不住被入侵的建置環境」——只驗證套件簽章或 OIDC 來源並不足夠，因為惡意程式正是經由合法發布流程上架。偵測重點：把監控範圍從 `package.json` 的 scripts 擴大到**安裝期會被觸發的所有掛鉤**，包含 `binding.gyp`；對 CI／CD 在建置時對外連線、以及套件安裝後新增 GitHub Actions 工作流的行為告警。

2. **[SANS ISC：框架保護安全標頭三年來的採用變化（6 月 10 日，作者 Jan Kopriva）](https://isc.sans.edu/diaryarchive.html)**
   - 檢視 `X-Frame-Options` 與 CSP `frame-ancestors` 等防點擊劫持（clickjacking）標頭三年來的部署趨勢。對防禦方的落地價值在於：把這兩個標頭納入對外網站與管理介面的基線稽核，沒設或設定過寬的站點補上，是低成本就能收斂的縱深防禦一環。

3. **r/blueteamsec 本週無單一突出的新討論串**，藍隊面的可操作內容集中於上述兩篇 SANS Handler Diary；其中 TeamPCP 供應鏈偵測指引最值得直接套用到內部 CI／CD 環境。

## 台灣在地動態

1. **[趨勢科技成首家加入 Anthropic Project Glasswing 的台灣資安公司](https://www.ithome.com.tw/news/176412)**
   - iThome 6 月 8 日資安日報報導（[資安日報原文](https://www.ithome.com.tw/news/176439)），趨勢科技旗下 TrendAI、TrendLife、TXOne、VicOne、Magna AI 全數加入 Anthropic 於四月推出的 Project Glasswing 計畫，由善意一方運用 Claude Mythos 模型對既有軟體全面掃描漏洞，主打「以 AI 對抗 AI」。台灣是全球 AI 供應鏈核心，此舉在 AI 自動找漏洞的攻防競賽上具指標意義；同一脈絡下，Redis 本週修補的 5 項漏洞中，CVE-2026-23479（記憶體釋放後使用 UAF、CVSS 8.8）亦是由 AI 工具發掘，顯示「AI 找漏洞」已同時出現在攻擊與防禦兩端。

本週 iThome 在地資安報導仍以國際重大事件轉載為主（微軟創紀錄 Patch Tuesday、npm 供應鏈蠕蟲、WinRAR 持續遭利用），窗口內未見新增本土重大資安事件；最受台灣讀者關注的在地動態為上述趨勢科技與 Anthropic 的合作。

## 對 Simon 工作的影響評估

1. **微軟創紀錄 Patch Tuesday — 用 KEV 與「已遭利用」當修補排序的第一準則**
   本月逾 200 個漏洞無法一次全清，務必先依「是否實際遭利用」排序：已遭利用的 Defender 提權 CVE-2026-41091 與 CISA 6 月 9 日新增的三項 KEV（Arista EOS、Chromium V8、思科 SD-WAN）優先處置。YellowKey（BitLocker 繞過）對機房與端點的實體安全假設是一記提醒——若你的備份金鑰或離線資料倚賴 BitLocker，需確認相關主機已達六月修補等級。未修補的 RoguePlanet 則靠 Defender 自動更新元件緩解，但隔離網段主機要納入手動追蹤。把這套排序固化進 ISO 27001 的弱點管理與變更管理流程，並用 WSUS／Workspace ONE 推送。

2. **Miasma npm 供應鏈蠕蟲 ＋ ServiceNow 未驗證 API — 收斂建置流程憑證與 SaaS 攻擊面**
   即使半導體 IT 不重度開發前端，內部自動化、CI／CD 與廠商 SaaS 都可能踩到同一類風險。可立即做三件事：盤點 CI／CD 與 npm／套件管理用到的權杖，收斂 OIDC 發布範圍與權杖權限；在建置流程考慮 `npm install --ignore-scripts` 並監看 `binding.gyp` 等安裝期掛鉤；對外部 SaaS（含若有使用 ServiceNow）確認管理 API 沒有 `requires_authentication=false` 之類的錯誤組態。這正對應 ISO 27001 的供應商關係與資產／組態管理控制。

3. **WinRAR CVE-2025-8088 仍被利用 — 把第三方桌面軟體納入 MDM 合規盤點**
   「未納管的軟體會一直開著門」是本週最務實的提醒。你正在導入的 Omnissa Workspace ONE 可用軟體清冊偵測過期的 WinRAR 等第三方工具，並設合規政策強制更新或封鎖；建議把「常見高風險桌面軟體（壓縮、PDF、瀏覽器外掛）達最新版本的比例」做成 MDM 合規指標，延續上週以修補等級當基準的做法。

4. **本週幾乎所有事件都圍繞「憑證竊取」— 為 MFA／Silverfort 專案再加碼**
   Miasma 竊取開發與雲端憑證、GammaSteel 竊密、ServiceNow 觸及客戶資料，主軸都是身分與憑證。你推進的 SQL Server MFA 搭配 Kerberos 與 Silverfort，建議把覆蓋面明確延伸到「被忽略的身分」——服務帳號、CI／CD 權杖、本機與舊式登入，這些正是蠕蟲與 APT 最常利用的缺口；MFA 方式優先採抗釣魚的 FIDO2／硬體金鑰。Silverfort 能把 MFA 套到傳統不支援 MFA 的服務帳號與本機登入，正對應這波攻擊的入口。
