
// // const chalk = require('chalk')
// // const text = require('./data')


// // // console.log(chalk.green(text))

// console.log(__dirname)

// console.log(__filename)

const path = require('path')

console.log('file name:', path.basename(__filename))

console.log('directory name:',path.dirname(__filename))

console.log('file extension:',path.extname(__filename))

console.log('Parse:', path.parse(__filename))

// console.log(path.join(__dirname, 'server', 'index.html'))