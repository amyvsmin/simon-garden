---
title: "復原（Recovery）"
slug: recovery
aliases: [Recovery, 復原, 復元, 系統復原, recovery, 恢復運作]
category: 資安
confidence: 待驗證
created: 2026-06-13
query-count: 0
---

## 定義
把受影響系統還原到「正常運作」的過程（recovery）。是 [[incident-response-lifecycle]] 第三階段的第三步，目標是**恢復服務**——事件可能中斷關鍵業務與服務，復原把受影響的服務帶回正常運作。

## 與 containment、eradication 的差別（獨立性）
- **復原 = 讓系統與服務回到正常**：處理對象是「系統／業務」，不是威脅。典型動作是 reimaging（重新安裝映像）、重設密碼、調整網路設定（如防火牆規則）。
- 對比 [[containment]]（遏制）：遏制是事件初期「圍堵止血」，復原是事件尾聲「讓被影響的東西重新上線」。
- 對比 [[eradication]]（根除）：根除是「把威脅清掉」，復原是「把服務救回來」——必須先根除乾淨，復原才不會把帶威脅的系統重新上線。
- **順序與連動**：復原是三步驟的最後一步，承接根除（威脅已清）。

## 關鍵面向
- **對象**：受影響的系統與服務，不是威脅本身
- **典型動作**：reimaging、重設密碼、調整防火牆規則等網路設定
- **與站點韌性的關係**：大規模中斷時靠 [[site-resilience]]（熱／溫／冷備站）支援復原；整體計畫由 [[business-continuity-plan]] 統籌
- **生命週期循環**：IR 生命週期是循環的，復原後可能繞回前面階段做更多調查

## 應用場景
- **Simon 工作場景**：清除威脅後 reimaging 受害主機、重設受影響帳號密碼、調整防火牆規則讓服務回正常；對應 ISO 27001 BIA 的 RTO／RPO
- **一般場景**：系統還原、服務恢復、災後復原

## 相關概念
- [[containment]]、[[eradication]]：復原前的圍堵與清除
- [[site-resilience]]、[[business-continuity-plan]]：支援復原的策略與計畫
- [[incident-response-lifecycle]]：復原屬第三階段第三步

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-3-response-and-recovery/4-the-containment-eradication-and-recovery-phase-of-the-lifecycle|Course 6 Module 3 Section 3 Leaf 4 The containment, eradication, and recovery phase of the lifecycle]]
