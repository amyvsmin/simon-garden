import { QuartzComponent, QuartzComponentConstructor } from "./types"

const SectionDivider: QuartzComponent = () => {
  return (
    <div class="section-divider" aria-hidden="true">
      <span>···</span>
    </div>
  )
}

SectionDivider.css = `
.section-divider {
  display: flex; align-items: center; gap: 16px;
  margin: 36px 0; color: var(--gray);
  &::before, &::after {
    content: ""; flex: 1; height: 1px; background: var(--lightgray);
  }
  span { font-size: 8px; letter-spacing: 8px; }
}
`

export default (() => SectionDivider) satisfies QuartzComponentConstructor
