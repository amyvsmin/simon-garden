---
title: "Claude Code Skills 官方指南：從建立、觸發到驗證"
date: 2026-08-14
type: 來源分析
domain: AI 工具實務
url: "https://code.claude.com/docs/en/slash-commands"
source_tier: 第一手
inbox-id: "3bcf85da-554f-81c8-afca-c13fb4767ca4"
concepts: [skill, progressive-disclosure, ai-evaluation-rubric]
projects: []
impact: medium
tldr: "Anthropic 目前將 Skill 定位為可自動或手動叫用的可重用能力包，Custom Commands 已併入 Skills；官方也要求把觸發準確度與輸出品質分開驗證。本次收錄同步修正 vault 既有的過時分工。"
stage: evergreen
icon: "⚡"
created: 2026-08-14
---

## 為什麼讀

雷蒙課程單元 2-5 的原 GitHub 連結目前回傳 404。為了讓 Lv1 → Lv2 練習仍然完成一件真實任務，改收 Anthropic 官方的 Claude Code Skills 指南：不拿失效頁面或舊印象交差，而是用 `knowledge-wiki` Skill 把現行第一手文件整理進知識庫，並校正既有筆記裡已過時的分工。

## 摘要

這份官方指南從建立 `SKILL.md`，一路講到載入位置、叫用控制、附屬檔案與驗證方法。對既有知識最大的更新有兩點：Custom Commands（自訂斜線指令）已併入 Skills，「Command 只能手動、Skill 只能自動」不再是硬邊界；測試 Skill 時，要分開檢查「該叫用時有沒有叫到」與「叫用後產出是否合格」，並用全新對話做啟用／停用比較，避免既有脈絡掩蓋指令缺口。

<p align="center"><img src="assets/covers/2026-08-14-claude-code-skills-official-guide-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[skill]]：把重複使用的知識、規範或多步驟流程包成可重用能力。現在同一個 Skill 既可由模型依 `description`（用途與觸發條件）自動叫用，也可由使用者輸入 `/skill-name` 手動叫用；若工作流程只能由人決定啟動，可設 `disable-model-invocation: true`。舊 `.claude/commands/` 仍相容，但官方已把 Custom Commands 併入 Skills。
- [[progressive-disclosure]]：啟動時先讓模型看到 Skill 名稱與描述，真正命中任務才載入主體，詳細資料再由 `references/`、`scripts/` 等附屬檔案按需取得。Skill 主體一旦載入會留在本次對話脈絡；權限則只維持當輪，下一則使用者訊息就清除，兩者不是同一個生命週期。
- [[ai-evaluation-rubric]]：驗證 Skill 要分成兩條線：第一條測路由，確認該觸發與不該觸發的要求能否正確分流；第二條測產出，確認叫用後是否符合預期。官方建議每個真實案例都用全新對話，比較啟用與停用 Skill 的結果，才看得出 Skill 本身帶來多少改善。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段。

**A. 芙莉蓮優化類**：

- 修正既有 `skill` 概念裡「Command 手動、Skill 自動」的過時二分法，補上目前的手動／自動叫用控制與內容／權限生命週期。〔原文支撐〕
- 把 Skill 驗證拆成「有沒有叫對」與「叫到後做得對不對」兩層，補進既有 AI 評估量表；本輪只更新知識，不順勢替全部 Skill 建測試套件。〔原文支撐〕

**B. Simon 個人動作類**：

- 這次已用 `knowledge-wiki` 把公開第一手指南整理成 Obsidian 閱讀頁，可作為 Lv1 → Lv2 的真實 Skill 使用成果與截圖素材。〔AI 推論〕
- 日後要優化某個高頻 Skill 時，可各準備幾個「應觸發／不應觸發」要求，再用全新對話做啟用與停用比較；先挑一個真正有痛點的 Skill 即可，不必一次普查全庫。〔AI 推論〕

## 原文要點

- 適合寫成 Skill 的內容，是反覆貼上的指令、檢查表、多步驟流程，或已從常駐指令檔膨脹成程序的內容。
- 每個 Skill 至少有一個 `SKILL.md`；YAML frontmatter（檔案開頭的設定區塊）負責名稱、描述與叫用控制，正文負責實際指令。
- Skill 可放在企業、個人、專案或 Plugin 層級；同名時有明確優先順序，Plugin Skill 另帶命名空間。
- 參考型內容提供規範與領域知識；任務型內容提供部署、提交、產碼等逐步流程，兩者可用不同叫用控制。
- 主體應保持精簡，細節移到附屬檔案；因為 Skill 一旦載入，其內容會留在本次對話脈絡並持續占用篇幅。
- `allowed-tools` 只預先核准當輪工具，不會隨 Skill 內容一起永久留在對話；第三方 Skill 的工具權限仍須先審查。
- 評估時要分開量「路由是否正確」與「輸出是否合格」，並以全新對話做啟用／停用 Skill 的基準比較。
- Skill 不觸發時，先檢查描述是否含使用者自然會說的詞；觸發過度時，收窄描述或改成只能手動叫用。

## 盲點與保留

**缺口／矛盾**：
- 現行官方文件與 reading `2026-07-01-kaochenlong-claude-code-skills` 的「Custom Commands 手動、Skills 自動」分工已有版本性矛盾：Custom Commands 現已併入 Skills，同一 Skill 可以手動或自動叫用。舊 `.claude/commands/` 只是相容入口，不應再拿觸發方式當兩種機制的固定邊界。
- 本頁同時包含 Agent Skills 開放標準與 Claude Code 專屬擴充；像 `context`、`agent`、`background` 等欄位不一定能帶到其他產品，跨平台使用前仍要查目標環境接受哪些欄位。

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-08-14-claude-code-skills-official-guide)

## 原始連結

- https://code.claude.com/docs/en/slash-commands

## 落地動作與效益

**A 類芙莉蓮優化**：

- ✅ **已做**：更新 `skill`、`progressive-disclosure`、`ai-evaluation-rubric` 三張既有概念卡，補上現行叫用方式、內容／權限生命週期，以及 Skill 評估的兩條檢查線。
- ❌ **本輪不做**：沒有替全部 Skill 新建測試套件；這次目標是完成一次真實 Skill 使用並留下可驗證成果，全面評估屬另一個專案，沒有具體痛點前不擴張範圍。

**B 類 Simon 個人動作**：

- ✅ **已做**：用 `knowledge-wiki` 抓取第一手文件、清洗原文、比對既有概念、寫入閱讀頁與索引，作為 Lv1 → Lv2 升級申請成果。〔AI 推論〕

