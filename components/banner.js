const banner = (bannerText) => {

  if (bannerText === null || bannerText === undefined) bannerText = ''

  return `<div style="background: blue">
  ${bannerText}
</div>`
}

export default banner
