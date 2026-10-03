---
title: "Claude Code帳單太驚人？Spotify工程師公開省錢密技：用Gemini幫Claude打雜、費用激省九成"
date: 2026-10-03
published: 2026-09-26
type: 來源分析
domain: AI 工具實務
url: "https://www.techbang.com/posts/133138-spotify-claude-code-90-percent-token-savings"
source_tier: 二手
inbox-id: "3e7f85da-554f-813f-9652-e51be8dcdc33"
concepts: [rule-escalation-ladder, model-routing]
projects: []
impact: high
transcript_source: ""
created: 2026-10-03
tldr: "Spotify 工程師讓 Gemini 2.5 Flash 替 Claude Code 代讀大檔、代寫樣板程式碼，Claude 只收濃縮結果，實測 Claude 端 token 平均少約九成。光在 CLAUDE.md 寫委派規則管不住模型，他改用 PreToolUse hook 攔截超過 350 行的整檔讀取才真正落實。代價是每次委派多 10 到 30 秒；另一項測試顯示小模型做程式碼審查會漏掉執行緒安全問題。"
stage: growing
icon: "⚡"
---

## 為什麼讀
Simon 以分享短網址存進資訊收集箱（2026-09-26），卡片沒有附註；題材是 Claude Code 的 token 用量與 hook 攔截，跟他天天在用、也在調校的 Claude Code 工作流直接相關。

## 摘要
Spotify 工程師 Dimitri Mazmanov 發現 Claude Code 常為小問題讀進上千行檔案、燒光 token。他讓便宜的 Gemini 2.5 Flash 當兩個小代理：代讀大檔只回重點、代寫樣板程式碼。CLAUDE.md 的委派規則管不住模型，他改用 PreToolUse hook 攔下超過 350 行的整檔讀取。實測 Claude 端 token 平均少約九成，代價是每次委派多 10 到 30 秒；他另外拿小模型做程式碼審查測試，結果只抓到命名與表面語法，漏掉執行緒安全這類並發錯誤。

<p align="center"><img src="assets/covers/2026-10-03-spotify-claude-gemini-token-savings-cover.png" alt="封面圖" width="400"></p>

## 核心概念
- [[rule-escalation-ladder]]：這個概念講規則照「記憶檔軟提醒→常駐硬規則→hook 機械攔截」逐級加硬；本篇是直接跳到最上層 hook 的案例。規則寫在 CLAUDE.md 這類提示檔裡只是「建議」，模型在複雜任務中常常忘記；把同一條規則改寫成工具呼叫前會先跑的 hook（PreToolUse），不符合條件就直接擋下並告訴模型該改用什麼，才算真正的硬性約束。本篇的例子是：讀超過 350 行的檔案一律攔下、改走代讀代理，只有指定行數區間或用 grep 過濾才放行。（T客邦轉述 Mazmanov）
- [[model-routing]]：把工作依「需不需要高推理」分級，讀大量檔案、照範本產樣板程式碼這類搬運型工作交給便宜的小模型，貴的主模型只接收濃縮後的結果，自己的對話脈絡因此保持乾淨。這招有兩個邊界：委派本身有固定成本（本篇每次多 10 到 30 秒，所以小檔不委派），而且需要深度判斷的工作（例如找出執行緒安全這種隱晦的並發錯誤）不能交給小模型。（T客邦轉述 Mazmanov）

## 我的立場

> 針對本篇核心主張的表態；空槽待 Simon 事後填、未表態即留白，芙莉蓮不代擬。

1. 寫在 CLAUDE.md 的委派規則是弱約束，複雜任務中模型常忘記；改用 PreToolUse hook 在讀檔前攔截，才能真正落實委派。
   - **我的表態**：（待補：同意／不同意＋為什麼）

2. 讀大檔、寫樣板程式碼這類搬運工作交給便宜小模型，主模型只收濃縮結果，可讓主模型端 token 平均少約九成。
   - **我的表態**：（待補）

3. 高階推理、架構設計與安全邊界仍要留給主模型，小模型只適合做粗活。
   - **我的表態**：（待補）

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

兩類分開列：

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：
- 原文指出「寫在 CLAUDE.md 的委派規則屬於弱約束、模型常忘」〔原文支撐〕；Simon 的調度速查卡第 1 條「搜找要開超過 3 個檔且不確定位置 → 派 Explore」管的是檔案數量，沒有管單檔大小，現行 `~/.claude/settings.json` 的 PreToolUse 也只攔 Write 與 Bash、沒有攔 Read。原文做法等於另立一條「主對話不整檔讀大檔」的新規則，可評估要不要用 hook 實作〔需 Simon 確認〕
- 若要做攔截，原文的放行條件可直接借用：指定行數區間的讀取、用管線過濾（如 `cat file | grep`）的讀取都放行，只擋整檔讀大檔〔原文支撐〕；門檻要考慮委派延遲，原文因每次委派多 10 到 30 秒才把門檻定在 350 行〔原文支撐〕
- 「代讀」角色可對應到 Claude Code 既有的子代理派工：可在 `0-context/system/reference-model-dispatch.md` 的選模型段試加一條「純讀檔摘要類派工預設用較便宜的模型（Agent 工具的 model 參數）」，先試 3 次並比對摘要有無漏掉關鍵細節〔需 Simon 確認〕；同條註明審查類、資安事件分析類派工不適用，因為原文實測小模型在程式碼審查中漏掉執行緒安全問題〔原文支撐〕

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：
- 可建一張 Action 卡「評估用 PreToolUse hook 攔截主對話整檔讀大檔」：先用 harness 健檢的對話紀錄拆解器，掃最近幾場對話裡 Read 沒帶讀取範圍、且檔案超過 N 行的次數，再決定值不值得做〔需 Simon 確認〕。N 可先用原文的 350 試算，但 350 是 Spotify 依 Gemini 跨模型延遲定的，改派 Claude 子代理時延遲與成本都不同，未必適用〔AI 推論〕

## 原文要點
- 痛點：AI 編碼代理為了確認相依關係，常把五、六個上千行的原始碼整包塞進脈絡視窗，或反覆吞吐結構雷同的樣板程式碼；這類工作本質是檔案輸入輸出與模式比對，不需要旗艦模型。
- 做法一「bulk-reader」（代讀）：Claude 不直接開大檔，而是把路徑和問題交給代讀代理，由 Gemini 2.5 Flash 讀完後只回條列式重點。
- 做法二「code-writer」（代寫）：Claude 給規格和參考範本，由小模型產出單元測試、型別定義或樣板程式碼並直接寫入磁碟，長篇程式碼不流經 Claude 的對話。
- 兩個代理是用 Spotify 內部開發者平台「Portal by Spotify」的「AiKA Modes」功能宣告式定義的，不需常駐伺服器。
- 先試過在 CLAUDE.md 寫委派規則，但純文字提示是弱約束，Claude 在複雜任務中常忘記，且每個專案都得複製一份。
- 改用 PreToolUse hook 做成名為「shunt」的外掛：Read 單檔超過 350 行、或用 `cat`／`head`／`tail`／`less`／`more` 看大檔時直接攔下，強迫改用 bulk-reader；指定行數區間或用管線過濾時放行。
- 整體是三層：hook 負責強制攔截、Claude Code Skill 提供標準化的呼叫方式、底層 Shell 腳本透過 CLI 發送請求。
- 成效：在 Spotify 的 Java 大型單一儲存庫做四種情境對比，經 bulk-reader 濃縮後，Claude 端 token 消耗平均下降約 90%。
- 代價與邊界：小模型做程式碼審查時只抓得到命名與表面語法，完全漏掉執行緒安全的並發問題；跨模型委派每次多 10 到 30 秒延遲，所以設 350 行門檻、小檔不委派。
- 結論：高階推理、架構設計與安全邊界仍由 Claude 把關，粗活交小模型。

## 盲點與保留
**缺口／矛盾**：
- 原文沒交代「小模型濃縮得對不對」怎麼驗。概念頁 [[model-routing]] 的前提是「驗收得了才交給便宜模型」，但代讀摘要的錯漏主模型無從比對原文，原文只報 token 省多少、沒報摘要漏掉關鍵細節的比例。
  - **Simon 回應**：（待補：同意／不同意這個保留＋為什麼）
- 「平均降約九成」只算 Claude 端 token，沒算 Gemini 呼叫費用與每次 10 到 30 秒的等待時間，也沒列四種情境各自的數字；對按月訂閱、看的是用量上限而非帳單的使用者，省下的意義要換算。
  - **Simon 回應**：（待補）
**過度吹捧／該打折**：
- 標題「帳單太驚人」「費用激省九成」與內文「暴跌 90%」把主模型端用量講成總費用；事實內核是 Java 大型單一儲存庫四種情境下、Claude 端 token 平均約少九成。
  - **Simon 回應**：（待補）
- 內文稱 hook 讓節省「轉化為無法逾越的硬性制度」，但攔截只涵蓋列舉的讀檔方式（Read 與 cat／head／tail／less／more），其他工具或指令仍可能繞過，「無法逾越」要打折。
  - **Simon 回應**：（待補）

## 第四問

> 這篇沒寫、但站在我的位置可以補上的，是什麼？（先人後機：補章由 Simon 親筆填、芙莉蓮不代擬；填完可喊「驗證我的補章」做文獻對照。）

- **我的補章**：（待補：從位置差／經驗差／時代差挑一個切入、手寫半頁、求真不求完整）

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-10-03-spotify-claude-gemini-token-savings)

## 原始連結
- https://www.techbang.com/posts/133138-spotify-claude-code-90-percent-token-savings
- 來源性質：二手 — T客邦新聞稿轉述 Spotify 工程師 Dimitri Mazmanov 公開的做法，非作者本人原文；第一手版本：未找
