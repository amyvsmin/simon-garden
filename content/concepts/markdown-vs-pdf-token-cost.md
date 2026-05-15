---
title: "Markdown vs PDF token 成本差距"
slug: markdown-vs-pdf-token-cost
aliases: [Markdown vs PDF token, PDF token cost, 文件格式 token, Markdown 省 token, 資料降噪]
category: AI
confidence: 已驗證
created: 2026-05-10
---

## 定義

把同樣 15 頁文件丟進 Claude，PDF 格式會消耗約 4 萬 token、轉成 Markdown 純文字只要 2000 token，相差 20 倍。差距來源：PDF 帶大量結構化標籤、版面定位資訊、字型 metadata、嵌入物件，這些對 AI 推理沒貢獻但全部要算錢。

## 關鍵面向

- **20 倍差距是實測量級**：原文教學以 15 頁文件為實例、4 萬 vs 2000、不是邊角案例
- **PDF 的隱藏成本**：每個字元位置、每個段落框架、每張嵌入圖／表格、字型映射全部塞進 context；AI 真正用得到的只是文字內容
- **轉換工具成熟**：pdftotext、mutool、pandoc、unstructured.io、各家 PDF→Markdown service 都能處理；轉換成本低於丟原檔的 token 差價
- **適用範圍**：純文字內容類文件全部適用（合約、論文、白皮書、教科書）；含關鍵圖表的視覺密集文件需要保留圖（用 vision model 另外處理）
- **延伸到其他格式**：Word／PPT／HTML 都有類似問題、但 PDF 最嚴重；Markdown 是 LLM 友善格式的事實標準

## 應用場景

- Simon 工作場景：CISSP／ISO 27001 教材丟給 CC 分析時、先轉 Markdown；長 PDF 報告處理走 [[pdf|pdf skill]] 抽文字；公司 IT 規範文件批次轉 Markdown 入 vault
- 一般場景：所有要把書／報告／論文塞進 LLM 的場景；特別是 RAG pipeline 必先 Markdown 化

## 相關概念

- [[token-saving-rules]]：本概念是守則一「資料降噪」的量化基礎
- [[claude-usage-dashboard]]：直接影響 Current Session 跟 Weekly Limits 兩層消耗
- [[html-vs-markdown-ai-output]]：HTML 也比 Markdown 冗長、但反向討論「值不值得多花 token 換互動性」

## 尚未解決的疑問

- 不同 LLM tokenizer（Claude／GPT／Gemini）對 PDF 處理 token 數差異多大？文章只給 Claude 數字

## 來源（自動維護）

- [[2026-05-09-claude-token-limits-tutorial]]
