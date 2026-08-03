---
title: Obsidian
slug: obsidian
type: topic
topic_kind: entity
entity_type: product
status: living
aliases: [Obsidian]
created: 2026-07-04
last_updated: 2026-07-04
tags:
  - tool
  - obsidian
  - pkm
  - note-taking
---

> 實體彙整頁（entity）。把散在多篇 reading 與多個 concept 裡、關於 Obsidian 這個對象的東西收攏成一頁：它是什麼、我目前怎麼定位它、它在我知識庫裡的各個切面（連出去、不重抄）、怎麼一路演化、還有哪些沒拍板。深入單一切面的內容留在各自的 concept。

## 一句話身份

Obsidian 是本地優先（local-first）的 Markdown 筆記工具；在 Simon 的系統裡它不是又一個筆記 App，而是整個 Knowledge Wiki 的資料層——vault 內容以純文字檔留在本機、靠 wikilink 而非向量資料庫串連知識，Claude Code（或 Codex）負責讀寫與處理，讓知識庫本地化、私有化、隨時間變強。

## 我的當前定論

- **定位**：Obsidian 是 Simon 整個 KW γ 系統的資料層底座——vault 裡的 readings／concepts／topics 全是純 Markdown 檔，由 Claude Code（WSL）或 Codex（Windows）直接讀寫；[[obsidian-claude-code-workflow]] 是這個組合的核心概念，Obsidian 本身不做任何 AI 判斷，只負責存放與人類端瀏覽。
- **強在哪**：[[wikilink-cross-folder]] 讓知識庫不被樹狀資料夾結構綁死，AI 讀到某檔案能自動跳關聯檔案讀全貌；本地優先、不依賴雲端服務、不需要向量資料庫，靠資料夾分層加索引就能跑，vault 目前 reading 累積約 80 篇、concept 逾 500 篇，仍在可控範圍。
- **AI 端橋接走的是 Local REST API、不是 CLI plugin**：Simon 未採 [[obsidian-cli-plugin]] 概念卡描述的命令列 plugin 路線（[[2026-05-05-obsidian-cli-claude-code-daily-loop]] 收錄時即否決、改選 Local REST API 路線），改採 Obsidian Local REST API plugin。依 Simon 的專案狀態，這條橋接已於 2026-06-14 接通並通過端到端測試（WSL 經 HTTPS API 列得到 vault 根、`authenticated: true`），供 WSL 端對 vault 做改名／刪除／搬移時自動更新 wikilink、避開 Sync 衝突（硬前提是 Windows 上 Obsidian 要開著）。
- **知識庫角色邊界清楚，日記留給 Notion**：2026-04-24 Simon 曾考慮讓 Obsidian 當日記 sink（圖的是 Markdown + Git + Graph view 的資料主控），設計討論後反轉為「簡化流程 > 資料主控」，決定 Notion 管日記與任務、Obsidian 專心做知識庫；這條分工至今沒有被推翻。
- **雙棲共享中介**：2026-05-31 Simon 啟動 Claude Code（WSL）+ Codex（Windows）雙棲後，Obsidian vault 是兩邊共讀的知識中介層，Codex 現階段定位是唯讀參考、不重複維護。
- **漸進長出、不是一夜建好**：vault 結構從 KW γ 起跑時只有 `2-knowledge/readings/`，隨實際使用陸續長出 `concepts/`／`topics/`／`9-ops/changelog.jsonl`；這個演進節奏呼應 Dustin 案例「先建最少必要結構、用到才長」的心法。

## 切面地圖

Obsidian 在我知識庫裡被這些 concept 各咬一個角度（一行帶過、深入內容在該 concept）：

- [[obsidian-claude-code-workflow]]：Obsidian 當資料層、Claude Code 當讀寫層的完整工作流架構，vault 結構設計、雙層導航、輸入整合都在這裡。
- [[obsidian-cli-plugin]]：Obsidian 官方 CLI 命令列界面，讓 Claude Code 不必走檔案系統或自架 MCP 就能直接操作 vault。
- [[wikilink-cross-folder]]：Obsidian 的 wikilink 機制本身，突破樹狀資料夾限制、讓 AI 跨層讀取關聯檔案。

其餘只在 `second-brain`（本地優先第二大腦趨勢的例子之一）、`graph-emergence`（對應 Obsidian graph view）、`cli`（Obsidian CLI plugin 當「軟體都該有 CLI」的例證）、`cryptography`（Obsidian Sync 的 E2E 加密）、`cross-platform-agent`（vault 當雙棲共享知識中介）裡被淺提，不納入切面地圖、避免灌水。

## 演化時間軸

- **2026-04-01**：Obsidian 近期推出 CLI plugin，作者示範用它讓 Claude Code 直接控制 vault，搭三檔骨架（CLAUDE.md／SessionHandoff.md／Index.md）＋開工收工每日 loop。來源 [[2026-05-05-obsidian-cli-claude-code-daily-loop]]。
- **2026-04-14**：Andrej Karpathy 分享的個人 Obsidian + Claude Code wiki 做法曝光，兩資料夾（Raw／Wiki）+ Index + Log 的輕量架構管理約 100 篇文章，不靠向量資料庫。來源 [[2026-04-29-karpathy-obsidian-claude-wiki]]。
- **2026-04-22**：Simon 把 Obsidian vault 搬到 Windows 原生路徑，SimonVault 起跑。來源 [[2026-04-29-karpathy-obsidian-claude-wiki]]。
- **2026-04-24**：Simon 原考慮讓 Obsidian 當日記 sink（Markdown＋Git＋Graph view 的資料主控動機），設計討論後反轉為「簡化流程 > 資料主控」，決定 Notion 管日記、Obsidian 專心做知識庫。來源 [[2026-04-24-simon-journal-skill-design]]。
- **2026-04-26**：心心分享從 Milanote 遷到 Obsidian + Claude Code 的完整第二大腦工作流，雙層導航＋漸進式披露＋daily notes 成形。來源 [[2026-05-02-xinxin-obsidian-ai-second-brain]]。
- **2026-05-12**：Dustin 示範用 Obsidian wikilink 突破樹狀資料夾限制、知識庫從最少必要結構漸進長出；Simon 對照確認 SimonVault 已內建跨資料夾 wikilink。來源 [[2026-05-13-dustin-obsidian-cross-project-vault]]。
- **2026-05-29**：宣家示範用 Codex + Obsidian 十分鐘搭自生長知識庫；Simon 隨後把 KW γ 收錄流程加一步「Substack 寫作角度掃描」。來源 [[2026-05-31-codex-obsidian-self-growing-kb]]。
- **2026-05-31**：Simon 正式啟動 Claude Code（WSL）+ Codex（Windows）雙棲，Obsidian vault 成為兩邊共讀的知識中介層。來源 [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]。

## 矛盾／未決

- **索引式知識庫的規模上限，Simon 尚未面對**：[[2026-04-29-karpathy-obsidian-claude-wiki]] 記錄 Karpathy 這套「無向量、純索引＋wikilink」做法上限約數百篇文章；Simon 的 vault 持續在長（reading 累積約 80 篇），什麼時候會撞到這個上限、屆時要不要升級到 RAG，目前沒有評估時間點。
- **Reading Garden 的實際渲染技術未經確認**：[[2026-05-09-thariq-html-replaces-markdown-ai]] 只提出「Quartz／Obsidian Publish 或自架轉 HTML」是可考慮的混合方案；[[2026-05-26-ai-superbrain-skill-build]] 證實 Simon 確實已上線一個會自動同步的 Reading Garden 網頁（`sync-garden.sh`），但兩篇之間沒有紀錄交代 Reading Garden 具體用的是 Quartz、Obsidian Publish、還是純自架轉換，此頁不猜測技術棧。

## 來源（自動維護）

核心素材：

- [[2026-04-29-karpathy-obsidian-claude-wiki]]
- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
- [[2026-05-05-obsidian-cli-claude-code-daily-loop]]
- [[2026-05-11-josie-claude-code-obsidian-project-planner]]
- [[2026-05-13-dustin-obsidian-cross-project-vault]]
- [[2026-05-31-codex-obsidian-self-growing-kb]]

半相關（Obsidian 只當配音工具、共享媒介或對照例子）：

- [[2026-04-24-simon-journal-skill-design]]
- [[2026-05-09-thariq-html-replaces-markdown-ai]]
- [[2026-05-26-ai-superbrain-skill-build]]
- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
- [[2026-05-26-yt-hc-html-presentation-ai-agent]]
- [[2026-05-28-to-md-build-log]]
- [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]
- [[2026-07-03-ai-super-brain-ch0]]

相關 concept：[[obsidian-claude-code-workflow]]、[[obsidian-cli-plugin]]、[[wikilink-cross-folder]]

## 維護（entity 頁更新規則）

- **更新時機**：之後有新 reading 觸及 Obsidian，就回這頁追加來源、刷新「我的當前定論」與「演化時間軸」、把過時的疑問結掉。frontmatter `status: living` 代表這頁要保持當前、不是寫完封存。
- **不重抄**：切面的深入內容永遠留在各自 concept，本頁只連、不複製。
