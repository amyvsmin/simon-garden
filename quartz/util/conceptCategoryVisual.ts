// concept category（受控 14 值）→ 視覺族群對照。
// 值的權威定義在 vault 9-ops/specs/2026-07-21-concept-category-taxonomy.md 3.1；
// ConceptList（卡片色票）與 ConceptHeader（頁首 gradient class）都從這裡取同一個族群，
// 不各自維護對照——改這裡、兩處同動。缺值情境由 vault 端三道閘門保證不出現，
// 站台端不再做關鍵字兜底判類（舊 getCategory 備援已於受控化時移除）。
export type CategoryVisualGroup =
  | "security"
  | "ai"
  | "km"
  | "foundation"
  | "network"
  | "writing"
  | "default"

export function categoryVisualGroup(category: string): CategoryVisualGroup {
  if (category.startsWith("資安・")) return "security"
  switch (category) {
    case "AI 與 Agent":
      return "ai"
    case "知識管理":
      return "km"
    case "運算基礎":
      return "foundation"
    case "網路基礎":
      return "network"
    case "寫作・學習・職涯":
      return "writing"
    default:
      return "default"
  }
}
