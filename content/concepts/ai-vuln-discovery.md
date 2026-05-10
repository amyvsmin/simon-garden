---
name: AI 漏洞挖掘
aliases: [AI Vulnerability Discovery, Claude Opus, AI 找漏洞]
category: 資安
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-8147-a2a7-f85a0dc15abd
---

# 定義

研究人員借助大型語言模型（如 Anthropic Claude Opus）協助閱讀原始碼、推理邏輯瑕疵、產生 PoC 的新興工作流；本案 Deutsche Telekom 用 Claude Opus 發現潛伏 14 年的 PackageKit 漏洞。

# 關鍵面向

- LLM 補強人類在大型 codebase 的注意力極限
- 適合靜態分析、邏輯推理任務
- 不取代人類驗證 PoC 與責任揭露
- **2026 年 Google 三大工具線**：
  - Mythos（Anthropic × Vertex AI 私測）：短期內找出數千個高嚴重性漏洞、覆蓋主流 OS 與瀏覽器
  - Big Sleep（DeepMind）：AI bug hunter，自 2025 年起公開多起發現，含 SQLite CVE-2025-6965
  - CodeMender（DeepMind）：以「反應式修補 + 主動式重寫加固」雙路徑，6 個月對上游提交 72 項修復、覆蓋 4.5M 行
- **CSA AI Vulnerability Storm 報告（2026-04-12）**：CISA 前局長 Easterly 與 60+ contributors 共同發布、由美國雲端安全聯盟 CSA 出版；建構「Mythos-ready」安全方案、點出 AI 賦能讓攻防失衡再擴大、漏洞 release 後 patch 視窗被壓縮、建議網路分段／MFA 強化／縱深防禦／增加 headcount
- **限制**：多數有效掃描需取得原始碼、封閉軟體不易突破；FreeBSD 等 OSS 較易被深度分析（這也說明為何 PackageKit 14 年老漏洞能被 AI 找出）

# 應用場景

- Simon 工作場景：跟 Google CodeMender 同期的 AI 自動化大規模修補趨勢；可考慮用 Claude Code 對自家環境做小型程式碼審查
- 一般場景：紅隊、安全研究、SaaS 自我審查

# 相關概念

- [[pack2theroot]]：AI 漏洞挖掘的具體成果
- [[claude-code]]：可作為小型程式碼審查的工具
- [[cve-weaponization-time]]：AI 找漏洞的雙刃面、攻擊端也用同源技術
- [[agentic-secops]]：AI 漏洞挖掘與 SOC 閉環的整合層

# 尚未解決的疑問

- AI 找漏洞的 false positive 率與審查成本

# 來源（自動維護）

- [[2026-04-29-pack2theroot-packagekit-vuln]]
- [[2026-05-05-google-cloud-agentic-secops-cybersec]]
- [[2026-05-06-coupang-insider-threat-cybersec]]
