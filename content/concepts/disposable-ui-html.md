---
title: "用完即丟 HTML 介面"
slug: disposable-ui-html
aliases: [用完即丟 HTML 介面, disposable HTML UI, throwaway HTML interface, 客製即丟介面, 一次性 HTML 介面]
category: AI／生產力
confidence: 待驗證
created: 2026-05-13
query-count: 0
---

## 定義

讓 AI 為單次任務即時生成完整可互動的 HTML 介面、解決完問題就丟、不維護不版控；目的是把 Markdown 文字牆換成「真的能直接操作的工具」。

## 關鍵面向

- 觸發場景：30 條零散待辦變可拖曳看板、複雜資料變排序篩選表、決策方案變並排比較介面
- 互動閉環：使用者在 HTML 上拖曳／勾選／編輯完、再透過「複製為提示詞」或「匯出文字」按鈕把結果送回 AI
- 一次性是優勢、不是缺點：不寫單元測試、不考慮維護、不接 CI／CD；類比 LLM 寫的 throwaway Python script
- 成本權衡：HTML 比 Markdown 多用 2–4 倍 token、產出慢 2–4 倍；只值得用在「決策時刻」「複雜結構視覺化」這類高價值場景
- 反建議「不要寫超長 prompt 模板」：保持「幫我做一個 HTML 檔處理 X」這樣的簡單描述、讓 AI 決定展現方式

## 應用場景

- Simon 工作場景：盤點 Knowledge Wiki 待辦時請 Claude Code 生「拖曳看板 HTML」、整理完匯回 Notion
- Simon 工作場景：ISO 27001 資產欄位待補時生「表格 + 條件式 highlight HTML」、視覺找出缺欄位
- Simon 工作場景：投資組合季度檢視，請 Claude 把 VWRA／VT／BNDX／BND 四標的目前比例變成可調滑桿介面試算
- 一般場景：研究論文難讀時生成「互動式學習報告 + 流程圖 + 重點註解 + 常見誤區整理」單一網頁

## 相關概念

- [[html-vs-markdown-ai-output]]：本概念是該主張的第五個用例、最驚豔的應用
- [[context-resend-token-paradox]]：HTML 多花 token 換決策品質、context 重送時通常划算
- [[interactive-confirmation-ui]]：兩者都是用視覺介面取代文字牆

## 尚未解決的疑問

- WSL／遠端環境怎麼讓 Simon 看到 Claude 生的 HTML？headless 瀏覽器渲染成截圖？或開 localhost server？
- 對 [[playwright-headless-remote]] 限制的影響——可拖曳介面遠端會用不到

## 來源（自動維護）

- [[2026-05-12-notebooklm-html-vs-markdown-deep-dive]]
