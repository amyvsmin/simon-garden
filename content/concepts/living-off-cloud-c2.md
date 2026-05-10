---
title: "濫用合法雲端服務作 C2／資料外洩"
slug: living-off-cloud-c2
aliases: [living off the cloud, cloud C2, 雲端 C2 濫用, Webex C2 濫用, OneDrive 外洩]
category: 資安
confidence: 待驗證
created: 2026-05-05
query-count: 0
---

# 濫用合法雲端服務作 C2／資料外洩

## 定義

攻擊者把合法雲端服務（Cisco Webex、OneDrive、Dropbox、Google Drive 等）跟企業內建機制（DFS/DFSR、SysVol、Microsoft Teams、Slack）當作 C2 通道與資料外洩管道，藉此把惡意流量隱藏在企業正常使用的雲端流量中、繞過傳統 IP/Domain reputation 偵測。

## 關鍵面向

- **Webex 會議室分工模式**（Earth Kurma Doppelganger 變體）：建立 4 個會議室分別承擔
  - keep：心跳
  - message：駭客下達指令
  - file：檔案操作（列出／刪除／複製／抓取）
  - shell：執行 shell 命令
- **OneDrive／Dropbox 工具**：Audrey's（OneDrive，吃 refresh token、抓 \*.z 檔上傳）、SimpleBoxSpike（Dropbox，吃 access token，-f 指定檔案）、SimpleWebExSpike（Webex Welcome Space 會議室上傳）
- **DFSR/SysVol 內網搬運**：把竊取資料丟到 DC 的 SysVol → Windows DFSR 自動同步到所有 DC → 從可對外的 DC 上傳雲端
- **企業偵測盲點**：
  - Webex 應由 Cisco 官方 client 發起，rundll32.exe 連 Webex 是強烈異常訊號
  - OneDrive／Dropbox 連線由非預期程序發起（如 cmd.exe／rundll32）需告警
  - SysVol 應該只放 GPO，出現非 .pol／.adm 副檔名需告警

## 應用場景

- Simon 工作場景：公司用 Office 365／OneDrive、會議用 Webex／Teams，這類偵測盲點直接相關。建議 Proxy/EDR 加規則：偵測 Microsoft 簽章 binary（特別 rundll32.exe、regsvr32.exe）發起的 Webex/OneDrive/Dropbox 連線
- 一般場景：任何採用 SaaS 雲端工具的企業；ISO 27001 A.5.23（雲端服務）控制需考量此風險

## 相關概念

- [[earth-kurma]]：使用本技術的 APT 組織
- [[mmload-yadnux-rootkit]]：搭配本技術的後門基礎
- [[red-team]]：紅隊常用的繞過 IP/Domain reputation 手法
- [[supply-chain-risk]]：合法 SaaS 工具被濫用屬於委外服務風險面

## 尚未解決的疑問

- 主流 SaaS（Webex／Microsoft Teams／Slack）原生是否有 API 紀錄能識別非典型用戶端
- 對中小企業的偵測規則最低成本實作方式

## 來源（自動維護）

- [[2026-05-05-earth-kurma-apt-rootkit-cybersec]]
