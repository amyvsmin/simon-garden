function setupEnhancedToc() {
  const fills = document.querySelectorAll(".toc-progress-fill") as NodeListOf<HTMLElement>
  if (fills.length === 0) return

  function updateProgress() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
    fills.forEach((el) => {
      el.style.width = progress + "%"
    })
  }

  window.addEventListener("scroll", updateProgress, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", updateProgress))
  updateProgress()
}

document.addEventListener("nav", setupEnhancedToc)
