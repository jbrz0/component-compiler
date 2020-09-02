import fs from 'fs'
import readline from 'readline'

// Components
import components from './components/index.js'

// Parameters
import params from './params.js'

const readInterface = readline.createInterface({
  input: fs.createReadStream('./build/index.odd'),
  // output: process.stdout,
  output: false,
  console: false
})

const iterate = new Promise((resolve, reject) => {
  readInterface.on('line', function(line) {

    let completed = false

    if (line.slice(0, 5) === "title") {
      const param = line.split('=')[1].trim()
      params.title = param
    }
    if (line.slice(0, 6) === "banner") {
      const param = line.split('=')[1].trim()
      params.bannerText = param
    }
    if (line.slice(0, 3) === "nav") {
      const param = line.split('=')[1].trim()
      params.navText = param.split(',').map(item => item.trim())
    }
    if (line.slice(0, 4) === "hero") {
      const param = line.split('=')[1].trim()
      params.heroText = param.split(',').map(item => item.trim())
      completed = true
    }
    if (line.slice(0, 4) === "info") {
      const param = line.split('=')[1].trim()
      params.infoText = param.split(',').map(item => item.trim())
    }
    if (line.slice(0, 11) === "description") {
      const param = line.split('=')[1].trim()
      params.descText = param
    }
    if (line.slice(0, 6) === "footer") {
      const param = line.split('=')[1].trim()
      params.footerText = param
      completed = true
    }

    if (completed = true) resolve('Saved Everything!')
  })
})

iterate.then((msg) => {

  // User specific assets
  fs.copyFile('./build/logo.svg', './dist/logo.svg', err => {if (err) throw err})
  fs.copyFile('./build/hero.svg', './dist/hero.svg', err => {if (err) throw err})
  fs.copyFile('./build/info.svg', './dist/info.svg', err => {if (err) throw err})

  // Library specific assets
  fs.copyFile('./assets/banner.svg', './dist/banner.svg', err => {if (err) throw err})
  fs.copyFile('./assets/style.css', './dist/style.css', err => {if (err) throw err})

  // Write all our iterated parameters to a file
  fs.writeFile('./dist/index.html', components(params), err => {
    if (err) throw err
    console.log(msg)
  })
})
