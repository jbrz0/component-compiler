const banner = (bannerText) => {

  if (bannerText === null || bannerText === undefined) bannerText = ''

  return `<div class="banner">
  ${bannerText}
</div>`
}

export default banner
