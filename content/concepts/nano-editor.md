---
name: nano 編輯器
aliases: [nano, nano editor, 命令列編輯器]
category: 生產力
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

對新手友善的 CLI 文字編輯器、多 Linux distro 預設安裝。底部隨時顯示快捷鍵提示（`^` 代表 Ctrl）、學習曲線比 vim/emacs 平緩。常用四鍵控：開檔（`nano FILE`）/ 存檔（`Ctrl+O` + Enter）/ 離開（`Ctrl+X`）。

## 關鍵面向

- **新手友善**：底部快捷鍵提示、不像 vim 要學 modal
- **基本鍵控**：`Ctrl+O` save / `Ctrl+X` exit / `Ctrl+W` 搜尋 / `Ctrl+K` 剪一行
- **vs vim/emacs**：nano 入門快、複雜編輯不夠強；vim 是業界標準、學習曲線陡；emacs 可程式化
- **web 環境特例**：Qwiklabs 內 `Ctrl+O` 被瀏覽器攔截、改用 `Ctrl+X → Y → Enter`

## 應用場景

- **Simon 工作場景**：公司 server 快速改設定檔（如 `/etc/hosts`、`/etc/ssh/sshd_config`）；不必為了一行改動學 vim
- **vs vim**：複雜 script 開發推薦 vim；簡單設定改 nano 就夠

## 相關概念

- [[linux-file-mgmt-commands]]：nano 是檔案修改工具之一
- [[linux-shell]]：nano 在 shell 內呼叫

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-2-manage-file-content-in-bash/6-create-and-modify-directories-and-files|Course 4 Module 3 Section 2 Leaf 6 Create and modify directories and files]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-2-manage-file-content-in-bash/7-identify-key-linux-commands|Course 4 Module 3 Section 2 Leaf 7 Identify Key Linux commands]]
