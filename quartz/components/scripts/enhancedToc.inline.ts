function setupEnhancedToc() {
  const progressFill = document.querySelector(".toc-progress-fill") as HTMLElement | null
  if (!progressFill) return

  function updateProgress() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
    progressFill!.style.width = progress + "%"
  }

  window.addEventListener("scroll", updateProgress, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", updateProgress))
  updateProgress()
}

document.addEventListener("nav", setupEnhancedToc)
