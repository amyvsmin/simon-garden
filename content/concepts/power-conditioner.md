---
name: 電源調節器
aliases: [power conditioner, 電壓穩壓器, 電源管理]
category: 網管
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-8151-9476-f89899f4460b
---

# 定義

穩定電壓、防止突波損壞下游設備的可程式化韌體驅動硬體，廣泛部署於電信、工業自動化、資料中心、消費性電子，運作層級在作業系統之下；近年成為新興攻擊面。

# 關鍵面向

- 作業系統層之下，EDR 看不見
- 韌體可被遠端更新（也可被攻擊者植入）
- 失效時可能直接物理損壞下游設備

# 應用場景

- Simon 工作場景：機房 PDU、UPS、電源調節器列入 ISO 27001 資產清冊；機房管理職責直接相關
- 一般場景：資料中心維運、工業自動化、電信業

# 相關概念

- [[firmware-attack-surface]]：電源調節器是其典型實例
- [[critical-infrastructure]]：電源調節器是關鍵基礎設施的薄弱環節

# 尚未解決的疑問

- 中小企業有限預算下韌體層防禦能做到什麼程度

# 來源（自動維護）

- [[2026-04-29-itron-power-conditioner-attack]]
