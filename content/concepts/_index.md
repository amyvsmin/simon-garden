# Concepts Index（自動維護、勿手改）

最後更新：2026-05-26


## A
- [[aaa-framework]] / AAA 框架（Authentication, Authorization, Accounting） / AAA / AAA framework / 認證授權稽核 / 認證授權記帳 / authentication authorization accounting / AAA 架構 / triple A — 身份驗證（Authentication）、授權（Authorization）、稽核（Accounting）三位一體的存取控制架構。AAA 回答三個核心問題：你是誰（Authentication）、你能做什麼（Authorization）、你做了什麼（Accounting）。是網路安全與系統存取...
- [[absolute-path]] / 絕對路徑 / absolute path / absolute file path / 完整路徑 / full path — 從 root（`/`）開始、一路寫到目標檔／目錄的完整路徑。例：`/home/analyst/projects`。每個 `/` 表示「往下分支一層」。跟 [[relative-path]]（從當前目錄算起）成對。
- [[acceptable-use-policy]] / 可接受使用政策（Acceptable Use Policy） / Acceptable Use Policy / AUP / 可接受使用政策 / 使用規範 / acceptable use / 資源使用政策 — 定義員工使用公司資源（網路、設備、軟體、資料）的規範與限制的正式文件。AUP 是政策層級（[[psp-hierarchy]]）的具體實例，明確告知使用者哪些行為被允許、哪些被禁止，以及違反的後果。
- [[agent-architecture-comparison]] / Agent 架構對比（Hermes vs OpenClaw） / agent framework comparison / Hermes vs OpenClaw / 個人 AI 架構選型 — 以 Hermes Agent（讓使用者變聰明、低變動）vs OpenClaw（起始高速但 138 個 CVE 爆雷）為代表，跟隱私、安全、長期可靠度是選 agent 架構的關鍵考量。在 GitHub Stars 上漲不代表品質，使用者該看雷表、安全公告、社群信譽、長期路徑。
- [[agent-error-amplification]] / 代理人決策鏈誤差放大（3% 源頭誤差複合） / 代理人誤差放大 / 代理人決策鏈誤差 / 3% 誤差複合 / agent error propagation / agent error amplification / 上游資料污染 — AI 代理人多步驟決策鏈中、上游資料／推理的微小誤差（如 3%）會在每一步複合放大、最終導致整個營運邏輯偏差的系統性風險；強調上游驗證比下游補救成本低 100 倍。
- [[agent-os-competition]] / 代理人作業系統競賽（桌面 AI Codex vs Claude vs Grok vs Gemini） / 代理人作業系統競賽 / agent OS / 桌面 AI 競賽 / Codex vs Claude / agent OS war / 代理人桌面 OS — Anthropic、OpenAI、xAI、Google 同時搶奪知識工作者「桌面代理人入口」的系統級競賽；不是單純工具切換、而是決定未來在哪個介面完成工作的作業系統層級競爭、類比十年前 iOS vs Android。
- [[agentic-kill-chain]] / Agentic Kill Chain / AI Agent 攻擊鏈 / 自動化攻擊鏈 — 由 AI agent 串連完成的攻擊全流程：偵察 → 弱點識別 → 利用 → 橫向移動 → 維持存取 → 撤退。Cisco 副總裁 CYBERSEC 2026 Day 2 強調與人類攻擊鏈的決定性差異是 24／7 不間斷、自動決策、可在失敗時 self-adjust 重試。
- [[agentic-secops]] / Agentic SecOps / AI 驅動的 SecOps / Agent 化資安營運 / agentic security operations / AI SOC 閉環 — 以 AI agent 串接 SOC 全流程（偵測 → 分揀 → 調查 → 取證與回應 → 偵測工程）的下一代資安營運範式。重點是把過去人工密集的告警分流、案例摘要、查詢撰寫、規則生成讓 AI 接手，分析師專注在判斷與決策層，從而擴展 SOC 處理量並縮短 MTTD／MTTR。
- [[aggregate-function]] / 聚合函數（Aggregate Function） / aggregate function / aggregate / 聚合函數 / COUNT / AVG / SUM / MIN / MAX — 對多筆資料做計算、回傳單一結果（不是回傳原始資料）的 SQL 函數；本課程教三個常用—`COUNT`／`AVG`／`SUM`；是月度資安 KPI 報表跟 incident detection baseline 比較的核心工具。
- [[aging-network-infrastructure]] / 老化網路基礎設施 / aging network infrastructure / EoL network device / 老舊網路設備 / 網設備生命週期風險 — 組織內已過 End of Life（EoL）／End of Support（EoS）的網路設備（防火牆、路由器、交換器、VPN 閘道、印表機伺服器等）所累積的結構性攻擊面。Cisco 副總裁 CYBERSEC 2026 Day 2 點出全球網路設備將近一半已 EoL／EoS、30% 硬體軟體超...
- [[ai-task-clustering]] / AI 任務分組（Cluster） / AI 任務 cluster / AI task clustering / 任務分組 / task clustering / 任務聚類 / cluster grouping — 把一堆零碎、未分類的待辦任務交給 AI、只請它做分組（cluster）、不請它拆解、不請它新增、不請它排序。AI 最擅長的能力之一是發現語意相近的東西做分組、這個動作對 AI 來說容錯率高、腦補空間小、是引入 AI 接手任務管理時阻力最低的第一步。
- [[ai-task-execution]] / AI 任務執行範式（從問答到執行） / AI 執行任務 / AI 個人助理 / AI 任務執行 / AI from QA to execution / AI 代理執行 / 從問答到執行 — AI 從「回答問題的搜尋引擎」進化為「能完成任務、執行細節的個人助理」的範式轉移。標誌性改變：AI 不再只輸出文字建議，而是直接操作工具、呼叫 API、修改檔案、跑排程——使用者描述目標，AI 自主拆解並執行步驟。2025–2026 年以 Claude Cowork / Operator 功能...
- [[ai-tier-trickledown]] / AI 功能分層下放策略 / AI 分層釋出 / AI feature trickle-down / 旗艦下放策略 / feature staggered release — 旗艦／高階產品先採用、再分階下放到中階／入門產品的商業與技術釋出策略。三星 Awesome Intelligence 從 S 系列釋出語音轉文字、通話智慧助理、最佳臉部表情到 A 系列；Apple Intelligence、Google AI、Pixel feature drop 都用相同邏輯...
- [[ai-vuln-discovery]] / AI 漏洞挖掘 / AI Vulnerability Discovery / Claude Opus / AI 找漏洞 — 研究人員借助大型語言模型（如 Anthropic Claude Opus）協助閱讀原始碼、推理邏輯瑕疵、產生 PoC 的新興工作流；本案 Deutsche Telekom 用 Claude Opus 發現潛伏 14 年的 PackageKit 漏洞。
- [[anomaly-detection]] / 異常偵測（Anomaly Detection） / anomaly detection / 異常偵測 / 異常檢測 / baseline detection / red flag / 紅旗 / 異常行為偵測 / behavioral anomaly — 找出資料中跟正常 baseline 不符的事件／模式、判定為潛在資安事件；資安分析師查 log 的核心心法、跟「白名單反推」「紅旗思維」相通；Course 6「Sound the Alarm」detection 章節主場、本課程在 SQL filter 應用層先預習。
- [[api]] / API（應用程式介面） / API / Application Programming Interface / 應用程式介面 / 程式介面 — 讓程式可以直接呼叫另一個程式的標準化接口。GUI 是給人類點按鈕用的介面、API 則是把同一個動作回到本質：程式跟程式之間用結構化資料直接溝通，省去模擬人類操作的繞路。
- [[apt]] / 進階持續性威脅（Advanced Persistent Threat / APT） / APT / Advanced Persistent Threat / 進階持續性威脅 / 高級持續性威脅 / 國家級攻擊 — 由國家政府或資源充沛的組織發動，針對特定目標進行長期、隱蔽、多階段的網路攻擊行動。「Advanced」指技術精密、「Persistent」指潛伏時間長（數月到數年）、「Threat」指具明確戰略目標。
- [[asset]] / 資產（Asset） / Asset / 資產 / 資訊資產 / information asset / IT asset / 資產盤點 — 組織內有價值、需要保護的項目。資產涵蓋數位資產（資料庫、原始碼、客戶資料）、實體資產（伺服器、筆電、機房設備）與人員資產（員工知識、存取權限）。資產是風險評估的保護對象。
- [[asymmetric-encryption]] / 非對稱加密（Asymmetric Encryption） / Asymmetric Encryption / 非對稱加密 / 非對稱式加密 / public key cryptography / 公鑰加密 / 公開金鑰加密 — 使用公鑰（public key）與私鑰（private key）成對的加密方法。公鑰加密、私鑰解密（確保機密性）；私鑰簽章、公鑰驗證（確保身份鑑別與不可否認性）。解決了對稱加密的金鑰分發問題，但運算速度較慢。
- [[attack-surface]] / 攻擊面（Attack Surface） / Attack Surface / 攻擊面 / 攻擊表面 / 進入點 / entry point — 系統所有可被攻擊者嘗試利用的進入點總合。攻擊面越大，潛在的攻擊路徑越多，風險越高。資安防禦的核心目標之一就是持續縮減攻擊面。
- [[attack-vector]] / 攻擊向量（Attack Vector） / Attack Vector / 攻擊向量 / 攻擊路徑 / attack path / 入侵途徑 — 攻擊者用來突破目標系統安全防線的路徑或方法。每一條攻擊向量對應一種可被利用的進入方式，常見類型包括釣魚郵件、惡意 USB、Web 應用漏洞、供應鏈植入等。
- [[attacker-mindset]] / 攻擊者思維（Attacker Mindset） / Attacker Mindset / 攻擊者思維 / 攻擊者視角 / adversarial thinking / 對手思維 — 從攻擊者的角度思考系統弱點的資安方法論。核心是設身處地模擬攻擊者會如何偵察、找弱點、利用漏洞，藉此在攻擊發生前先發現並修補防禦缺口。
- [[authentication]] / 認證 / authentication / 身份驗證 / 驗證 / 認證流程 — 證明「你是誰」的過程——使用者透過密碼、生物辨識、多因子驗證等方式向系統證明自身身份。Authentication（你是誰）跟 [[authorization]]（你能做什麼）是 access control 的兩個必備步驟、先 authentication 再 authorization。
- [[authorization]] / 授權 / authorization / 存取授權 / 授權控管 — 判定「你能存取什麼資源」的過程——系統根據已認證使用者的身份、角色、群組、規則等決定可讀／可寫／可執行哪些檔案／資料／API。Authorization 是 access control 的後半段、跟 [[authentication]]（你是誰）成對。

## B
- [[bash-shell]] / Bash / Bash shell / Bourne Again Shell / 預設 shell — Bourne Again Shell、多數 Linux distro 預設的 [[linux-shell]]。是 Bourne Shell（sh）的「重生版」、加入命令歷史、tab completion、scripting 等現代功能。Bash prompt 預設用 `$`（一般 user）或...
- [[bottom-up-writing]] / 由下而上寫作（從筆記浮現主題、萬能寫作框架） / 由下而上寫作 / bottom-up writing / bottom-up-writing / 萬能寫作框架 / 觀點案例總結 / 不從大綱寫 — 跟「先定主題→寫大綱→填內容」的傳統由上而下相反、由下而上寫作主張先寫筆記跟想法、讓分類自然浮現、收斂成主題、再用「觀點 + 案例 + 總結」三段框架排列成文章。
- [[browser-use]] / Browser Use（瀏覽器自動化） / Browser Use / 瀏覽器自動化 / Playwright / Puppeteer / agent-browser / 桌面 App 控制 — 讓 AI 模擬人類打開瀏覽器、點按鈕、填表單、截圖的操控方式。技術上常用 Playwright／Puppeteer 框架；延伸版 agent-browser 可控 Electron 架構桌面 App（Slack／Discord／VS Code／Obsidian）靠 Chrome DevTool...
- [[brute-force-attack]] / 暴力攻擊（Brute Force Attack） / Brute Force Attack / 暴力攻擊 / 暴力破解 / brute force / 窮舉攻擊 / 密碼窮舉 — 透過系統性嘗試所有可能的密碼、金鑰或憑證組合來破解認證機制的攻擊手法。變體包括字典攻擊（dictionary attack，用常見密碼清單）和憑證填充（credential stuffing，用外洩帳密嘗試其他服務）。

## C
- [[cbom]] / 加密資產清單 / CBOM / Cryptographic Bill of Materials / 加密物料清單 / 密碼資產盤點 — 把組織內所有正在使用的加密演算法、金鑰、憑證、函式庫、相依硬體（HSM／晶片卡／TPM）以結構化方式列表的盤點清單。概念類比 SBOM（軟體物料清單）、但聚焦於密碼學使用面。CBOM 是 PQC 遷移的 Day 1 工作：你看不到的東西就保護不了、不知道哪裡用了 RSA/ECC 就無從規劃遷移...
- [[certificate-authority]] / 憑證機構（Certificate Authority） / CA / certificate authority / 憑證機構 / 憑證中心 / 認證中心 / 憑證簽發機構 — 負責簽發、管理與撤銷數位憑證的受信任第三方機構。CA 用自己的私鑰對 [[digital-certificate]] 簽章，讓依賴方（relying party）能透過 CA 的公鑰驗證憑證真偽，是 [[public-key-infrastructure]] 的信任錨點。
- [[cia-triad]] / 機密性完整性可用性三要素（CIA Triad） / CIA Triad / CIA 三元組 / 機密性完整性可用性 / Confidentiality Integrity Availability / CIA / 資安三要素 — 資訊安全的基石模型，由三個核心目標構成：機密性（Confidentiality，確保只有授權者能存取）、完整性（Integrity，確保資料未被未授權篡改）、可用性（Availability，確保授權者在需要時能存取）。幾乎所有資安控制措施都是為了維護這三者之一或多者。
- [[cicd-pipeline]] / CI/CD 管線（CI/CD Pipeline） / CI/CD Pipeline / CI/CD 管線 / CI/CD / 持續整合 / 持續交付 / Continuous Integration / Continuous Delivery / Continuous Deployment — 持續整合（CI）與持續交付/部署（CD）的自動化軟體開發流程。CI 在程式碼合併時自動跑建置與測試，CD 將通過測試的版本自動部署到環境。若管線缺乏安全檢查，則本身會成為攻擊面（[[attack-surface]]）。
- [[claude-code-goal-command]] / Claude Code /goal 指令 / /goal / goal 指令 / Claude Code goal mode / goal command / 完成條件指令 — Claude Code 2.1.139（2026-05-12）上線的 session 級指令。使用者寫一個完成條件，Claude 跑完一輪後由背景小模型（預設 Haiku）讀整段對話判斷條件是否達成、未達成就再起一輪、達成就自動清掉 goal、整段 session 不用手動敲確認。
- [[claude-code-iteration-loop]] / Claude Code 疊代迴圈（驗證 → 自我修正） / CC iteration loop / 疊代迴圈 / 自我修正循環 / AI 驗證迴圈 / 給 AI 驗證方式 — Boris Cherny 強調的 Claude Code 高效心法之一：寫程式時主動告訴 AI「如何驗證自己的工作」、讓 CC 進入 跑測試 → 看到錯誤 → 修正 → 再跑測試 的自我修正循環。AI 不再「寫完就丟」、而能對自己的產出負責；人類從「逐行檢查」升級為「驗收交付」。
- [[claude-code-onboarding-qa]] / Claude Code Onboarding Q&A 模式 / CC onboarding Q&A / Claude Code 進新 codebase / codebase 新人 onboarding / Q&A 先行 — Boris Cherny（Claude Code 創始者）建議的入門心法：第一次進新 codebase 時、不要直接叫 CC 改程式碼、先讓它做 Q&A。問函式怎麼被呼叫、為什麼有 15 個參數、模組架構怎麼設計、commit 歷史脈絡，CC 會主動深入挖掘程式碼庫整理來龍去脈、新人 onbo...
- [[claude-code-plugin-scope]] / Claude Code Plugin 三層 Scope（User／Project／Local） / User scope / Project scope / Local scope / plugin 三 scope / plugin 安裝範圍 / claude code plugin scope / CC plugin scope — [[claude-code]] plugin 安裝時的三層作用域選項，決定 plugin 寫在哪、影響哪些對話、會不會跟著 repo 走。User／Project／Local 三選一、對應「個人習慣性工具／團隊統一工具／自己亂試」三種使用情境。
- [[claude-code-setup-plugin]] / Anthropic 官方 claude-code-setup plugin / claude-code-setup / claude code setup plugin / claude-code-setup plugin / Anthropic 官方推薦 plugin / CC 顧問 plugin / 掃專案推薦 plugin / Claude Code 自動推薦 — Anthropic 2026-05 官方推出的 Claude Code plugin，內含一個會掃描當前專案結構（`package.json`、imports、目錄樹、`CLAUDE.md`）並產出客製化繁中安裝報告的 [[skill]]；報告分 MCP／Skills／Hooks／Subage...
- [[claude-code-vs-api-split]] / 「我」(Claude Code) vs Claude API 分工 / 三個 Claude 形態 / 設計師員工分工 / Claude runtime 比較 — Claude 在不同 runtime 有三種形態（Claude Code、API、Claude.ai），三者用同一底層模型但能力與記憶完全不同；設計時用 Claude Code 寫 prompt 食譜、部署後 Claude API 按食譜執行——前者像廚師，後者像機器手臂。
- [[claude-code]] / Claude Code / CC / Claude CLI — Anthropic 推出的終端型 AI 助手，運行於本地 shell，具備完整「讀檔、改檔、跑指令、搜資料、串服務」的自主迴圈能力，是 Claude 三大產品線中自主性最高的一端。
- [[claude-md-12-rules]] / Claude Code 12 條規則（Karpathy 4 + Mnilax 8） / Claude Code 12 rules / CLAUDE.md 12 rules / Karpathy 12 rules / Mnilax 12 rules / 12 條規則模板 / Claude Code 行為契約 — Karpathy 2026/1 抱怨 → Forrest Chang 4 條 → Mnilax 2026/5 補 8 條 = 12 條 CLAUDE.md 規則。整套用契約式語言寫進 CLAUDE.md，Claude Code 寫程式錯誤率從 41% 降到 3%。前 4 條對應 1 月份單次補...
- [[claude-md-200-line-limit]] / CLAUDE.md 200 行上限 / CLAUDE.md 200 行 / CLAUDE.md 行數上限 / 200 行死線 / claude-md token budget / instruction file size limit — CLAUDE.md 全文超過 200 行後，Claude 對個別規則的遵守率明顯下降。原因是重要規則被噪音淹沒、Claude 開始「模式匹配看到規則」而不是逐條閱讀。Anthropic 官方建議 CLAUDE.md ~80% 遵守率，前提是「短、結構清楚」。Mnilax 6 週實測：4 條規則...
- [[claude-md-dual-nav]] / CLAUDE.md（雙層導航設計） / 雙層導航 / AI 文件夾地圖 / 兩層 instructions — 用 vault 根目錄 CLAUDE.md 當總目錄、各資料夾 instructions.md 當局部地圖的兩層 AI 導航設計，讓 Claude Code 不必掃整個 vault 就能找到該讀什麼。第一層介紹整體架構與資料夾用途，第二層說明該資料夾的具體規則與輸入輸出格式。
- [[claude-md-reflexive-law]] / CLAUDE.md 反射律 / claude-md reflexive law / 行為偏差改規則 / 不鑽 CC 內部機制 / rule-driven debugging — 當 AI 執行同一個需求卻出現跟上次不一樣的結果時，不去研究 LLM 內部機制或 Claude Code 內部運作，而是把正確做法寫成規則（CLAUDE.md／rules／user-memory）讓它下次照做。出處：雷蒙迷你課 2-1「讓 AI 記住你的偏好」。
- [[claude-rewind]] / Claude /rewind 回溯機制 / Claude /rewind / /rewind / Claude 回溯 / Esc Esc 回溯 / rewind to message / Claude 退回機制 — Claude Code 的新斜線命令、快捷鍵連按兩次 Esc、跳回任何先前訊息並從該點重新開始對話；後續訊息全部從 context 移除、像時光倒流；用來取代「多輪修正」式的 messy 對話。
- [[claude-slash-commands-control]] / Claude 斜槓指令快捷控制 / Claude 斜槓指令 / Claude slash commands / /compact / /clear / /context / /btw / /usage — Claude 桌面／網頁版／Claude Code 內建斜線命令在對話進行中介入 AI 行為：原 4 個（`/compact`／`/clear`／`/context`／`/btw`）+ Anthropic 2026-04 加 `/rewind` 跟 `/usage` 共 6 個。不需要重置整個...
- [[claude-three-modes]] / Claude 三工作模式（Chat / Cowork / Code） / Claude 三模式 / Chat Cowork Code / Claude 工作模式 / Claude 模式選擇 — AccuHit 2026-04 整理的 Claude 三種工作模式框架：Chat（諮詢對話）、Cowork（協作自動化）、Code（程式開發終端）。三者適用情境不同，分別對應「策略顧問」「自動化執行者」「開發助手」三個角色，選對模式才能發揮 Claude 最大效益。
- [[claude-usage-dashboard]] / Claude 額度面板三層結構 / Claude 額度面板 / Claude usage dashboard / Current Session / Weekly Limits / Extra Usage / 會話額度 / 週期額度 — Claude 桌面／網頁版額度顯示拆三層：Current Session（當前會話的單次記憶佔用）、Weekly Limits（整個帳號跨會話的週期總血條）、Extra Usage（用完總額後切換到按量計費的額外用量）。三層彼此獨立、混淆任一層都會誤判實際耗用。
- [[cli-api-mcp-priority]] / CLI → API → MCP → Browser Use 優先順序 / CLI API MCP 優先順序 / AI 操控軟體優先順序 / AI tool priority / 雷蒙協定優先順序 / raymond protocol priority / ai-controls-software-priority — AI 操控軟體時的工具優先順序——CLI > API > MCP > Browser Use。核心原則：越底層、越可控的協定優先使用，瀏覽器自動化是最後手段。能用一行 shell 指令解決的事不要包成 MCP server，能用 REST API 拿到資料的不要開瀏覽器模擬點擊。出處：雷蒙迷你...
- [[cli]] / CLI（命令列介面） / CLI / Command Line Interface / 命令列介面 / 命令列工具 / 終端指令 — 在終端機用人類可讀的單字指令操作軟體的介面。介於 [[api]] 跟 GUI 之間：沒有畫面、但語法是英文單字而非函式呼叫，比 API 更貼近自然語言、又比 GUI 穩定。
- [[cloud-computing]] / 雲端運算（Cloud Computing） / cloud computing / 雲端運算 / 雲端服務 / cloud / 雲 / IaaS / PaaS / SaaS / 雲端 — 透過網路按需使用共享運算資源（伺服器、儲存、資料庫、網路、應用程式）的服務模式，使用者不需自行購置與維護實體硬體。NIST SP 800-145 定義五大特性：按需自助、廣泛網路存取、資源池化、快速彈性、計量服務。
- [[command-argument]] / 命令參數 / argument / command argument / 參數 / 命令補充資訊 — 命令所需的具體資訊、補在命令後面、缺了命令不完整。例：`echo "Hello"` 中的 `"Hello"` 是 echo 的 argument。一個命令可接 0~多個 argument。跟 [[command-options]]（修改命令行為的 flag）成對。
- [[command-options]] / 命令選項 / options / command options / flags / 旗標 / 命令旗標 — 修改命令行為的輸入、通常以 `-` 開頭（短選項如 `-l`）或 `--` 開頭（長選項如 `--long`）。例：`ls -l` 中的 `-l` 是 option。跟 [[command-argument]]（命令的操作對象）成對。
- [[compliance]] / 合規（Compliance） / Compliance / 合規 / 法規遵循 / regulatory compliance / 合規性 / 法遵 — 組織遵循適用法律、法規、產業標準與內部政策的狀態與持續過程。合規不等於安全——通過稽核只代表滿足最低要求，真正的安全需要超越合規的主動防禦。與 regulations（法規）的區分：法規是外部制定的規範，合規是組織遵循這些規範的行為與狀態。
- [[compute-based-pricing]] / Compute-based pricing（運算量計費） / Compute-based pricing / 運算量計費 / 算力計費 / compute pricing / AI 訂閱計費 / Google AI 新計費 — Google I/O 2026 隨 [[gemini-spark]] 公佈的新訂閱計費邏輯；從「每日提示次數上限」轉為「依運算量計費」；依提示複雜度／使用功能／對話長度計算實際消耗；達上限自動降模型；Pro／Ultra 用戶可額外購買 pay-as-you-go 點數續用；每 5 小時刷新直到...
- [[consultant-mindset]] / 顧問思維 / 決策框架 / 情境式考題 / 顧問腦 — 面對情境式考題時跳脫純背誦定義的學生模式，改以「在限制條件下提出最不差解決方案」為決策邏輯的應考思維框架，是 iPAS 115 年命題升級後的核心應考能力。
- [[content-asset]] / 內容資產化（Content Asset） / 內容資產 / 內容資產化 / content asset / 長壽內容 / 複利內容 — 把單篇內容當成**長期可複利、會持續為創作者帶來流量／訂閱／信任**的資產，跟「曇花一現的動態貼文」相對。判斷依據：這篇內容 3 個月後、1 年後、3 年後還能不能被新讀者發現並轉換？能 = 內容資產；不能 = 動態。
- [[context-resend-token-paradox]] / Context 重送 Token 悖論 / Token 悖論 / context resend cost / 上下文重送成本 / HTML token 反直覺 — LLM 對話的反直覺數學現象：每次發訊息都會把整個對話前文一起送回給模型；長對話累積到數十萬 token 後、任何一次「因看不清楚而產生的多餘往返」都會讓那幾十萬 token 又被重送一遍。所以「單次輸出多用 token 換更精準的決策」可能反而省 token、特別是在長 context 場景。
- [[context-rot]] / 上下文腐爛（Context Rot） / 上下文腐爛 / context rot / context decay / 對話腐爛 / 長對話效能衰退 / Claude context rot — 長對話下大語言模型效能持續下降的現象、由 Anthropic Thariq Shihipar 2026-04 正式命名；原因是 context 越長、注意力分散到越多 token、舊的無關內容變成干擾、模型開始忘記前面講過的事或亂答。
- [[critical-infrastructure]] / 關鍵基礎設施 / critical infrastructure / CIP / 關鍵資訊基礎設施 — 電網、水資源、天然氣、電信、金融、運輸等一旦中斷將危及公共安全與經濟運作的系統；台灣 NCCST、美國 CISA 皆有對應分類，近年已從純 IT 風險擴展到 OT／韌體層。
- [[crypto-agility]] / 密碼敏捷性 / Cryptographic Agility / Crypto Agility / 密碼敏捷 / 演算法可換 / 加密敏捷性 — 系統設計時把加密演算法當成可替換的元件、而非寫死在程式碼裡的能力。當演算法被破解、被棄用、或被新標準取代時、能在不重做整個系統的前提下換掉。陳君明 PQC Forum 強調：在 PQC 標準仍會持續修訂、攻擊面持續演進的背景下、密碼敏捷性是比「選對演算法」更重要的長期能力。
- [[cryptography]] / 密碼學（Cryptography） / Cryptography / 密碼學 / 加密技術 / 加密學 — 把可讀訊息（明文，plaintext）轉為不可讀形式（密文，ciphertext）、確保通訊安全的技術與科學。密碼學是實現機密性（[[cia-triad]]）的核心技術手段，同時也用於完整性驗證與身份鑑別。
- [[cultural-nesting]] / 文化嵌套關係 / 文化套娃 / 文化分層 / cultural nesting / 嵌套文化 — 企業文化不是單一層次，而是嵌套結構：宏觀文化（國家／地區）影響企業文化、企業文化影響部門亞文化、亞文化影響團隊微觀文化；但不只是俄羅斯娃娃式單向套娃，各層之間會雙向反饋。
- [[cve-list]] / CVE 清單（CVE List） / CVE / CVE List / CVE 清單 / Common Vulnerabilities and Exposures / 常見弱點與曝露 / CVE 資料庫 / CVE ID — 由 MITRE 維護的公開弱點與曝露清單，為全球已知弱點提供統一編號（CVE-年份-序號）。CVE 讓不同廠商、工具、組織能用同一個 ID 指稱同一個弱點，是資安情報共享的基礎設施。
- [[cve-weaponization-time]] / CVE 武器化時間 / 漏洞武器化時間 / weaponization time / CVE-to-exploit time / time to exploit / TTE — 從漏洞（CVE）公開揭露到網際網路上出現實際被利用的攻擊（exploit in the wild）所需的時間差。是衡量企業修補節奏是否跟得上攻擊者的核心指標；近年因 AI 輔助攻擊工具普及而急速縮短。
- [[cvss]] / CVSS / Common Vulnerability Scoring System / 漏洞評分 — Common Vulnerability Scoring System，業界通用的漏洞嚴重性量化標準，依攻擊向量、複雜度、衝擊面等維度計分（0.0–10.0），8.8 分屬高風險，常作為修補優先序與內部稽核 KPI 的判斷依據。
- [[cyber-range-digital-twin]] / 數位孿生資安攻防演練 / Cyber Range / Digital Twin / 數位孿生 / 資安攻防演練 / 虛擬演練環境 — 把企業真實 IT/OT 環境（網路拓樸、主機、PLC、HMI、SCADA、應用程式）以虛擬方式重建、讓資安團隊在虛擬環境中演練攻擊鏈與防禦策略、不影響生產線。AI 加入後可吃既有攻擊事件報告、自動產生模擬攻擊腳本。CYBERSEC 2026 資策會 + SyncKey Tech 興啟科技以 1...

## D
- [[daily-notes]] / Daily notes（AI 工作日誌） / daily notes / AI 工作日誌 / 每日筆記 — AI 每天結束時把工作內容寫進當日的 daily notes 檔，下次 session 只讀最近幾天即可恢復脈絡，是漸進式披露在時間維度的具體實作。檔名通常是 `YYYY-MM-DD.md`，依日期排序，內容為當日 AI 完成的事項、決策、待辦。
- [[data-governance]] / 資料治理（Data Governance） / data governance / 資料治理 / 資料管理 / 資料管治 / data management governance — 確保組織資料在品質、安全、合規、可用性各面向達標的政策、流程與角色體系。資料治理是 [[data-lifecycle]] 的上位框架，回答「誰有權對哪些資料做什麼」與「資料品質如何維持」兩個核心問題。
- [[data-lifecycle]] / 資料生命週期（Data Lifecycle） / data lifecycle / 資料生命週期 / 資料生命週期管理 / data lifecycle management / DLM / 資料全生命週期 — 資料從建立、儲存、使用、分享、封存到銷毀的完整歷程。每個階段都有對應的安全控制需求，確保資料在整個生命週期中受到適當保護，是 [[data-governance]] 落地的操作框架。
- [[data-states]] / 資料三態（Data States） / Data States / 資料三態 / 資料狀態 / data in use / data in transit / data at rest / 使用中資料 / 傳輸中資料 / 靜態資料 — 資料在其生命週期中存在的三種狀態：使用中（in use，正被應用程式處理）、傳輸中（in transit，在網路上移動）、靜態（at rest，儲存於磁碟或資料庫中）。每種狀態面臨不同的安全威脅，需要對應的保護措施。
- [[decision-triangle]] / 決策三角 / Trade-off / 技術折衷 / 工程取捨 — 在「效能與品質、成本與速度、精準度與無幻覺」三軸之間做工程取捨的權衡框架；題目出現「預算受限／硬體不足／低延遲」關鍵字時，答案優先選 LoRA、模型量化等降本增效方案。
- [[defense-in-depth]] / 縱深防禦（Defense in Depth） / Defense in Depth / 縱深防禦 / 深度防禦 / layered security / 多層防禦 / 層層防禦 — 多層安全控制措施疊加的防禦策略，使任何單一層失效時仍有其他層保護資產。核心理念是「沒有萬無一失的單一防線」，所以要層層佈防。
- [[design-handoff]] / 設計交棒 / Design Handoff / Design-to-Deploy / Netlify Connector — Claude Design 完成前端視覺後，產生指令把專案資產轉移到 Claude Code，由 Claude Code 接手後端開發、Netlify 連接器授權、自動部署上線的工作流分工。
- [[design-system]] / 設計系統 / Design System / 品牌資產 / 視覺規範 — 以 Logo、色票、字體、間距等可重複使用元素封裝出來的一致性視覺規範，讓不同產出物（簡報、網站、海報）共用同一套品牌語言。
- [[devsecops]] / DevSecOps / 安全左移 / shift left security / 開發安全營運 / 安全開發營運 — 在 DevOps（開發與營運整合）流程中嵌入安全實踐，將安全檢查從部署後的「右移」提前到開發早期的「左移」。核心理念是安全不是最後加上的關卡，而是從程式碼撰寫開始就融入的持續活動。
- [[digital-certificate]] / 數位憑證（Digital Certificate） / digital certificate / 數位憑證 / 電子憑證 / X.509 / SSL certificate / TLS certificate / 憑證 — 由 [[certificate-authority]]（CA）簽發的電子文件，將公鑰與持有者身份綁定在一起。最常見的格式是 X.509 v3，包含主體名稱、公鑰、有效期限、簽發者、序號與 CA 的數位簽章。
- [[directory-as-trigger]] / 目錄即觸發（directory-as-state） / directory-as-trigger / cwd-as-state / 目錄狀態機 / C9 觸發 — Claude Code 以工作目錄作為 skill 模式切換的顯式觸發器。打開某特定目錄即進入對應 skill 的預設模式，不需要額外打觸發詞；跨裝置共用同一習慣，手機、電腦、網頁體感一致。
- [[disposable-ui-html]] / 用完即丟 HTML 介面 / disposable HTML UI / throwaway HTML interface / 客製即丟介面 / 一次性 HTML 介面 — 讓 AI 為單次任務即時生成完整可互動的 HTML 介面、解決完問題就丟、不維護不版控；目的是把 Markdown 文字牆換成「真的能直接操作的工具」。
- [[doc-to-md]] / doc-to-md（PDF→MD 知識庫轉換工具） / doc-to-md / PDF 轉 MD / PDF 轉 Markdown / 知識庫轉 MD 工具 / doc to md / document to markdown — 李佳達師父班釋出的本機轉檔工具、一鍵把 PDF 轉成 MD 格式進個人知識庫、不依賴 LLM 上下文窗、不花 Token、避免 ChatGPT 直接轉長文會嚴重省略的問題。
- [[docs-live]] / Docs Live（語音文件編輯） / Docs Live / Google Docs Live / 語音文件編輯 / voice document editing / voice-controlled docs — Google 在 I/O 2026 推出的 Google 文件語音 AI 編輯功能；使用者用「白話傾吐」自然語速說話、Gemini 直接完成草稿撰寫、排版、跨服務資訊擷取與內容修飾、不必精準下指令或寫提示詞。
- [[dse-bypass]] / Windows DSE 繞過（反射式驅動載入） / DSE bypass / Driver Signature Enforcement bypass / 反射式驅動載入 / reflective driver loading — 繞過 Windows DSE（Driver Signature Enforcement，強制驅動數位簽章）機制的攻擊技術。原本 DSE 要求所有載入的核心模式驅動必須帶有效簽章，但攻擊者透過已簽章的反射式載入器在記憶體中直接載入未簽章的驅動 binary，避開檔案系統層的簽章驗證。

## E
- [[earth-kurma]] / Earth Kurma（EarthMaker）APT 組織 / EarthMaker / Earth Kurma APT / 東南亞 APT 組織 — 主要針對東南亞地區的 APT（進階持續性威脅）攻擊組織，活動可追溯至 2020 年 11 月。鎖定政府單位與與政府合作密切的電信商，受害國家包含菲律賓、越南、汶萊、馬來西亞、泰國、印尼。攻擊目標以資料竊取為主，依環境客製化工具、提升隱蔽性。
- [[encryption-decryption]] / 加密與解密（Encryption & Decryption） / encryption / decryption / 加密 / 解密 / 加密與解密 / encryption and decryption / 密文 / 明文 / ciphertext / plaintext — 將明文（plaintext）透過演算法與金鑰轉換為不可讀的密文（ciphertext）稱為加密；反向以正確金鑰將密文還原為明文稱為解密。加解密是 [[cryptography]] 的核心操作，保護資料的機密性（[[cia-triad]] 中的 Confidentiality）。
- [[eol-software]] / 終止支援軟體（End-of-Life Software） / End-of-Life Software / EoL Software / 終止支援軟體 / 停止支援軟體 / end of life / EOL / EOS / End of Support / 終止生命週期 — 廠商不再提供安全修補或技術支援的軟體。一旦軟體進入 EoL（End of Life）狀態，新發現的弱點將永遠不會被修補，繼續使用等於持續暴露在已知和未知風險中。
- [[eu-cra]] / 歐盟網路韌性法 / EU CRA / Cyber Resilience Act / 歐盟韌性法 / 網路韌性法案 / EU 網安法 — 歐盟發布的網路韌性法（Cyber Resilience Act, CRA）、2026 年正式實施。所有出口到歐盟的「具有數位元素」產品（軟體、硬體、IoT、AI 系統）都必須通過 CRA 認定、提供 SBOM、具備生命週期內的漏洞修補義務。違反可處最高 1500 萬歐元或全球年營收 2.5% ...
- [[exploit]] / 利用程式/手法（Exploit） / Exploit / 利用程式 / 漏洞利用 / 攻擊手法 / exploit code / 弱點利用 — 利用系統弱點（[[vulnerability]]）來取得未授權存取或造成損害的程式碼或技術手法。Exploit 是將弱點「武器化」的關鍵步驟——弱點本身不造成損害，exploit 才讓損害發生。
- [[exposure]] / 曝露（Exposure） / Exposure / 曝露 / 暴露 / 資訊曝露 / security exposure / 安全曝露 — 系統中可被外部觀察到或意外存取到的弱點或敏感資訊。與 [[vulnerability]]（弱點）相關但更強調「被看見」的面向——弱點可能隱藏在內部，而曝露意味著該弱點已暴露在潛在攻擊者的視線範圍內。

## F
- [[file-path]] / 檔案路徑 / file path / path / 路徑 — 檔案／目錄在檔案系統內的位置表達。Linux 用 `/` 分隔各層級、跟 Windows 的 `\` 不同。分兩種：[[absolute-path]]（從 root `/` 開始）跟 [[relative-path]]（從當前目錄算起）。
- [[file-permissions]] / 檔案權限 / file permissions / permissions / 權限 / rwx / ugo / 10-character permission string — 對檔案／目錄的存取資格、是 [[authorization]] 在 Linux 的落實機制。Linux 用 10 字元字串表示：第 1 字檔案類型（`d` 目錄 / `-` 檔）+ 後 9 字分三組 rwx 給 user / group / other。是 [[principle-of-lea...
- [[filtering-concept]] / 過濾 / filtering / filter / 資料過濾 / 篩選 — 選出符合特定條件的資料子集。資安分析師日常工作的核心動作——從海量 log / 檔案 / 報表中找出符合 IOC 條件的部分。Linux 用 [[linux-filter-commands]]（grep / pipe / find）落實、SQL 用 WHERE 落實、後續課程會學。
- [[firmware-attack-surface]] / 韌體攻擊面 / firmware attack surface / BIOS / UEFI / 低層攻擊 — 作業系統層以下的可程式化硬體（BIOS／UEFI／嵌入式控制器／電源控制晶片）所暴露的弱點集合；傳統防毒與 EDR 監控範圍無法觸及，成為駭客藏匿後門的低可見度通道。
- [[foreign-key]] / 外鍵（Foreign Key） / foreign key / 外鍵 / FK / 參照鍵 / referencing key — 資料表中的欄位、其值對應到另一張表的 [[primary-key]]；用來建立兩表的關聯關係；可重複、可空（NULL 表示無關聯）、每張 table 可有多個。

## G
- [[gemini-flash]] / Gemini Flash（Google 輕量高速代理人模型） / Gemini Flash / Gemini 3.5 Flash / Flash / Google Flash / 3.5 Flash / gemini flash — Google 在 I/O 2026 發布的輕量高速 LLM 模型家族；專攻代理人任務跟程式編寫；當前版本 3.5 Flash 是 [[gemini-spark]]、AI Mode、Antigravity、Gemini Enterprise 等代理產品的底層；輸出 token 速度比其他前沿模型...
- [[gemini-omni]] / Gemini Omni（Google 多模態生成模型） / Gemini Omni / Omni Flash / Google Omni / 多模態生成模型 / Gemini 多模態 / gemini omni — Google I/O 2026 發布的多模態生成模型；首發版本 Omni Flash；接續 Nano Banana 影像能力延伸到影片；輸入支援圖、文、影片、音訊組合；輸出影片內容並支援自然語言對話式編輯；含角色／物理／場景三類一致性；附 Avatars 用自己聲音生影片功能、附 SynthI...
- [[gemini-spark]] / Gemini Spark（Google 跨服務 AI 代理人） / Gemini Spark / Spark / Google Spark / AI 代理人 Spark / Google AI agent / Workspace agent — Google I/O 2026 推出的跨服務代理人產品；不是新模型、是組織 [[gemini-flash]] 跟 Antigravity harness 在 Google Workspace（Gmail、Calendar、Drive、Docs、Sheets、Slides、YouTube、Map...
- [[graph-emergence]] / 圖譜浮現 / Knowledge Graph / 雙向連結 / Backlink / 共用概念 — 多篇文章被分別萃取概念後，AI 自動發現跨文章共用節點（例如 continuous learning），把不同文章經由共用概念連起來形成知識圖譜；文章越多，連結越密。

## H
- [[hacker]] / 駭客（Hacker） / Hacker / 駭客 / 白帽駭客 / 黑帽駭客 / 灰帽駭客 / white hat / black hat / grey hat / ethical hacker — 利用技術手段存取電腦系統或網路的人。依動機與合法性分為三類：白帽（合法授權測試、改善安全）、黑帽（惡意入侵、謀取私利）、灰帽（未經授權但無惡意、常事後通報）。
- [[harvest-now-decrypt-later]] / Harvest Now Decrypt Later / HNDL / 現在收割之後解密 / 量子收割攻擊 — 攻擊者今天大量收集加密敏感資料、儲存等量子電腦成熟後再回頭破解的長期攻擊策略。對應目標是任何「十年後仍重要」的資料：病歷、商業機密、外交通訊、軍事情報、企業併購紀錄。國家級攻擊者與組織犯罪集團都已在進行。
- [[hash-function]] / 雜湊函數（Hash Function） / Hash Function / 雜湊函數 / 雜湊 / hash / 散列函數 / 哈希函數 / hashing — 把任意長度的輸入資料壓縮成固定長度摘要（[[hash-value]]）的單向數學函數。單向意味著無法從雜湊值反推原始資料。用於完整性驗證、密碼儲存、數位簽章、惡意軟體比對。
- [[hash-value]] / 雜湊值（Hash Value） / Hash Value / 雜湊值 / digest / 摘要 / message digest / 雜湊摘要 / 散列值 — 雜湊函數（[[hash-function]]）的輸出結果，又稱摘要（digest）。是一段固定長度的字串（如 SHA-256 產生 64 個十六進位字元），用於完整性驗證、密碼儲存、惡意軟體識別。
- [[hi-fi-prototype]] / 擬真原型 / High Fidelity / Hi-Fi Prototype / 可上線原型 — High Fidelity 模式直接產出可上線的彩色像素級網頁，跟只有灰階線框的 Wireframe 對比，差別在能否直接交付給工程或部署平台。
- [[hooks]] / Hooks / Claude Code Hooks / session hooks — Claude Code 的事件觸發機制，在特定 session 事件（SessionStart / PreToolUse / PostToolUse 等）執行 shell 命令，特色是 100% 確定性執行、不依賴 AI 判斷。
- [[html-vs-markdown-ai-output]] / HTML 取代 Markdown 作 AI 輸出格式 / HTML vs Markdown AI 輸出 / HTML 取代 Markdown / AI 原生格式 / Thariq HTML 主張 — Anthropic Claude Code 工程師 Thariq Shihipar 2026-05 提出的論點：在 AI 工具足夠強大的今天、Markdown 從「最佳輸出格式」變成限制；HTML 因為可互動、可動態渲染、能承載決策介面，是更適合 AI 時代的人機協作格式。論點不是宣判 Mar...

## I
- [[incident-response]] / 事件回應（Incident Response） / incident response / IR / 事件回應 / 事件處理 / 資安事件回應 / CSIRT / 事件應變 / security incident response — 偵測、分析、遏制、根除、復原資安事件並從中改進的結構化流程。NIST SP 800-61 定義四大階段：準備（Preparation）→ 偵測與分析（Detection & Analysis）→ 遏制、根除與復原（Containment, Eradication & Recovery）→ 事後...
- [[index-based-knowledge-base]] / 索引式知識庫 / Index-based KB / 目錄式知識庫 / 無向量知識庫 — 用一份 Index markdown 檔當全庫目錄，AI 查詢時先讀索引再決定打開哪些頁面，不依賴向量相似度搜尋的個人知識庫架構，是 RAG 的另一條輕量替代路徑。
- [[information-agent]] / Information Agent（資訊代理人） / Information Agent / 資訊代理人 / Google 資訊代理人 / search agent / 搜尋代理人 / monitoring agent / generative ui search — Google I/O 2026 推出的搜尋層代理人功能；24／7 監看特定主題、條件達成時主動通知附連結與摘要；使用者可建立、客製、管理多個代理人；搭配生成式介面（Generative UI）讓搜尋結果即時生成自訂互動元件、視覺化或 mini app；標誌 Google 搜尋從「人輸關鍵字 →...
- [[information-privacy]] / 資訊隱私（Information Privacy） / information privacy / 資訊隱私 / 隱私權 / data privacy / 個人資料保護 / 個資保護 / privacy — 個人有權控制自身資料如何被收集、使用、儲存、分享與刪除。資訊隱私不只是技術問題，更是法律與倫理議題，組織必須在業務需求與個人隱私權之間取得平衡。
- [[information-security]] / 資訊安全（Information Security） / Information Security / 資訊安全 / InfoSec / 資安 / information security — 保護資訊的機密性、完整性、可用性（[[cia-triad]]）免受未授權存取、使用、揭露、中斷、修改或銷毀的實踐與學門。涵蓋技術控制、管理控制與實體控制三個層面。
- [[injection]] / 注入攻擊（Injection） / Injection / 注入攻擊 / SQL Injection / SQL 注入 / 注入漏洞 / code injection / 程式碼注入 / XSS / Cross-Site Scripting — 攻擊者在應用程式的輸入欄位中夾帶惡意指令，使系統執行非預期操作的攻擊手法。SQL injection 是最經典的類型——攻擊者在輸入中嵌入 SQL 語句，直接操控資料庫。
- [[insider-threat-program]] / Insider Threat Program / 內部威脅防禦計畫 / ITP / 內部威脅治理 — 組織針對內部威脅的制度化防禦框架。美國總統 Executive Order 要求關鍵基礎設施組織必建置；美國中大型企業近年也在原 incident response 之外另設獨立 insider threat mitigation team、降低約 50% 事件量。
- [[insider-threat]] / 內部威脅 / Insider Threat / 內部人員攻擊 — 依美國 NIST 定義，組織內部具知識或權限者所進行的有意或無意行為造成資安風險。可能來源：現任員工、前員工、約聘人員、供應商。Ponemon Institute 2026 數據顯示全球年均單一企業損失 195 萬美元、比 2022 年增 20%。
- [[instructions-file]] / 指令檔 / CLAUDE.md / AI Instruction File / AGENTS.md / GEMINI.md — 把專案規格、命名規則、AI 應做事項寫在 claude.md，每次開 Claude Code 自動讀，省掉每次重新解釋的成本，是 AI 與專案之間的常駐合約。
- [[interactive-confirmation-ui]] / 互動式確認介面（AI 決策時刻） / 互動式確認 UI / interactive confirmation / AI decision UI / 關鍵決策互動介面 — 在 AI 工作流中、需要人類確認 AI 提案的關鍵決策時刻、用互動式 UI（按鈕／卡片／即時更新摘要）取代靜態文字牆的設計範式。核心主張是「強迫人類以靜態 Markdown 完成關鍵確認、本身是設計失誤」；認知負擔應該在介面層被處理掉、而不是丟給人類用文字描述。
- [[interview-driven-prompting]] / 訪談式提示（Interview-Driven Prompting / AskUser Pattern） / 訪談式 prompt / interview-driven prompting / askuser pattern / AskUser / ask user pattern / AI 反問防腦補 / 訪談式互動 — AI 在執行任務前先反問使用者一系列釐清問題（通常是選擇題）、確認任務範圍跟使用者真實需求對齊、再開始實作。Claude 內建的 AskUser 機制就是這個模式的直接落地。**核心信念：AI 在資訊不足時的腦補品質遠低於人類在資訊不足時的主動詢問。**
- [[ioc-search]] / IOC 字串搜尋 / ioc search / indicator of compromise search / IOC sweep / 入侵指標搜尋 — Indicator of Compromise（IOC、入侵指標）的字串／pattern 搜尋——拿已知 malware/C2/webshell 的特徵字串，掃整個系統找其他被感染的檔案。是 IR 第一波調查的核心動作、用 [[linux-filter-commands]] 的 grep + ...
- [[iterative-tweaks]] / 迭代調整 / Edit Mode / Comment Mode / Tweaks / 人機協作 — 用 Edit、Comment、Draw、Tweaks 四種模式對應「直接改」「對話改」「圖示指引改」「滑桿微調」的不同需求，讓 AI 生成初稿後可逐項修整到滿意。

## K
- [[kaigong-shougong-loop]] / 開工／收工每日 AI 工作流 / 開工收工 loop / daily 開工收工 / 開工收工工作流 / kickoff-wrap loop — 用「開工」「收工」兩個固定觸發詞當每日工作的入口跟出口，讓 AI 助手（如 Claude Code）讀取 SessionHandoff 跟相關記憶檔，自動產出今日任務清單與一日總結，把跨對話框、跨 session、跨 compact 的工作上下文收斂到單一交接檔。

## L
- [[lattice-based-cryptography]] / 晶格密碼學 / Lattice-based Cryptography / 晶格加密 / LWE / Module-LWE / Learning With Errors — 以高維晶格（lattice）的數學難題為安全基礎的後量子密碼學分支。核心難題是 LWE（Learning With Errors）：給定矩陣 A 與向量 b = A·s + e，已知 A 與 b 求 s 與 e 是計算上不可行的。錯誤項 e 讓量子電腦也無法把它化約為「找週期」問題、避開 Sh...
- [[line-sticker-workflow]] / LINE 貼圖製作流程 / LINE 貼圖 / LINE Sticker 製作 / LINE 創作者流程 — 以 ChatGPT 生 4×4 master image、自動裁切去背工具處理，再上架 LINE STORE 的三步驟高效貼圖生產流程，平均 1 分鐘內完成一套 16 張。個人創作者可透過 AI 生圖 + 自動化工具讓貼圖製作門檻從設計師專業變成一般人可以完成。
- [[linux-architecture]] / Linux 架構 / linux architecture / Linux 五層架構 / application-os-hardware-flow / OS 分層 — Linux 作業系統的分層架構、五層由上到下：User → Application → Shell → FHS → Kernel → Hardware。每層只跟相鄰層互動、形成清楚的責任分工。理解這個架構是 Linux 進階學習（kernel module、driver、syscall）的基礎。
- [[linux-command]] / Linux 命令 / linux command / command / Linux 指令 / 指令 — 給電腦的執行指示、由 [[linux-shell]] 解譯。三段語法：`COMMAND [OPTIONS] [ARGUMENTS]`——命令名 + 修改行為的 [[command-options]] + 操作對象 [[command-argument]]。例：`ls -l /home`。Lin...
- [[linux-distribution]] / Linux 發行版 / linux distribution / distro / Linux distro / ubuntu / debian / kali / parrot / red hat / RHEL / CentOS / AlmaLinux — 把 [[linux-kernel]] + GNU 工具 + [[package-manager]] + 預裝軟體打包成可開機可用的完整 OS。基於不同 distro 家族（Debian / Red Hat / Slackware）演化、各家適合不同用途。Linux 不是「一個 OS」、是「一群...
- [[linux-file-mgmt-commands]] / Linux 檔案管理命令 / linux file management commands / mkdir / rmdir / touch / rm / mv / cp / mkdir-command / rmdir-command / touch-command / rm-command / mv-command / cp-command / file-management-commands / mv-rename / redirection / output-redirection / redirect-overwrite / redirect-append — 檔案系統 CRUD 操作的核心命令——建（mkdir / touch）、刪（rmdir / rm）、搬（mv）、複（cp）、編（[[nano-editor]]）、寫（重導向 `>` `>>`）。對資安分析師而言、log 整理 / evidence 收集 / 設定備份都靠這套。
- [[linux-filesystem-hierarchy]] / 檔案系統階層標準 / Filesystem Hierarchy Standard / FHS / filesystem-hierarchy-standard / Linux 目錄結構 / 檔案系統樹 — Linux 組織資料的元件、規範所有 distro 統一的目錄結構。樹狀階層、從 root（`/`）長出來、所有 subdirectory 從 root 分支。萬物皆檔——任何 Linux 上做的事都是某個目錄底下的某個檔案。
- [[linux-filter-commands]] / Linux 過濾命令 / linux filter commands / grep / pipe / find / grep-command / pipe-operator / find-command / command-chaining / command-pipeline / wildcard-asterisk / mtime-option / ioc-search 工具集 — 把海量資料縮小到目標子集的命令工具——`grep` 搜檔內字串 / `|` pipe 串接命令 / `find` 找符合條件的檔／目錄。是資安分析師日常 80% 工作的工具集、跟 [[filtering-concept]] 對應的具體實作。
- [[linux-help-commands]] / Linux 求助命令 / linux help commands / man / whatis / apropos / man-pages / whatis-command / apropos-command / builtin-help-vs-online / linux-man-pages — Linux 內建的求助命令三件套——`man`（完整手冊）/ `whatis`（一行簡介）/ `apropos`（反向找命令）。離線可用、權威、版本準確。比 Google 快、且在 air-gapped 隔離環境是唯一管道。
- [[linux-kernel]] / Linux 核心 / linux kernel / kernel / Linux 內核 — Linux 作業系統的核心元件、管理硬體（CPU / 記憶體 / 設備）、process 排程、記憶體配置、I/O 系統呼叫。是 Linus Torvalds 1991 年開始的 project、Linux 名稱來自 kernel。Kernel 在 [[linux-architecture]]...
- [[linux-navigation-commands]] / Linux 導覽命令 / linux navigation commands / pwd / ls / cd / whoami / pwd-command / ls-command / cd-command / whoami-command / ls-long-format / ls-all-flag / ls-la-combined — 在 [[linux-filesystem-hierarchy]] 內走動的核心命令——`pwd`（我在哪）/ `ls`（這裡有什麼）/ `cd`（去哪裡）/ `whoami`（我是誰）。資安 IR 進系統第一招就是這四個。
- [[linux-permission-commands]] / Linux 權限命令 / linux permission commands / chmod / chown / chmod-command / chown-command / chmod-symbolic-mode / chmod-equals-operator / permission-modification-syntax / change-permissions-when / permission-string / permission-rwx / file-owners-trio — 操作 [[file-permissions]] 的命令工具集——`ls -l` 看權限、`chmod` 改權限、`chown` 改 owner。是 [[principle-of-least-privilege]] 在 Linux 的具體落實工具。
- [[linux-read-file-commands]] / Linux 讀檔命令 / linux read file commands / cat / head / tail / less / cat-command / head-command / tail-command / less-command / tail-f — 讀檔內容的四個核心命令。`cat` 全顯示（小檔）/ `head` 印前 N 行 / `tail` 印末 N 行（log 主力）/ `less` 互動分頁。對資安分析師來說、`tail -f` 即時追 log 是最常用的 incantation。
- [[linux-shell]] / Linux Shell / shell / shell 殼層 — 使用者跟 Linux 作業系統溝通的程式介面、接收命令、解譯後傳給 [[linux-kernel]] 執行、回傳結果。多種 shell 並存（[[bash-shell]] / zsh / fish / dash 等）、bash 是大多 distro 預設。Shell 是 [[linux-arc...
- [[linux-user-mgmt-commands]] / Linux 用戶管理命令 / linux user management commands / sudo / useradd / usermod / userdel / passwd / groupadd / groupdel / sudo-command / useradd-command / usermod-command / userdel-command / groupdel-command / sudoers-file / user-lifecycle / useradd-options — 完整 user lifecycle 的命令工具集——sudo 提權 / useradd 建 / passwd 設密 / usermod 改 / userdel 刪 / groupadd / groupdel。對應 ISO 27001 A.9.2.x（user lifecycle）的全部要求。
- [[living-off-cloud-c2]] / 濫用合法雲端服務作 C2／資料外洩 / living off the cloud / cloud C2 / 雲端 C2 濫用 / Webex C2 濫用 / OneDrive 外洩 — 攻擊者把合法雲端服務（Cisco Webex、OneDrive、Dropbox、Google Drive 等）跟企業內建機制（DFS/DFSR、SysVol、Microsoft Teams、Slack）當作 C2 通道與資料外洩管道，藉此把惡意流量隱藏在企業正常使用的雲端流量中、繞過傳統 IP...
- [[lm-studio]] / LM Studio / lmstudio / 本機 AI GUI / LM Studio 圖形介面 — 對初學者友善的本機 LLM 圖形介面工具，提供模型搜尋／下載／管理／聊天／MCP 整合／程式碼助手後端等完整工作流；對比 Ollama 走 CLI 路線，LM Studio 走 GUI 路線、降低本機 AI 入門門檻。
- [[local-llm]] / 本機 LLM（Local LLM） / 本機 LLM / local LLM / on-device LLM / 本地大模型 / 本機 AI / on-prem LLM / 離線 AI / Gemma 4 / Llama / Mistral / Qwen — 完整模型權重下載到本機硬體（筆電／桌機／手機）跑推理的大語言模型部署模式；資料完全不離開本機、不需網路、無訂閱費；推理品質低於頂級雲端模型但已能勝任多數日常任務。
- [[local-soc-ai-assistant]] / 地端 SOC AI 助手 / Local SOC AI / 地端資安助手 / Private SOC LLM / 內網 AI 助手 / On-prem SOC AI — 部署在企業內網、不對外連線的資安維運中心 AI 助手。用大資料庫（內網私有）+ 中等規模 LLM（可在 RTX 4090 等消費級 GPU 跑）+ 流程教學（事先 prompt 注入調查 SOP）三層架構、解決 SOC 同時面對多套系統、海量 log、隱私合規限制三難題。CYBERSEC 20...
- [[log-traceability]] / 日誌可追 / Audit Log / 變更日誌 / Action Log — 所有 AI 對知識庫的動作（讀了哪篇、建了哪頁、改了哪個連結）寫進 Log 檔，讓使用者能追溯歷史，AI 自己下次也知道做過什麼、避免重做。
- [[log]] / Log（系統日誌） / log / 日誌 / 系統日誌 / security log / event log / syslog / 紀錄 / 事件紀錄 — 組織系統內事件的紀錄檔、記錄誰在何時做了什麼；資安分析師日常 80% 工作的對象、incident response 還原事件全貌的核心資料來源；跟 [[log-traceability]] 的 vault 內部 audit log 不同、本概念指企業 IT 系統的 system log。
- [[loud-failure]] / 大聲失敗 — 不要把靜默失敗包裝成成功 / 大聲失敗 / loud failure / fail loud / fail loudly / 暴露不確定性 / expose uncertainty / 不要靜默成功 / silent success warning — AI 操作完成後、如果有任何沒驗證／跳過／不確定的部分，**明確暴露給人類**，而不是包裝成成功訊息。對 AI 來說最昂貴的失敗，是那些「看起來像成功」的失敗 — Migration 跳過 30 筆但回報「完成」、測試跳了一些但說「全過」、邊界情況沒測但說「功能可用」。Mnilax 12 條規...

## M
- [[markdown-vs-pdf-token-cost]] / Markdown vs PDF token 成本差距 / Markdown vs PDF token / PDF token cost / 文件格式 token / Markdown 省 token / 資料降噪 — 把同樣 15 頁文件丟進 Claude，PDF 格式會消耗約 4 萬 token、轉成 Markdown 純文字只要 2000 token，相差 20 倍。差距來源：PDF 帶大量結構化標籤、版面定位資訊、字型 metadata、嵌入物件，這些對 AI 推理沒貢獻但全部要算錢。
- [[marketing-automation-workflow]] / 行銷內容自動化工作流 / 行銷自動化 / 內容自動化工作流 / marketing automation / 行銷流水線 / 多平台自動發布 — 以 AI 工具串接資料庫、內容生成、審核、排程、多平台發布等環節，讓行銷團隊把內容從「靈感到發布」的重複勞動環節自動化的工作流設計。AccuHit 2026-04 案例顯示，完整流水線可涵蓋：爬取新聞→摘要→產文→人工審核→輪班發布，或資料庫→選題→出文→生圖→多平台推送。
- [[mcp]] / MCP (Model Context Protocol) / Model Context Protocol / AI USB-C — AI 模型與外部工具之間的標準化協議，讓 Claude 能透過統一介面串接 Figma、Notion、Gmail、Calendar 等服務，被稱為「AI 世界的 USB-C」。
- [[mfa-multi-factor-authentication]] / 多因子認證（Multi-Factor Authentication / MFA） / MFA / multi-factor authentication / 多因子認證 / 多因子驗證 / 雙因子認證 / 2FA / two-factor authentication / 多重驗證 — 要求使用者在 [[authentication]] 過程中提供兩個或以上不同類別認證因子的安全機制。三大因子類別：知識因子（你知道的——密碼、PIN）、持有因子（你擁有的——手機、硬體 token）、生物因子（你是的——指紋、臉部辨識）。同類別的兩個因子（如密碼 + 安全問題）不算 MFA。
- [[mmload-yadnux-rootkit]] / MMLOAD/Yadnux 多階段反射式 rootkit / Yadnux / MMLOAD / MMLOAD rootkit / Yadnux rootkit / NsdiProxy rootkit — Earth Kurma APT 自 2024-04 起部署的多階段、反射式載入後門。整套組件含未簽章驅動程式（mmFilter.zlib、NsdiProxy.zlib）、反射式載入器（Google.sys、Boot.sys）與多個使用者模式注入 DLL；功能涵蓋繞過 Windows DSE、隱...
- [[module-no-duplicate]] / 模組分工拒絕重複勞動 / 單一責任原則 / 模組邊界 / 脫褲子放屁 — 系統設計時每個模組只負責自己定義域的事，不重複另一模組的工作；明確劃分邊界，避免「脫褲子放屁」式的重複勞動。
- [[mosca-theorem]] / Mosca 定理 / Mosca's Theorem / Mosca 不等式 / Mosca Inequality / x+y≤z / 後量子遷移時程框架 — Michele Mosca 提出的後量子密碼遷移時程框架：把資料保密期（x）+ 遷移所需時間（y）跟量子電腦成熟到能破解的時點（z）做對比，必須滿足 **x + y ≤ z** 才安全。如果 x + y > z，意味著還沒完成遷移之前、被加密的資料就會被未來的量子電腦回頭破解（[[harves...

## N
- [[nano-editor]] / nano 編輯器 / nano / nano editor / 命令列編輯器 — 對新手友善的 CLI 文字編輯器、多 Linux distro 預設安裝。底部隨時顯示快捷鍵提示（`^` 代表 Ctrl）、學習曲線比 vim/emacs 平緩。常用四鍵控：開檔（`nano FILE`）/ 存檔（`Ctrl+O` + Enter）/ 離開（`Ctrl+X`）。
- [[nist-csf]] / NIST 網路安全框架（NIST Cybersecurity Framework） / NIST CSF / NIST Cybersecurity Framework / NIST 網路安全框架 / CSF / 網路安全框架 — 美國國家標準暨技術研究院（NIST）發布的自願性網路安全框架，以五大核心功能（CSF 1.1）或六大功能（CSF 2.0）為骨幹，為組織提供管理與降低網路安全風險的結構化方法。
- [[nist-sp-800-30]] / NIST SP 800-30（風險評估指南） / NIST SP 800-30 / 風險評估指南 / Guide for Conducting Risk Assessments / NIST 800-30 / 風險評估方法論 — 美國國家標準暨技術研究院（NIST）發布的風險評估方法論指南。定義風險評估的四階段流程：準備（Prepare）→ 實施（Conduct）→ 溝通（Communicate）→ 維護（Maintain），為組織提供系統化評估資訊安全風險的框架。
- [[nist-sp-800-53]] / NIST SP 800-53（安全與隱私控制措施） / NIST SP 800-53 / 安全與隱私控制措施 / Security and Privacy Controls / NIST 800-53 / NIST 控制措施目錄 — 美國 NIST 發布的聯邦資訊系統安全與隱私控制措施目錄。提供超過 1,000 個控制項，涵蓋存取控制、稽核、事件回應、風險評估等 20 個控制家族，組織可依風險等級挑選適用控制項建立安全基線。
- [[non-repudiation]] / 不可否認性（Non-Repudiation） / non-repudiation / 不可否認性 / 不可抵賴性 / 不可否認 / non repudiation — 確保行為人無法事後否認自己曾執行某項操作或發送某筆資料的安全屬性。透過數位簽章（digital signature）與雜湊函數（hash function）實現，是 [[cia-triad]] 之外常被獨立討論的第四大安全目標。
- [[note-as-writing]] / 做筆記 = 寫作（不從空白紙開始） / 做筆記等於寫作 / note-as-writing / 寫作不從空白紙 / 節錄評論法 / 一問一答法 / 先記錄後思考 — 把「做筆記」跟「寫作」視為同一連續流程的個人寫作心法：筆記不是寫作前的素材階段、而是寫作本身的一部分；先記錄、後思考；寫作不該從空白紙開始、應從既有筆記浮現。
- [[notebooklm-as-rag]] / NotebookLM 當 RAG 引擎 / NotebookLM 當 RAG / NotebookLM 外掛 RAG / NotebookLM as RAG / 外掛 RAG 引擎 / Gemini RAG 卸載 / Claude token 卸載 — 把 Google NotebookLM 當作 Claude Code 的外掛檢索增強生成（RAG）引擎，用來補 Claude Code 在影片內容處理、深度 RAG、圖表生成上的短板；同時避免消耗 Claude 訂閱 token（NotebookLM 走 Gemini 免費 tier）。
- [[notion-bidirectional-relation]] / Notion 雙向 relation 自動關聯設計 / two-way relation / Notion relation 同步 / 雙向同步 — Notion DB 之間的 relation 設定為雙向時，從任一邊填值，另一邊會自動同步出現對應 relation；自動化寫入時只需要操作一邊，省一次 API call、降低失敗點。
- [[null-value]] / NULL（缺失值） / None / None / 空值 / 缺失值 / missing value / NULL value — SQL 用來表示「值缺失／未知」的特殊標記、跟 `0`、空字串 `''`、`FALSE` 都不同；資料分析跟 outer join 都要懂 NULL 行為、否則容易撈錯資料。

## O
- [[oauth-authorization]] / OAuth 授權（OAuth Authorization） / OAuth / OAuth 2.0 / OAuth Authorization / OAuth 授權 / 開放授權 / OAuth 授權框架 — 讓第三方應用程式在不取得使用者密碼的情況下，存取使用者資源的開放授權框架。OAuth 透過 token（權杖）機制將「認證」與「授權」分離，使用者只需同意授權範圍，不必交出帳密。
- [[obsidian-claude-code-workflow]] / Obsidian + Claude Code 工作流 / Obsidian + AI 工作流 / Obsidian Claude 工作流 / vault + AI — 把 Obsidian vault 當第二大腦資料層、Claude Code 當讀寫與處理層的個人知識管理組合，本地化、私有化、可隨時間演進。資料以 Markdown 檔案形式留在本機，AI 透過 CLAUDE.md 與資料夾 instructions.md 雙層導航讀寫。
- [[obsidian-cli-plugin]] / Obsidian CLI plugin / Obsidian 命令列界面 / Obsidian CLI / CLI plugin — Obsidian 的命令列界面 plugin，讓任何 CLI 型 AI agent（特別是 Claude Code）能直接呼叫 Obsidian 的指令、搜尋、開啟特定筆記、操作 vault 內容，不必透過檔案系統 read/write 或自架 MCP server。
- [[osint]] / 開源情報（OSINT） / OSINT / Open Source Intelligence / 開源情報 / 公開來源情報 / 開放原始碼情報 / 公開情報蒐集 — 從公開來源收集、分析情報的方法。OSINT 的「開源」指的是資訊來源公開可取得（新聞、社群媒體、公開資料庫、政府公開資訊等），不是「開放原始碼軟體」。
- [[owasp-top-10]] / OWASP 十大風險（OWASP Top 10） / OWASP Top 10 / OWASP 十大風險 / OWASP 十大 / OWASP Top Ten / Web 十大風險 / OWASP 風險排行 — OWASP（Open Worldwide Application Security Project，開放全球應用程式安全專案）定期發布的 Web 應用程式十大安全風險排行榜。這份清單是全球 Web 安全的共同語言，也是開發與資安團隊對齊優先級的基準。
- [[owned-audience]] / 自有受眾（Owned Audience） / 自有受眾 / 自有讀者清單 / owned audience / 擁有讀者清單 / email 名單 / 訂閱者名單 — 把讀者（聯絡資訊、信任、注意力）視為**創作者本人擁有、可帶著走**的長期資產，而非「在某平台上租用的追蹤者」。判斷標準：當底層平台改演算法、改規則、甚至倒閉時，這群讀者是否還能直接觸達？能 = 自有受眾；不能 = 租來的。

## P
- [[pack2theroot]] / Pack2TheRoot / CVE-2026-41651 / PackageKit 漏洞 — PackageKit 套件管理服務的本機權限提升漏洞，CVE-2026-41651、CVSS 8.8 分；非特權使用者可在無需密碼的情況下安裝或移除系統套件，進而取得 root 權限。
- [[package-manager]] / 套件管理工具 / package manager / apt / yum / dnf / dpkg / rpm / 套件管理器 — Linux 套件（軟體）安裝、更新、移除、依賴解析的工具。分高階（apt / dnf / yum、面向使用者）跟低階（dpkg / rpm、面向 distro 開發者）。不同 distro 家族用不同工具：Debian 系（Ubuntu）用 apt+dpkg、Red Hat 系（RHEL/Ce...
- [[packagekit]] / PackageKit / Linux 套件管理服務 / D-Bus — 抽象化各 Linux 發行版底層套件管理器（apt、dnf、rpm 等）的中介服務元件，透過 D-Bus 介面提供桌面應用統一的安裝、更新、查詢介面，廣泛內建於 Ubuntu、Debian、Fedora。
- [[parallel-claude-sessions]] / 平行 Claude Code 視窗工作流 / 平行 CC 工作流 / 5 視窗 CC / parallel claude sessions / git worktree CC / Boris 30 PR — Boris Cherny 描述的高強度 Claude Code 工作模式：同時開 5 個 CC session、每個搭配獨立的 git worktree（不是 branch、是完整獨立工作目錄）、視窗彼此不干擾。搭配系統通知、CC 任一視窗需要人工決策時立刻收到提醒、切過去確認、再回原工作。B...
- [[patch-management]] / 修補管理（Patch Management） / patch management / 修補管理 / 補丁管理 / vulnerability remediation / 漏洞修補 / patch / 軟體更新 / OS update — 找出哪些系統／應用尚未套用安全修補、決定何時／如何更新、追蹤完成率的流程；是漏洞管理（vulnerability management）的執行端、ISO 27001 A.12.6.1 直接對應、Course 5 Vulnerabilities 主場。
- [[penetration-testing]] / 滲透測試（Penetration Testing） / Penetration Testing / 滲透測試 / pen test / pentest / 滲透測試演練 / ethical hacking / 白帽測試 — 模擬真實攻擊者的手法來測試系統防禦的安全評估方法。與 [[vulnerability-assessment]] 的差異在於：滲透測試不只找弱點，還會實際嘗試利用弱點（[[exploit]]），驗證弱點是否真的能造成損害。
- [[permeation-management]] / 全布局滲透式管理 / 全局管理 / 滲透式管理 / penetration management — 管理不是單向發出命令，而是把文化、價值觀、節奏層層滲透到團隊每一層；「全布局」指從宏觀到微觀都要納入視野，讓管理動作能向下傳導、向上反饋，而不是停留在 KPI 數字面上。
- [[phishing-drill-improved]] / 改良式釣魚演練流程 / Improved Phishing Drill / 改良釣魚演練 / 通報率演練 / Report Rate Drill / 引導式釣魚演練 — 把釣魚演練的核心指標從「點選率」搬到「通報率」、流程從「考試式」改為「教學式」的四階段設計。CYBERSEC 2026 飛飛提出。傳統演練只測有沒有點、改良式演練在演練前/中/後三階段都加教學設計、最終目標是讓員工被釣到時主動通報、形成防禦反應。
- [[plan-mode]] / Plan Mode（規劃模式） / Plan Mode / 規劃模式 / plan first — Claude Code 在複雜任務下先讓 AI 複述手上資訊並設計完整實作計畫、等人類複核後才動手改檔的安全模式，對應 Shift+Tab Plan Mode。主要目的是在高風險任務避免「一邊思考一邊改」導致的不可逆錯誤。
- [[policy]] / 政策（Policy） / Policy / 政策 / 安全政策 / security policy / 資安政策 / 資訊安全政策 — 組織內部訂定的高層級安全方針與原則，表達管理階層對資訊安全的承諾與方向。政策回答「要做什麼」和「為什麼要做」，但不規定具體怎麼做（那是 [[procedure]] 的責任）。
- [[post-quantum-cryptography]] / 後量子密碼學 / Post-Quantum Cryptography / PQC / 後量子加密 / 抗量子密碼學 — 以量子電腦也算不出來的數學基礎（lattice、code-based、hash-based、multivariate）取代傳統 RSA／ECC 的下一代加密技術。NIST 在 2024 年正式標準化第一批演算法（Kyber、Dilithium、Falcon、SPHINCS+）；全球大企業在做密...
- [[power-conditioner]] / 電源調節器 / power conditioner / 電壓穩壓器 / 電源管理 — 穩定電壓、防止突波損壞下游設備的可程式化韌體驅動硬體，廣泛部署於電信、工業自動化、資料中心、消費性電子，運作層級在作業系統之下；近年成為新興攻擊面。
- [[primary-key]] / 主鍵（Primary Key） / primary key / 主鍵 / PK / 唯一鍵 / unique key — 資料表中的欄位（或欄位組合）、每列值唯一、不可空（NOT NULL）、每張 table 只能有一個；用來唯一識別每一列、是 SQL JOIN 的關聯依據。
- [[principle-of-least-privilege]] / 最小權限原則 / principle of least privilege / PoLP / least privilege / 最小特權 / need-to-know — 只給使用者完成任務所需的「最低必要」存取權限、不給多餘權限。違反此原則會放大攻擊面——一旦帳號被攻陷、攻擊者能存取的範圍跟該帳號的權限同等大。資安四大基本原則之一（其他：fail-safe defaults / separation of duties / defense in depth）。
- [[privacy-by-design]] / 隱私設計（Privacy by Design） / privacy by design / PbD / 隱私設計 / 隱私即設計 / 嵌入式隱私 / 設計階段隱私 — 在系統、產品或服務的設計階段就將隱私保護內建為預設行為，而非事後補救或外掛。由加拿大隱私委員 Ann Cavoukian 提出的七大原則，已被 GDPR 第 25 條（Data Protection by Design and by Default）納入法規要求。
- [[privilege-creep]] / 權限蔓延（Privilege Creep） / privilege creep / 權限蔓延 / 權限膨脹 / 權限累積 / permission creep / access creep / 累積權限 — 員工因部門轉調、職務變更或專案結束後，原有權限未被收回，導致逐漸累積超出當前職務所需的存取權限。是違反 [[principle-of-least-privilege]] 最常見的型態，長期下來會顯著擴大攻擊面。
- [[privilege-escalation]] / 權限提升 / Privilege Escalation / 提權 / 本機提權 — 攻擊者以普通使用者身分進入系統後，透過漏洞、設定錯誤或邏輯瑕疵取得更高權限（典型為 root／SYSTEM）的攻擊階段，是 MITRE ATT&CK 與 CISSP 安全模型中的關鍵戰術。
- [[problem-prd]] / 問題規格書（Problem PRD） / 問題規格書 / PRD / 問題規格 / 目標限制障礙 / problem PRD / prd-thinking — 把「問對問題」拆成「目標→限制→障礙」三層結構、產出可餵 AI 的問題規格書（PRD）、用規格書指導 AI 設計解決方案、效果遠超直接叫 AI 想答案。
- [[procedure]] / 程序（Procedure） / Procedure / 程序 / 操作程序 / SOP / Standard Operating Procedure / 標準作業程序 / 操作指引 — 落實 [[policy]]（政策）的逐步操作指引，明確規定「誰在什麼情況下做什麼、按什麼順序做」。程序是治理架構中最接近執行層的文件，直接指導日常操作。
- [[progressive-disclosure]] / 漸進式披露 / 按需讀取 / progressive disclosure / lazy loading / on-demand reading / 按需載入 — AI 不一次掃整個資料庫，只在需要時才讀對應資料夾或檔案的 token 控制心法，目的是讓 AI 能處理規模大但相關性稀疏的知識庫。對應 UX 設計領域的 progressive disclosure，把資訊分層展示而非一次推給使用者。
- [[progressive-vault-growth]] / 漸進式知識庫長出 / 漸進長出 vault / progressive vault growth / organic vault growth / 知識庫不一夜建好 / 知識庫 v0.1 起步 — 知識庫從最少必要結構起步（通常 1–2 個資料夾）、隨實際使用慢慢長出其他子系統的演進路徑；對比「一開始就追求完整結構」的反模式、降低啟動成本跟維護負擔。
- [[prompt-cache]] / Prompt Cache（提示快取） / 提示快取 / prompt caching / Claude cache / cache hit / 快取命中 / token cache / 上下文快取 — AI 模型將重複送出的上下文（system prompt、專案規則、對話歷史）暫存在伺服器端，後續請求命中快取時只收 10% 的 input token 費用；Anthropic 工程師 Thariq 實測每週省下 3 億 token。
- [[prompt-framework-weakness]] / 提示工程框架死穴 / Prompt Engineering / CoT / ToT / ReAct — 精準掌握 CoT、ToT、ReAct 三種提示工程框架各自的致命弱點：CoT 是骨牌效應、ToT 是 token 消耗大、ReAct 是過度依賴外部工具 API 不穩。
- [[psp-hierarchy]] / 政策標準程序層級（Policy-Standard-Procedure Hierarchy） / Policy-Standard-Procedure Hierarchy / 政策標準程序層級 / PSP / 治理文件架構 / policy hierarchy / 政策層級 — 組織資安治理文件由上到下的層級架構：政策（Policy，高階方向與原則）→ 標準（Standard，具體要求與規格）→ 程序（Procedure，逐步操作指引）。有些框架再加上指引（Guideline，建議性做法）作為第四層。
- [[public-key-infrastructure]] / 公鑰基礎建設（PKI） / PKI / public key infrastructure / 公鑰基礎建設 / 公鑰架構 / 公開金鑰基礎建設 — 管理數位憑證（digital certificate）與公私鑰對的加密框架，涵蓋憑證的簽發、分配、儲存、撤銷與驗證全流程。PKI 是 [[asymmetric-encryption]] 在真實世界大規模部署的信任基礎。
- [[pure-receive-immediate-write]] / 純接收 + 即時落地（日記互動模式） / append-only journaling / 純接收模式 / 即時落地 / write-through journaling — AI 助手對使用者輸入不追問、不整理、不主動打擾，但每則訊息即時 append 到持久 sink；跨裝置、跨 session 續寫無損。Claude Code 每次輸入必有回應的架構下，回應壓到最小（✓ 或靜默）保留敘事流。

## R
- [[raw-wiki-split]] / 原料分流 / 收件匣模式 / Raw/Wiki 分流 / 資訊收集箱模式 — 知識庫拆成 Raw（原料收件匣）與 Wiki（AI 整理產出）兩個資料夾，新內容先進 Raw、AI 收錄後才搬進 Wiki，明確區分人類丟入跟 AI 整理過的資料層級。
- [[red-team]] / 紅隊 / Red Team / 紅隊演練 / 攻擊模擬 — 企業內部或委外的攻擊模擬團隊，以真實攻擊者視角測試組織防禦韌性，常見產出包含漏洞揭露、攻擊鏈報告、防禦改善建議；對應藍隊（防禦）、紫隊（協同）。
- [[reflection-matrix]] / 反射矩陣 / 演算法選擇 / 模型選擇 / Pattern Matching — 把資料形態（影像／表格／圖結構）與最適演算法（CNN／XGBoost／GNN）建立直覺對應的記憶法，看到題目敘述時不需思考即可鎖定答案選項。
- [[regulations]] / 法規（Regulations） / Regulations / 法規 / 法律規範 / 規章 — 由政府機關或監管單位制定、具法律約束力的規則。違反法規可能導致罰款、訴訟甚至刑事責任。在資安領域，法規規定組織保護資料與系統的最低合規要求。
- [[relational-database]] / 關聯式資料庫 / relational database / RDB / RDBMS / 關聯式 DB — 以資料表（table）為儲存單位、表內有欄（column）跟列（row）、表跟表透過共同鍵值（primary key／foreign key）產生關聯的結構化資料庫；是 SQL 的操作對象、企業資安資料（audit log、資產清單、員工表、權限表）多半住在這。
- [[relative-path]] / 相對路徑 / relative path / relative file path / 相對位置 / 相對檔案路徑 — 從當前 working directory 算起的路徑、不以 `/` 開頭。例：`projects` 或 `./projects` 或 `../projects`。常用三個捷徑：`.`（當前目錄）/ `..`（上層）/ `~`（當前 user 家目錄）。跟 [[absolute-path]] 成對。
- [[reverse-skill-design]] / 反推式 Skill 設計法（Q5 反推） / Q5 反推法 / sample-backward design / 樣本反推設計 — 從既有產物樣本反推 skill 隱性規則的設計方法。取一組可信的過往 AI 產出當 target，逐題提問反推當時依循的行為、輸出、控制規則，再將規則顯性化成 skill-spec。
- [[risk-register]] / 風險登錄簿（Risk Register） / Risk Register / 風險登錄簿 / 風險登記簿 / 風險清冊 / risk log / 風險紀錄 — 記錄組織已識別風險、評估結果（機率與衝擊）、處置方式與負責人的結構化文件。風險登錄簿是風險管理流程的核心產出物，讓組織能追蹤風險從識別到處置的完整生命週期。
- [[risk]] / 風險（Risk） / Risk / 風險 / 資安風險 / security risk / 風險評估 — 資安事件可能發生的機率乘以該事件對組織造成衝擊的量化評估。風險 = 威脅（[[threat]]）利用弱點（[[vulnerability]]）對資產（[[asset]]）造成損害的可能性與影響程度。
- [[root-directory]] / 根目錄 / root directory / / / Linux 根目錄 / 檔案系統根 — Linux 最高層目錄、用單一斜線 `/` 表示。所有 subdirectory 從這裡分支。注意跟 root user 的 home directory `/root` 不同——`/` 是檔案系統頂、`/root` 是 superuser 的家目錄。
- [[root-user]] / 超級使用者 / root user / superuser / root / UID 0 / 最高權限帳號 — Linux 系統的最高權限帳號、UID 0、可建／改／刪任何檔、跑任何程式。只有 root 或有 sudo 權限的 user 能新增其他 user。直接以 root 身份登入是 Linux 大忌——三個原因：資安攻擊面、typo 災難、無 accountability。應該用 [[sudo-r...
- [[rules-over-code]] / 規則比程式碼重要 / rules over code / 規則表 > code / 規則優先 / prompt rules over code / 規則先於實作 — 跟 AI 協作做事時、花在「寫規則給 AI 看」的時間比花在寫程式碼還多、且回報更高。出處：雷蒙迷你課 3-4 日本旅行 AI 拍照收據自動記帳案例——15 條日本稅制／折扣規則表 vs Next.js 整個前後端的時間分配。

## S
- [[second-brain]] / 第二大腦（Second Brain） / Second Brain / PKM / 個人知識庫 / 外腦 — 把大腦不擅長的記憶、整理、檢索外包給數位系統的個人知識管理範式，目的是釋放大腦做思考、創作、決策。Tiago Forte 在《Building a Second Brain》中提出 CODE 流程（Capture / Organize / Distill / Express），核心是降低收錄阻...
- [[secure-ai-framework]] / Secure AI Framework（SAIF） / SAIF / Google SAIF / AI 安全框架 / AI 全生命週期治理 — Google 推出的 AI 全生命週期治理框架，涵蓋從資料、訓練、模型、佈署到應用層的安全與治理控制點，目標是讓企業「大膽且負責任」地導入 AI。
- [[secure-boot]] / 安全開機 / secure boot / UEFI Secure Boot / 程式碼簽署 — 配合密碼簽署，確保開機載入器、韌體、作業系統核心皆來自可信來源，未通過簽章驗證的程式碼無法執行；是抵禦韌體層植入與電源調節器後門的核心控制。
- [[security-awareness-design]] / 有感資安意識訓練設計 / Security Awareness Design / 有感訓練 / 資安行為改變設計 / 情境式資安教育 / Behavior Change Training — 把資安教育訓練的目標從「完訓率」搬到「行為改變」的設計範式。傳統訓練條列式教注意事項、員工聽完就忘、釣魚演練點選率持續居高。有感訓練的核心是利用大腦只記得「情緒高峰」與「故事情節」的特性、把訓練重做成有情境、有角色、有情緒鉤子、有後果的微劇情。CYBERSEC 2026 七維思執行長飛飛（林子...
- [[security-awareness-training]] / 資安意識訓練（Security Awareness Training） / security awareness training / 資安意識訓練 / 資安教育訓練 / 資安訓練 / security training / 安全意識培訓 — 教育員工識別與回應資安威脅的定期訓練計畫，目標是將資安知識轉化為日常行為習慣。人為因素是資安事件的首要成因（Verizon DBIR 報告約 68% 事件涉及人為錯誤），訓練是降低人為風險最直接的手段。
- [[security-control]] / 安全控制措施（Security Control） / Security Control / 安全控制 / 安全控制措施 / 控制措施 / security countermeasure / 資安控制 — 用來降低特定資安風險的技術、管理或實體手段。安全控制措施是組織落實資安策略的具體工具，目的是保護資產（[[asset]]）不受威脅（[[threat]]）利用弱點（[[vulnerability]]）造成損害。
- [[security-culture]] / 資安文化（Security Culture） / security culture / 資安文化 / 安全文化 / 組織安全文化 / 資訊安全文化 — 組織成員普遍重視資訊安全的價值觀、態度與行為模式的總和。資安文化不是單靠政策或技術達成，而是透過領導層示範、持續訓練、獎懲制度與日常實踐逐步形成。文化強的組織，員工會主動通報可疑事件而非隱瞞。
- [[security-hardening]] / 安全強化（Security Hardening） / Security Hardening / 安全強化 / 系統強化 / 系統加固 / hardening / 安全加固 / OS hardening — 移除不必要的服務、關閉預設帳號、縮減攻擊面的系統加固流程。安全強化的核心原則是「系統預設狀態通常不安全」——出廠設定為了方便使用犧牲了安全性，需要主動加固。
- [[self-evolving-ai-agent]] / 自我進化 AI agent（Hermes Agent / Nous Research） / Hermes Agent / Nous Research / self-evolving agent / 自我進化 agent — 以 Hermes Agent 為代表、內建學習閉環跟跨會話記憶、讓 agent「越用越聰明」的個人 AI 助手架構，Nous Research 開源、去中心化、以 Markdown 技能系統作為演進層。不是讓模型本身重訓，而是讓 agent 使用的外在記憶與技能隨時間加厚。
- [[semi-e187]] / SEMI E187 半導體設備資安認證 / SEMI E187 / 半導體設備資安標準 / 設備資安認證 / SEMI 187 — SEMI（國際半導體產業協會）發布的半導體製造設備資安標準。源於 TSMC 早年遭遇的設備中毒事件、由 TSMC 牽頭與設備廠商共同制定、解決半導體裝置進廠時的資安疑慮。一旦設備未合規且帶毒進廠、會擴散影響其他設備並停產。台灣由工研院量測中心+TCA（台北市電腦公會）提供認證服務、TAF 認證...
- [[sentinel-test]] / Sentinel 測試法 / sentinel testing / production-DB testing / 1900-01-01 錨點 — 在 production DB 直接跑 schema 或 API 能力測試，不建獨立測試 DB；以絕對不會和真實資料衝突的 sentinel 日期（例 1900-01-01）當識別錨點，搭配前綴命名（[TEST-PHASE-N]）便於人眼辨識殘留。
- [[separation-of-duties]] / 職責分離（Separation of Duties / SoD） / separation of duties / SoD / 職責分離 / 權責分離 / 分權制衡 / segregation of duties — 將關鍵業務流程或系統操作拆分給不同人員負責，防止任何單一個人擁有完成整個流程的權力，藉此降低錯誤、詐欺與濫權風險。與 [[principle-of-least-privilege]] 並列為存取控制的核心原則。
- [[shadow-ai]] / Shadow AI / 影子 AI / 未授權 AI 使用 — 員工在未經組織批准、無 governance 機制的狀況下、使用 AI 工具（ChatGPT、Gemini、Cursor、Copilot 等）處理日常工作所形成的不可見資料外洩風險。Shadow IT 概念在 AI 時代的延伸。
- [[shared-responsibility-model]] / 共同責任模型（Shared Responsibility Model） / Shared Responsibility Model / 共同責任模型 / 責任共擔模型 / cloud shared responsibility / 雲端共同責任 — 雲端環境中、客戶與雲端服務供應商（CSP）各自負責的安全區域劃分。供應商負責「雲的安全」（基礎設施、實體機房、網路骨幹），客戶負責「雲中的安全」（資料、存取控制、應用程式設定）。責任範圍依服務模型（IaaS/PaaS/SaaS）不同而異。
- [[simplicity-over-control]] / 簡化流程 > 資料主控 / simplicity over ownership / 流程 > 主控 / 2026-04-24 決策動機 — Simon 2026-04-24 工具選擇的動機優先序。當兩個工具分別在「流程阻力最小」和「資料檔案自主保存」上有優勢時，選前者。三家 AI 建議比對後的共識驅動這次反轉。
- [[sketch-prompt]] / 草圖提示 / Sketch Prompt / 視覺提示詞 / Multi-modal Prompt — 用幾何圖形配合文字註解向 AI 描述版面布局與元素含義的提示方法，補足純文字提示詞無法精準傳達空間資訊的限制。
- [[skill]] / Skill / Claude Skill / 技能包 — Claude 的技能打包機制，把重複用到的 prompt、範例、流程固化為可重用的指令包，核心精神是「試一次、存起來、用很多次」。
- [[smartphone-screen-methodology]] / 手機螢幕專業評測方法論 / screen testing / display benchmark / Delta E 測試 / sRGB P3 評測 / color accuracy — 用標準化指標評估手機螢幕品質的方法集合：強光全白最大亮度（尼特）、HDR 峰值與 10% 面積亮度、sRGB／P3 色域覆蓋率、CCT Delta E（白點偏差）、平均 Delta E（色彩誤差）、最大 Delta E。Delta E < 2 為夠準、< 1 為頂級。
- [[social-engineering-playbook]] / 社交工程四大套路 / Social Engineering Playbook / 社交工程套路 / 社交工程攻擊類型 / 釣魚四大手法 / Phishing Patterns — 把現實社交工程攻擊歸納為四種可複製的心理套路、每種都有固定的三段式公式。CYBERSEC 2026 七維思執行長飛飛提出、用十年資安意識訓練經驗萃取。把「員工為什麼想點這封信」拆解成可分析、可教學、可生成新情境的模式庫。
- [[soft-disable-vs-hard-delete]] / 軟鎖 vs 硬刪 / soft disable vs hard delete / usermod -L / userdel -r / 帳號離職流程 / account disable — 離職／停權帳號的兩種策略：**軟鎖**（`usermod -L`、保留資料、可解鎖）vs **硬刪**（`userdel -r`、完全清除）。實務應該先軟鎖、確認檔案有人接、最後才硬刪——避免把 user 名下機敏檔意外清掉。
- [[sql-join]] / SQL Join（多表合併） / SQL JOIN / join / 多表合併 / 表合併 / INNER JOIN / OUTER JOIN / LEFT JOIN / RIGHT JOIN / FULL OUTER JOIN — 把兩張或多張 table 用共同欄位（通常是 primary key/foreign key 配對）串起來、在一條 query 取跨表資訊；是 incident response 多表還原事件全貌、ISO 27001 資產對帳、漏洞影響範圍查詢的核心操作。
- [[sql]] / SQL（結構化查詢語言） / SQL / 結構化查詢語言 / Structured Query Language / sequel — 存取關聯式資料庫的標準程式語言、可建立、互動、向資料庫請求資料；資安分析師日常處理大量結構化資料的核心工具、跟 Linux 共同構成分析師工具箱底層。
- [[sso-single-sign-on]] / 單一登入（Single Sign-On / SSO） / SSO / single sign-on / 單一登入 / 單點登入 / 統一登入 / SAML / OIDC — 使用者只需通過一次 [[authentication]] 即可存取多個系統或應用程式的身份驗證機制。SSO 減少密碼疲勞（password fatigue）、降低重複登入的摩擦，同時集中化身份管理，提升安全可控性。
- [[standard]] / 標準（Standard） / Standard / 標準 / 安全標準 / security standard / 合規標準 / compliance standard — 定義組織在特定領域需達到的合規門檻與技術或管理要求。標準介於 [[policy]]（政策）的原則性方向與 [[procedure]]（程序）的具體步驟之間，回答「要達到什麼程度」。
- [[stdin-stdout-stderr]] / 標準輸入輸出 / stdin / stdout / stderr / standard input / standard output / standard error / 標準輸入 / 標準輸出 / 標準錯誤 / file descriptor — Linux 每個 process 預設有的三個 I/O 通道：stdin（標準輸入、fd 0）、stdout（標準輸出、fd 1）、stderr（標準錯誤、fd 2）。stdin 預設來自鍵盤、stdout/stderr 預設印到螢幕。Pipe `|` 跟重導向 `>` `>>` 改變這些預設。
- [[storytelling-modular-framework]] / 故事化模組化拼積木框架 / Storytelling Modular Framework / 拼積木框架 / 角色卡手法卡場景卡 / Persona x Tactic x Scene / 模組化故事設計 — 把資安訓練情境設計拆成「角色 × 攻擊手法 × 場景」三維組合的可規模化框架。CYBERSEC 2026 飛飛提出、解決資安意識訓練「只有少數人會寫情境、年年從零開始」的規模化難題。給定三組卡片庫、隨機抽取或主動配置就能五分鐘產出一個訓練情境、加上 AI 生成可降到一分鐘。
- [[subagents]] / Subagents / Agent Teams / Claude subagent / custom subagents / 分身團隊 / agent team — Claude 的多代理協作機制。Subagent 是為特定任務訂製的持久化分身（自帶 prompt、工具集、記憶）；Agent Teams 則把多個分身並行派工並自動彙整結果。
- [[subscription-vs-api-cost]] / 訂閱不共吃 API（Max ≠ Claude API） / Claude 訂閱 / API 計費 / Max 訂閱 / Anthropic 計費結構 — Claude Pro / Max 訂閱（個人月費）與 Claude API（按 token 計費）是兩個獨立產品線，計費完全分開；訂閱不能拿來打 API，API 帳單跟訂閱不互相 cover。
- [[substack-notes]] / Substack Notes（短貼文） / Substack Notes / Notes / Substack 短貼文 / Substack 筆記 — Substack 站內的短貼文功能，形式類似 X／Threads，篇幅短、即時性高，是 Substack **最主要的站內自然曝光機制**——新讀者主要透過 Notes 探索頁面發現創作者、進而訂閱長文。
- [[substack-resurfacing]] / Substack 重新曝光戰術（Restack + 精選引言） / Substack 重新堆疊 / Restack / Substack 精選引言 / Quote Note / Substack 站內推廣 / 每篇 3 次曝光 — 把已發布的舊文章重新拉回讀者 Notes 動態牆的 Substack 站內機制。核心邏輯：你一直在成長、每月新訂閱者沒看過你舊文、舊文對他們等於新內容。每篇文章可拿到至少 3 次主動曝光機會。
- [[substack]] / Substack / 訂閱制電子報平台 / Newsletter 平台 — 訂閱制電子報結合個人出版頁面的內容平台，2017 年由前 Kik 工程師 Chris Best、Hamish McKenzie、Jairaj Sethi 創立。創作者寫一篇文章會同時寄到所有訂閱者的 email 信箱、且永久保存在個人頁面、可被 Google 搜尋索引。
- [[sudo-responsibility]] / sudo 責任使用 / sudo responsibility / sudo design / sudo elevated privileges / sudo-elevated-privileges / root-login-bad-practice — sudo（super-user-do）的設計理念——以「暫時提權」取代「直接 root login」、解決三大問題：資安攻擊面 / typo 災難 / 無 accountability。每次 sudo 用自己密碼、有完整 log、可細粒度控管。但 sudo 是特權、要珍惜（hotel mast...
- [[supply-chain-attack]] / 供應鏈攻擊（Supply Chain Attack） / Supply Chain Attack / 供應鏈攻擊 / 軟體供應鏈攻擊 / third-party attack / 第三方攻擊 / software supply chain — 透過攻擊第三方供應商、開源元件或軟體更新機制來間接滲透目標組織的攻擊手法。攻擊者不直接打目標，而是先入侵目標信任的上游供應商，再借道進入。
- [[supply-chain-risk]] / 供應鏈風險 / supply chain risk / SBOM / 第三方風險 — 企業使用的第三方硬體、軟體、韌體、服務在開發、發行、更新、維運任一環節被植入後門或繼承上游漏洞的風險；ISO 27001 A.5.19~A.5.23 供應商管理、SBOM 都用來控制此風險。
- [[sustainable-writing-cadence]] / 可持續寫作節奏（雙標準 + 流程化） / 可持續寫作節奏 / 寫作節奏 / sustainable writing cadence / 雙標準 / 寫作流程化 / 最低標準 / 理想標準 — 以「複利需要 6 個月以上」為前提、能撐過初期沒回饋階段的寫作節奏設計。核心是**雙標準（最低／理想）**取代單一目標、**流程化**取代靈感等待、**允許休息**取代懲罰自己。
- [[symmetric-encryption]] / 對稱加密（Symmetric Encryption） / Symmetric Encryption / 對稱加密 / 對稱式加密 / symmetric key / 對稱金鑰 / secret key encryption — 加密與解密使用同一把金鑰的加密方法。速度快、運算成本低，適合大量資料加密。主要挑戰在於金鑰分發——如何安全地把金鑰傳給對方。

## T
- [[technology-leap-deployment]] / 技術超前部署 / 向量資料庫 / Embedding / 多模態 / RAG / RAGAS — iPAS AI 應用規劃師下波加分題集中於三領域：向量資料庫（Embedding 原理與檢索）、多模態（影像加文字並處理）、進階模型評估指標（ROUGE、RAGAS 取代 Accuracy）。
- [[template-reference-pattern]] / Template 參考模式（Template Reference Pattern） / Template Reference / 既有 template 參考 / AI 防腦補的個人語料 / reference pattern / 個人案例 reference / 個人語料 reference — 請 AI 執行新任務時、餵給它使用者過去做過的同類型實際案例當 reference、強制 AI 用使用者的脈絡而不是訓練資料裡的通用 best practice 來思考。核心信念：**個人語料 > 全網通用語料**、特別是當任務跟使用者的私有流程／偏好深度相關時。
- [[threat-actor]] / 威脅行為者（Threat Actor） / Threat Actor / 威脅行為者 / 威脅來源 / 攻擊者 / malicious actor / 惡意行為者 — 對組織資產構成威脅的個人或團體。依動機、資源、技術能力可分為不同類型，理解威脅行為者的分類有助於精準評估風險並配置防禦資源。
- [[threat-modeling]] / 威脅建模（Threat Modeling） / Threat Modeling / 威脅建模 / 威脅模型 / threat model / 威脅分析 — 系統性識別資產、威脅、弱點，並排定優先順序以決定防禦資源配置的流程。目標是在攻擊發生前就理解「什麼值得保護、誰會來攻擊、怎麼攻擊、防禦優先序如何」。
- [[threat]] / 威脅（Threat） / Threat / 威脅 / 資安威脅 / security threat — 任何可能對資產造成損害的事件、情境或行為者。威脅可來自外部（駭客、自然災害）或內部（員工疏忽、惡意內部人員），是風險三件套（[[risk]]、threat、[[vulnerability]]）的外部因素。
- [[tmp-attack-surface]] / /tmp 攻擊面 / tmp attack surface / /tmp 風險 / tmp directory abuse — Linux 的 `/tmp` 目錄因設計上開放給所有 user 寫入（world-writable + sticky bit）、是攻擊者進系統後常用的暫存空間——存放 dropper / 提權 payload / 暫存被竊資料。IR 接手 server 第一招就是 `ls -la /tmp` ...
- [[token-saving-rules]] / Claude 省 Token 四大守則 / 省 token 守則 / Claude token saving / token 守則 / 省額度 / 省成本守則 — 針對 Claude 訂閱戶長對話場景的 token 控制四原則：資料降噪（轉 Markdown 再丟）、停止錯誤堆疊（用 Edit 改源頭不要罵 AI）、對話水位管理（15 句來回就壓縮）、模型適配（日常用 Sonnet 不要全程 Opus）。背後邏輯是 token 不只是錢、更是 AI 的智...
- [[tool-agnostic-thinking]] / 工具中立思考（先思考再選工具） / 工具中立思考 / 先思考再選工具 / tool-agnostic / 不綁定 AI 工具 / AI 工具中立 / think-before-tool — 不綁定特定 AI 工具（ChatGPT／Gemini／Claude）、先靠思考習慣提升思考力、再依問題本質選最佳工具的個人 AI 使用策略；對應 AI 工具迭代快、綁定特定產品會被技術演進淘汰的問題。

## U
- [[usb-baiting]] / USB 誘餌攻擊（USB Baiting） / USB Baiting / USB 誘餌攻擊 / USB 誘餌 / USB drop attack / USB 釣餌 / 隨身碟攻擊 — 攻擊者故意將含有惡意程式的 USB 隨身碟放置在目標可能拾取的地點（停車場、大廳、茶水間），誘使目標出於好奇插入電腦，藉此取得系統存取權限。屬於社交工程的實體攻擊類型。

## V
- [[vc-bypass-charging]] / VC 均溫板 + 旁路充電（中階機效能策略） / VC 均溫板 / vapor chamber / 旁路充電 / bypass charging / 中階機散熱 / 電池保護 — VC 均溫板（Vapor Chamber）用相變傳熱擴大散熱面積；旁路充電讓充電器繞過電池直接對主機板供電，降低高負載時的電池熱損耗。原本是旗艦專屬，逐步下放到中階；組合使用是延長設備壽命與穩定持續效能的關鍵實作。
- [[vibe-coding]] / Vibe Coding / 自然語言開發 / AI Coding — Andrej Karpathy 2025 提出、以自然語言跟 AI 描述需求並讓 AI 全程實作代碼、人類只在「跳出來改 bug」時介入的軟體開發風格。關鍵是不看代碼只看需求與結果，代言人、個人創作者快速造 prototype 的主流路徑。
- [[vulnerability-assessment]] / 弱點評估（Vulnerability Assessment） / Vulnerability Assessment / 弱點評估 / 漏洞評估 / 弱點分析 / vulnerability analysis — 系統性掃描與分析系統弱點的內部檢測流程。弱點評估著重於「找出弱點並分級」，而非實際嘗試利用弱點——這是它與 [[penetration-testing]] 的關鍵差異。
- [[vulnerability-management]] / 弱點管理（Vulnerability Management） / Vulnerability Management / 弱點管理 / 漏洞管理 / vulnerability management lifecycle / 弱點管理生命週期 — 持續識別、評估、處置、追蹤系統弱點的循環流程。弱點管理不是一次性事件，而是一個永不結束的迴圈——因為新弱點每天都在出現，系統環境也持續變動。
- [[vulnerability-scanner]] / 弱點掃描器（Vulnerability Scanner） / Vulnerability Scanner / 弱點掃描器 / 漏洞掃描器 / 弱點掃描工具 / vulnerability scanning tool / Nessus / OpenVAS — 自動化掃描系統已知弱點的工具。弱點掃描器比對弱點資料庫（如 CVE）與目標系統的版本、設定、開放埠口等資訊，產出弱點清單與修補建議。
- [[vulnerability]] / 弱點（Vulnerability） / Vulnerability / 弱點 / 漏洞 / 脆弱性 / security vulnerability / 安全弱點 — 系統、流程或人員中可被威脅行為者利用的缺陷或弱點。弱點本身不造成損害，但當威脅（[[threat]]）利用弱點時，就會對資產（[[asset]]）產生風險（[[risk]]）。

## W
- [[wikilink-cross-folder]] / 跨資料夾 wikilink / wikilink AI 上下文觸達 / 跨層級連線 / cross-folder wikilink / wikilink 突破樹狀結構 / AI vault navigation by wikilink — Obsidian wikilink 機制讓檔案不需要在同一個資料夾就能互相連線、AI 讀到某檔案時自動跳到關聯檔案讀全貌；解決傳統樹狀資料夾結構在跨專案／跨主題場景的上下文斷裂問題。
- [[win-vs-prevail]] / 「贏得」vs「勝出」生命觀 / 贏 vs 勝 / win vs gain / 詩歌生命觀 / 大局觀 — 「勝出」是擊敗對手的競爭性視角，重點在 zero-sum 勝負；「贏得」是創造意義、累積關係、書寫個人詩歌的整體性視角，重點在 positive-sum 累積。生命大局觀不只追求勝出，更要贏得屬於自己的存在價值。
- [[wiz-platform]] / Wiz 平台 / Wiz / Wiz 雲端安全平台 / Google Wiz / 微視 — Google 收購的多代理協作跨雲端安全平台。把雲安全姿態管理（CSPM）、AI 資產可視化、漏洞修補建議、責任指派整合到單一介面，從發現問題到修補在同一平台閉環完成。
- [[world-writable-file]] / 任意可寫檔 / world writable file / world-writable / chmod 777 災難 / 任意可寫 — other（系統上任何 user）有 write 權限的檔——permission string 第 9 字元是 `w`、numeric 含 `2/3/6/7` 在 other 位置。最常見錯誤是 `chmod 777` 圖方便、變成嚴重資安風險：任何 user 都能改、攻擊者進系統後可植入後門。

## Z
- [[zero-day]] / 零時差漏洞（Zero-Day） / Zero-Day / 零時差漏洞 / 零日漏洞 / zero-day vulnerability / zero-day exploit / 0-day — 開發者尚未知曉或尚無修補的弱點。「零天」指的是開發者在弱點被利用前有零天的修補時間——攻擊者在防禦方知道問題前就已經動手。
