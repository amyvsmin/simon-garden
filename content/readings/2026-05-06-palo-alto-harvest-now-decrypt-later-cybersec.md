---
title: "Palo Alto Nicole Quinn — Harvest Now Decrypt Later 與後量子密碼遷移｜CYBERSEC 2026 Day 2"
date: 2026-05-06
type: 來源分析
url: ""
inbox-id: ""
concepts: [harvest-now-decrypt-later, post-quantum-cryptography, shadow-ai, critical-infrastructure]
projects: []
created: 2026-05-06
---

## 摘要

Palo Alto Networks 亞太政策與政府關係副總裁 Nicole Quinn 在 CYBERSEC 2026 Day 2 主題演講，從政策視角點出三個攻擊側已在發酵的長期風險。Harvest Now Decrypt Later：國家級攻擊者已在大量收集加密敏感資料、等量子電腦成熟解密；對應解方是後量子密碼學（NIST 2024 標準化）+ 企業密碼遷移計畫。Shadow AI：員工自帶 ChatGPT／Cursor／Copilot 進企業形成不可見資料外流。建議三層治理：跨國對齊全球標準、政府不過度限縮、公私部門情資共享。

## 核心概念

- [[harvest-now-decrypt-later]]：今天偷加密資料、十年後量子破解、針對 10 年以上長期重要資料
- [[post-quantum-cryptography]]：抗量子數學基礎、NIST 2024 完成第一批標準化、企業需做密碼遷移
- [[shadow-ai]]：員工未經批准用 AI 工具、形成資料外洩盲點、73% 擔心但 18% 有治理
- [[critical-infrastructure]]：HNDL 主要攻擊目標、台灣地緣政治壓力大

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
公司目前無後量子密碼遷移計畫、若涉長壽命資料（員工醫療紀錄、財務歷史、商業機密）已在 risk window；下一步盤點哪些系統用 RSA／ECC 等會被量子破解的舊加密。Shadow AI 治理是 ISO 27001 可內建的章節、跟 insider threat 一起寫；先做 SaaS 流量盤點抓出實際正在用的 AI 工具清單。Nicole Quinn「This is no longer hypothetical」的時間軸視角直接可拿去主管簡報。

## 原文要點

- 1B 用戶用 AI 只花 3 年（原預測 7 年）、政策制定的反應視窗壓縮
- Harvest Now Decrypt Later 已在進行、不只是國家級、組織犯罪集團也在做
- Cryptographic Migration「遷移應用程式所需時間非常長」、慢一年就被動一年
- 政策三層：跨國對齊全球標準、政府不過度限縮、公私部門情資共享
- 與台灣／新加坡／菲律賓／澳洲／日本協作、借鑑各國監理經驗

## 原始連結

- 現場錄音：`~/audio-inbox/語音 260506_104440.m4a`、逐字稿 `~/audio-inbox/transcripts/語音 260506_104440.txt`
- 議程資料：Drive `1ALC_3p4qA9vx_tz3oJfa4Z2TTiLRNtTG`／議程截圖
- NIST Post-Quantum Cryptography Standardization（2024）
