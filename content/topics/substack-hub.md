---
title: Substack
slug: substack-hub
type: topic
topic_kind: entity
entity_type: product
status: living
aliases: [Substack 彙整, Substack hub]
created: 2026-07-04
last_updated: 2026-07-04
tags:
  - platform
  - substack
  - writing
  - newsletter
---

# Substack

> 實體彙整頁（entity）。把散在多篇 reading 與 concept 裡、關於 Substack 這個平台的東西收攏成一頁：它是什麼、我目前怎麼定位它、它在我知識庫裡的各個切面（連出去、不重抄）、怎麼一路演化、還有哪些沒拍板。深入單一切面的內容留在各自的 concept。

## 一句話身份

Substack 是訂閱制電子報結合個人出版頁面的內容平台：文章發布時同時寄進所有訂閱者信箱、又永久留在公開頁面被搜尋索引，核心主張是不靠廣告、不跨平台宣傳，只靠站內機制（長文＋Notes＋重新曝光）帶動複利成長。

## 我的當前定論

- **定位**：目前是 Simon 唯一穩定經營的長文對外發布通道，跟 Reading Garden、LINE bot 並列三個對外通道。發文流程走 substack-publish skill：skill 只負責準備素材包（標題、副標、封面、標籤、貼上指引）與發布後驗證，不代登入、不點 Publish，實際貼上與按下發布仍由 Simon 手動完成。
- **已落地**：CYBERSEC 系列 Day 1、Day 2、Day 3 皆已發布，並套用 substack-resurfacing 的「每篇至少 3 次曝光」流程（發布日寫 Note、一週後 Restack、任何時候做精選引言），也輪流試過 substack-notes 的 3 種類型找自己的風格。
- **強在哪**：擁有可匯出的訂閱者名單、內容留在公開頁面長期被搜尋，成長邏輯不靠廣告或跨平台導流，站內機制本身就夠用。
- **弱／限制**：發布仍是「skill 準備＋人工貼上」的半自動，還沒走到 API 全自動直發；平台本身的 publishing API 也是逆向工程、非官方支援。
- **知識庫定位**：substack、substack-notes、substack-resurfacing 三個切面各自談定義、曝光機制、重新曝光戰術，本頁只彙整「Simon 怎麼用」的綜合立場，細節都留在各 concept。

## 切面地圖

Substack 在我知識庫裡被這些 concept 各咬一個角度（一行帶過、深入內容在該 concept）：

- [[substack]]：定義切面（訂閱制電子報＋個人出版、雙軌觸達）。
- [[substack-notes]]：站內主要曝光機制切面，短貼文分解決方案、觀點、旅程 3 種類型。
- [[substack-resurfacing]]：重新曝光戰術切面，Restack＋精選引言讓每篇文章拿到至少 3 次曝光。

其餘如 owned-audience、content-asset、sustainable-writing-cadence 是 Substack 成長邏輯與寫作節奏的底層依據，但屬於通用內容資產／寫作概念、非 Substack 專屬切面，不在此重複連結。

## 演化時間軸

- **2026-05-07**：Simon 開始使用 Substack，publication 名「第一次來到人世間的人」（@simonwang1234），首篇 CYBERSEC 2026 Day 1 發布；同日讀到 Janis Zeng 的入門指南、定調雙軌觸達與站內曝光的成長邏輯。來源 [[2026-05-07-janis-substack-beginner-guide]]。
- **2026-05-12**：substack-publish skill 成形，起因是連續三次發文都要交代封面、H2 標題、斜體格式檢查，依「三次重複交代＝寫 Skill」判準封裝成 skill。來源 [[2026-05-12-raymond-claude-code-skill]]。
- **2026-05-18**：入門指南「短期」「中期」建議全數標記完成：CYBERSEC Day 2、Day 3 已接續發布、3 次曝光標準流程已套用、substack-notes 3 種類型也輪流試過。來源 [[2026-05-07-janis-substack-beginner-guide]]。
- **2026-05-31**：KW 收錄流程 Step 9 正式加入「Substack 寫作角度掃描」，之後每篇收錄的素材都會順手判斷有沒有可寫成 Substack 選題的角度，把知識收錄與寫作軸串起來。來源 [[2026-05-31-codex-obsidian-self-growing-kb]]。

## 矛盾／未決

- **DESIGN.md／客製化 Landing Page 門檻可能已跨過、未覆盤確認**：2026-05-14 當時「Substack 累積 6 篇以上」的門檻尚未達到；此後 Day 2、Day 3 與後續文章持續發布，門檻很可能已跨過，但沒有後續 reading 明確覆盤確認。來源 [[2026-05-14-raymond-cc-mini-course]]。
- **長期方案仍未拍板**：累積 ≥6 篇後要不要升級到 cookie API 自動發布、訂閱數穩定後要不要跨到 Medium／LinkedIn，兩者都還標記為待評估，尚未拍板。來源 [[2026-05-07-janis-substack-beginner-guide]]。

## 來源（自動維護）

核心素材：

- [[2026-05-07-janis-substack-beginner-guide]]

半相關（Substack 只當配音工具或反例）：

- [[2026-05-12-raymond-claude-code-skill]]
- [[2026-05-14-raymond-cc-mini-course]]
- [[2026-05-31-codex-obsidian-self-growing-kb]]

相關 concept：[[substack]]、[[substack-notes]]、[[substack-resurfacing]]

## 維護（entity 頁更新規則）

- **更新時機**：之後有新 reading 觸及 Substack，就回這頁追加來源、刷新「我的當前定論」與「演化時間軸」、把過時的疑問結掉。frontmatter `status: living` 代表這頁要保持當前、不是寫完封存。
- **不重抄**：切面的深入內容永遠留在各自 concept，本頁只連、不複製。
