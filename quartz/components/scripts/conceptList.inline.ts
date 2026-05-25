function setupConceptList() {
  const container = document.querySelector(".concept-list")
  if (!container) return

  const cards = Array.from(container.querySelectorAll(".concept-card")) as HTMLElement[]
  const countEl = container.querySelector(".list-count") as HTMLElement
  const paginationEl = container.querySelector(".pagination") as HTMLElement
  const pageSize = 20

  let currentPage = 1

  function getFilters() {
    const category = (container.querySelector('[data-filter="category"]') as HTMLSelectElement)?.value ?? "all"
    const confidence = (container.querySelector('[data-filter="confidence"]') as HTMLSelectElement)?.value ?? "all"
    const sort = (container.querySelector('[data-filter="sort"]') as HTMLSelectElement)?.value ?? "date-desc"
    return { category, confidence, sort }
  }

  function getFilteredCards() {
    const { category, confidence, sort } = getFilters()

    let filtered = cards.filter((card) => {
      if (category !== "all" && card.dataset.category !== category) return false
      if (confidence !== "all" && card.dataset.confidence !== confidence) return false
      return true
    })

    filtered.sort((a, b) => {
      switch (sort) {
        case "date-asc":
          return (a.dataset.date ?? "").localeCompare(b.dataset.date ?? "")
        case "name-asc":
          return (a.dataset.name ?? "").localeCompare(b.dataset.name ?? "")
        case "refs-desc": {
          const ar = parseInt(a.dataset.refs ?? "0")
          const br = parseInt(b.dataset.refs ?? "0")
          return br - ar
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
    const visible = new Set(filtered.slice(start, end))

    cards.forEach((card) => {
      card.style.display = visible.has(card) ? "" : "none"
    })

    countEl.textContent = `${filtered.length} 個`
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

document.addEventListener("nav", setupConceptList)
