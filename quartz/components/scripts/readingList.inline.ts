function setupReadingList() {
  const root = document.querySelector(".reading-list")
  if (!root) return
  // 收成非 null 的區域常數：TS 對 const 的 narrowing 在巢狀函式（closure）內不保證存續，
  // 直接用 container 會讓每個 querySelector 都報 TS18047。
  const container: Element = root

  const cards = Array.from(container.querySelectorAll(".reading-card")) as HTMLElement[]
  const countEl = container.querySelector(".list-count") as HTMLElement
  const paginationEl = container.querySelector(".pagination") as HTMLElement
  const pageSize = 10

  let currentPage = 1

  function getFilters() {
    const impact =
      (container.querySelector('[data-filter="impact"]') as HTMLSelectElement)?.value ?? "all"
    const type =
      (container.querySelector('[data-filter="type"]') as HTMLSelectElement)?.value ?? "all"
    const domain =
      (container.querySelector('[data-filter="domain"]') as HTMLSelectElement)?.value ?? "all"
    const sort =
      (container.querySelector('[data-filter="sort"]') as HTMLSelectElement)?.value ?? "date-desc"
    return { impact, type, domain, sort }
  }

  function getFilteredCards() {
    const { impact, type, domain, sort } = getFilters()

    let filtered = cards.filter((card) => {
      if (impact !== "all" && card.dataset.impact !== impact) return false
      if (type !== "all" && card.dataset.type !== type) return false
      if (domain !== "all" && card.dataset.domain !== domain) return false
      return true
    })

    filtered.sort((a, b) => {
      switch (sort) {
        case "date-asc":
          return (a.dataset.date ?? "").localeCompare(b.dataset.date ?? "")
        case "impact-desc": {
          const ai = parseInt(a.dataset.impactOrder ?? "0")
          const bi = parseInt(b.dataset.impactOrder ?? "0")
          if (bi !== ai) return bi - ai
          return (b.dataset.date ?? "").localeCompare(a.dataset.date ?? "")
        }
        case "date-desc":
        default:
          return (b.dataset.date ?? "").localeCompare(a.dataset.date ?? "")
      }
    })

    return filtered
  }

  function render() {
    const filtered = getFilteredCards()
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
    if (currentPage > totalPages) currentPage = totalPages

    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    const pageCards = filtered.slice(start, end)
    const visible = new Set(pageCards)

    cards.forEach((card) => {
      card.style.display = visible.has(card) ? "" : "none"
    })

    // 依排序結果重排 DOM。只設 display 不夠——DOM 順序是建構時的日期新→舊，
    // 光靠 display 會讓「日期舊→新」「Impact 高→低」選中正確的卡片、卻仍以
    // 原順序顯示。appendChild 對既有節點是移動、不是複製。
    const grid = container.querySelector(".card-grid")
    if (grid) {
      pageCards.forEach((card) => grid.appendChild(card))
    }

    countEl.textContent = `${filtered.length} 篇`
    renderPagination(totalPages)
  }

  function renderPagination(totalPages: number) {
    if (totalPages <= 1) {
      paginationEl.innerHTML = ""
      return
    }

    let html = ""
    if (currentPage > 1) {
      html += `<button class="page-btn" data-page="${currentPage - 1}">‹</button>`
    }
    for (let i = 1; i <= totalPages; i++) {
      const active = i === currentPage ? " active" : ""
      html += `<button class="page-btn${active}" data-page="${i}">${i}</button>`
    }
    if (currentPage < totalPages) {
      html += `<button class="page-btn" data-page="${currentPage + 1}">›</button>`
    }
    paginationEl.innerHTML = html
  }

  container.querySelectorAll(".filter-select").forEach((sel) => {
    sel.addEventListener("change", () => {
      currentPage = 1
      render()
    })
  })

  paginationEl.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest(".page-btn") as HTMLElement | null
    if (!btn) return
    currentPage = parseInt(btn.dataset.page ?? "1")
    render()
    container.scrollIntoView({ behavior: "smooth", block: "start" })
  })

  render()
}

document.addEventListener("nav", setupReadingList)
