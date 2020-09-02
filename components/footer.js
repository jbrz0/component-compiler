const footer = (text) => {

  return `<div class="footer">
  <div class="container">
    <img src="logo.svg" alt="Logo" class="logo-footer" />
    <div class="email">Email Us: <a href="mailto:${text}">${text}</a></div>
  </div>
</div>`
}

export default footer
