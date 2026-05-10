---
name: CLAUDE.md（雙層導航設計）
aliases: [雙層導航, AI 文件夾地圖, 兩層 instructions]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 354f85da-554f-813e-a5d8-c779cec39777
---

# 定義

用 vault 根目錄 CLAUDE.md 當總目錄、各資料夾 instructions.md 當局部地圖的兩層 AI 導航設計，讓 Claude Code 不必掃整個 vault 就能找到該讀什麼。第一層介紹整體架構與資料夾用途，第二層說明該資料夾的具體規則與輸入輸出格式。

# 關鍵面向

- **第一層 CLAUDE.md**：vault 根目錄，內容為「我是誰」+「資料夾地圖」+「全域偏好」+「跨資料夾規則」
- **第二層 instructions.md**：每個資料夾自帶一份，講清楚該資料夾的輸入格式、輸出規則、檔名慣例、特殊例外
- **省 token 機制**：AI 只在進入特定資料夾時才讀對應 instructions，其他資料夾的規則不會塞進當前 context
- **可演進性**：規則變了改 instructions.md 即可，不必動其他檔案
- **跟 codebase 慣例同源**：類似 monorepo 的 root README + package README 雙層設計

# 應用場景

- Simon 工作場景：已實作於 ~/.claude/CLAUDE.md（全域）+ ~/projects/Simon-Agent/CLAUDE.md（敏感資料專案級），未來可擴展到 SimonVault 各課程資料夾各放一份 instructions
- 一般場景：任何需要 AI 反覆讀寫的本地檔案系統（vault、codebase、寫作專案）

# 相關概念

- [[obsidian-claude-code-workflow]]：本設計的應用場景
- [[progressive-disclosure]]：本設計實現的核心心法
- [[claude-code]]：本設計的目標讀者

# 尚未解決的疑問

- 多層巢狀資料夾時，instructions 該放幾層才不過度設計
- CLAUDE.md 與專案 settings.json 的職責邊界（規則 vs 配置）

# 來源（自動維護）

- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
