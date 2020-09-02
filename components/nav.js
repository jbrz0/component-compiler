const nav = (items) => {

const links = items.map(item => {

  // Detect brackets for a button
  let brackets = false
  if (item.substr(0, 1) === '(') {
    brackets = true
    item = item.substring(1, item.length - 1)
  }
  //   const title = items[0]
  // let btn = items[1]

  return `<a class="${brackets ? 'highlight' : ''}" href="#">${item}</a>\n`
}).join("  ")

  return `<div class="nav">\n
  <img src="logo.svg" alt="Logo" class="logo" />
  <div class="text-wrap">\n
  ${links}
  </div>
</div>`
}

export default nav
