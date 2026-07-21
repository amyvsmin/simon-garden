import test, { describe } from "node:test"
import assert from "node:assert"
import { categoryVisualGroup } from "./conceptCategoryVisual"

// 資料驅動：受控 14 值逐一斷言族群（值的權威定義：vault spec 3.1）。
// build、tsc、prettier 都驗不出「網路基礎接錯 class」這種語意錯，只有這張表驗得出。
const CASES: [string, ReturnType<typeof categoryVisualGroup>][] = [
  ["資安・風險管理", "security"],
  ["資安・資產安全", "security"],
  ["資安・架構與工程", "security"],
  ["資安・網路安全", "security"],
  ["資安・身分與存取", "security"],
  ["資安・評估與測試", "security"],
  ["資安・安全營運", "security"],
  ["資安・軟體開發安全", "security"],
  ["AI 與 Agent", "ai"],
  ["運算基礎", "foundation"],
  ["網路基礎", "network"],
  ["知識管理", "km"],
  ["寫作・學習・職涯", "writing"],
  ["其他", "default"],
]

describe("categoryVisualGroup", () => {
  test("受控 14 值逐一對映正確族群", () => {
    for (const [value, group] of CASES) {
      assert.strictEqual(categoryVisualGroup(value), group, `「${value}」應為 ${group}`)
    }
  })

  test("14 值恰好覆蓋、無重複", () => {
    assert.strictEqual(new Set(CASES.map(([v]) => v)).size, 14)
  })

  test("資安・前綴的未知子桶也歸 security（日後拆桶免改站台）", () => {
    assert.strictEqual(categoryVisualGroup("資安・新拆的桶"), "security")
  })

  test("表外值與空字串落 default（不猜類）", () => {
    assert.strictEqual(categoryVisualGroup("資安"), "default") // 舊值、受控化後不存在
    assert.strictEqual(categoryVisualGroup(""), "default")
    assert.strictEqual(categoryVisualGroup("AI"), "default")
  })
})
