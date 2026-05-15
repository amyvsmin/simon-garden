---
name: 目錄即觸發（directory-as-state）
aliases: [directory-as-trigger, cwd-as-state, 目錄狀態機, C9 觸發]
category: 自動化
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34cf85da-554f-81c2-8e40-c240006cec06
---

## 定義

Claude Code 以工作目錄作為 skill 模式切換的顯式觸發器。打開某特定目錄即進入對應 skill 的預設模式，不需要額外打觸發詞；跨裝置共用同一習慣，手機、電腦、網頁體感一致。

## 關鍵面向

- **C9 自動接收模式**：Simon 進入 `/Simon-Journal` 目錄 = 自動進入純接收日記模式，target 預設今天。CLAUDE.md 讀取即是觸發
- **C10 目錄分工**：`/Simon-Journal` 只寫日記；meta work（改 skill、debug、討論 spec）在 `/Simon-Agent` 或其他專案目錄。違反分工的代價：那些話會被當日記內容寫進 Notion
- **零阻力觸發**：對比打「開始日記 YYYY 年 M 月 D 日」這類觸發詞，目錄本身就是觸發。手機 Claude Code 開啟後第一則訊息就是日記
- **狀態機骨幹**：目錄是預設狀態，觸發詞（C1 覆蓋 target、A4 總結）是狀態轉換指令

## 應用場景

- Simon 工作場景：單目標專案目錄（/Simon-Journal 只寫日記、/Simon-Meeting 只收會議筆記）
- 一般場景：多模式 skill 入口、分工避免污染

## 相關概念

- [[pure-receive-immediate-write]]：C9 是純接收模式的啟動入口
- [[simplicity-over-control]]：目錄即觸發是「降低每次啟動成本」的設計案例

## 尚未解決的疑問

- 使用者誤進目錄（例手誤 cd）時，第一句無關的話會被當日記 append 的風險
- 手機 Claude Code 沒有「cd」概念時，怎麼實現等效的目錄切換

## 來源（自動維護）

- [[2026-04-24-simon-journal-skill-design]]
