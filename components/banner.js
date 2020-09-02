const banner = (bannerText) => {

  if (bannerText === null || bannerText === undefined) bannerText = ''

  return `<div class="banner">
  <img src="banner.svg" alt="banner" />
  <span>${bannerText}</span>
  <img src="banner.svg" alt="banner" />
</div>`
}

export default banner
