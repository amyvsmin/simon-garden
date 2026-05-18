---
title: "酷澎陳浩維 — Insider Threat 與 AI 漏洞挖掘失衡｜CYBERSEC 2026 Day 2"
date: 2026-05-06
type: 來源分析
url: ""
inbox-id: ""
concepts: [insider-threat, insider-threat-program, ai-vuln-discovery, cve-weaponization-time]
projects: []
created: 2026-05-06
reviewed: 2026-05-18
---

## 摘要

酷澎台灣暨日本資安長陳浩維在 CYBERSEC 2026 Day 2 主題演講，揭露 2025 年酷澎韓國資料外洩根因為前員工 insider threat、影響台灣顧客 20 萬人。引用 Ponemon 2026 報告：全球年均單一企業 insider 損失 195 萬美元、比 2022 年增 20%；27% 屬惡意內部人員；73% 組織擔心 AI 導致資料外洩、僅 18% 有 AI 治理機制。並推介 CSA《AI Vulnerability Storm》報告：AI 加速漏洞挖掘讓攻防失衡擴大、防守端反應視窗從週縮到小時級。

## 核心概念

- [[insider-threat]]：跨員工／前員工／約聘／供應商皆可能、技術防禦靠 UEBA + DLP + 跨部門整合
- [[insider-threat-program]]：crown jewel 盤點、跨部門整合、通報 SOP、技術偵測、資安文化五要點
- [[ai-vuln-discovery]]：AI 加速漏洞挖掘讓攻防失衡擴大、需重新評估資源配置與多層次縱深防禦
- [[cve-weaponization-time]]：CSA 報告呼應「漏洞 release 後反應視窗從週縮到小時」

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
公司 ISO 27001 推進中、insider threat 治理是還沒寫進制度的盲點。陳浩維 5 要點可直接拿來盤公司：crown jewel 盤點對應 ISO 資產盤點接近尾聲的階段、跨部門整合對應資安／法務／HR、通報 SOP 跟 Veeam 備份調整一起做、UEBA／DLP 偵測技術盤點、全員資安文化要靠教育。AI 治理 18% 落差也是公司現況、員工已用 ChatGPT／Gemini 但無可見性、下一步是補 shadow AI 盤點。

❌ 全段 — 公司資安大會行動方案目前用不到

## 原文要點

- 酷澎韓國 2025 年資料外洩、影響台灣顧客 20 萬、根因為前員工 insider；無信用卡／密碼／身分證外流
- 美國中大型企業正建置獨立 insider threat mitigation team、減少約 50% 事件量；EO 要求關鍵基礎設施必設
- AI 漏洞挖掘讓攻防失衡擴大、CSA 報告建議：網路分段、MFA 強化、縱深防禦、增加 headcount
- 自動化 patch 限制：對非 production 次要系統可全自動、production 仍需人工驗證
- 趨勢觀察：「初階資安工程師會受影響、但有經驗資安人才需求增加」

## 原始連結

- 現場錄音：`~/audio-inbox/酷資安長.m4a`、逐字稿 `~/audio-inbox/transcripts/酷資安長.txt`
- 議程資料：Drive `1ALC_3p4qA9vx_tz3oJfa4Z2TTiLRNtTG`／議程截圖
- CSA《AI Vulnerability Storm》報告（CISA 前局長 Easterly 與多位資安長共同發布、2026-04-12 由 60+ contributors 發布）
