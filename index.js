import fs from 'fs'
import readline from 'readline'

// Components
import components from './components/index.js'

// Parameters
import params from './params.js'

const readInterface = readline.createInterface({
  input: fs.createReadStream('./layout/index.odd'),
  // output: process.stdout,
  output: false,
  console: false
})

// Get title from only the first bit
let title = 'Title'
let text = ''

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
      completed = true
    }

    if (completed = true) resolve('Saved Everything!')
  })
})

iterate.then((msg) => {

  fs.writeFile('./dist/index.html', components(params), err => {
    if (err) throw err
    console.log(msg)
  })
})
