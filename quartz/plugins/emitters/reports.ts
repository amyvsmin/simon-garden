import { QuartzEmitterPlugin } from "../types"
import { FilePath, joinSegments } from "../../util/path"
import fs from "node:fs/promises"

export const Reports: QuartzEmitterPlugin = () => ({
  name: "Reports",
  async *emit({ argv }) {
    const source = "static/reports"
    let names: string[]
    try { names = await fs.readdir(source) }
    catch (error) { if ((error as NodeJS.ErrnoException).code === "ENOENT") return; throw error }
    for (const name of names.sort()) {
      if (!/^[a-z0-9][a-z0-9-]*\.html$/.test(name)) continue
      const input = joinSegments(source, name)
      if (!(await fs.lstat(input)).isFile()) throw new Error("Report is not a regular file: " + name)
      const output = joinSegments(argv.output, "reports", name) as FilePath
      await fs.mkdir(joinSegments(argv.output, "reports"), { recursive: true })
      await fs.copyFile(input, output)
      yield output
    }
  },
})
