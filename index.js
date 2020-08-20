import fs from 'fs'
import readline from 'readline'

// Components
// import head from './components/head.js'
import components from './components/index.js'

const readInterface = readline.createInterface({
  input: fs.createReadStream('./layout/index.odd'),
  // output: process.stdout,
  output: false,
  console: false
})

// Get title from only the first bit
let title = 'Title'

readInterface.on('line', function(line) {

  if (line.slice(0, 5) === "title") {
    const param = line.split('=')[1].trim()
    title = param
  }

})

//^ Write to our file
fs.writeFile('./dist/index.html', components(title), err => {
  if (err) throw err
  console.log('Saved Header!')
})


  // // Get title from only the first bit
  // if (line.slice(0, 5) === "title") {
  //   const param = line.split('=')[1].trim()

  //   fs.appendFile('./dist/index.html', `<title>${param}</title>`, err => {
  //     if (err) throw err
  //     console.log('Saved Title!')
  //   })
  // }
