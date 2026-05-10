---
title: "Windows DSE 繞過（反射式驅動載入）"
slug: dse-bypass
aliases: [DSE bypass, Driver Signature Enforcement bypass, 反射式驅動載入, reflective driver loading]
category: 資安
confidence: 待驗證
created: 2026-05-05
query-count: 0
---

# Windows DSE 繞過（反射式驅動載入）

## 定義

繞過 Windows DSE（Driver Signature Enforcement，強制驅動數位簽章）機制的攻擊技術。原本 DSE 要求所有載入的核心模式驅動必須帶有效簽章，但攻擊者透過已簽章的反射式載入器在記憶體中直接載入未簽章的驅動 binary，避開檔案系統層的簽章驗證。

## 關鍵面向

- **核心技巧**：把未簽章驅動以加密／壓縮形式（如 .zlib）放在磁碟，由有效簽章的 loader 驅動讀入記憶體展開、解析 PE 結構、手動完成重定位與 import 解析、跳到驅動入口執行
- **跟 BYOVD（Bring Your Own Vulnerable Driver）的差異**：BYOVD 透過已知存在 IOCTL 漏洞的合法簽章驅動取得 kernel 寫入能力；DSE 反射式載入則自帶完整 loader、不依賴第三方驅動漏洞
- **Earth Kurma 案例**：Google.sys、Boot.sys 為反射式載入器；mmFilter.zlib、NsdiProxy.zlib 為被載入的未簽章 rootkit 驅動
- **限制**：載入器本身仍需有效簽章；新版 Windows（HVCI／VBS）對核心記憶體寫入有更嚴格控制
- **防禦面**：監控 nt!IoAllocateMdl、ExAllocatePool 大塊分配後跟非預期 jump；監控 PiDDBCacheTable 異常 entry；HVCI 啟用後此類技術會大幅提高難度

## 應用場景

- Simon 工作場景：公司端點若仍跑 Windows 10／Server 2019 等較舊版本（HVCI 預設關），這類繞過特別有效。建議盤點端點 HVCI／VBS 開啟率，並用 GPO 阻擋未受信任驅動安裝
- 一般場景：藍隊／EDR 規則設計、Windows 端點強化專案

## 相關概念

- [[mmload-yadnux-rootkit]]：使用本技術的具體 rootkit 家族
- [[earth-kurma]]：使用本技術的 APT 組織
- [[secure-boot]]：開機鏈簽章；DSE 是其後續 Runtime 驗證的延伸
- [[red-team]]：紅隊常用的核心模式落地技術

## 尚未解決的疑問

- HVCI 啟用環境下，是否仍有可行的反射式載入路徑
- 反射式載入器自帶的有效簽章來源（盜用 vs 合法購買 vs 程式碼簽署伺服器入侵）

## 來源（自動維護）

- [[2026-05-05-earth-kurma-apt-rootkit-cybersec]]
