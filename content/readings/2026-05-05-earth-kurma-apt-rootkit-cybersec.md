---
title: "東南亞 APT「Earth Kurma」工具鏈與 MMLOAD/Yadnux 未簽章 rootkit 技術解析（CYBERSEC 2026）"
date: 2026-05-05
type: 來源分析
url: "https://web.plaud.ai/s/pub_f76ac29d-9c00-4230-bdb3-2a4233d0548a::FitTcPGVv5mdpzMkT8-EQFLxKhsUitb6pmO3VPOuIC-l1UbqRTYQaDhVBPcmj4nSGm1ho5ma-LjJlbwC"
inbox-id: "357f85da554f81499c9ff8a33ca2db94"
concepts: [earth-kurma, mmload-yadnux-rootkit, dse-bypass, living-off-cloud-c2, red-team, supply-chain-risk]
created: 2026-05-05
---

## 摘要

趨勢科技 TrendAI 資深威脅研究員 Nick Dai 與 Sunny W Lu 在 CYBERSEC 2026 拆解東南亞 APT「Earth Kurma／EarthMaker」自 2020 年 11 月起的工具鏈與內網潛伏手法，鎖定菲律賓、越南、汶萊、馬來西亞、泰國、印尼的政府單位與電信商。攻擊鏈分為初始入侵（利用網站漏洞 + Aurora Backdoor）→ 橫向移動（NBTScan／Nessus／FRPC + 自製 ICMPinger／keylogger）→ 持久化（KRK／Moriya／MMLOAD 多種 rootkit + Doppelganger 等 loader）→ 資料竊取（PowerShell + Audrey's／SimpleBoxSpike／SimpleWebExSpike）。技術重點是 MMLOAD/Yadnux 多階段反射式載入器透過 Google.sys／Boot.sys 在記憶體載入未簽章驅動繞過 Windows DSE，再由 NsdiProxy 注入 svchost、隱藏檔案／登錄、移除 ObRegisterCallbacks 反監控；以及創新濫用 Cisco Webex 會議室（建立 keep／message／file／shell 四個會議室分工）作為 C2 與資料外洩通道、加上 DFSR/SysVol 跨 DC 搬運資料。後門家族迭代清楚：door loader（2022-11）→ test state（2024-01）→ dataloader（2024-10）→ Dolby Vision（2024-11 至今）。

## 核心概念

- [[earth-kurma]]：東南亞 APT 組織，活動可追溯至 2020-11；與 APTcat、Lazarus、Tunnel Snake、Sharp Dragon 似有關聯
- [[mmload-yadnux-rootkit]]：MMLOAD/Yadnux 多階段反射式 rootkit；mmFilter Hook MiniFilter Pre Operation Callback 隱藏檔案、NsdiProxy 移除 ObRegisterCallbacks、RegProtect 隱藏特定登錄機碼、RdpThief 竊取 RDP 憑證
- [[dse-bypass]]：透過反射式驅動載入器（Google.sys／Boot.sys）在記憶體載入未簽章 .zlib 驅動繞過 Windows Driver Signature Enforcement
- [[living-off-cloud-c2]]：濫用 OneDrive／Dropbox／Cisco Webex／DFS 等合法雲端與企業服務作為 C2 與資料外洩通道；Webex 會議室分 keep/message/file/shell 四個用途
- [[red-team]]：研究 APT 工具鏈本身就是紅隊／威脅情報的重要輸入
- [[supply-chain-risk]]：APT 大量複用工具家族顯示工具來源可能存在共同 provider 線索

## 對 Simon 的應用

Simon 是公司內部 IT 工程師、負責資安／伺服器／機房／ISO 27001 推進。這場演講有四個直接可帶回的偵測重點：

1. **Tomcat／Web 服務落地檢測**：Earth Kurma 透過 CMS／Tomcat 漏洞落地後執行 cmsequip\*.exe／dp.exe／DB.exe 並 sc create Service。建議掃描 Web root 目錄是否有非預期的 .exe 落地檔、檢查近期 sc create 與 schtasks（特別是 SYSTEM 帳號每日觸發）。
2. **Webex／OneDrive／Dropbox 出站連線異常**：Cisco Webex 連線正常應由 Cisco 官方 client 發起；如果偵測到 Microsoft 簽章 binary（特別 rundll32.exe）連到 Webex／Dropbox／OneDrive，幾乎可確定異常。建議 Proxy/EDR 加規則。
3. **DFS/DFSR 與 SysVol 監控**：Earth Kurma 透過 DFSR 把資料丟到 SysVol 自動同步到所有 DC，再從對外 DC 上傳 Dropbox。SysVol 應該只放 GPO，出現非預期壓縮檔／執行檔需告警。
4. **Group Policy 阻擋未簽章驅動**：Windows DSE 是預設防線，但反射式載入會繞過。建議用 GPO 強制阻擋未受信任驅動安裝、定期審核已載入驅動的數位簽章來源。

ISO 27001 推進過程中，這份案例可作為「資安事件偵測能力」章節的具體威脅情境參考。

## 原文要點

- 攻擊者極具創意：根據受害者環境客製化工具、改良後門（door loader → test state → dataloader → Dolby Vision）、濫用合法服務隱蔽
- Moriya rootkit 不寫死 C2，靠攔截網路流量裡六位元組 magic number 觸發、IOCTL 22404 註冊；這設計極難偵測
- NsdiProxy 對 mstsc.exe 注入 RdpThief、把 RDP 憑證寫入 C:\Users\All Users\Windows\KB911911.log（看似 KB 修補檔名稱降低可疑度）
- Doppelganger 後門有兩變體：Raw TCP（檔案操作 cmd 210/230/410）與 Cisco Webex（建立 4 個會議室分別作 keep 心跳／message 指令／file 檔案／shell 命令）
- 攻擊者複用其他 APT 公開 PoC 後門（如 S.Manager、Sharp Penta／Victory），可能反映 APT 之間共用 provider 工具
- 偵測建議：監控 ccSvcHst.exe 非預期終止（攻擊者會殺安全產品）、未簽章驅動載入、svchost.exe 異常注入、ICMP 大量掃描

## 原始連結

- https://web.plaud.ai/s/pub_f76ac29d-9c00-4230-bdb3-2a4233d0548a::FitTcPGVv5mdpzMkT8-EQFLxKhsUitb6pmO3VPOuIC-l1UbqRTYQaDhVBPcmj4nSGm1ho5ma-LjJlbwC
