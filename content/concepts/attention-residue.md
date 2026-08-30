---
title: "注意力殘留（Attention Residue）"
slug: attention-residue
aliases: [注意力殘留, attention residue, 任務切換殘留]
category: 寫作・學習・職涯
confidence: 已驗證
created: 2026-07-19
updated: 2026-08-30
---

## 定義

注意力從任務 A 切到任務 B 後，部分心智資源仍黏在前一個任務，讓人雖然已經開始做 B，卻尚未恢復完整的專注容量。這個詞與定義出自 Leroy（2009）：即使已經停止做任務 A、當下在做任務 B，關於任務 A 的認知活動仍持續進行。她用兩個實驗證明的是「殘留會壓低任務 B 的表現」，並沒有測量「殘留會持續幾分鐘」。

### 那個 23 分 15 秒：2026-08-30 回查結果為「無原始論文」

課程說「每分心一次，大腦要 23 分 15 秒才回到最佳專注」。回查後這句不成立，三點分開講：

- **數字本身查不到同儕審查論文**。有人逐篇核對五篇常被當成出處的論文（含 Mark 等人 2005、Mark 等人 The Cost of Interrupted Work、Iqbal & Horvitz Disruption and Recovery of Computing Tasks），沒有一篇出現 23 分 15 秒；可追到最早的來源是 Gloria Mark 受訪時的口頭說法，之後被媒體與部落格反覆轉引。
- **同一研究線最接近的已發表數字是 25 分 26 秒**。Mark、González 與 Harris（CHI 2005）觀察 24 位資訊工作者，當天被打斷又在當天恢復的工作，平均隔 25 分 26 秒（標準差 54 分 48 秒）才回到原任務。
- **兩者量的不是同一件事**。25 分 26 秒是「隔多久才回到那件事」的經過時間，中途平均還插了 2.26 個其他工作主題；它不是「專注容量回到滿格所需的時間」。注意力殘留這條研究線（Leroy）量的是表現落差，不產生分鐘數。

實務上要講切換成本，就引 25 分 26 秒並註明它量的是「隔多久才回來」；23 分 15 秒不要再當研究結論使用。

## 關鍵面向

- **切換不等於清空**：關掉視窗、拿起手機或回一則訊息，只改變表面任務；關於前一件事的認知活動仍在跑（Leroy 2009）。
- **沒做完的事殘留最重**：Leroy 發現光是「把任務做完」還不夠——在時間壓力下完成前一個任務的人，反而比較能脫離、在下一個任務表現較好。
- **自我中斷佔一半以上**：Mark 等人（2005）把 1,282 次中斷分類，內部中斷（沒有外來訊號、自己切走）佔 52.0%、外部中斷佔 48.0%。沒有通知時自己拿起手機，一樣製造切換。
- **時間碎片會放大損失**：同一份研究中，人平均約 11 分鐘就切換一次工作主題，57% 的工作主題會被打斷。頻繁切換時，真正用在深度工作的時間會小於行事曆上排出的總時數。
- **它消耗的是有限容量**：可用 [[cognitive-load]] 理解——殘留成為與當前任務無關的外在負荷。這是本卡的詮釋連結，不是 Leroy 原文提出的機制。

## 應用場景

- Simon 讀 iPAS、CCNA 或 IEC 62443 時，把 LINE／手機查看集中到休息段，避免每個小中斷都重新載入架構。
- 做 24 小時紙本中斷追蹤時，同時記「中斷前任務」與「回來後多久才重新進入狀態」，把殘留變成可觀察訊號。個人紀錄拿來對照 Mark 等人的 25 分 26 秒與 52% 自我中斷比例，不必去對 23 分 15 秒。

## 相關概念

- [[cognitive-load]]：解釋殘留為何會擠壓工作記憶。
- [[metacognition]]：用觀察與記錄看見自己的切換模式。

## 尚未解決的疑問

- 殘留可以持續多久，目前沒有可引用的分鐘數。Leroy 的實驗只顯示表現落差會延續整個後續任務，沒有給時間長度。
- Mark 等人的資料來自 2005 年、24 位資訊工作者的辦公室觀察，中斷型態以同事與桌機為主。它能不能外推到智慧型手機與短影音時代的個人讀書場景，本卡尚未查到對應的重做研究。

## 來源（自動維護）

- [[1-learning/wordup/ai-education-treasury/ch1-focus/1-attention-crisis|找回被手機偷走的注意力，重建大腦深度專注力]]

### 外部原始出處（2026-08-30 回查）

- Leroy, S. (2009). *Why is it so hard to do my work? The challenge of attention residue when switching between work tasks.* Organizational Behavior and Human Decision Processes, 109(2), 168–181. DOI 10.1016/j.obhdp.2009.04.002。https://www.sciencedirect.com/science/article/abs/pii/S0749597809000399 ——「注意力殘留」一詞與定義的原始論文。
- Mark, G., González, V. M., & Harris, J. (2005). *No Task Left Behind? Examining the Nature of Fragmented Work.* CHI 2005. https://ics.uci.edu/~gmark/CHI2005.pdf ——25 分 26 秒恢復時間、2.26 個插入工作主題、約 11 分鐘切換一次、57% 被打斷、內部中斷 52.0%（Table 3）皆出自本文，已直接核對全文。
- oberien（2023-11-05）. *Interruptions cost 23 minutes 15 seconds, right?* https://blog.oberien.de/2023/11/05/23-minutes-15-seconds.html ——追查 23 分 15 秒出處的二手調查；本卡只用它的「五篇論文皆無此數字」核對結果，該結論已由上一條的全文核對交叉支持。
