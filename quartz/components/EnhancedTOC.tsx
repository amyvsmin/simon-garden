import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/enhancedToc.scss"
// @ts-ignore
import script from "./scripts/enhancedToc.inline"
// @ts-ignore
import tocScript from "./scripts/toc.inline"
import { concatenateResources } from "../util/resources"

const tocIcons: Record<string, string> = {
  為什麼讀: "📖",
  摘要: "📝",
  核心概念: "💡",
  "對-simon-的應用當下想法": "🎯",
  "對 Simon 的應用": "🎯",
  原文要點: "📄",
  落地動作與效益: "✅",
  落地動作: "✅",
  原始連結: "🔗",
  定義: "📐",
  關鍵面向: "🔍",
  應用場景: "🎯",
  相關概念: "🔗",
  尚未解決的疑問: "❓",
  來源自動維護: "📚",
}

function getIcon(text: string): string {
  const normalized = text.toLowerCase().replace(/\s+/g, "")
  for (const [key, icon] of Object.entries(tocIcons)) {
    if (normalized.includes(key.toLowerCase().replace(/\s+/g, ""))) return icon
  }
  return "📌"
}

const EnhancedTOC: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData.toc || fileData.toc.length === 0) return null

  return (
    <>
      {/* Desktop TOC */}
      <div class="enhanced-toc">
        <div class="toc-card">
          <div class="toc-title">段落導航</div>
          <ul class="toc-list">
            {fileData.toc.map((entry) => (
              <li key={entry.slug} class={`depth-${entry.depth}`}>
                <a href={`#${entry.slug}`} data-for={entry.slug}>
                  {entry.depth <= 2 && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "20px",
                        textAlign: "center",
                        marginRight: "4px",
                        fontSize: "12px",
                      }}
                    >
                      {getIcon(entry.text)}
                    </span>
                  )}
                  {entry.text}
                </a>
              </li>
            ))}
          </ul>
          <div class="toc-progress">
            <div class="toc-progress-label">閱讀進度</div>
            <div class="toc-progress-bar">
              <div class="toc-progress-fill" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile TOC */}
      <details class="mobile-toc">
        <summary>段落導航</summary>
        <ul class="toc-list">
          {fileData.toc
            .filter((e) => e.depth <= 2)
            .map((entry) => (
              <li key={entry.slug}>
                <a href={`#${entry.slug}`}>{entry.text}</a>
              </li>
            ))}
        </ul>
      </details>
    </>
  )
}

EnhancedTOC.css = style
EnhancedTOC.afterDOMLoaded = concatenateResources(tocScript, script)
export default (() => EnhancedTOC) satisfies QuartzComponentConstructor
