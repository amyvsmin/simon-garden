---
title: "Earth Kurma（EarthMaker）APT 組織"
slug: earth-kurma
aliases: [EarthMaker, Earth Kurma APT, 東南亞 APT 組織]
category: 資安
confidence: 待驗證
created: 2026-05-05
query-count: 0
---

# Earth Kurma（EarthMaker）APT 組織

## 定義

主要針對東南亞地區的 APT（進階持續性威脅）攻擊組織，活動可追溯至 2020 年 11 月。鎖定政府單位與與政府合作密切的電信商，受害國家包含菲律賓、越南、汶萊、馬來西亞、泰國、印尼。攻擊目標以資料竊取為主，依環境客製化工具、提升隱蔽性。

## 關鍵面向

- **可能關聯組織**：APTcat、Lazarus Group、Operation Tunnel Snake、Sharp Dragon、Lancefly；手法與工具有相似或重疊
- **後門演進**：door loader（2022-11）→ test state（2024-01）→ dataloader（2024-10）→ Dolby Vision（2024-11 至今）
- **多種 rootkit 並用**：KRK、Moriya、[[mmload-yadnux-rootkit]] 三系列
- **創新外洩通道**：濫用 Cisco Webex 會議室作 C2、DFSR/SysVol 跨 DC 搬運、OneDrive/Dropbox/Google Drive 雲端外洩
- **工具共用線索**：Sharp Penta／Victory 與其他 APT 重疊，可能存在共同 provider

## 應用場景

- Simon 工作場景：公司若涉東南亞市場或業務合作對象在這些國家，威脅模型應納入；ISO 27001 風險評估章節可引用此 APT 為東南亞地區的具體威脅情境
- 一般場景：威脅情報團隊、東南亞政府／電信／其他關鍵基礎設施防禦團隊

## 相關概念

- [[mmload-yadnux-rootkit]]：Earth Kurma 自 2024-04 起使用的多階段反射式 rootkit
- [[dse-bypass]]：Earth Kurma 反射式驅動載入器繞過 Windows 簽章機制
- [[living-off-cloud-c2]]：Earth Kurma 創新的合法雲端服務濫用模式
- [[red-team]]：APT 工具鏈研究是紅隊／藍隊的共同情資來源
- [[supply-chain-risk]]：工具共用反映可能的 provider 供應鏈

## 尚未解決的疑問

- 跟 Lazarus 等已知組織的歸因強度與證據鏈
- 工具 provider 的真實身分（是同一個組織還是商業地下市場）

## 來源（自動維護）

- [[2026-05-05-earth-kurma-apt-rootkit-cybersec]]
