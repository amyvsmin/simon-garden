import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
    },
  }),
}

const isReading = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug?.startsWith("readings/") === true && p.fileData.slug !== "readings/index"

const isConcept = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug?.startsWith("concepts/") === true && p.fileData.slug !== "concepts/index"

const isReadingOrConcept = (p: { fileData: { slug?: string } }) =>
  isReading(p) || isConcept(p)

const isIndex = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug === "index"

const isDefault = (p: { fileData: { slug?: string } }) =>
  !isReading(p) && !isConcept(p) && !isIndex(p)

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ReadingHeader(),
      condition: isReading,
    }),
    Component.ConditionalRender({
      component: Component.ConceptHeader(),
      condition: isConcept,
    }),
    Component.ConditionalRender({
      component: Component.DashboardHome(),
      condition: isIndex,
    }),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: isDefault,
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: isDefault,
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: isDefault,
    }),
    Component.ConditionalRender({
      component: Component.EnhancedTOC(),
      condition: isReadingOrConcept,
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.EnhancedTOC()),
      condition: isReadingOrConcept,
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: isDefault,
    }),
    Component.ConditionalRender({
      component: Component.EnhancedBacklinks(),
      condition: isReadingOrConcept,
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: isDefault,
    }),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],
  right: [],
}
