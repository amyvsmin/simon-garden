---
title: "入侵防禦系統（IPS）"
slug: ips
aliases: [IPS, intrusion prevention system, 入侵防禦系統, 入侵防護系統, 入侵預防系統]
category: 資安・網路安全
confidence: 已驗證
created: 2026-06-05
---

## 定義
監看系統活動找出入侵行為、並採取行動阻止的應用程式（Intrusion Prevention System）。具備 [[ids]] 的全部能力（偵測、記錄、告警），再多一項「主動阻止入侵」。像珠寶店櫥窗玻璃碎裂感測器一觸發就讓鋼捲門落下、擋住未授權進入。許多工具可同時擔任 IDS 與 IPS。

## 關鍵面向
- **偵測 ＋ 阻擋**：例如發告警並修改 router 的 ACL 擋掉特定流量
- **與 IDS 差別**：IDS 只告警不擋、IPS 會擋
- **與 EDR 差別在監看位置**：課程說 EDR「多了行為分析」，但比較的主軸其實是**看哪裡**：網路型 IPS 看經過網段的流量，[[edr]] 裝在端點上看程序、檔案與登入行為。行為分析不是 EDR 獨有，NIST SP 800-94 把 IDPS 分成網路型、無線、網路行為分析、主機型四類，其中就有專做網路行為分析的一類
- **部署位置決定能不能擋**：IPS 要串在流量路徑上（inline）才能即時截斷；接在鏡像埠（SPAN）上只拿得到複本，主要只能告警，頂多送 TCP reset 試圖切斷連線或事後下 ACL，擋不住已經送達的封包。串接也代表 IPS 故障或過載時會影響正常流量，要先決定故障時放行還是阻斷
- **誤報先驗證再擋**：阻擋型工具誤報的代價是誤殺正常業務（[[false-positive]]）。新規則先用偵測模式跑一段時間，看命中的是不是真攻擊，再逐條切成阻擋
- **保留回退路徑**：切阻擋後業務出問題，要能快速把單條規則改回偵測、或整台改旁路；變更前記下原設定與切換時間，出事時才查得到是哪條規則擋的
- **虛擬修補**：舊系統無法升級、廠商沒出修補時，可用 IPS 規則遮蔽特定漏洞的攻擊流量，但治標不治本（iPAS 培訓班 Day 2）
- **常見工具**：Suricata、Snort、Sagan 多可同時做 IDS／IPS

## 應用場景
- **Simon 工作場景**：對應公司網路邊界／內網的阻擋設備；設定防禦模式前先用偵測模式驗證規則不誤殺，切換時記錄規則與時間；無法立刻上修補的舊系統，可評估以 IPS 虛擬修補暫時遮蔽
- **一般場景**：SOC 網路防護、NGFW／UTM 內建 IPS、CCNA 安全章節

## 相關概念
- [[ids]]：IPS 是 IDS ＋ 主動阻擋
- [[edr]]：裝在端點上，監看位置與網路型 IPS 不同
- [[siem]]：IPS 可作為資料來源
- [[false-positive]]：阻擋型工具誤報的代價更高（誤殺正常流量）

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/3-intrusion-detection-systems|Course 6 Module 1 Section 4 Leaf 3 Intrusion detection systems]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/4-overview-of-detection-tools|Course 6 Module 1 Section 4 Leaf 4 Overview of detection tools]]
- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
- NIST SP 800-94〈Guide to Intrusion Detection and Prevention Systems (IDPS)〉（2007-02，現行版）https://csrc.nist.gov/pubs/sp/800/94/final ，四類 IDPS 經 2026-11-02 查證
