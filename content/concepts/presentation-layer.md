---
title: "表示層（Presentation Layer，OSI L6）"
slug: presentation-layer
aliases: [Presentation Layer, 表示層, OSI 第六層, L6]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
表示層是 [[osi-model]] 的第六層，扮演網路的「資料轉換器」，把資料在「應用程式看得懂的格式」與「網路傳得動的格式」之間互轉。它的三大職責是轉換、加解密、壓縮，夾在 [[application-layer]] 與 [[session-layer]] 之間。

## 關鍵面向
- **轉換（Translation）**：字元編碼轉換（字元在電腦中如何表示），以及檔案／圖像／音視訊格式互轉，如 txt/docx ↔ XML/JSON、JPG/PNG/BMP、MP3/MP4/MKV。
- **加解密（Encryption）**：透過 SSL/TLS 在發送端把明文加密、接收端解密，保護敏感資料。
- **壓縮（Compression）**：用 ZIP/RAR 等縮小資料體積，減少儲存佔用，傳輸時壓縮可大幅節省頻寬。
- **TLS 分層的事實補充**：把 TLS 加密歸表示層是 OSI 教學模型的慣例對應；實務上 TLS 介於傳輸層之上、應用層之下（跑在 TCP 上），用 OSI 對應記憶即可。

## 應用場景
- **Simon 工作場景**：日常遇到的字元編碼問題（亂碼）、跨格式檔案轉換、傳輸前壓縮，本質都對應表示層的職責；HTTPS／SFTP 的 TLS 加密在 OSI 教學上也歸這一層。
- **一般場景**：表示層的協定在 CCNA 屬「知道即可」、非考試重點；轉換／加密／壓縮三職責的觀念在 Network+／SSCP 用來建立 OSI 分層認知。

## 相關概念
- [[osi-model]]：表示層是 OSI 七層中的第六層。
- [[session-layer]]：表示層之下、OSI 第五層，管會話的開關與維持。
- [[application-layer]]：表示層之上、OSI 第七層，最接近使用者。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/6-presentation-and-session-layers|CCNA Section 2 Leaf 6 表示層與會話層]]
