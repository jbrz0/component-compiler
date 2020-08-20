import head from './head.js'
import banner from './banner.js'
import nav from './nav.js'

const components = (params) => {

  return `${head(params.title)}\n
${banner(params.bannerText)}\n
${nav(params.navText)}
`
}

export default components
