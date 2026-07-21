import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"
import style from "./styles/topicList.scss"
import { vaultFm } from "../util/vaultFrontmatter"

function getTopicIcon(fm: Record<string, unknown>): string {
  const tags = (fm.tags as string[]) ?? []
  const title = (fm.title as string) ?? ""
  const joined = [...tags, title.toLowerCase()].join(" ")
  if (/security|secops|資安|安全/.test(joined)) return "🛡️"
  if (/ai|claude|agent|llm/.test(joined)) return "⚡"
  if (/knowledge|vault|obsidian|知識|筆記/.test(joined)) return "🧠"
  if (/troubleshooting|debug/.test(joined)) return "🔧"
  return "🗂️"
}

function getStatusInfo(status: string): { label: string; cls: string } {
  switch (status) {
    case "published":
      return { label: "已發布", cls: "published" }
    case "draft-v3":
      return { label: "草稿 v3", cls: "draft" }
    case "draft-v2":
      return { label: "草稿 v2", cls: "draft" }
    case "draft":
      return { label: "草稿", cls: "draft" }
    case "personal-note":
      return { label: "個人筆記", cls: "personal" }
    default:
      return { label: status || "筆記", cls: "default" }
  }
}

const TopicList: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  if (slug !== "topics/index" && slug !== "topics/") return null

  const topics = allFiles
    .filter((f) => f.slug?.startsWith("topics/") && f.slug !== "topics/index")
    .sort((a, b) => {
      const da = new Date(
        (a.frontmatter?.last_updated as string) ??
          (a.frontmatter?.created as string) ??
          (a.frontmatter?.date as string) ??
          0,
      )
      const db = new Date(
        (b.frontmatter?.last_updated as string) ??
          (b.frontmatter?.created as string) ??
          (b.frontmatter?.date as string) ??
          0,
      )
      return db.getTime() - da.getTime()
    })

  const refCounts = new Map<string, number>()
  topics.forEach((t) => {
    const s = simplifySlug(t.slug!)
    const count = allFiles.filter((f) => f.links?.includes(s)).length
    refCounts.set(t.slug!, count)
  })

  return (
    <div class="topic-list">
      <nav class="list-breadcrumb">
        <a href={resolveRelative(fileData.slug!, "index" as any)} class="internal">
          Home
        </a>
        <span class="separator">›</span>
        <span>所有主題</span>
      </nav>
      <header class="list-header">
        <h1 class="list-title">🗂️ 所有主題</h1>
        <span class="list-count">{topics.length} 個</span>
      </header>

      <p class="list-description">跨多篇文章與概念的整合主題頁，把相關知識串成完整敘事。</p>

      <div class="topic-grid">
        {topics.map((t) => {
          const fm = vaultFm(t.frontmatter)
          const title = (fm.title as string) ?? simplifySlug(t.slug!)
          const icon = getTopicIcon(fm)
          const status = (fm.status as string) ?? ""
          const statusInfo = getStatusInfo(status)
          const tags = (fm.tags as string[]) ?? []
          const created = (fm.created as string) ?? ""
          const lastUpdated = (fm.last_updated as string) ?? ""
          const refs = refCounts.get(t.slug!) ?? 0

          return (
            <a href={resolveRelative(fileData.slug!, t.slug!)} class="topic-card internal">
              <div class="card-icon-wrap">
                <span class="card-icon">{icon}</span>
              </div>
              <div class="card-body">
                <div class="card-title-text">{title}</div>
                <div class="card-meta">
                  <span class={`status-badge ${statusInfo.cls}`}>{statusInfo.label}</span>
                  {lastUpdated && <span class="card-date">更新 {lastUpdated}</span>}
                  {!lastUpdated && created && <span class="card-date">建立 {created}</span>}
                  {refs > 0 && <span class="ref-count">🔗 {refs} 引用</span>}
                </div>
                {tags.length > 0 && (
                  <div class="card-tags">
                    {tags.slice(0, 5).map((tag) => (
                      <span class="tag-pill">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          )
        })}
      </div>

      {topics.length === 0 && (
        <div class="empty-state">
          <p>目前還沒有主題頁面。</p>
        </div>
      )}
    </div>
  )
}

TopicList.css = style
export default (() => TopicList) satisfies QuartzComponentConstructor
