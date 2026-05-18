---
title: "[低價值] Claude Code 基礎觀念入門（中文教學影片）"
date: 2026-05-14
type: 來源分析
url: "https://www.youtube.com/watch?v=KVBKK5ov6RE"
inbox-id: "360f85da-554f-8108989dcbf10d53ed2f"
concepts: [claude-code, skill, claude-md-dual-nav, claude-slash-commands-control, claude-rewind]
projects: []
created: 2026-05-15
reviewed: 2026-05-18
---

## 摘要

中文 YouTuber 對 Claude Code 的基礎觀念整理：什麼是 Agent、Skill 是 SOP 包、終端 vs 桌面 App 兩種用法、三個最基礎操作、提示詞兩種情境（不知道要什麼用 AI 發散 vs 清楚要什麼做逆向工程）、上下文窗口本質是「無狀態 + 每次重送」、工具四類（檔操作／搜尋／執行／網路搜尋）、四個斜槓指令（compact/context/cost/model）、雙軌記憶系統（短期 claude -c/-r + 長期 CLAUDE.md 手動 + memory.md 自動）、checkpoint 雙 ESC 機制限制（只能回 Claude Code 編輯過的、30 天保留）。內容跟 Simon 既有 reading（海大叔、Boris Cherny、雷蒙課）九成重疊，純清 inbox。

## 核心概念

- [[claude-code]]：本影片主軸、定義 + 基礎用法（跟 madebypan 入門指南重疊）
- [[skill]]：Skill = SOP + 第三方 lib 合集、PPT 自動化／微信上傳舉例
- [[claude-md-dual-nav]]：根目錄 CLAUDE.md 當「最高憲法」+ 子資料夾分層
- [[claude-slash-commands-control]]：/compact /context /cost /model 四個（跟 token-saving-rules 重疊）
- [[claude-rewind]]：雙 ESC 或 /rewind 回滾、限制只能回 Claude Code 編輯過的檔、不能回 Bash 動作、30 天保留

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- ❌ **沒新東西**：所有重點都已在既有 reading／concept 涵蓋 — 無新資訊
- ✅ **唯一可能加分點**：影片提到「memory.md 自動記憶」這個機制，但 Simon 已有 auto-memory（`~/.claude/projects/-home-simon-projects-Simon-Agent/memory/MEMORY.md`）落地，不必再學
- ✅ **重疊參照**：[[2026-04-21-madebypan-claude-guide]]、[[2026-05-02-haiuncle-claude-code-intro]]、[[2026-05-09-boris-cherny-claude-code-5-habits]]、[[2026-05-12-raymond-claude-code-skill]]
- ❌ 純清 inbox、不抽新 concept — 無新概念

## 原文要點

- **Agent 定義**：能自主操作電腦完成實際任務的形態（vs 聊天機器人只能給建議）
- **Skill 本質**：SOP + 第三方 code lib 合集，幫補非工程師的信息差；前提是知道底層 lib 才敢用
- **使用模式**：終端版（推薦、可接第三方 API 用便宜模型）vs Claude 桌面 App
- **三個基礎操作**：(1) `claude` 啟動 (2) 雙 Ctrl+C 退出 (3) 剩下全大白話
- **提示詞兩種**：(1) 不知道要什麼 → 老實告訴 AI「想法模糊、請反問我發散」(2) 清楚要什麼 → 逆向工程從成品反推前提條件
- **系統提示詞 vs 對話框提示詞**：後者臨時發散、前者底層人設；逆向工程出完美 prompt 後寫進系統
- **上下文無狀態**：模型沒記憶、每次發訊息系統打包所有歷史重發 → 價格指數爆 + 5 萬 token 後注意力渙散
- **核心心法**：及時控制上下文、做好任務隔離、新功能新開窗
- **工具四類**：(1) 檔案 CRUD (2) 搜索（codebase/檔案/文檔內）(3) 執行（shell/test/server）(4) 網路搜尋；不能操作第三方軟體（Word/Excel/剪輯軟體）
- **四個斜槓**：/compact 濃縮對話、/context 查當前用量（70% 就壓縮）、/cost 查費用、/model 切模型
- **雙軌記憶**：短期 `claude -c`（continue）`claude -r`（resume）`/rename` 命名；長期 `claude.md` 手動憲法 + `memory.md` 自動經驗
- **Checkpoint 限制**：每次改檔前存檔、雙 ESC 或 /rewind 回滾；只能回 Claude Code 編輯過的、不能跟蹤 Bash 命令動作；30 天保留；大專案要配 Git

## 原始連結

- https://www.youtube.com/watch?v=KVBKK5ov6RE
