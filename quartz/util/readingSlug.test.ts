import test, { describe } from "node:test"
import assert from "node:assert"
import { isReadingSlug } from "./readingSlug"

describe("isReadingSlug", () => {
  test("日期格式的 reading 命中", () => {
    assert.strictEqual(isReadingSlug("readings/2026-07-21-ai-adoption-five-stage-map"), true)
    assert.strictEqual(isReadingSlug("readings/2026-01-01-a"), true)
    assert.strictEqual(isReadingSlug("readings/2026-05-28-to-md-build-log"), true)
  })

  test("索引檔一律排除", () => {
    assert.strictEqual(isReadingSlug("readings/_index-2026"), false)
    assert.strictEqual(isReadingSlug("readings/index-by-topic"), false)
    assert.strictEqual(isReadingSlug("readings/index"), false)
  })

  test("日期開頭的巢狀路徑排除（結尾用 [^/]+、不是 .+）", () => {
    assert.strictEqual(isReadingSlug("readings/2026-01-01-x/nested"), false)
    assert.strictEqual(isReadingSlug("readings/2026-01-01-x/assets/img"), false)
  })

  test("非 readings 目錄與格式不符者排除", () => {
    assert.strictEqual(isReadingSlug("concepts/2026-01-01-x"), false)
    assert.strictEqual(isReadingSlug("readings/2026-7-1-short-date"), false)
    assert.strictEqual(isReadingSlug("readings/notes"), false)
    assert.strictEqual(isReadingSlug(undefined), false)
  })
})
