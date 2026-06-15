---
title: "Claude Code 推理力道（Effort Level）"
slug: claude-code-effort-level
aliases: [推理力道, effort level, Claude Code effort, reasoning effort, low medium high effort, thinking effort, 思考力道]
category: AI
confidence: 待驗證
created: 2026-05-29
---

## 定義

Claude Code 的推理力道設定（low／medium／high），決定模型每一輪回應花多少思考力。同一個任務，力道越高通常品質越穩，但也越慢、越耗 token。它是「模型聰不聰明」之外，另一個由使用者直接控制的品質旋鈕。

## 關鍵面向

- **三檔 + 升級後自動跳 high**：力道分 low／medium／high。AI Coding Daily 實測發現，升級到新版模型後重啟 Claude Code，原本設 medium 或 low 的人會被自動切到 high effort——適合做複雜任務，但會多花 token，升級後值得確認自己停在哪一檔。
- **新世代模型抬高「夠用」的下限**：同一個力道檔位，新模型的產出品質會比舊模型高。影片實測四個 coding 專案：Opus 4.7 medium 在幾個相對簡單的專案上會出小差錯（hiccup），作者只好升到 4.7 high；但 Opus 4.8 medium 就已經達到 4.7 high 的水準、20 項任務拿滿分。換句話說，模型升級等於「同樣力道、更高品質」。
- **力道 ↔ 成本／速度的取捨**：力道高品質穩但慢且貴，力道低快又省但簡單任務以外容易翻車。哪一檔「剛好夠」取決於任務難度與當下用的模型世代，沒有一體適用的答案。
- **任務太簡單會讓力道差異消失**：影片作者發現，當 medium 在所有測試都不再出錯，代表這批 benchmark 對這一代模型已經太簡單、區分不出力道與模型的高下，他因此打算改設計更難的 benchmark。力道設定的意義，建立在任務真的有難度。

## 應用場景

- Simon 工作場景：Simon 平常常駐高力道。這個概念提供一個判斷依據——模型每次升級，同力道檔位的品質會往上抬，可作為「某類任務還需不需要手動切到最高力道」的重新評估點，而不是預設永遠拉到頂。
- 一般場景：跑複雜重構、長 session 多步驟任務時拉高力道；跑格式整理、簡單問答時用低力道省成本。

## 相關概念

- [[ai-evaluation-rubric]]：要比較不同力道／模型的高下，得先有一份能自動逐項打分的評估量表，否則只能憑感覺
- [[token-saving-rules]]：力道直接對應 token 消耗，是省 token 的旋鈕之一
- [[subagents]]：Opus 4.8 主打跨長 session 維持專注 + dynamic workflow 編排多個 subagent，跟力道一樣都是「讓模型扛更大任務」的方向

## 尚未解決的疑問

- low／medium／high 對應的實際 thinking token 上限是多少、有沒有公開數字
- 「升級後重啟自動跳 high」是 Claude Code 的預期行為還是特定版本副作用

## 來源（自動維護）

- [[2026-05-29-opus-4-8-coding-benchmark]]
