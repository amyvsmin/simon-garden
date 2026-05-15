---
title: "Mosca 定理"
slug: mosca-theorem
aliases: [Mosca's Theorem, Mosca 不等式, Mosca Inequality, x+y≤z, 後量子遷移時程框架]
category: 資安
confidence: 已驗證
created: 2026-05-07
query-count: 0
---

## 定義

Michele Mosca 提出的後量子密碼遷移時程框架：把資料保密期（x）+ 遷移所需時間（y）跟量子電腦成熟到能破解的時點（z）做對比，必須滿足 **x + y ≤ z** 才安全。如果 x + y > z，意味著還沒完成遷移之前、被加密的資料就會被未來的量子電腦回頭破解（[[harvest-now-decrypt-later]]）。

## 關鍵面向

- **三變數**：x（保護年限／資料壽命）、y（PQC 遷移執行期）、z（量子電腦破解臨界時點）
- **驅動排程**：哪些系統要先遷移、由 x 越大者越優先（長壽命機密、合約、病歷）
- **常見陷阱**：低估 y。陳君明 CYBERSEC 2026 例：「以為 10 年完成遷移、量子電腦 15 年成熟、看似沒問題」、但 9 年之後仍在用舊加密、那資料 X 不能假設 10 年只能 6 年
- **憑證有效期協調難題**：金融憑證 2 年（x=2）、自然人憑證 8 年（x=8）、誰先換引發部門互推
- **NIST／NSA／歐盟時程**都隱含 Mosca 框架：CNSA 2.0 的 2027/2030/2033 三段式對齊不同 x 區間

## 應用場景

- Simon 工作場景：盤點 ISO 27001 資產時加上「資料保留年限」欄位、跟現用加密強度配對、輸出 Mosca 風險矩陣給 Sam；對 BIGFIX/Veeam/Omnissa 等系統評估遷移期（y）
- 一般場景：金融、醫療、政府、半導體 IP 都需在合約／法遵層面採用此框架排序

## 相關概念

- [[harvest-now-decrypt-later]]：x + y > z 時 HNDL 攻擊就成立
- [[post-quantum-cryptography]]：z 由量子電腦進度決定、PQC 遷移就是壓低 y
- [[crypto-agility]]：降低 y 的關鍵能力、能更快換演算法

## 尚未解決的疑問

- 各組織該怎麼估 z（保守 2030+ vs 樂觀 2028）
- y 的內部估計常嚴重低估、有沒有業界基準（benchmark）

## 來源（自動維護）

- [[2026-05-07-jimmy-chen-pqc-migration-cybersec]]
