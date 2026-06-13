---
title: "提示注入（Prompt Injection）"
slug: prompt-injection
aliases: [提示注入, prompt injection, prompt-injection, 間接提示注入, indirect prompt injection, 隱形指令注入, 提示詞注入]
category: 資安
confidence: 已驗證
created: 2026-06-13
query-count: 0
---

## 定義

把惡意指令藏進 AI 會讀到的內容裡（一份文件、一個網頁、一個檔名、甚至一段肉眼看不到的隱形文字），讓 AI 把本來該當「資料」處理的東西當成「指令」執行的攻擊。根因是大型語言模型不會天然分辨「這段字是要我讀的內容」還是「這段字是要我照做的命令」。

## 關鍵面向

- **直接 vs 間接**：直接注入是使用者自己在對話框打惡意指令；真正危險的是「間接注入」（indirect prompt injection）——指令藏在 AI 自動去讀的第三方內容裡（外部網頁、上傳的檔、收到的信），使用者根本沒打那段話、卻被代為執行。
- **隱形手法**：注入指令常藏在人看不到、機器讀得到的地方。實例：Word 檔裡 1pt 的白底白字、行距壓到接近 0；或用「零寬度字元」（zero-width Unicode）把整段攻擊指令塞進視覺上一片空白的位置。肉眼審核因此擋不住。
- **危害是「借手」不是「破解」**：注入不破解任何密碼或漏洞，而是借 AI 的手、用使用者的身份去做事——讀檔、跑 curl 外傳資料、刪改檔案。所以它能繞過「程式有沒有漏洞」這層思維。
- **跟傳統注入同源**：本質跟 [[sql-injection]]、[[cross-site-scripting]] 一樣是 [[injection]] 家族——都是「把指令混進資料欄位、讓系統照著跑」。差別是這次被騙的執行者是 LLM。

## 應用場景

- **Simon 工作場景**：用 Claude Cowork／Codex 處理外部來源的文件（廠商寄來的 Word、網路下載的 PDF）、或 KW γ 收外部 URL 時，內容裡可能藏注入指令。處理不信任來源前要意識到「AI 會把內容當指令」這個風險，必要時隔離或限制 AI 的對外連線。
- **一般場景**：任何讓 AI agent 自動讀取外部內容（網頁、郵件、檔案、別人上傳的 skill）的工作流，都有間接注入的攻擊面。

## 相關概念

- [[ai-skill-security]]：偽裝成 skill 的注入文件是 skill 攻擊三型之一，prompt injection 是其技術機制。
- [[injection]]：傳統注入攻擊家族，prompt injection 是 LLM 時代的新成員。
- [[data-exfiltration]]：注入最常見的目的就是讓 AI 把使用者的檔案外傳出去。

## 尚未解決的疑問

- 平台側（Anthropic／OpenAI）目前對間接注入的結構性緩解（出站白名單、內容與指令分流）有效到什麼程度，仍在演進。

## 來源（自動維護）
- [[2026-06-13-pansci-claude-skill-security]]
