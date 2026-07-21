import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { isReadingSlug } from "../util/readingSlug"
import style from "./styles/readingList.scss"
// @ts-ignore（inline script 非 module；Quartz 內建元件同樣寫法，見 Darkmode.tsx）
import script from "./scripts/readingList.inline"
import { vaultFm } from "../util/vaultFrontmatter"

const thumbColors = [
  "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
  "linear-gradient(135deg, #cffafe, #a5f3fc)",
  "linear-gradient(135deg, #fef3c7, #fde68a)",
  "linear-gradient(135deg, #ffe4e6, #fecdd3)",
  "linear-gradient(135deg, #d1fae5, #a7f3d0)",
]

function getReadingIcon(fm: Record<string, unknown>): string {
  if (fm.icon) return fm.icon as string
  const concepts = (fm.concepts as string[]) ?? []
  const title = (fm.title as string) ?? ""
  const joined = [...concepts, title.toLowerCase()].join(" ")
  if (/secops|kill-chain|zero-trust|cia|incident|siem|vulnerability|資安|安全/.test(joined))
    return "🛡️"
  if (/claude|prompt|token|agent|llm|ai|gpt|gemini/.test(joined)) return "⚡"
  if (/vault|obsidian|notion|knowledge|pkm|知識|筆記/.test(joined)) return "🧠"
  if (/google|i\/o|docs-live/.test(joined)) return "🌐"
  if (/教學|設定|建置|setup|tutorial/.test(joined)) return "🔧"
  if (fm.type === "影片筆記") return "🎬"
  return "📊"
}

function getStageLabel(stage: string): { emoji: string; cls: string } {
  switch (stage) {
    case "evergreen":
      return { emoji: "🌳", cls: "evergreen" }
    case "growing":
      return { emoji: "🌿", cls: "growing" }
    default:
      return { emoji: "🌱", cls: "seedling" }
  }
}

const ReadingList: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  if (slug !== "readings/index" && slug !== "readings/") return null

  const readings = allFiles
    .filter((f) => isReadingSlug(f.slug))
    .sort((a, b) => {
      const da = new Date((a.frontmatter?.date as string) ?? 0)
      const db = new Date((b.frontmatter?.date as string) ?? 0)
      return db.getTime() - da.getTime()
    })

  const types = [
    ...new Set(readings.map((f) => (f.frontmatter?.type as string) ?? "").filter(Boolean)),
  ]
  const domains = [
    ...new Set(readings.map((f) => (f.frontmatter?.domain as string) ?? "").filter(Boolean)),
  ]

  return (
    <div class="reading-list">
      <nav class="list-breadcrumb">
        <a href={resolveRelative(fileData.slug!, "index" as any)} class="internal">
          Home
        </a>
        <span class="separator">›</span>
        <span>所有文章</span>
      </nav>
      <header class="list-header">
        <h1 class="list-title">📖 所有文章</h1>
        <span class="list-count" data-total={readings.length}>
          {readings.length} 篇
        </span>
      </header>

      <div class="filter-bar">
        <div class="filter-group">
          <label>Impact</label>
          <select class="filter-select" data-filter="impact">
            <option value="all">全部</option>
            <option value="high">🔴 high</option>
            <option value="medium">🟡 medium</option>
          </select>
        </div>
        <div class="filter-group">
          <label>類型</label>
          <select class="filter-select" data-filter="type">
            <option value="all">全部</option>
            {types.map((t) => (
              <option value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div class="filter-group">
          <label>主題</label>
          <select class="filter-select" data-filter="domain">
            <option value="all">全部</option>
            {domains.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div class="filter-group">
          <label>排序</label>
          <select class="filter-select" data-filter="sort">
            <option value="date-desc">日期新→舊</option>
            <option value="date-asc">日期舊→新</option>
            <option value="impact-desc">Impact 高→低</option>
          </select>
        </div>
      </div>

      <div class="card-grid" data-page-size="10">
        {readings.map((f, i) => {
          const fm = vaultFm(f.frontmatter)
          const icon = getReadingIcon(fm)
          const impact = (fm.impact as string) ?? ""
          const type = (fm.type as string) ?? ""
          const domain = (fm.domain as string) ?? ""
          const stage = (fm.stage as string) ?? "seedling"
          const stageInfo = getStageLabel(stage)
          const fmConcepts = (fm.concepts as string[]) ?? []
          const tldr = (fm.tldr as string) ?? ""
          const dateStr = fm.date ? String(fm.date).slice(0, 10) : ""
          const publishedStr = fm.published ? String(fm.published).slice(0, 10) : ""
          const impactOrder = impact === "high" ? 2 : impact === "medium" ? 1 : 0

          return (
            <a
              href={resolveRelative(fileData.slug!, f.slug!)}
              class="reading-card internal"
              data-impact={impact}
              data-type={type}
              data-domain={domain}
              data-date={dateStr}
              data-impact-order={impactOrder}
            >
              <div class="card-thumb" style={{ background: thumbColors[i % thumbColors.length] }}>
                {icon}
              </div>
              <div class="card-body">
                <div class="card-title-row">
                  <span class="card-title-text">{fm.title as string}</span>
                  <span class={`stage-badge ${stageInfo.cls}`}>
                    {stageInfo.emoji} {stage}
                  </span>
                </div>
                <div class="card-meta">
                  <span class={`impact-dot ${impact}`} />
                  <span>{impact}</span>
                  <span class="dot">·</span>
                  <span>{dateStr}</span>
                  {publishedStr && publishedStr !== dateStr && (
                    <>
                      <span class="dot">·</span>
                      <span>發表 {publishedStr}</span>
                    </>
                  )}
                  <span class="dot">·</span>
                  <span>{type}</span>
                </div>
                {tldr && <div class="card-tldr">{tldr}</div>}
                {fmConcepts.length > 0 && (
                  <div class="card-pills">
                    {fmConcepts.slice(0, 3).map((c) => (
                      <span class="card-pill">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          )
        })}
      </div>

      <div class="pagination" />
    </div>
  )
}

ReadingList.css = style
ReadingList.afterDOMLoaded = script
export default (() => ReadingList) satisfies QuartzComponentConstructor
