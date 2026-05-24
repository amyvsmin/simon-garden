import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"
import style from "./styles/enhancedBacklinks.scss"

const EnhancedBacklinks: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const slug = simplifySlug(fileData.slug!)
  const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))

  if (backlinkFiles.length === 0) return null

  return (
    <div class="enhanced-backlinks">
      <h3>↩️ 引用此筆記的頁面（{backlinkFiles.length}）</h3>
      <div class="backlink-cards">
        {backlinkFiles.map((f) => {
          const isConcept = f.slug?.startsWith("concepts/")
          const isReading = f.slug?.startsWith("readings/")
          const iconClass = isConcept ? "concept" : isReading ? "reading" : "other"
          const emoji = isConcept ? "💡" : isReading ? "📄" : "📝"
          const excerpt = f.description
            ? f.description.slice(0, 80) + (f.description.length > 80 ? "..." : "")
            : ""

          return (
            <a href={resolveRelative(fileData.slug!, f.slug!)} class="backlink-card internal">
              <div class={`backlink-icon ${iconClass}`}>{emoji}</div>
              <div class="backlink-info">
                <div class="title">{f.frontmatter?.title}</div>
                {excerpt && <div class="excerpt">{excerpt}</div>}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

EnhancedBacklinks.css = style
export default (() => EnhancedBacklinks) satisfies QuartzComponentConstructor
