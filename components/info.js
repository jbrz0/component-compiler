const info = (items, description) => {

  const title = items[0]
  let subtitle = items[1]

  return `<div class="container info">
  <div class="info-img">
    <img src="info.svg" alt="More Info Graphic" class="info-graphic" />
  </div>
  <div class="info-text">
    <h2>${title}</h2>
    <h4>${subtitle}</h4>
    <p>${description}</p>
  </div>
</div>`
}

export default info
