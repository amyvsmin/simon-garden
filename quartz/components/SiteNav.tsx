import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import siteNavStyle from "./styles/siteNav.scss"
import searchStyle from "./styles/search.scss"
// @ts-ignore
import searchScript from "./scripts/search.inline"

const SiteNav: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""

  const activeClass = (section: string) => {
    if (section === "readings" && slug.startsWith("readings/")) return " active"
    if (section === "concepts" && slug.startsWith("concepts/")) return " active"
    if (section === "topics" && slug.startsWith("topics/")) return " active"
    if (section === "weekly-intel" && slug.startsWith("weekly-intel/")) return " active"
    return ""
  }

  return (
    <div class="site-nav-container">
      <nav class="site-nav">
        <a
          href={resolveRelative(fileData.slug!, "index" as any)}
          class="nav-brand internal"
        >
          <span class="brand-icon">🌿</span>
          <span class="brand-text">知識庫</span>
        </a>
        <div class="nav-links">
          <a
            href={resolveRelative(fileData.slug!, "readings/" as any)}
            class={`nav-link internal${activeClass("readings")}`}
          >
            文章
          </a>
          <a
            href={resolveRelative(fileData.slug!, "concepts/" as any)}
            class={`nav-link internal${activeClass("concepts")}`}
          >
            概念
          </a>
          <a
            href={resolveRelative(fileData.slug!, "topics/" as any)}
            class={`nav-link internal${activeClass("topics")}`}
          >
            主題
          </a>
          <a
            href={resolveRelative(fileData.slug!, "weekly-intel/" as any)}
            class={`nav-link internal${activeClass("weekly-intel")}`}
          >
            週報
          </a>
        </div>
        <div class="search">
          <button class="search-button" aria-label="搜尋">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
              <title>Search</title>
              <g class="search-path" fill="none">
                <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
            <span class="search-label">搜尋</span>
          </button>
          <div class="search-container">
            <div class="search-space">
              <input
                autocomplete="off"
                class="search-bar"
                name="search"
                type="text"
                aria-label="搜尋文章與概念"
                placeholder="搜尋文章與概念…"
              />
              <div class="search-layout" data-preview={true}></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

SiteNav.css = searchStyle + "\n" + siteNavStyle
SiteNav.afterDOMLoaded = searchScript

export default (() => SiteNav) satisfies QuartzComponentConstructor
