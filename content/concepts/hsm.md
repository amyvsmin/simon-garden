---
title: "HSM 硬體安全模組（Hardware Security Module）"
slug: hsm
aliases: [HSM, Hardware Security Module, 硬體安全模組]
category: 資安
confidence: 已驗證
created: 2026-07-06
---

## 定義
HSM 是一台專用硬體，把金鑰關在裡面、從不以明文出來。加解密、簽章等要動到金鑰的運算全在盒子內部完成——你把資料丟進去、把結果拿出來，但摸不到金鑰本身。它專治金鑰生命週期裡最棘手的「儲存」問題：躺著不動的金鑰最好偷。

## 關鍵面向
- **金鑰不外流**：要是金鑰放在設定檔、程式碼或一般硬碟裡，惡意程式或內部人員撈到那個檔案就到手了；HSM 讓金鑰只在盒內被使用、永不以明文離開 [[key-lifecycle-management]]
- **防拆機制**：就算整台被搬走，內建的防拆設計也會讓金鑰取不出來。
- **FIPS 140-3 衡量強度**：這是美國衡量這台盒子「防拆、防入侵」做到多強的標準，分 Level 1～4、等級越高防護越強，HSM 通常做到 Level 3。
- **「用得到卻拿不到」是同一招**：特權帳號管理（PAM）走的也是這條路——讓人能用特權帳號、卻拿不到實際密碼，由系統代入、定期輪換。核心精神都是「能用、但摸不到那把真正的鑰匙」。

## 應用場景
- **Simon 工作場景**：憑證機構（CA）的根私鑰、資料庫或磁碟加密的主金鑰、程式碼簽署金鑰，放進 HSM 或雲端 KMS 背後的 HSM，讓私鑰全程不落地。公司若走 ISO 27001、資料保護稽核，「金鑰存在受保護硬體、不以明文散落」正是加分項。
- **一般場景**：雲端 KMS（AWS KMS、Azure Key Vault 的 HSM 等級）、金融卡片與支付系統、憑證機構簽章，底層多半靠 HSM 保管金鑰。

## 相關概念
- [[key-lifecycle-management]]：HSM 解決的是六階段中最棘手的「儲存」那一關
- [[asymmetric-encryption]]：HSM 常用來保管非對稱私鑰、在盒內完成簽章運算
- [[security-hardening]]：把金鑰收進 HSM，是降低攻擊面的一種系統強化手段

## 來源
- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
