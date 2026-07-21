/**
 * reading slug 判準（單一權威，ReadingList 與 DashboardHome 共用）
 *
 * 只有 `readings/YYYY-MM-DD-*` 這種日期格式的頂層檔算 reading。索引檔
 * （`_index-2026`、`index-by-topic`、`index`）一律排除——它們沒有 reading
 * 的 frontmatter，被當成卡片會污染列表與統計數字。
 *
 * 結尾用 `[^/]+` 而不是 `.+`：`.+` 會吃掉 `/`，讓 `readings/2026-01-01-x/nested`
 * 這種日期開頭的巢狀路徑也命中，與 vault 端 shell 只掃 maxdepth 1 不等價。
 *
 * 對應的 vault 端判準是 `sync-garden.sh` 的 `is_dated_reading()`
 * （`^[0-9]{4}-[0-9]{2}-[0-9]{2}-.+\.md$`，比對 basename），兩者必須同步維護。
 * 設計見 SimonVault `9-ops/specs/2026-07-21-reading-domain-taxonomy.md` 第 6.3 節。
 */
const DATED_READING = /^readings\/\d{4}-\d{2}-\d{2}-[^/]+$/

export function isReadingSlug(slug: string | undefined): boolean {
  return slug !== undefined && DATED_READING.test(slug)
}
