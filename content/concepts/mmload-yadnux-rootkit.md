---
title: "MMLOAD/Yadnux 多階段反射式 rootkit"
slug: mmload-yadnux-rootkit
aliases: [Yadnux, MMLOAD, MMLOAD rootkit, Yadnux rootkit, NsdiProxy rootkit]
category: 資安
confidence: 待驗證
created: 2026-05-05
query-count: 0
---

## 定義

Earth Kurma APT 自 2024-04 起部署的多階段、反射式載入後門。整套組件含未簽章驅動程式（mmFilter.zlib、NsdiProxy.zlib）、反射式載入器（Google.sys、Boot.sys）與多個使用者模式注入 DLL；功能涵蓋繞過 Windows DSE、隱藏檔案／登錄、保護指定進程、移除反監控 hook、注入 shellcode、竊取 RDP 憑證。

## 關鍵面向

- **三階段執行流程**：
  - 階段一：MSI 解出加密 IR 檔 → 載入更多 rootkit → NsdiProxy.sys 從登錄機碼讀後續組件
  - 階段二：批次檔 Inst.bat 透過反射式載入器把未簽章 .zlib 在記憶體載入（[[dse-bypass]]）
  - 階段三：NsdiProxy 對所有進程注入 payload、隱藏檔案／登錄、移除 ObRegisterCallbacks hooks、載入 MmModule/ModuleWin11
- **MiniFilter Hook**：mmFilter 在 Windows MiniFilter Pre Operation Callback 攔截檔案操作，隱藏指定路徑（如 NsdiProxy、TCPIP、Protect Path）
- **進程行為差異化**：注入 ccSvcHst.exe → 直接砍掉（防毒）；注入 regedit.exe → 隱藏 win10/wing/wxp/BootProxy/Nodi Proxy 等 rootkit 相關鍵；注入 mstsc.exe → 注入 RdpThief 偷 RDP 帳密寫入 KB911911.log（偽裝成 KB 修補檔名）
- **指令碼控制**：載入 ModuleWin11(Kernel.dll) 後可用 -kill／-antiscan／-removeprocessnotify／-hideproc／-hidekey／-hidefile／-selprotect 等指令切換行為
- **反偵測手段**：移除 ObRegisterCallbacks 註冊讓防毒收不到檔案 access 通知

## 應用場景

- Simon 工作場景：建立 EDR 規則時納入這組 IOC（mmFilter.zlib／NsdiProxy.zlib／Google.sys／Boot.sys／KB911911.log／RegProtect.dll）；公司若有 RDP 對外暴露需特別檢查
- 一般場景：藍隊／威脅獵捕團隊、特別是有東南亞分公司或合作對象的企業

## 相關概念

- [[earth-kurma]]：本 rootkit 的部署者
- [[dse-bypass]]：本 rootkit 的核心反射式載入技術
- [[living-off-cloud-c2]]：本 rootkit 後續搭配 Doppelganger 等後門透過合法雲端外洩

## 尚未解決的疑問

- 反射式載入器（Google.sys／Boot.sys）本身的數位簽章來源（是否盜用合法廠商簽章）
- ObRegisterCallbacks 移除手法是否被新版 Windows 補上限制

## 來源（自動維護）

- [[2026-05-05-earth-kurma-apt-rootkit-cybersec]]
