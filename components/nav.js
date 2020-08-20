const nav = (items) => {

const links = items.map(item => `<a href="#">${item}</a>\n`).join("  ")



  return `<div class="nav">\n
  ${links}
</div>`
}

export default nav
