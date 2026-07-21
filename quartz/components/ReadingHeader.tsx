import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import style from "./styles/readingHeader.scss"
import { vaultFm } from "../util/vaultFrontmatter"

function getReadingIcon(frontmatter: Record<string, unknown>): string {
  const concepts = (frontmatter.concepts as string[]) ?? []
  const title = (frontmatter.title as string) ?? ""
  const joined = [...concepts, title.toLowerCase()].join(" ")

  if (/secops|kill-chain|zero-trust|cia|incident|siem|vulnerability|資安|安全/.test(joined))
    return "🛡️"
  if (/claude|prompt|token|agent|llm|ai|gpt|gemini/.test(joined)) return "⚡"
  if (/vault|obsidian|notion|knowledge|pkm|知識|筆記/.test(joined)) return "🧠"
  if (/google|i\/o|docs-live/.test(joined)) return "🌐"
  if (/教學|設定|建置|setup|tutorial/.test(joined)) return "🔧"
  if (frontmatter.type === "影片筆記") return "🎬"
  return "📊"
}

function getGradientClass(type: string): string {
  if (type === "影片筆記") return "type-video"
  if (type === "來源分析") return "type-source"
  return "type-default"
}

function getStageInfo(stage: string): { emoji: string; label: string; cls: string } {
  switch (stage) {
    case "evergreen":
      return { emoji: "🌳", label: "evergreen", cls: "evergreen" }
    case "growing":
      return { emoji: "🌿", label: "growing", cls: "growing" }
    default:
      return { emoji: "🌱", label: "seedling", cls: "seedling" }
  }
}

function estimateReadingTime(text?: string): string {
  if (!text) return "1 分鐘"
  const cjkChars = (text.match(/[一-鿿]/g) || []).length
  const words = text.split(/\s+/).length
  const minutes = Math.max(1, Math.round(cjkChars / 500 + words / 250))
  return `${minutes} 分鐘`
}

const ReadingHeader: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const fm = vaultFm(fileData.frontmatter)
  const icon = (fm.icon as string) || getReadingIcon(fm)
  const type = (fm.type as string) ?? ""
  const impact = (fm.impact as string) ?? ""
  const stage = (fm.stage as string) ?? "seedling"
  const tldr = (fm.tldr as string) ?? ""
  const concepts = (fm.concepts as string[]) ?? []
  const url = (fm.url as string) ?? ""
  const dateStr = fm.date ? String(fm.date).slice(0, 10) : ""
  const publishedStr = fm.published ? String(fm.published).slice(0, 10) : ""
  const stageInfo = getStageInfo(stage)
  const readingTime = estimateReadingTime(fileData.text)

  return (
    <div class="reading-header">
      <div class={`gradient-band ${getGradientClass(type)}`} />

      <div class="header-top">
        <div
          class="header-icon"
          style={{ background: "linear-gradient(135deg, #e0e7ff, #c7d2fe)" }}
        >
          {icon}
        </div>
        <div class="header-text">
          <h1>{fm.title as string}</h1>
          <div class="header-meta">
            <span>收錄 {dateStr}</span>
            {publishedStr && publishedStr !== dateStr && (
              <>
                <span class="divider">·</span>
                <span>發表 {publishedStr}</span>
              </>
            )}
            <span class="divider">·</span>
            <span>{type}</span>
            <span class="divider">·</span>
            <span>約 {readingTime}</span>
            <span class="divider">·</span>
            <span class={`growth-badge ${stageInfo.cls}`}>
              {stageInfo.emoji} {stageInfo.label}
            </span>
          </div>
        </div>
      </div>

      {concepts.length > 0 && (
        <div class="concept-pills">
          {concepts.map((c) => {
            const conceptFile = allFiles.find(
              (f) => f.slug?.endsWith(c) || f.frontmatter?.slug === c,
            )
            const href = conceptFile
              ? resolveRelative(fileData.slug!, conceptFile.slug!)
              : `../concepts/${c}`
            return (
              <a href={href} class="internal">
                🔗 {c}
              </a>
            )
          })}
        </div>
      )}

      <div class="meta-table">
        <div class="meta-row">
          <div class="meta-label">影響程度</div>
          <div class="meta-value">
            <span class={`impact-badge ${impact}`}>
              {impact === "high" ? "🔴" : "🟡"} {impact}
            </span>
          </div>
        </div>
        <div class="meta-row">
          <div class="meta-label">關聯概念</div>
          <div class="meta-value">
            {concepts.map((c, i) => {
              const conceptFile = allFiles.find(
                (f) => f.slug?.endsWith(c) || f.frontmatter?.slug === c,
              )
              const href = conceptFile
                ? resolveRelative(fileData.slug!, conceptFile.slug!)
                : `../concepts/${c}`
              return (
                <>
                  {i > 0 && "、"}
                  <a href={href} class="internal">
                    {c}
                  </a>
                </>
              )
            })}
          </div>
        </div>
        {url && (
          <div class="meta-row">
            <div class="meta-label">來源</div>
            <div class="meta-value">
              <a href={url} target="_blank" rel="noopener">
                {new URL(url).hostname}/...
              </a>
            </div>
          </div>
        )}
      </div>

      {tldr && (
        <div class="tldr-card">
          <div class="tldr-label">💡 TL;DR</div>
          <div class="tldr-text">{tldr}</div>
        </div>
      )}
    </div>
  )
}

ReadingHeader.css = style
export default (() => ReadingHeader) satisfies QuartzComponentConstructor
