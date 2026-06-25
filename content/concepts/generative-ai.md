---
title: "生成式 AI（Generative AI）"
slug: generative-ai
aliases: [Generative AI, 生成式 AI, Gen AI, gen ai, 生成式人工智慧, 生成 AI]
category: AI／Agent／LLM
confidence: 已驗證
created: 2026-06-25
---

## 定義
人工智慧（[[artificial-intelligence]]）的一種，能依輸入的 [[prompt-engineering|prompt]]（提示）**生成新內容**——文字、圖像、程式碼或其他媒體。代表工具：Gemini、ChatGPT、Microsoft Copilot、Claude。對資安人而言，它是把例行、耗時工作交出去、把時間留給需要判斷之高價值工作的槓桿。

## 關鍵面向
- **四大資安應用**：① 建內容（如產一批假資料來測試資安工具、寫資安最佳實務清單）② 快速分析／摘要大量資訊（報告、會議逐字稿）③ 詳盡回答常見威脅問題（malware、ransomware）④ 簡化日常（初判 email 是否釣魚）
- **輸入靠 prompt**：產出品質取決於 prompt 品質，故需搭配 [[prompt-engineering]] 與 [[tcrei-framework]]
- **必須驗證**：輸出可能不準或過時，要套 [[human-in-the-loop]] 對照可靠來源
- **debug 例外**：用 gen AI 找程式 bug 時 context 不是越多越好（精確 > 豐富），與一般 prompt 相反

## 應用場景
- **Simon 工作場景**：摘要 Veeam／資安報表、研究不熟的 CVE／威脅、初判可疑 email、幫腳本補註解；用 Claude Code／Codex／Gemini 接日常內網 IT 工作
- **一般場景**：資安分析師寫報告、產測試資料、解讀框架、code review

## 相關概念
- [[artificial-intelligence]]：generative AI 是 AI 的一個子類
- [[prompt-engineering]]：與 gen AI 互動、引出好輸出的craft
- [[human-in-the-loop]]：負責任使用 gen AI 的驗證機制
- [[responsible-ai]]：使用 gen AI 的倫理與資料邊界準則

## 來源

- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/3-use-generative-ai-to-work-smarter-and-faster|Course 8 Module 5 Section 1 Leaf 3 Use generative AI to work smarter and faster]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/2-luis-driving-impact-with-ai-in-the-workplace|Course 8 Module 5 Section 1 Leaf 2 Luis: Driving impact with AI in the workplace]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/6-use-ai-to-help-identify-bugs|Course 8 Module 5 Section 1 Leaf 6 Use AI to help identify bugs]]
