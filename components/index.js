import head from './head.js'
import banner from './banner.js'

const components = (params) => {

  return `${head(params.title)}\n
${banner(params.bannerText)}
`
}

export default components
