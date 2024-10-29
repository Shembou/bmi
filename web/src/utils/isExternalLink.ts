const isExternalLink = (href?: string) =>
  href && (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:'))

export default isExternalLink
