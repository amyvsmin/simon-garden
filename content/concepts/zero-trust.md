---
title: "零信任（Zero Trust）"
slug: zero-trust
aliases: [Zero Trust, 零信任, 零信任架構, zero trust, ZTA, zero trust architecture, never trust always verify]
category: 資安・身分與存取
confidence: 已驗證
created: 2026-06-13
---

## 定義
不因網路位置（內網或外網）給予任何隱含信任、每次存取都驗證身分與授權的資安模型（zero trust）。核心精神是「never trust, always verify（永不信任、持續驗證）」。它推翻傳統「城牆內就可信」的邊界防禦假設，改為對每個使用者、裝置、請求都持續驗證。是近年資安產業的重要轉變之一。

## 關鍵面向
- **不預設信任**：不因來源在內網就放行，內外一律驗證
- **持續驗證**：每次存取都檢查身分（[[authentication]]）、裝置狀態與授權（[[authorization]]）
- **最小權限**：只給完成工作所需的最小存取
- **微分段**：把網路切細，限制橫向移動
- **與縱深防禦的關係**：是 [[defense-in-depth]] 在現代環境（雲端、遠距、BYOD）的演進方向

## 應用場景
- **Simon 工作場景**：公司存取控制朝零信任靠攏，如 DBA 走跳板機＋MFA、不因內網就免驗證；對應 iPAS 與 ISO 27001 的存取控制
- **一般場景**：現代企業安全架構、雲端／遠距存取控制、身分為中心的防禦

## 相關概念
- [[defense-in-depth]]：零信任是其現代演進
- [[authentication]]、[[authorization]]：零信任的持續驗證基礎

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/5-mk-changes-in-the-cybersecurity-industry|Course 6 Module 3 Section 1 Leaf 5 MK: Changes in the cybersecurity industry]]
