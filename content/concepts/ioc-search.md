---
name: IOC 字串搜尋
aliases: [ioc search, indicator of compromise search, IOC sweep, 入侵指標搜尋]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

Indicator of Compromise（IOC、入侵指標）的字串／pattern 搜尋——拿已知 malware/C2/webshell 的特徵字串，掃整個系統找其他被感染的檔案。是 IR 第一波調查的核心動作、用 [[linux-filter-commands]] 的 grep + find 組合完成。

## 核心 workflow

```bash
## 第一招：找 24h 內被改的所有檔
sudo find / -mtime -1 -type f 2>/dev/null

## 第二招：在 web root 遞迴找 webshell 特徵
find /var/www -type f -name "*.php" \
  -exec grep -l "eval(base64\|gzinflate\|shell_exec" {} \;

## 第三招：找含特定 IOC IP 的所有 log
find /var -name "*.log" | xargs grep -l "192.168.1.100"

## 第四招：找特定 hash 的檔（先 sha256sum 過濾）
find / -type f -size +1M -exec sha256sum {} \; | grep "ABCDEF..."

## 第五招：找最近 30 分鐘變動的檔（alert 後即時調查）
sudo find / -mmin -30 -type f
```

## 常用 IOC 類型

- **檔名 pattern**：`*.locked`、`*.encrypted`（ransomware）
- **檔內字串**：`eval(base64`（PHP webshell）、`mimikatz`（憑證盜取）
- **IP / domain**：C2 server 連線、惡意 domain DNS
- **hash**：MD5 / SHA-1 / SHA-256（VirusTotal 查詢）
- **TTPs**：crontab / systemd timer / `.ssh/authorized_keys` 異常

## 應用場景

- **Simon 工作場景**：公司若疑似入侵、馬上跑 `find / -mtime -1` + `grep` 找新植入；ISO 27001 A.16.1.5（資安事件回應）對應 IR 流程
- **forensics 必修**：取 image 後在分析機跑、不在 production 跑

## 相關概念

- [[linux-filter-commands]]：IOC search 的命令工具
- [[filtering-concept]]：IOC search 是 filter 的具體應用
- [[tmp-attack-surface]]：`/tmp` 是 IOC search 必看目錄
- [[world-writable-file]]：另一個 IR 必查目標

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-2-manage-file-content-in-bash/1-find-what-you-need-with-linux|Course 4 Module 3 Section 2 Leaf 1 Find what you need with Linux]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-2-manage-file-content-in-bash/2-filter-content-in-linux|Course 4 Module 3 Section 2 Leaf 2 Filter content in Linux]]
