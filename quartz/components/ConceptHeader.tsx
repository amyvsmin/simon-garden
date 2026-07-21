import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/conceptHeader.scss"
import { vaultFm } from "../util/vaultFrontmatter"

function getCategoryGradient(category: string): string {
  const cat = (category ?? "").toLowerCase()
  if (/資安|security|secops/.test(cat)) return "cat-security"
  if (/ai|人工智慧|機器學習/.test(cat)) return "cat-ai"
  if (/知識管理|pkm|knowledge/.test(cat)) return "cat-km"
  if (/工具|tool/.test(cat)) return "cat-tool"
  return "cat-default"
}

const ConceptHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const fm = vaultFm(fileData.frontmatter)
  const category = (fm.category as string) ?? ""
  const confidence = (fm.confidence as string) ?? "待驗證"
  const aliases = (fm.aliases as string[]) ?? []
  const tldr = (fm.tldr as string) ?? ""
  const dateStr = fm.created ? String(fm.created).slice(0, 10) : ""

  let displayTldr = tldr
  if (!displayTldr && fileData.text) {
    const defMatch = fileData.text.match(/## 定義\s*\n([\s\S]*?)(?=\n## |$)/)
    if (defMatch) {
      const sentences = defMatch[1]
        .trim()
        .split(/[。！？\.\!\?]/)
        .filter(Boolean)
      displayTldr = sentences.slice(0, 2).join("。") + "。"
    }
  }

  const isVerified = confidence === "已驗證"

  return (
    <div class="concept-header">
      <div class={`gradient-band ${getCategoryGradient(category)}`} />

      <div class="header-top">
        <div class="header-icon">💡</div>
        <div class="header-text">
          <h1>{fm.title as string}</h1>
          <div class="header-meta">
            <span>{category}</span>
            <span class="divider">·</span>
            <span class={`confidence-badge ${isVerified ? "verified" : "unverified"}`}>
              {isVerified ? "✅ 已驗證" : "⏳ 待驗證"}
            </span>
            {dateStr && (
              <>
                <span class="divider">·</span>
                <span>{dateStr}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {aliases.length > 0 && (
        <div class="aliases">
          {aliases.map((a) => (
            <span class="alias-pill">{a}</span>
          ))}
        </div>
      )}

      {displayTldr && (
        <div class="tldr-card">
          <div class="tldr-label">💡 TL;DR</div>
          <div class="tldr-text">{displayTldr}</div>
        </div>
      )}
    </div>
  )
}

ConceptHeader.css = style
export default (() => ConceptHeader) satisfies QuartzComponentConstructor
