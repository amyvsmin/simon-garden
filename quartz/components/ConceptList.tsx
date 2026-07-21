import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"
import style from "./styles/conceptList.scss"
// @ts-ignore（inline script 非 module；Quartz 內建元件同樣寫法，見 Darkmode.tsx）
import script from "./scripts/conceptList.inline"
import { vaultFm } from "../util/vaultFrontmatter"
import { categoryVisualGroup } from "../util/conceptCategoryVisual"

// category 是受控 14 值（vault spec 3.1）、由 vault 端三道閘門保證存在且合法；
// 站台不再做關鍵字兜底判類（舊備援已移除——收斂後它猜出的「資安」「AI」都不在新值清單、只會誤導）。
function getCategory(fm: Record<string, unknown>): string {
  return (fm.category as string) ?? "其他"
}

function getCategoryStyle(cat: string): { bg: string; color: string } {
  switch (categoryVisualGroup(cat)) {
    case "security":
      return { bg: "#fee2e2", color: "#dc2626" }
    case "ai":
      return { bg: "#ede9fe", color: "#6d28d9" }
    case "km":
      return { bg: "#d1fae5", color: "#059669" }
    case "foundation":
      return { bg: "#e2e8f0", color: "#475569" }
    case "network":
      return { bg: "#cffafe", color: "#0e7490" }
    case "writing":
      return { bg: "#fef3c7", color: "#d97706" }
    default:
      return { bg: "#f3f4f6", color: "#6b7280" }
  }
}

const ConceptList: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  if (slug !== "concepts/index" && slug !== "concepts/") return null

  const concepts = allFiles
    .filter((f) => f.slug?.startsWith("concepts/") && f.slug !== "concepts/index")
    .sort((a, b) => {
      const da = new Date(
        (a.frontmatter?.created as string) ?? (a.frontmatter?.date as string) ?? 0,
      )
      const db = new Date(
        (b.frontmatter?.created as string) ?? (b.frontmatter?.date as string) ?? 0,
      )
      return db.getTime() - da.getTime()
    })

  const refCounts = new Map<string, number>()
  concepts.forEach((c) => {
    const s = simplifySlug(c.slug!)
    const count = allFiles.filter((f) => f.links?.includes(s)).length
    refCounts.set(c.slug!, count)
  })

  const categories = [...new Set(concepts.map((c) => getCategory(vaultFm(c.frontmatter))))].sort()

  return (
    <div class="concept-list">
      <nav class="list-breadcrumb">
        <a href={resolveRelative(fileData.slug!, "index" as any)} class="internal">
          Home
        </a>
        <span class="separator">›</span>
        <span>所有概念</span>
      </nav>
      <header class="list-header">
        <h1 class="list-title">💡 所有概念</h1>
        <span class="list-count" data-total={concepts.length}>
          {concepts.length} 個
        </span>
      </header>

      <div class="filter-bar">
        <div class="filter-group">
          <label>分類</label>
          <select class="filter-select" data-filter="category">
            <option value="all">全部</option>
            {categories.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div class="filter-group">
          <label>驗證</label>
          <select class="filter-select" data-filter="confidence">
            <option value="all">全部</option>
            <option value="已驗證">✅ 已驗證</option>
            <option value="待驗證">⏳ 待驗證</option>
          </select>
        </div>
        <div class="filter-group">
          <label>排序</label>
          <select class="filter-select" data-filter="sort">
            <option value="date-desc">建立日期新→舊</option>
            <option value="date-asc">建立日期舊→新</option>
            <option value="name-asc">名稱 A→Z</option>
            <option value="refs-desc">引用次數多→少</option>
          </select>
        </div>
      </div>

      <div class="card-grid" data-page-size="20">
        {concepts.map((c) => {
          const fm = vaultFm(c.frontmatter)
          const title = (fm.title as string) ?? simplifySlug(c.slug!)
          const category = getCategory(fm)
          const catStyle = getCategoryStyle(category)
          const confidence = (fm.confidence as string) ?? "待驗證"
          const aliases = (fm.aliases as string[]) ?? []
          const tldr = (fm.tldr as string) ?? ""
          const dateStr = (fm.created as string) ?? (fm.date ? String(fm.date).slice(0, 10) : "")
          const refs = refCounts.get(c.slug!) ?? 0

          return (
            <a
              href={resolveRelative(fileData.slug!, c.slug!)}
              class="concept-card internal"
              data-category={category}
              data-confidence={confidence}
              data-date={dateStr}
              data-name={title}
              data-refs={refs}
            >
              <div class="card-top">
                <span class="card-icon">💡</span>
                <span class="card-title-text">{title}</span>
              </div>
              <div class="card-badges">
                <span
                  class="category-badge"
                  style={{ background: catStyle.bg, color: catStyle.color }}
                >
                  {category}
                </span>
                <span
                  class={`confidence-badge ${confidence === "已驗證" ? "verified" : "unverified"}`}
                >
                  {confidence === "已驗證" ? "✅" : "⏳"} {confidence}
                </span>
                {refs > 0 && <span class="ref-badge">🔗 {refs}</span>}
              </div>
              {aliases.length > 0 && (
                <div class="card-aliases">
                  {aliases.slice(0, 3).map((a) => (
                    <span class="alias-pill">{a}</span>
                  ))}
                </div>
              )}
              {tldr && <div class="card-tldr">{tldr}</div>}
            </a>
          )
        })}
      </div>

      <div class="pagination" />
    </div>
  )
}

ConceptList.css = style
ConceptList.afterDOMLoaded = script
export default (() => ConceptList) satisfies QuartzComponentConstructor
