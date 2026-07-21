import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/topicHeader.scss"
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

function getGradientClass(fm: Record<string, unknown>): string {
  const tags = (fm.tags as string[]) ?? []
  const joined = tags.join(" ").toLowerCase()
  if (/security|secops|資安/.test(joined)) return "topic-security"
  if (/ai|claude|agent/.test(joined)) return "topic-ai"
  if (/knowledge|知識|obsidian|notion/.test(joined)) return "topic-knowledge"
  return "topic-default"
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

function estimateReadingTime(text?: string): string {
  if (!text) return "1 分鐘"
  const cjkChars = (text.match(/[一-鿿]/g) || []).length
  const words = text.split(/\s+/).length
  const minutes = Math.max(1, Math.round(cjkChars / 500 + words / 250))
  return `${minutes} 分鐘`
}

const TopicHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const fm = vaultFm(fileData.frontmatter)
  const icon = getTopicIcon(fm)
  const status = (fm.status as string) ?? ""
  const statusInfo = getStatusInfo(status)
  const tags = (fm.tags as string[]) ?? []
  const created = (fm.created as string) ?? ""
  const lastUpdated = (fm.last_updated as string) ?? ""
  const readingTime = estimateReadingTime(fileData.text)

  return (
    <div class="topic-header">
      <div class={`gradient-band ${getGradientClass(fm)}`} />

      <div class="header-top">
        <div
          class="header-icon"
          style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)" }}
        >
          {icon}
        </div>
        <div class="header-text">
          <h1>{fm.title as string}</h1>
          <div class="header-meta">
            <span class={`status-badge ${statusInfo.cls}`}>{statusInfo.label}</span>
            {created && (
              <>
                <span class="divider">·</span>
                <span>建立 {created}</span>
              </>
            )}
            {lastUpdated && (
              <>
                <span class="divider">·</span>
                <span>更新 {lastUpdated}</span>
              </>
            )}
            <span class="divider">·</span>
            <span>約 {readingTime}</span>
          </div>
        </div>
      </div>

      {tags.length > 0 && (
        <div class="topic-tags">
          {tags.map((tag) => (
            <span class="tag-pill">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

TopicHeader.css = style
export default (() => TopicHeader) satisfies QuartzComponentConstructor
