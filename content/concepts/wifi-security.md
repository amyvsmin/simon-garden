---
title: "無線網路安全（Wi-Fi Security）"
slug: wifi-security
aliases: [Wi-Fi Security, 無線網路安全, 無線安全, WLAN 安全, WiFi security, 802.11 安全]
category: 資安
confidence: 已驗證
created: 2026-07-06
---

## 定義
無線網路的根本風險是「訊號飄在空中、附近的人都收得到」，任何在收訊範圍內的人都能側錄封包。因此無線安全的重點全落在「加密與認證夠不夠強」，而不是靠實體線路擋人。

## 關鍵面向
- **加密演進**：WEP（早已破解、淘汰）→ WPA → WPA2（仍可能被 KRACK 等攻擊）→ 現行建議用 **WPA3**。
- **WPA3 的關鍵進步是 SAE 交握**：SAE（Simultaneous Authentication of Equals，對等同時認證）改掉了 WPA2 的致命弱點——WPA2 的握手封包一旦被側錄就能離線暴力破解密碼，SAE 就算被錄到也破不了。
  - ⚠️ 精確：SAE 擋的是「被動側錄握手後的離線字典破解」，不等於 WPA3 在所有情境都不可破——線上猜測、降級攻擊、實作側通道（如 Dragonblood）仍要防。
- **企業級認證用 802.1X**：企業環境再搭 802.1X（RADIUS）做「使用者級」認證，每人各自帳密憑證，而不是全公司共用一把 PSK；伺服器憑證驗證屬於 [[tls]] 家族的信任基礎。
- **無線專屬攻擊**：戰爭駕駛（War Driving，開車或無人機掃描踩點找弱 AP）、邪惡雙胞胎（Evil Twin，同名假熱點騙連線再中間人）、流氓 AP（Rogue AP，內部人員私接未授權 AP，等於在防火牆背後開沒人看管的後門）、解除認證（Deauthentication，偽造封包把人踢下線，藉機側錄重連握手包或逼連 Evil Twin）、WPS 暴力破解（8 位數 PIN 有設計缺陷、數小時可試出）、干擾阻斷（Jamming，實體層 DoS）。
- **防禦對應**：升級 WPA3、802.1X 驗伺服器憑證、無線入侵偵測（WIDS）揪未授權 AP、關閉 WPS、啟用 802.11w（PMF，保護管理框架以擋 Deauth）。連不明熱點時走 VPN（見 [[ipsec]]）能擋 Evil Twin 的中間人竊聽。

## 應用場景
- **Simon 工作場景**：公司內部與產線的無線 AP 一律走 WPA3、企業段搭 802.1X 做使用者級認證，不共用 PSK；機房與網路管理時定期掃描揪出員工私接的流氓 AP（在防火牆背後開後門的最大內部破口）；訪客無線與辦公網段隔離，關掉 WPS。
- **一般場景**：企業無線佈建基準、iPAS 與 CISSP 通訊與網路安全域考點、家用路由器安全設定（改用 WPA3、關 WPS）。

## 相關概念
- [[ipsec]]：連不明或不可信無線網路時走 VPN，補無線加密以外的傳輸機密性
- [[tls]]：802.1X 企業認證與伺服器憑證驗證的信任基礎（EAP-TLS）
- [[zero-trust]]：每人各自認證、不預設信任任一連線，與共用 PSK 的思維相反
- [[security-hardening]]：關閉 WPS、啟用 802.11w、停用弱加密屬無線設備強化

## 來源
- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
