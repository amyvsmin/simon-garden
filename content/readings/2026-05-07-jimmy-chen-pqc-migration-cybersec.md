---
title: "陳君明 — 後量子密碼遷移挑戰、標準進度與實務路線圖｜CYBERSEC 2026 PQC Forum Day 3"
date: 2026-05-07
type: 來源分析
url: "https://web.plaud.ai/s/pub_2bdd7e6d-c245-4e8d-beb5-ab6581f75cc8::rksjzRRCJQPk_YAcS-vWcgJR5Z1P3YuLIYjbOjQZBXDxNmb-gClQ_eCVeJKKr_kOZ1TWAf0cQ92JcggC"
inbox-id: "359f85da-554f-81f8-9002-eceecfe4959b"
concepts: [post-quantum-cryptography, harvest-now-decrypt-later, mosca-theorem, lattice-based-cryptography, crypto-agility, cbom]
projects: []
created: 2026-05-07
---

# 陳君明 — 後量子密碼遷移挑戰、標準進度與實務路線圖｜CYBERSEC 2026 PQC Forum Day 3

## 摘要

台大數學系兼任助理教授陳君明在 CYBERSEC 2026 PQC Forum 開場演說，把 PQC 遷移從「未來議題」拉到「現在排程」。對稱式密碼受 Grover 演算法影響有限（金鑰長度加倍即恢復安全度），但公鑰密碼受 Shor 演算法直擊：RSA 質因數分解與 ECDLP 都可化約為「找週期」問題，被量子電腦高效破解。Google 2025-05 研究把一週內破解 RSA-2048 所需的 noisy qubits 從 2,000 萬降到 100 萬、後續研究進一步降到 50 萬，威脅時程往前壓。NIST PQC 標準現況拆解清楚：FIPS 203（ML-KEM/Kyber）、204（ML-DSA/Dilithium）、205（SLH-DSA/SPHINCS+）已於 2024-08 定案；206（FALCON）、207（HQC）2026 出草案 2027 定案；SP 800-208（XMSS/LMS）已可用。其中 203、204、SP 800-208 可用於美國國安（CNSA 2.0），205、206、207 不可。陳君明強調遷移**不必等所有演算法定稿**，現有 203/204 已足夠展開；晶格密碼工具鏈成熟。NSA CNSA 2.0 時程：2027-01-01 新採購須合規、2030-12-31 不支援設備分階段汰除、2033-12-31 強制使用。常見誤解一一澄清：Google 沒宣布 Q-Day 在 2029（那是 Google 自己內外部完成 PQC 遷移的目標）、ECC-256 可能比 RSA-2048 更早被破（位元數更短）、IBM 不是 PQC 標準唯一設計者（Crystals 團隊 12 人只有 2 位來自 IBM）。落地三大瓶頸：X.509 與協定整合接近定稿但仍有缺口（多數仍是 POC）、FIPS 140-3 CMVP Level 3 HSM 尚未可用（金融級無法部署）、供應鏈「依賴性義大利麵」放大延誤。

## 核心概念

- [[post-quantum-cryptography]]：FIPS 203/204/205 已定案、206/207 即將出爐、CNSA 2.0 時程明確、ECC 比 RSA 早被破
- [[harvest-now-decrypt-later]]：HNDL 是 Mosca 不等式的根本驅力、x（資料壽命）+ y（遷移期）≤ z（量子臨界）
- [[mosca-theorem]]：x + y ≤ z 框架、決定哪些系統要先遷移、憑證有效期 2 年 vs 8 年的協調難題
- [[lattice-based-cryptography]]：LWE/Module-LWE 基礎、Rq=Zq[x]/(x^256+1)、b=As+e、錯誤項擋住量子週期尋找
- [[crypto-agility]]：過渡期混合密碼（傳統+PQC）、未來標準修訂時可換不重做、CNSA 2.0 給的就是 agility 框架
- [[cbom]]：Cryptographic Bill of Materials、盤點所有用 RSA/ECC 的系統與相依函式庫、是 PQC 遷移的 Day 1 工作

## 對 Simon 的應用

公司 IT 角度可以直接做的三件事：

1. **CBOM 盤點**：列出所有用 RSA/ECC 的系統與函式庫版本（OpenSSL、Bouncy Castle、HSM、晶片卡韌體），標註資料保留年限。這是 ISO 27001 資產盤點的擴充章節，可順便交差。
2. **CNSA 2.0 時程當對齊基準**：2027-01-01 雖然是國安採購門檻、但台灣金管會 + 數位部會跟進類似時程。提前做憑證 lifecycle、HSM 升級評估、給 Sam 看的資安 KPI 月簡報加「PQC 遷移預備度」這條。
3. **澄清向上溝通**：把 Q-Day 2029 誤傳釐清、ECC 可能更早被破的事實納入給董事會的風險敘事。Plaud 錄音可作為一手資料。

對個人證照規劃：CISSP Domain 3 已含 PQC 概念、SSCP 出題機率提高、Google Cyber Course 3 也會碰到。陳君明這場可以當 SSCP/CISSP 戰備教材重看。

## 原文要點

- 量子威脅：Grover 對稱影響小（加倍金鑰）、Shor 對 RSA/ECC 致命（化約為週期尋找）
- Google 2025-05：1 週內分解 RSA-2048 從 2,000 萬 noisy qubits 降到 100 萬、後續降到 50 萬
- 已定案：FIPS 203 ML-KEM、FIPS 204 ML-DSA、FIPS 205 SLH-DSA（2024-08）
- 即將出爐：FIPS 206 FALCON、FIPS 207 HQC（2026 草案 2027 定案）；SP 800-208 XMSS/LMS 已可用
- 國安適用（CNSA 2.0）：203、204、SP 800-208 可；205、206、207 不可
- Mosca 定理：x（資料保密期）+ y（遷移期）≤ z（量子臨界）；憑證 2 年 vs 8 年協調困難
- NSA 時程：2027-01-01 新採購、2030-12-31 不支援設備汰除、2033-12-31 強制使用
- 歐盟時程：2026 First Steps、2030 高風險完成、2035 全面轉型；HNDL 是核心 driver
- 物件尺寸膨脹：Kyber 公鑰 800–1568 bytes、SPHINCS+ 簽章 7,856–29,792 bytes、HQC 更大
- 生態瓶頸：X.509 + 協定整合多為 POC、FIPS 140-3 CMVP Level 3 HSM 尚未可用、供應鏈相依複雜
- 誤解澄清：Google 2029 是遷移目標非 Q-Day、ECC-256 可能比 RSA-2048 早被破、IBM 非 PQC 標準唯一設計者
- 台灣展望：數位發展部數位產業署主導 PQC 遷移指引（PQC-CIA 聯盟）、金管會規範金融業；時程預期對齊 NIST/EU

## 原始連結

- Plaud 錄音：[05-07 講座：後量子密碼遷移挑戰、標準進度與實務路線圖](https://web.plaud.ai/s/pub_2bdd7e6d-c245-4e8d-beb5-ab6581f75cc8::rksjzRRCJQPk_YAcS-vWcgJR5Z1P3YuLIYjbOjQZBXDxNmb-gClQ_eCVeJKKr_kOZ1TWAf0cQ92JcggC)
- 議程：5/7（四）14:00–14:30、7F 701F、後量子密碼論壇
- 講者：陳君明 Jimmy Chen（國立臺灣大學數學系兼任助理教授、資通電腦獨立董事）
