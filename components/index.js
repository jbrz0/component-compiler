import head from './head.js'
import banner from './banner.js'
import nav from './nav.js'
import hero from './hero.js'
import info from './info.js'
import footer from './footer.js'

const components = (params) => {

  return `${head(params.title)}\n
${banner(params.bannerText)}\n
<div class="wrap">
${nav(params.navText)}\n
${hero(params.heroText)}\n
${info(params.infoText, params.descText)}\n
</div>
${footer(params.footerText)}\n
</body>
</html>
`
}

export default components
