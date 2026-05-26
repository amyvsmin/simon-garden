import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/weeklyIntelHeader.scss"

function estimateReadingTime(text?: string): string {
  if (!text) return "1 分鐘"
  const cjkChars = (text.match(/[一-鿿]/g) || []).length
  const words = text.split(/\s+/).length
  const minutes = Math.max(1, Math.round(cjkChars / 500 + words / 250))
  return `${minutes} 分鐘`
}

const WeeklyIntelHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const fm = fileData.frontmatter ?? {}
  const icon = (fm.icon as string) ?? "🛡️"
  const issue = (fm.issue as string) ?? ""
  const coverRange = (fm.cover_range as string) ?? ""
  const impact = (fm.impact as string) ?? ""
  const tags = (fm.tags as string[]) ?? []
  const highlights = (fm.highlights as string[]) ?? []
  const tldr = (fm.tldr as string) ?? ""
  const readingTime = estimateReadingTime(fileData.text)

  return (
    <div class="weekly-intel-header">
      <div class="gradient-band" />

      <div class="header-top">
        <div class="header-icon">{icon}</div>
        <div class="header-text">
          <h1>{fm.title as string}</h1>
          <div class="header-meta">
            {issue && <span class="issue-badge">{issue}</span>}
            {impact && (
              <span class={`impact-badge ${impact}`}>
                {impact.toUpperCase()}
              </span>
            )}
            {coverRange && (
              <>
                <span class="divider">·</span>
                <span>涵蓋 {coverRange}</span>
              </>
            )}
            <span class="divider">·</span>
            <span>約 {readingTime}</span>
          </div>
        </div>
      </div>

      {tags.length > 0 && (
        <div class="intel-tags">
          {tags.map((tag) => (
            <span class="tag-pill">{tag}</span>
          ))}
        </div>
      )}

      {highlights.length > 0 && (
        <div class="highlights-card">
          <div class="highlights-title">本週重點</div>
          {highlights.map((h) => (
            <div class="highlight-item">
              <span class="highlight-dot">●</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      )}

      {tldr && (
        <div class="tldr-card">
          <div class="tldr-label">TL;DR</div>
          <div class="tldr-text">{tldr}</div>
        </div>
      )}
    </div>
  )
}

WeeklyIntelHeader.css = style
export default (() => WeeklyIntelHeader) satisfies QuartzComponentConstructor
