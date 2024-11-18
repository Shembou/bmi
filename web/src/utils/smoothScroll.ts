export const smoothScroll = (e: React.MouseEvent, slug: string | undefined) => {
  e.preventDefault()
  const targetElement = document.querySelector(`#${slug}`)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', `#${slug}`)
  }
}

export const scrollIntoId = (slug: string | undefined) => {
  const targetElement = document.querySelector(`#${slug}`)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', `#${slug}`)
  }
}
