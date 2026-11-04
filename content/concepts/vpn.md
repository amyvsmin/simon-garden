---
title: "VPN 虛擬私有網路（Virtual Private Network）"
slug: vpn
aliases: [VPN, Virtual Private Network, 虛擬私有網路, 虛擬私人網路, 虛擬私網]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
updated: 2026-11-04
---

## 定義
VPN 是在**公共網際網路**上建立**加密通道**連接據點、模擬私有連接的技術。優點是**成本低、易部署**；缺點是**效能與可靠性較差**——因為底層依賴公共 [[internet]]、品質不可控。

## 關鍵面向
- **公共 Internet 上的加密通道**：不必自拉專線，借公共網路走加密連線。
- **成本低、易部署**：相對專線/MPLS 便宜很多。
- **效能/可靠性受公共網路影響**：塞車時一樣塞、品質不保證。
- **兩種典型用途**：站對站（site-to-site，連分支據點）與遠端存取（remote access，員工連公司）。
- **WAN 低成本選項**：常作備援或次要據點互連（對比 [[wide-area-network]] 的專線/MPLS）。
- **資安評估重點**：跨公共 Internet，加密強度、憑證、端點都要把關。

### 遠端存取時，加密保護到哪裡為止

- **加密範圍是「端點到 VPN 閘道」**：筆電仍使用當下的飯店 Wi-Fi 或行動網路，VPN 是借這條網路把要進通道的資料加密，送到公司的 VPN 閘道，閘道解密後再轉進內部網路。底層網路斷了，VPN 也會斷，它不會另外提供一條上網線路。
- **連上不等於全部能用**：閘道之後仍依帳號權限存取資源（[[authorization]]、[[principle-of-least-privilege]]）。VPN 解決的是「資料從哪裡走」，「進來之後能用什麼」另由權限控管。
- **沒有 VPN 不代表明文**：一般網站的 [[https]] 本身就有 TLS 加密；VPN 的用途是依公司方式建立連回內部資源的通道。

### 全通道與分流（split tunneling）

- **全通道（full tunnel）**：所有連線都先進 VPN 通道，經公司防火牆再出去。以 Palo Alto GlobalProtect 為例，沒有啟用分流時，每個請求都走通道。
- **分流**：依目的地、網域或應用程式決定哪些流量進通道；被排除的流量直接從端點本機網卡出去，不經公司防火牆。所以同一台筆電可以同時有兩種路徑：指定的公司資源走 VPN，一般網站走原本的網路。
- **教學上常見的誤解**：「連上 VPN 就全部經過公司」不一定成立；「有走 VPN 的網站就安全」也不成立，是否經過 VPN 不能當網站安全的判斷依據。實際走法依各公司的設定與實測為準。

## 應用場景
- **Simon 工作場景**：連次要廠區或遠端員工常用 VPN 當低成本/備援方案；對接 ISO 27001，VPN 段落（加密演算法、憑證管理、端點安全）是資安評估必查項；2026-11 資安教育訓練以「出差安全連回公司」講加密範圍與分流（公司實測結果不寫進本頁）。
- **一般場景**：CCNA 送分題（「成本最低但可靠性最差的 WAN 技術」→VPN）；VPN 在資安領域（IPsec/SSL、遠端存取）跨域反覆出現。

## 相關概念
- [[wide-area-network]]：VPN 是 WAN 連接技術的低成本選項
- [[internet]]：VPN 建於公共 Internet 之上
- [[tls]]：SSL VPN 的加密基礎
- [[ipsec]]：另一種常見的 VPN 加密協定
- [[https]]：網站本身的加密，和 VPN 通道是兩層不同的保護

## 來源
- Palo Alto Networks，GlobalProtect Gateway Client Settings（Split Tunnel）官方文件：https://docs.paloaltonetworks.com/ngfw/help/10-1/globalprotect/network-globalprotect-gateways/globalprotect-gateways-agent-tab/client-settings-tab （2026-11-04 核對）
- [[1-learning/sat-cool/esor-workflow-redesign/ch4-knowledge-management/2-para-and-ai-card-box|CH4-2 實驗紀錄]]：本次擴寫來自 2026-11 資安教育訓練的回寫
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/1-lan-man-wan-and-internet|CCNA Section 6 Leaf 1 LAN/MAN/WAN 與 Internet]]
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/4-man-and-wan-topologies|CCNA Section 6 Leaf 4 MAN/WAN 連接技術]]
