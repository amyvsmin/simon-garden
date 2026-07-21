---
title: "真實測評 Dynamic Workflows：故意埋兩個漏洞，Claude Code 派 6 個 Agent 互撕？（YAHA 學堂）"
date: 2026-05-30
type: 來源分析
url: "https://www.youtube.com/watch?v=6AITeKsqVz0"
inbox-id: "370f85da-554f-817e-b281-cec3dac7458f"
concepts: [dynamic-workflows, adversarial-verification, subagents]
projects: []
impact: high
transcript_source: whisper-large-v3
tldr: "Claude Code 新功能 Dynamic Workflows——句子裡含「workflow」這個字，AI 就先寫一支 JavaScript 編排腳本、把任務拆成多階段、每階段派多個子代理平行跑。最猛的用法是對抗式驗證：對找到的每個漏洞派三個子代理「想辦法推翻它」，全部推不翻才算真。實測埋的兩個漏洞，一個 0:3 確認、一個被一票翻盤判誤報。"
stage: evergreen
icon: "⚡"
created: 2026-05-30
---

## 為什麼讀
這支影片講的 Dynamic Workflows，正好是我現在這個對話框就在用的 Workflow 工具。收這篇是想搞清楚：使用者端怎麼觸發、怎麼監看、怎麼存成可複用腳本，以及「對抗式驗證」這個殺手級用法能不能套進 KW γ 的 reading 品質自檢。

## 摘要
YAHA 學堂實測 Claude Code 2026-05 新功能 Dynamic Workflows。觸發很簡單：使用者句子裡只要出現「workflow」這個字，Claude 就不自己埋頭做，而是先寫一支 JavaScript 編排腳本，把任務拆成多個階段、每階段派幾個子代理平行跑，先把計畫攤給你確認、按同意才執行。打 `workflows` 可即時監看每個子代理。影片的重頭戲是「對抗式驗證」：作者故意在兩個路由檔埋漏洞，先用一支 workflow 找出來，再另開一支專門「推翻」這兩個結論——對每個漏洞派三個獨立子代理，各從不同角度去攻（有沒有中間層程式擋住、那段程式碼實際跑不跑得到、純讀邏輯找破綻），想證明這個漏洞其實不成立。判定規則是「三個都推不翻才算真漏洞，只要有任何一個推翻成功就當誤報」。結果一個退款漏洞三個子代理全推不翻（0:3）確認為真，另一個刪使用者的漏洞被其中一個子代理推翻成功，於是判成誤報。腳本可按 `s` 存成可複用指令，`/config` 一個開關 20 秒開啟。

<p align="center"><img src="assets/covers/2026-05-30-yaha-claude-code-dynamic-workflows-cover.png" alt="封面圖" width="400"></p>

## 核心概念
- [[dynamic-workflows]]：句子裡含「workflow」這個字，Claude Code 就切換成「先寫腳本再執行」模式，把白話需求拆成有 phase（分階段）、agent（派一個子代理）、parallel（同時跑）的 JavaScript 腳本，計畫先攤開讓你確認，腳本還能按 `s` 存起來下次重用。
- [[adversarial-verification]]：驗證 AI 自己的發現時，不要叫子代理「確認對不對」（它會順著點頭），而要叫它「想辦法推翻」（它會真去挑毛病）。影片對每個漏洞派三個子代理從不同角度推翻，全推不翻才算數——這就是資安紅隊思維搬到 AI 自我驗證。
- [[subagents]]：子代理（subagent）是 Claude 另開的一個獨立分身、有自己獨立的對話脈絡、被指派單獨跑一件事；它看不到主對話、也看不到其他子代理在想什麼。dynamic workflows 的執行單元就是一群這樣平行跑的子代理。正因為彼此隔離、互相挑錯才不是「自己挑自己的錯」——影片一次派了六個（兩漏洞各三），同一批子代理既能分工合作也能彼此對抗，用途由派發時的 prompt 決定。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：
- **把「對抗式驗證」的 prompt 寫法套進 KW γ reading 品質 review**：ingest-flow 現在的 Step 5c 是開一個 subagent 做品質 review，但 prompt 是「請它回答三個問題」這種中性問法。可以改成「想辦法推翻這篇 reading 的摘要準不準、應用具不具體」——用推翻式問法逼出問題，比中性 review 更能抓到自我附和的盲點。
- **KW γ 批次消化 ≥3 篇時用 dynamic workflow 並行**：現在批次消化是序列一篇一篇跑。若把每篇 ingest 包成一個 agent、用 workflow 並行（phase 1 各篇抓取+結構化、phase 2 各篇品質 review），可大幅縮短整輪時間。但要先確認 vault 寫入不會互相打架。
- **reading review skill 改 workflow 批次**：reading review 是逐篇 review「對 Simon 的應用」段，天生適合 pipeline——每篇一個 agent 獨立 review。落地位置 `~/.claude/skills/reading-review/SKILL.md`，把現在的逐篇序列改成 workflow 並行。

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：
- `/config` 打開 dynamic workflows 開關（20 秒），先在一個小專案手動試一次完整流程（觸發 → /workflows 監看 → 按 s 存腳本）。
- 讀 superpowers 兩個 skill 的 SKILL.md（`dispatching-parallel-agents`、`subagent-driven-development`），列一張對照：KW γ 批次消化、reading review 這兩個現有流程，各該用 dynamic workflow（內建、即時生成腳本）還是 superpowers skill（預先寫好的流程）。產出物是一段判斷準則，寫進這篇的「落地動作與效益」段。

## 原文要點
- **觸發詞是字面的「workflow」**：使用者輸入的句子含這個字，Claude 才切換成「先寫腳本」模式；不含就照常自己做。
- **計畫先行 + 人類確認**：跑之前先顯示「分幾階段、各做什麼」，按同意才開跑（對應互動式確認卡）。
- **三個腳本原語**：phase（分階段）、agent（派一個子代理）、parallel（同時跑）；拆成幾階段由 Claude 照任務自己決定。
- **`/workflows` 監看**：方向鍵上下選階段或 agent、Enter／右鍵進去看、ESC 退出。
- **對抗式驗證的關鍵是「推翻」不是「確認」**：對每個漏洞派三個子代理、各從不同角度（有沒有 middleware 擋、那段 code 跑不跑得到、純讀邏輯）想證明它錯，三個都推不翻才算真。
- **投票門檻決定結果**：影片設「任一子代理推得翻就判誤報」，結果退款漏洞 0:3 確認、刪使用者漏洞被一票翻盤。
- **腳本可存可複用**：`/workflows` 畫面按 `s`，選存專案資料夾（團隊共用）或家目錄（自己跨專案用），取名後變成自己的指令。
- **開啟方式**：`/config` 找 dynamic workflows 那行打開，約 20 秒；Pro／Max／Team／企業版都支援。

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-05-30-yaha-claude-code-dynamic-workflows)

## 原始連結
- https://www.youtube.com/watch?v=6AITeKsqVz0
