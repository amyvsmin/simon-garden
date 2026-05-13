---
title: Typeless 在 Tabby 裡字按不出來：兩個獨立坑疊在一起的 debug 紀錄
type: topic
status: personal-note
created: 2026-05-07
tags:
  - typeless
  - tabby
  - troubleshooting
  - voice-input
  - claude-code
related:
  - "[[reference_typeless_tabby_paste]]"
---

# Typeless 在 Tabby 裡字按不出來：兩個獨立坑疊在一起的 debug 紀錄

## 症狀：字明明講出去了，畫面什麼都沒有

最近開始用 Typeless 語音輸入。在瀏覽器、Notion、文書軟體都跑得很順，唯獨打開 Tabby 終端機按啟動鍵講話、Typeless 顯示「轉錄完成」、Tabby 視窗裡空空如也。沒亂碼、沒錯誤、什麼都沒有，就像我從沒講過話。

第一直覺是「應該是某個權限沒給」或「某個快捷鍵被搶」之類的小設定問題。事實證明這個直覺只對了一半，最後是兩個完全獨立的坑疊在一起，所以怎麼換鍵都沒用。

紀錄一下整個 debug 過程，給自己備份，也給未來可能踩同樣坑的人。

## 第一個假設：Right Alt 漏 escape sequence

我請 Claude 幫我搜了一下，第一條線索就有了：Anthropic 自己 GitHub repo 上的 [issue #25943](https://github.com/anthropics/claude-code/issues/25943)。

簡單說：Typeless 預設用 Right Alt 當啟動鍵（口述、隨便問、翻譯三個功能全用），但 Right Alt 在 xterm 系列的終端機裡按下／放開會送出 `\e[25~` 這個 ANSI escape sequence。終端機把 `ESC` 吃掉、剩下的 `[25~` 漏成字面文字，前面就會殘留亂碼。

看到這條我有點興奮，覺得根因找到了。打開 Typeless 設定，把口述的 Right Alt 點掉，準備換成沒有這個問題的鍵。

## 試了 Insert，跳出奇怪的訊息

設定欄位被點掉之後紅色提示「此快捷鍵已保留供系統使用」——其實這是 Typeless 在說「Right Alt 自己不能當快捷鍵、等你按新的」，不是錯誤，是引導。我按下 Insert，欄位變成 `Insert`，存檔。

回到 Tabby 開 Claude Code，按 Insert 講「你好」。畫面跳出：

```
No image found in clipboard. Use ctrl+v to paste images.
```

這訊息是 Claude Code CLI 自己印的——Claude Code 會把 `Ctrl+V` 當成「貼上圖片」的快捷鍵攔截。看起來 Typeless 把字塞進終端機的方式是「複製到剪貼簿 → 模擬 Ctrl+V 觸發貼上」，而 Insert 在某些情境也會被映射成貼上行為，撞到 Claude Code 的圖片貼上攔截。

換 `Ctrl+Shift+Space` 試試。同一條訊息。

換到這裡其實已經有點警訊：症狀變了（從「什麼都沒有」變成「No image found」），但問題沒解。我當時太專注在「找一個沒人占用的啟動鍵」這個方向，沒退一步問「為什麼換什麼鍵都會中？」

## 分流測試把問題切開

退一步之後，我做了一個原本應該更早做的測試：在 Tabby 開一個新分頁，**不進 Claude Code**，停在純 WSL bash 提示符，按啟動鍵講話。

結果：純 WSL 也不出字。

這一刀切下去，幾個假設同時被排除：

- 不是 Claude Code 攔截（純 bash 不會印「No image found」也不會出字）
- 不是 Right Alt escape sequence（換鍵之後 issue #25943 不會中、但症狀沒改）
- 不是 Typeless 啟動鍵被誰占用（Insert、Ctrl+Shift+Space 都試過）

換句話說，**啟動鍵是哪一個根本不重要**。Typeless 確實把字放進剪貼簿了、確實送了某個動作進來，但 Tabby 就是不認。瓶頸在「字怎麼從剪貼簿進到終端機」這一段，不在「啟動鍵是什麼」。

## 真正的根因：Tabby 跟 Typeless 的貼上鍵不對齊

Tabby 預設「Paste from clipboard」綁的是 `Ctrl+Shift+V`，不是 `Ctrl+V`。這是有歷史包袱的設計：bash 跟很多 Linux shell 把 `Ctrl+V` 用作 `quoted-insert`（讓下個按鍵字面化），所以多數現代 Linux 終端機（GNOME Terminal、Konsole、Tabby 等等）都把貼上挪到 `Ctrl+Shift+V`。

Typeless 預設模擬的是 `Ctrl+V`。兩個不對齊。

實際發生的事：Typeless 把語音轉文字、放進剪貼簿、模擬 `Ctrl+V`。在 Tabby 裡 `Ctrl+V` 不是貼上、是 bash 的 quoted-insert，所以字直接消失，剪貼簿裡的文字一個 byte 都沒進到終端機。

這跟前面 escape sequence 那條完全是不同問題。Right Alt 那個是「字有進去、但前面有亂碼」級別的；貼上鍵不對齊這個是「字根本沒進去」級別的。我從一開始就在解錯題。

## 一行解

Tabby 設定 → Hotkeys → 找 `Paste from clipboard` → 把 `Ctrl+Shift+V` 換成 `Ctrl+V`（或補一組、不必移除原本的）。儲存、回終端機按啟動鍵講話、字逐字浮現。

副作用：bash 的 `Ctrl+V`（quoted-insert）會失效。日常使用無感、99% 的人從沒用過這個功能。

## 為什麼這個坑難找

事後回想，最有迷惑性的點不是「兩個坑」本身，是**換鍵之後症狀真的改變了**。從「什麼都沒有」變成「No image found in clipboard」，看起來像在進步、像逼近答案。實際上只是同一個底層原因在 Claude Code vs 純 shell 兩個不同環境表現出不同表面症狀。

Claude Code 用 `Ctrl+V` 攔圖片貼上、會印錯誤訊息；純 bash 用 `Ctrl+V` 當 quoted-insert、靜默吃掉，所以一個有訊息、一個沒訊息，但根因都是 `Ctrl+V` 在這兩個環境都不會觸發貼上。

我吃的虧：太相信「症狀變了 = 在進步」這個直覺。實際上**同一個底層原因在不同環境會演出不同戲碼**。能切斷這種錯覺的不是繼續換鍵試，是退一步做分流測試（純 WSL vs Claude Code）。

下次遇到類似的「換了某個變數、症狀改變但問題沒解」狀況，第一件事該做的不是繼續換變數，是換環境驗證——把問題從「我換的這個變數對不對」拆成「問題出在哪一層」。

## 最後設定

留給未來的我：

- Typeless 口述：`Insert`（Right Alt 在 Claude Code 內仍會中 issue #25943 殘留 `[25~`，純 WSL 不影響、為求 Claude Code 環境也乾淨所以保留 Insert）
- Tabby Hotkeys → Paste from clipboard：`Ctrl+V`
- 副作用：bash quoted-insert 失效

兩件事都做才完整。少一件就會留下不同症狀的尾巴。
