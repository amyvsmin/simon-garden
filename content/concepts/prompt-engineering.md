---
title: "提示工程（Prompt Engineering）"
slug: prompt-engineering
aliases: [Prompt Engineering, 提示工程, prompt engineering, 寫 prompt, 提示詞工程, prompting, 提示設計]
category: AI 與 Agent
confidence: 已驗證
created: 2026-06-25
---

## 定義
寫出有效 prompt（提示）以從生成式 AI（[[generative-ai]]）引出理想輸出的 craft。prompt 是給 AI 模型的輸入指令（可為文字、圖像或其他資料），告訴它「要如何產生輸出」。核心信念：AI 只能照你說的做，產出品質直接綁 prompt 品質。代表框架是 [[tcrei-framework]]（Task、Context、References、Evaluate、Iterate）。

## 關鍵面向
- **給足 context**：必要細節越清楚，輸出越貼近需求（如「30 美元生日禮物」對上「29 歲、愛冬季運動、剛從單板換雙板的對象」）
- **persona 與 format**：要 AI 扮演什麼專業、輸出長什麼樣（條列／表格／短句）
- **References**：給範例供模仿，輸出更準
- **迭代是關鍵**：評估輸出後補資訊或改寫再試；「一直問為什麼」挖根因；指出喜歡/不喜歡哪幾點要它據此重出
- **跨工具通用**：技巧可移植到 Gemini／ChatGPT／Copilot／Claude
- **反例**：debug 程式碼時過多 context 反而干擾——精確 > 豐富

## 應用場景
- **Simon 工作場景**：每天給兩個芙莉蓮（Claude Code／Codex）下指令時，把 persona＋format＋context 固定寫進 prompt 開頭；產資安宣導素材時用漸進式 prompt
- **一般場景**：用 AI 解讀框架、寫報告、改 code、研究威脅

## 相關概念
- [[tcrei-framework]]：提示工程的具體五步框架
- [[generative-ai]]：提示工程操作的對象
- [[human-in-the-loop]]：prompt 產出後仍需人類驗證
- [[prompt-framework-weakness]]：CoT／ToT／ReAct 等進階提示框架各自的死穴

## 來源

- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/4-boost-your-cybersecurity-skills-with-ai|Course 8 Module 5 Section 1 Leaf 4 Boost your cybersecurity skills with AI]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/10-activity-use-generative-ai-to-list-common-signs-of-phishing-and-malware|Course 8 Module 5 Section 1 Leaf 10 Activity: Use generative AI to list common signs of phishing and malware]]
