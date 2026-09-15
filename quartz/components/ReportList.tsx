import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/reportList.scss"

type Report = { file: string; title: string; date: string; status: string; summary: string }
const ReportList: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const reports = (fileData.frontmatter?.reports ?? []) as Report[]
  return <section class="report-list">
    <p class="report-eyebrow">READING GARDEN · 一頁報告</p>
    <h1>把事情看清楚，再往前一步。</h1>
    <p class="report-intro">功能怎麼運作、選擇有什麼代價、現在停在哪裡。留一頁，慢慢看。</p>
    <div class="report-cards">{reports.map(report => <a class="report-card" data-router-ignore="true" href={"/reports/" + report.file} key={report.file}>
      <div class="report-meta"><span>{report.status}</span><time>{report.date}</time></div>
      <h2>{report.title}</h2><p>{report.summary}</p><span class="report-open">閱讀圖解 <span aria-hidden="true">↗</span></span>
    </a>)}</div>
    {reports.length === 0 && <p class="report-empty">這裡先留白。下一份準備好的報告，會放在這裡。</p>}
    <p class="report-footnote">頁面是導讀，Markdown 正本保留完整決策與版本紀錄。</p>
  </section>
}
ReportList.css = style
export default (() => ReportList) satisfies QuartzComponentConstructor
