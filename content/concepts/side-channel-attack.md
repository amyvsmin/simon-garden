---
title: "側通道攻擊（Side-Channel Attack）"
slug: side-channel-attack
aliases: [Side-Channel Attack, Side Channel Attack, 側通道攻擊, 旁路攻擊, 側信道攻擊]
category: 資安・架構與工程
confidence: 已驗證
created: 2026-07-06
---

## 定義
側通道攻擊不去破解演算法本身，而是透過系統執行時洩漏的「旁路資訊」反推出機密。屬於進階威脅的一種，最典型的目標是推出加密金鑰。

## 關鍵面向
- **打的是實作、不是演算法**：演算法數學上再堅固，只要執行時把秘密的蛛絲馬跡洩漏出去，攻擊者就從側面繞進來 [[cryptography]]
- **常見的旁路資訊**：執行時間、功耗、電磁輻射、聲音、快取行為等。
- **典型手法**：從加解密的耗時（時間攻擊）或功耗曲線側錄，推出 RSA、AES 的金鑰 [[asymmetric-encryption]]
- **防禦方式**：等時間（constant-time）實作，讓運算耗時不隨秘密而變；遮罩或加雜訊，把功耗與電磁訊號打糊；實體隔離，阻斷探針與側錄。

## 應用場景
- **Simon 工作場景**：機房與伺服器的實體存取控管本身就是側通道防線的一環——限制誰能靠近能被功耗／電磁側錄的設備。選加密函式庫時，優先挑有 constant-time 實作、經側通道驗證的版本，別自己手刻對時間敏感的比對邏輯。
- **一般場景**：智慧卡與晶片卡、硬體錢包、雲端共享 CPU 的快取側通道（如 Spectre／Meltdown 一系）都是側通道攻擊的舞台。

## 相關概念
- [[cryptography]]：側通道攻擊繞過數學、專打密碼系統的實作破口
- [[asymmetric-encryption]]：RSA 金鑰是時間與功耗側錄的經典目標
- [[symmetric-encryption]]：AES 也會因快取行為等旁路資訊被側錄推金鑰

## 來源
- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
