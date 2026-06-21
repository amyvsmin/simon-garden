---
title: NotebookLM
slug: notebooklm
type: topic
topic_kind: entity
entity_type: product
status: living
aliases: [NotebookLM, notebooklm, Notebook LM]
created: 2026-06-20
last_updated: 2026-06-20
tags:
  - ai-tool
  - google
  - notebooklm
  - rag
  - knowledge-management
---

# NotebookLM

> 實體彙整頁（entity）。把散在多篇 reading 與多個 concept 裡、關於 NotebookLM 這個產品的東西收攏成一頁：它是什麼、我目前怎麼定位它、它在我知識庫裡的各個切面（連出去、不重抄）、怎麼一路演化、還有哪些沒拍板。深入單一切面的內容留在各自的 concept。

## 一句話身份

NotebookLM 是 Google 推出、內建 Gemini 的「以來源為本」AI 研究筆記工具：回答只奠基於你上傳的來源、附來源編號、大幅降低幻覺，擅長整理既有資料、不擅長延伸創作。

## 我的當前定論

- **定位**：我把它當 Claude Code 的外掛 RAG（檢索增強生成）引擎。影片分析、深度檢索、心智圖／資訊圖表、語音摘要、學習指南這些重任務丟給走 Gemini 免費額度的 NotebookLM，Claude Code 只負責調度，目的是省 Claude Max 訂閱 token。細節見 [[notebooklm-as-rag]]。
- **已落地、現役**：KW γ 收錄流程對 impact:high 的 reading 會自動用 NotebookLM 產簡報＋語音摘要，是現役用法。
- **強在哪**：以來源為本、附編號、減幻覺；多媒體輸出齊（藍圖／心智圖／互動圖表／語音摘要／學習指南／測驗）；多來源批量整理（PDF／YouTube／網頁／錄音丟同一本統一問答）。
- **弱在創作**：擅長整理，但排程、寫企劃這類延伸創作要轉到 Gemini 筆記本接 Canvas 畫布做。
- **弱在分享與客製**：圖片式簡報不能互動、不能客製；分享有地雷（分享後從 Gemini 側欄消失、有對話記錄的不能分享、釘選上限 5 本）。
- **整合風險**：CLI 串接靠社群非官方工具 `notebooklm-py`、走 CLI＋skill 封裝而非 MCP 協定，穩定性與 Google 介面改版風險未定。

## 切面地圖

NotebookLM 在我知識庫裡被這些 concept 各咬一個角度（一行帶過、深入內容在該 concept）：

- [[notebooklm-as-rag]]：核心切面，把它當外掛 RAG 引擎、token 卸載口。
- [[gemini-live]]：互補分工，NotebookLM 管行前資料整合、Gemini Live 管行中即時應對。
- [[doc-to-md]]：並列的另一條 token 卸載路線（本機 PDF→md 轉檔對照外掛 RAG）。

其餘只在 `html-vs-markdown-ai-output`、`disposable-ui-html`、`information-agent`、`text-visual-separation` 裡被淺提（當配音工具或反例），不納入切面、避免灌水。

## 演化時間軸

- **2026-05-13**：定下「NotebookLM 當 Claude Code 外掛 RAG、token 卸載」的核心定位；串接走 `notebooklm-py` CLI＋skills-creator。來源 [[2026-05-13-hc-notebooklm-claude-code-rag]]。
- **2026-05-26（產品改版）**：Google 把 Gemini＋NotebookLM＋Gems 整合進同一介面，Gemini 左側新增「筆記本」入口可直接讀 NotebookLM 資料。官方把「NotebookLM 管資料、Gemini 管生成」做成原生通道，不再只能靠社群 CLI 串；同時揭露分享地雷與釘選上限。來源 [[2026-05-26-yt-guoyu-gemini-notebooklm-gems-integration]]。
- **2026-06-10**：5/26 改版後第一個端到端應用案例：用 Gemini 筆記本入口讀 NotebookLM、接 Canvas 排旅遊行程；確立「NotebookLM 管行前、Gemini Live 管行中」的分工。同日決定 KW skill 暫不加 Gemini 筆記本延伸產出（無實際需求、避免規則變肥）。來源 [[2026-06-10-pansci-ai-travel-planning]]。
- **2026-06-12**：認知從「單一卸載用法」擴成「功能版圖盤點」，收了 22 篇用法精華（YouTube 一鍵匯入、8 種官方簡報範本、YAML 指令、財報分析等）。來源 [[2026-06-12-bnext-notebooklm-22-use-cases-map]]。

## 矛盾／未決

- **`notebooklm-py` 穩定性未決**：非官方社群工具，Google 改介面可能壞掉，concept 也提「未來可能被官方 API 取代」。
- **「當 YT 收錄第二備援」可能已過時、待複查**：[[notebooklm-as-rag]] 還留著「要不要拿 NotebookLM 當 YT 收錄第二備援、跟 Gemini transcribe 對照品質」的疑問；但 [[2026-05-29-opus-4-8-coding-benchmark]] 顯示舊的 Gemini transcribe 備援已在後續版本廢除，現役管線已不用它。兩者有張力，這個疑問要重新確認還成不成立。
- **MCP 下載限制（已知坑）**：NotebookLM 影片生成成功但 MCP 下載失敗（DASH 串流），要從網頁手動抓；音訊與簡報可正常下載。來源 [[2026-05-29-opus-4-8-coding-benchmark]]。
- **外部觀點（我未表態）**：有人主張 GPT 5.5＋GPT Image 2 後中文簡報品質已勝 NotebookLM；該來源自己也標註是主觀評價。來源 [[2026-06-05-aj-chatgpt-presentation-flow]]。

## 來源（自動維護）

核心素材：

- [[2026-05-13-hc-notebooklm-claude-code-rag]]
- [[2026-05-26-yt-guoyu-gemini-notebooklm-gems-integration]]
- [[2026-06-10-pansci-ai-travel-planning]]
- [[2026-06-12-bnext-notebooklm-22-use-cases-map]]

半相關（NotebookLM 只當配音工具或反例）：

- [[2026-05-12-notebooklm-html-vs-markdown-deep-dive]]
- [[2026-05-26-yt-hc-html-presentation-ai-agent]]

相關 concept：[[notebooklm-as-rag]]、[[gemini-live]]、[[doc-to-md]]

## 維護（entity 頁更新規則）

- **更新時機**：之後有新 reading 觸及 NotebookLM，就回這頁追加來源、刷新「我的當前定論」與「演化時間軸」、把過時的疑問結掉。frontmatter `status: living` 代表這頁要保持當前、不是寫完封存。
- **不重抄**：切面的深入內容永遠留在各自 concept，本頁只連、不複製。
