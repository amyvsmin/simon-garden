---
title: "本機 LLM（Local LLM）"
slug: local-llm
aliases: [本機 LLM, local LLM, on-device LLM, 本地大模型, 本機 AI, on-prem LLM, 離線 AI, Gemma 4, Llama, Mistral, Qwen]
category: AI
confidence: 已驗證
created: 2026-05-13
query-count: 0
---

# 本機 LLM（Local LLM）

## 定義

完整模型權重下載到本機硬體（筆電／桌機／手機）跑推理的大語言模型部署模式；資料完全不離開本機、不需網路、無訂閱費；推理品質低於頂級雲端模型但已能勝任多數日常任務。

## 關鍵面向

- 參數量分級：E2B（2B 等級）手機／平板能跑；E4B 一般筆電；26B、31B 高階推理但要 GPU
- 硬體門檻：GPU VRAM 是瓶頸、Can I Run AI Locally 網站可自動偵測；通常 RTX 4090 級顯卡能跑 31B 量化版
- 主流工具：LM Studio（GUI 友善）／Ollama（CLI 工程師取向）兩條路
- 能力標籤：視覺（影像分析）／工具（MCP／網頁搜尋）／推理（CoT 拆步驟）三類常見
- 上下文設定：Context Length 是核心參數、4096 適合聊天、處理長文件要調高、會吃 VRAM 換速度
- 隱私／合規優勢：敏感資料（log／員工資料／PII）不離開本機、Shadow AI 治理的合規替代方案
- 離線可用：飛機上／海外無 SIM／air-gapped 機房都能用

## 應用場景

- Simon 工作場景：半導體公司內網敏感 log 分析、寫 31B Gemma 4 POC、繞過雲端 AI 不能進 production 的合規問題
- Simon 工作場景：ISO 27001 audit log 翻譯／摘要批次處理、不需要走 OpenAI／Claude API
- Simon 工作場景：手機 Google AI Edge Gallery 出國旅行用、拍照翻譯／錄音轉文字、無網路也能用
- 一般場景：個人筆電做隱私敏感的內容處理（醫療紀錄／法律文件／日記），完全離線

## 相關概念

- [[lm-studio]]：本機 LLM 最友善的 GUI 工具
- [[mcp]]：本機 LLM 透過 MCP 接外部工具（Brave Search／檔案管理）擴能力邊界
- [[shadow-ai]]：本機 LLM 是 Shadow AI 治理的合規替代方案
- [[subscription-vs-api-cost]]：對比 Claude Pro／Max 訂閱跟 API 計費、本機 LLM 是第三條路（一次性硬體成本）

## 尚未解決的疑問

- Gemma 4 31B 在 Simon 家中 PC（無高階 GPU）能不能跑？需查 CPU 推理速度
- 公司 RTX 工作站若申請成功、放哪台 server 較合適

## 來源（自動維護）

- [[2026-05-12-gemma-4-lm-studio-local-ai]]
