---
title: "Claude 斜槓指令快捷控制"
slug: claude-slash-commands-control
aliases: [Claude 斜槓指令, Claude slash commands, /compact, /clear, /context, /btw, /rewind, /usage]
category: AI
confidence: 已驗證
created: 2026-05-10
---

# Claude 斜槓指令快捷控制

## 定義

Claude 桌面／網頁版／Claude Code 內建斜線命令在對話進行中介入 AI 行為：原 4 個（`/compact`／`/clear`／`/context`／`/btw`）+ Anthropic 2026-04 加 `/rewind` 跟 `/usage` 共 6 個。不需要重置整個會話就能精準微調 context 狀態、對抗 [[context-rot]]。

## 關鍵面向

- **`/compact` 精華摘要**：把長對話歷史壓縮成核心精華摘要、釋放 Current Session 空間；對話太長或 AI 變笨時用，跟人工請 AI「總結一下」效果類似但格式更穩定
- **`/clear` 記憶歸零**：類橡皮擦、把所有上下文清掉給乾淨開局；換主題或主線任務完成時用，避免舊任務的雜訊污染新任務
- **`/context` 狀態檢查**：顯示目前 token 用量、像油表；長任務跑到一半隨時確認還有多少空間、避免任務做到一半記憶爆掉
- **`/btw` 側欄小問題**：開平行支線問小問題（查單字、確認語法）不消耗主線記憶；解「想查一下又怕打斷主線」的痛點
- **`/rewind` 回溯（2026-04 加）**：快捷鍵連按兩次 Esc、跳回任何先前訊息重新開始；後續訊息全部從 context 移除、不是 hide 是真的 free；詳見 [[claude-rewind]]
- **`/usage` 額度監控（2026-04 加）**：顯示會話／週／API 三層額度水位；對齊 [[claude-usage-dashboard]] 的 GUI 版本
- **主動 `/compact <提示>`**：帶引導壓縮比被動觸發精準、避免重要細節被丟；例如 `/compact 保留 vault 寫入路徑、丟調試細節`
- **跟 Claude Code 的差異**：Claude Code 也有 slash command 但語意不同（如 /clear、/compact 在 CC 一樣有、/btw 是 web 限定）；混用兩種介面要分清楚

## 應用場景

- Simon 工作場景：Simon-Agent 跑長任務（KW γ migration、課程筆記）時用 /compact 維持上下文；換新主題前 /clear 避免污染；自架 CC 主要靠 plan mode + skill 替代部分 slash command
- 一般場景：Claude Pro 訂閱戶長對話必備、不會用會耗光 Weekly Limits 還沒做完事

## 相關概念

- [[claude-usage-dashboard]]：/context 直接讀面板的 Current Session 數字、/usage 是 GUI 版
- [[token-saving-rules]]：/compact /clear 是守則三的具體執行工具
- [[plan-mode]]：CC 的 plan-mode 跟 web 的 slash command 同屬「介入 AI 行為」工具家族
- [[claude-rewind]]：/rewind 的完整概念頁
- [[context-rot]]：本指令集合是對抗 context rot 的主要工具

## 尚未解決的疑問

- /btw 在 Claude Code 是否有對應指令？目前似乎是 web 限定

## 來源（自動維護）

- [[2026-05-09-claude-token-limits-tutorial]]
- [[2026-05-13-thariq-claude-code-session-management-1m-context]]
