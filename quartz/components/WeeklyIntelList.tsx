import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import style from "./styles/weeklyIntelList.scss"
import { vaultFm } from "../util/vaultFrontmatter"

const WeeklyIntelList: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  if (slug !== "weekly-intel/index" && slug !== "weekly-intel/") return null

  const issues = allFiles
    .filter((f) => f.slug?.startsWith("weekly-intel/") && f.slug !== "weekly-intel/index")
    .sort((a, b) => {
      const da = new Date((a.frontmatter?.date as string) ?? 0)
      const db = new Date((b.frontmatter?.date as string) ?? 0)
      return db.getTime() - da.getTime()
    })

  const latest = issues[0]
  const history = issues.slice(1)

  return (
    <div class="weekly-intel-list">
      <nav class="list-breadcrumb">
        <a href={resolveRelative(fileData.slug!, "index" as any)} class="internal">
          Home
        </a>
        <span class="separator">›</span>
        <span>所有週報</span>
      </nav>
      <header class="list-header">
        <h1 class="list-title">🛡️ 資安週報</h1>
        <span class="list-count">共 {issues.length} 期</span>
      </header>

      <p class="list-description">
        每週一自動產出的資安情報週報，涵蓋全球漏洞通報、攻擊趨勢、防禦實務與台灣在地動態。
      </p>

      <div class="intel-timeline">
        {latest &&
          (() => {
            const fm = vaultFm(latest.frontmatter)
            const icon = (fm.icon as string) ?? "🛡️"
            const issue = (fm.issue as string) ?? ""
            const date = (fm.date as string) ?? ""
            const coverRange = (fm.cover_range as string) ?? ""
            const impact = (fm.impact as string) ?? ""
            const tldr = (fm.tldr as string) ?? ""
            const highlights = (fm.highlights as string[]) ?? []
            const tags = (fm.tags as string[]) ?? []

            return (
              <a
                href={resolveRelative(fileData.slug!, latest.slug!)}
                class="intel-card latest internal"
              >
                <div class="card-top">
                  <div class="card-top-left">
                    <span class="card-icon">{icon}</span>
                    {issue && <span class="issue-badge">{issue}</span>}
                    <span class="card-date">{date}</span>
                  </div>
                  <div class="card-top-right">
                    {impact && <span class={`impact-badge ${impact}`}>{impact.toUpperCase()}</span>}
                  </div>
                </div>
                {coverRange && <div class="card-cover-range">涵蓋：{coverRange}</div>}
                {tldr && <div class="card-tldr">{tldr}</div>}
                {highlights.length > 0 && (
                  <div class="card-highlights">
                    {highlights.map((h) => (
                      <div class="highlight-item">
                        <span class="highlight-dot">●</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
                {tags.length > 0 && (
                  <div class="card-tags">
                    {tags.map((tag) => (
                      <span class="tag-pill">{tag}</span>
                    ))}
                  </div>
                )}
              </a>
            )
          })()}

        {history.map((item) => {
          const fm = vaultFm(item.frontmatter)
          const icon = (fm.icon as string) ?? "🛡️"
          const issue = (fm.issue as string) ?? ""
          const date = (fm.date as string) ?? ""
          const coverRange = (fm.cover_range as string) ?? ""
          const tldr = (fm.tldr as string) ?? ""
          const tags = (fm.tags as string[]) ?? []

          return (
            <a
              href={resolveRelative(fileData.slug!, item.slug!)}
              class="intel-card history internal"
            >
              <div class="card-top">
                <span class="card-icon">{icon}</span>
                {issue && <span class="issue-badge">{issue}</span>}
                <span class="card-date">{date}</span>
                {coverRange && <span class="card-cover-range">涵蓋：{coverRange}</span>}
              </div>
              {tldr && <div class="card-tldr">{tldr}</div>}
              {tags.length > 0 && (
                <div class="card-tags">
                  {tags.map((tag) => (
                    <span class="tag-pill">{tag}</span>
                  ))}
                </div>
              )}
            </a>
          )
        })}
      </div>

      {issues.length === 0 && (
        <div class="empty-state">
          <p>目前還沒有週報。</p>
        </div>
      )}
    </div>
  )
}

WeeklyIntelList.css = style
export default (() => WeeklyIntelList) satisfies QuartzComponentConstructor
