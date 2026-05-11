---
name: AI 任務分組（Cluster）
aliases: [AI 任務 cluster, AI task clustering, 任務分組, task clustering, 任務聚類, cluster grouping]
category: 生產力
status: active
confidence: unverified
created: 2026-05-11
last-queried: ""
query-count: 0
---

# 定義

把一堆零碎、未分類的待辦任務交給 AI、只請它做分組（cluster）、不請它拆解、不請它新增、不請它排序。AI 最擅長的能力之一是發現語意相近的東西做分組、這個動作對 AI 來說容錯率高、腦補空間小、是引入 AI 接手任務管理時阻力最低的第一步。

# 關鍵面向

- **動作限制**：只允許「分組」、不允許「拆解／新增／排序／改寫」；指令明確告訴 AI 不要動使用者的內容
- **防腦補**：分組是「把現有東西分類」、AI 不需要自己生新東西；AI 受限越多、產出越穩定
- **使用者收益**：可發現自己的任務天然有哪些群組（例如「全部都在做課程」「全部都跟業配相關」「都是 ISO 27001 子任務」）、為後續更深的拆解打底
- **跟一般 AI 拆任務的差異**：直接請 AI 拆任務、AI 會大量加入它在訓練資料看過的 best practice、其中很多對使用者不適用（譬如把對方公司內部流程也加進來）
- **適合時機**：任務累積到自己無法決定先做哪個、或想看出任務之間隱藏的主題時

# 應用場景

- Simon 工作場景：你 Notion Action DB 裡的待辦有時鬆散、未來可實驗讓我先 cluster 一輪、看待辦自然分幾組；本週復盤 Top 3 拖延項目 cluster 也是這個邏輯；ISO 27001 資產盤點剩下的欄位 cluster 後可看出剩餘工作的真正範圍
- 一般場景：個人 todo list 累積過量無法決定先做哪個時、用 AI cluster 看出潛在主題；軟體工程 backlog grooming；研究員整理當天的 reading list

# 相關概念

- [[interview-driven-prompting]]：cluster 是「不問就動手」的最低風險動作、訪談式提示是更深一步的對話
- [[template-reference-pattern]]：cluster 之後可進一步用 template reference 做拆解
- [[skill]]：cluster 流程穩定後可封裝成 skill

# 尚未解決的疑問

- Cluster 後 AI 給的標籤名稱該被使用者接受還是該保留命名權？
- 多個 cluster 邊界模糊的任務該怎麼處理（多重歸類 vs 強迫單一歸屬）？

# 來源（自動維護）

- [[2026-05-11-josie-claude-code-obsidian-project-planner]]
