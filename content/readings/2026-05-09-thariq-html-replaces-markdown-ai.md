---
title: "HTML 才是 AI 時代的原生語言？Anthropic 工程師：我已停止寫 Markdown"
date: 2026-05-09
type: 來源分析
url: "https://www.inside.com.tw/article/41251-from-md-to-html"
inbox-id: "35cf85da-554f-811e-adf0-c8117d9e98ee"
concepts: [html-vs-markdown-ai-output, interactive-confirmation-ui, context-resend-token-paradox]
projects: []
impact: medium
created: 2026-05-10
reviewed: 2026-05-18
tldr: "Inside 報導 Anthropic Claude Code 工程師 Thariq Shihipar 在 X 上的論點：Markdown 在 AI 時代正在變成一種限制、HTML 是更適合的人機協作格式。三層論點為表達力夠、實際被讀機率高、製作有趣提升投入感。文章核心戳的痛點是 Claude Code CLI 用戶長期默契的痛點：AI 給長計畫文件、要改其中一處必須打字描述、認知負擔極大。"
stage: growing
icon: "⚡"
---

## 摘要

Inside 報導 Anthropic Claude Code 工程師 Thariq Shihipar 在 X 上的論點：Markdown 在 AI 時代正在變成一種限制、HTML 是更適合的人機協作格式。三層論點為表達力夠、實際被讀機率高、製作有趣提升投入感。文章核心戳的痛點是 Claude Code CLI 用戶長期默契的痛點：AI 給長計畫文件、要改其中一處必須打字描述、認知負擔極大。Token 悖論回應「HTML 太耗 token」的反對：長對話下單次多花換精準決策反而省。

## 核心概念

- [[html-vs-markdown-ai-output]]：Anthropic 工程師 Thariq 主張 AI 的輸出格式應該從 Markdown 換成 HTML。三層理由：（1）HTML 表達力遠超 Markdown，能做表格、互動元件、SVG 圖表、動畫，Markdown 只有標題跟條列；（2）AI 產出的文件如果只是一堆 Markdown 純文字，實務上沒人會認真讀完，但做成有排版的 HTML 網頁，閱讀率明顯提升；（3）製作過程本身有趣，提升使用者投入感。不過 Markdown 在版本控制、跨平台相容性上仍不可取代，兩者不是誰消滅誰的關係。
- [[interactive-confirmation-ui]]：當 AI 產出一份長計畫文件，使用者想改其中某一處時，用打字描述「第三段第二點改成 XX」的認知負擔非常大。如果改用 HTML 互動介面——每個決策點放一個按鈕或勾選框，使用者直接點選確認或修改——認知負擔會大幅降低。這是 CLI 文字介面的長期痛點，HTML 互動 UI 提供了一條出路。
- [[context-resend-token-paradox]]：直覺上會覺得「HTML 比 Markdown 多好幾倍 token，太浪費了」，但實際上每次你發一則新訊息，Claude 都會把整個對話歷史重新送一遍。一段長對話累積下來，重送的 token 量遠超單次輸出多用的那幾千 token。如果一次多花一點 token 就能讓使用者精準做出決策、避免來回修改三四輪，總 token 反而是省的。
![[2026-05-09-thariq-html-replaces-markdown-ai-html-vs-markdown-ai-output.png|275]]

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- ✅ 跟剛建的 Action 卡「把 Obsidian 閱讀頁改成 HTML 網頁模式呈現」直接對應；本文是該方向的理論依據
- ✅ 但要注意 Simon 的 vault 跟 Thariq 的場景不同：Thariq 講「給 AI 的計畫文件」、Simon 想做的是「給人讀的 reading」；前者強調互動式決策、後者強調閱讀體驗
- ✅ 可考慮的混合方案：vault 仍存 Markdown 為事實（git friendly、AI friendly），渲染層用 Quartz／Obsidian Publish 或自架轉成 HTML 給人讀
- ❌ Inside 三篇連續文章（41070 TVBS／41251 HTML／41252 Boris Cherny）都圍繞 Claude Code、可能是該編輯（Mia）正在跑 Claude Code 系列 — 觀察性質、未追蹤

## 原文要點

- Thariq 的 X 帖原文：「HTML 才是新的 Markdown、我已停止為幾乎所有東西撰寫 Markdown 文件、全面改用 Claude Code 幫我生成 HTML」
- 三層論點：表達力、閱讀率、投入感
- Markdown 不會消失：版本控制、文件儲存、跨平台相容性仍不可取代
- Token 悖論：單次多用幾千 token 換精準決策、長對話累積反而省幾十萬

## 原始連結

- [https://www.inside.com.tw/article/41251-from-md-to-html](https://www.inside.com.tw/article/41251-from-md-to-html)
- 原始來源：[Thariq Shihipar @ X](https://x.com/trq212/status/2052811606032269638)
- Notion inbox 短網址：[https://share.google/1k27i1Mi0VhTkPTiU](https://share.google/1k27i1Mi0VhTkPTiU)
