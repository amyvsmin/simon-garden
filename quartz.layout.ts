import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.SiteNav()],
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

const isTopic = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug?.startsWith("topics/") === true && p.fileData.slug !== "topics/index"

const isDetailPage = (p: { fileData: { slug?: string } }) =>
  isReading(p) || isConcept(p) || isTopic(p)

const isIndex = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug === "index"

const isFolderIndex = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug === "readings/index" ||
  p.fileData.slug === "concepts/index" ||
  p.fileData.slug === "topics/index"

const isReadingIndex = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug === "readings/index"

const isConceptIndex = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug === "concepts/index"

const isTopicIndex = (p: { fileData: { slug?: string } }) =>
  p.fileData.slug === "topics/index"

const isDefault = (p: { fileData: { slug?: string } }) =>
  !isReading(p) && !isConcept(p) && !isTopic(p) && !isIndex(p) && !isFolderIndex(p)

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: isDetailPage,
    }),
    Component.ConditionalRender({
      component: Component.ReadingHeader(),
      condition: isReading,
    }),
    Component.ConditionalRender({
      component: Component.ConceptHeader(),
      condition: isConcept,
    }),
    Component.ConditionalRender({
      component: Component.TopicHeader(),
      condition: isTopic,
    }),
    Component.ConditionalRender({
      component: Component.DashboardHome(),
      condition: isIndex,
    }),
    Component.ConditionalRender({
      component: Component.ReadingList(),
      condition: isReadingIndex,
    }),
    Component.ConditionalRender({
      component: Component.ConceptList(),
      condition: isConceptIndex,
    }),
    Component.ConditionalRender({
      component: Component.TopicList(),
      condition: isTopicIndex,
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
      condition: isDetailPage,
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.ConditionalRender({
      component: Component.Explorer({ folderDefaultState: "collapsed" }),
      condition: isDefault,
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.EnhancedTOC()),
      condition: isDetailPage,
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: isDefault,
    }),
    Component.ConditionalRender({
      component: Component.EnhancedBacklinks(),
      condition: isDetailPage,
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: isDefault,
    }),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ReadingList(),
      condition: isReadingIndex,
    }),
    Component.ConditionalRender({
      component: Component.ConceptList(),
      condition: isConceptIndex,
    }),
    Component.ConditionalRender({
      component: Component.TopicList(),
      condition: isTopicIndex,
    }),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (p) => !isFolderIndex(p),
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (p) => !isFolderIndex(p),
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (p) => !isFolderIndex(p),
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [{ Component: Component.Darkmode() }],
    }),
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],
  right: [],
}
