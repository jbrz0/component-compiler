const hero = (items) => {

  const title = items[0]
  let btn = items[1]

  if (btn.substr(0, 1) === "(") btn = btn.substring(1, btn.length - 1)

  return `<div class="container hero">
  <div class="hero-text">
    <h1>${title}</h1>
    <button class="get-started">${btn}</button>
  </div>
  <div class="hero-img">
    <img src="hero.svg" alt="Hero Graphic" class="hero-graphic" />
  </div>
</div>`
}

export default hero
