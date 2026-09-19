---
title: "從這裡開始"
---

這座花園裡的文章、概念與主題頁，是我一邊學、一邊用 AI 代理做系統時留下來的。第一次來，不用逐篇翻；照下面五站走，每一站先看什麼、看完會知道什麼、下一站往哪，都寫在站裡。這頁沒有新內容，只是把已經在花園裡的東西排出順序。

卡在哪一站，就用上方搜尋找對應的概念頁，概念頁會連回讀過的文章。

## 站 1｜這座花園怎麼長出來

**先看**：[[personal-knowledge-base-pipeline|從「收了就忘」到「會自己合成」：個人知識庫的 AI 流水線]]，再看 [[2026-04-29-karpathy-obsidian-claude-wiki|Andrej Karpathy 的 Obsidian + Claude Code 個人 Wiki 做法]]。

**看完會知道**：資訊收得快、看得慢，加上工具偏向「收」、缺少強迫回頭複習與跨篇合成的機制，所以收藏箱才會變墳場；以及一種只用兩個資料夾（原料與整理後的頁面），再交給 Claude Code 讀文章、寫頁面、維護索引的做法。

**下一站**：底座講完，接著看寫這座花園的 AI 代理本身，走到站 2。

## 站 2｜用哪個 AI 代理當工作夥伴

**先看**：[[claude-code-hub|Claude Code]] 與 [[codex|Codex]] 兩張彙整頁；想知道兩者怎麼並用，再看 [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent|雷蒙：Claude Code 跟 Codex 怎麼選]]。資料層的角色見 [[obsidian|Obsidian]]。

**看完會知道**：Claude Code 是跑在終端機、能直接讀寫檔案與執行指令的代理；Codex 是 OpenAI 的 agentic 開發平台；兩者共用同一份 vault 當知識中介。也會知道靠寫規則穩定代理的行為，例如 [[2026-05-14-blocktempo-claude-code-12-rules|Claude Code 12 條規則]]。

**下一站**：代理會做事，也會做錯，接著看怎麼讓它做出來的東西可信，走到站 3。

## 站 3｜讓 AI 做的東西可信

**先看**：[[adversarial-ai-review|把另一個 AI 當對手：對抗式審查如何撐起我做的每一套系統]]，再看概念頁 [[adversarial-verification]] 與 [[loop-engineering]]。

**看完會知道**：為什麼請模型檢查自己的輸出結構上不可靠（自評諂媚），以及為什麼需要一顆獨立、帶對抗性的第二顆腦袋。想看風險面，接著讀 [[2026-06-13-pansci-claude-skill-security|Claude Skill 的資安風險]] 與 [[2026-09-16-ithome-anthropic-ai-mind-virus|AI 心智病毒可在代理間自我傳播]]。

**下一站**：可信靠流程，流程之前還有「怎麼想問題」，走到站 4。

## 站 4｜怎麼想問題

**先看**：[[ai-superbrain-thinking-toolkit|《AI 超級大腦》思考工具箱]]，概念頁看 [[metacognition]] 與 [[ai-adoption-gap]]。

**看完會知道**：課程把思考拆成批判、創意、溝通、互動四大類；面對問題時先判斷卡在哪個關口，再挑對應的招式；也會知道 AI 專案做不起來，失敗多半在人與流程，不在技術。

**下一站**：想看這些方法落在資安工作上長什麼樣子，走到站 5。

## 站 5｜落在資安與實作成果上

**先看**：[[weekly-intel/index|資安情報週報]] 的最新一期，再看 [[reports/index|一頁報告]] 裡的成果頁。想先補風險分類語言，讀 [[2026-06-02-owasp-llm-top-10-genai-security|OWASP LLM Top 10 與 GenAI Security Project]]。

**看完會知道**：週報怎麼把每週的資安消息整理成一份；一頁報告怎麼把做完的系統寫成外人可以查證的成果。

**走完之後**：回站 1 到 3 挑有興趣的主題深讀，或從 [[topics/index|所有主題]] 與 [[concepts/index|概念]] 自由逛。
