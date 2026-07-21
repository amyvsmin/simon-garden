import type { QuartzPluginData } from "../plugins/vfile"

/**
 * SimonVault 的 reading／concept／topic／weekly-intel 用到的 frontmatter 欄位。
 *
 * 為什麼需要這個：Quartz 的 `DataMap["frontmatter"]` 本身帶 index signature、
 * 存取自訂欄位不會報錯，但元件普遍寫成 `const fm = f.frontmatter ?? {}`，
 * `?? {}` 會讓 TypeScript 把型別收斂成 `{}`，於是每一次 `fm.impact` 都報
 * TS2339「Property 'impact' does not exist on type '{}'」——這是本 repo
 * 那 77 個 TS2339 的唯一成因。
 *
 * 用 `vaultFm(x.frontmatter)` 取代 `x.frontmatter ?? {}` 即可：回傳型別明確、
 * 缺欄位時是 undefined 而不是編譯錯誤，也不必動 Quartz 的 upstream 檔案
 * （在 `declare module "vfile"` 裡重複宣告同名屬性會衝突）。
 *
 * 欄位定義見 SimonVault `0-context/skills/knowledge-wiki/references/templates.md`；
 * `domain` 的 8 值清單見 `9-ops/specs/2026-07-21-reading-domain-taxonomy.md`。
 */
export interface VaultFrontmatter {
  // 共通
  title?: string
  date?: string
  created?: string
  published?: string
  description?: string
  tags?: string[]
  aliases?: string[]
  lang?: string
  comments?: boolean | string
  slug?: string
  social?: string

  // reading
  type?: string
  domain?: string
  impact?: string
  stage?: string
  tldr?: string
  icon?: string
  concepts?: string[]
  url?: string
  last_updated?: string

  // concept
  category?: string
  confidence?: string
  status?: string

  // weekly-intel
  issue?: string
  cover_range?: string
  highlights?: string[]

  // 其餘自訂欄位照舊可存取（值為 unknown、需自行 cast）
  [key: string]: unknown
}

/** 把 QuartzPluginData 的 frontmatter 轉成有型別的物件；缺 frontmatter 時回空物件。 */
export function vaultFm(frontmatter: QuartzPluginData["frontmatter"]): VaultFrontmatter {
  return (frontmatter ?? {}) as VaultFrontmatter
}
