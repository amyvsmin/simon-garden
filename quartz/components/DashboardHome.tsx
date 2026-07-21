import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"
import style from "./styles/dashboardHome.scss"
import { readFileSync } from "fs"
import { join } from "path"
import { isReadingSlug } from "../util/readingSlug"
import { vaultFm } from "../util/vaultFrontmatter"

const thumbColors = [
  "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
  "linear-gradient(135deg, #cffafe, #a5f3fc)",
  "linear-gradient(135deg, #fef3c7, #fde68a)",
  "linear-gradient(135deg, #ffe4e6, #fecdd3)",
  "linear-gradient(135deg, #d1fae5, #a7f3d0)",
]

function getReadingIcon(fm: Record<string, unknown>): string {
  const concepts = (fm.concepts as string[]) ?? []
  const title = (fm.title as string) ?? ""
  const joined = [...concepts, title.toLowerCase()].join(" ")
  if (/secops|kill-chain|zero-trust|cia|incident|siem|資安|安全/.test(joined)) return "🛡️"
  if (/claude|prompt|token|agent|llm|ai|gpt|gemini/.test(joined)) return "⚡"
  if (/vault|obsidian|notion|knowledge|pkm|知識|筆記/.test(joined)) return "🧠"
  if (/google|i\/o|docs-live/.test(joined)) return "🌐"
  if (/教學|設定|建置|setup|tutorial/.test(joined)) return "🔧"
  return "📊"
}

const DashboardHome: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  const readings = allFiles
    .filter((f) => isReadingSlug(f.slug))
    .sort((a, b) => {
      const da = new Date((a.frontmatter?.date as string) ?? 0)
      const db = new Date((b.frontmatter?.date as string) ?? 0)
      return db.getTime() - da.getTime()
    })

  const concepts = allFiles.filter(
    (f) => f.slug?.startsWith("concepts/") && f.slug !== "concepts/index",
  )

  const topics = allFiles.filter((f) => f.slug?.startsWith("topics/") && f.slug !== "topics/index")

  const weeklyIntel = allFiles.filter(
    (f) => f.slug?.startsWith("weekly-intel/") && f.slug !== "weekly-intel/index",
  )

  let totalReadings = readings.length
  try {
    const metaPath = join(process.cwd(), "content", "_meta.json")
    const meta = JSON.parse(readFileSync(metaPath, "utf-8"))
    totalReadings = meta.total_readings ?? readings.length
  } catch {}

  const conceptPopularity = concepts
    .map((c) => {
      const slug = simplifySlug(c.slug!)
      const count = allFiles.filter((f) => f.links?.includes(slug)).length
      return { concept: c, count }
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 15)

  const latest5 = readings.slice(0, 5)

  return (
    <div class="dashboard-home">
      <header class="site-header">
        <h1 class="site-title">🌿 舜子的知識庫</h1>
        <p class="site-subtitle">消化過的閱讀筆記，會長的 second brain</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📚</div>
          <div class="stat-number purple">{totalReadings}</div>
          <div class="stat-label">文章總數</div>
          <div class="stat-sublabel">vault 所有 reading</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🌐</div>
          <div class="stat-number blue">{readings.length}</div>
          <div class="stat-label">網頁呈現</div>
          <div class="stat-sublabel">medium + high impact</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">💡</div>
          <div class="stat-number emerald">{concepts.length}</div>
          <div class="stat-label">概念</div>
          <div class="stat-sublabel">跨文章萃取</div>
        </div>
        <a
          href={resolveRelative(fileData.slug!, "topics/" as any)}
          class="stat-card stat-card-link internal"
        >
          <div class="stat-icon">🗂️</div>
          <div class="stat-number amber">{topics.length}</div>
          <div class="stat-label">主題</div>
          <div class="stat-sublabel">跨概念整合</div>
        </a>
        <a
          href={resolveRelative(fileData.slug!, "weekly-intel/" as any)}
          class="stat-card stat-card-link internal"
        >
          <div class="stat-icon">🛡️</div>
          <div class="stat-number red">{weeklyIntel.length}</div>
          <div class="stat-label">週報</div>
          <div class="stat-sublabel">資安情報</div>
        </a>
      </div>

      <div class="section-header">
        <h2 class="section-title">📖 最新文章</h2>
        <a href={resolveRelative(fileData.slug!, "readings/" as any)} class="section-link internal">
          查看全部 →
        </a>
      </div>
      <div class="article-list">
        {latest5.map((f, i) => {
          const fm = vaultFm(f.frontmatter)
          const icon = (fm.icon as string) || getReadingIcon(fm)
          const impact = (fm.impact as string) ?? ""
          const fmConcepts = (fm.concepts as string[]) ?? []
          const tldr = (fm.tldr as string) ?? ""
          const dateStr = fm.date ? String(fm.date).slice(0, 10) : ""

          return (
            <a href={resolveRelative(fileData.slug!, f.slug!)} class="article-card internal">
              <div
                class="article-thumb"
                style={{ background: thumbColors[i % thumbColors.length] }}
              >
                {icon}
              </div>
              <div class="article-body">
                <div class="article-title-text">{fm.title as string}</div>
                <div class="article-meta">
                  <span class={`impact-dot ${impact}`} />
                  <span>{impact}</span>
                  <span class="dot">·</span>
                  <span>{dateStr}</span>
                  <span class="dot">·</span>
                  <span>{fm.type as string}</span>
                </div>
                {tldr && <div class="article-tldr">{tldr}</div>}
                {fmConcepts.length > 0 && (
                  <div class="article-pills">
                    {fmConcepts.slice(0, 3).map((c) => (
                      <span class="article-pill">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          )
        })}
      </div>

      <div class="concept-cloud">
        <div class="section-header">
          <h2 class="section-title">🔥 熱門概念</h2>
          <a
            href={resolveRelative(fileData.slug!, "concepts/" as any)}
            class="section-link internal"
          >
            查看全部 →
          </a>
        </div>
        <div class="concept-grid">
          {conceptPopularity.map((item, i) => {
            const sizeClass = i < 3 ? "large" : i < 7 ? "medium" : "small"
            return (
              <a
                href={resolveRelative(fileData.slug!, item.concept.slug!)}
                class={`concept-tag ${sizeClass} internal`}
              >
                {item.concept.frontmatter?.title}
              </a>
            )
          })}
        </div>
      </div>

      <footer class="page-footer">
        <p>Powered by Quartz</p>
      </footer>
    </div>
  )
}

DashboardHome.css = style
export default (() => DashboardHome) satisfies QuartzComponentConstructor
