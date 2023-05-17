const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'tast'), (err) => {
// if(err){
//     throw err
// }
// console.log('folder creat')
// })

const filePaht = path.join(__dirname, 'test', 'test.txt')

fs.writeFile(filePaht, 'Hello NodeJS!', err =>{
    if(err){
        throw err
    }
    console.log('file creat')
})
fs.appendFile(filePaht, '\nHello Adain!', err =>{
    if(err){
        throw err
    }
    console.log('file changed')
})

fs.readFile(filePaht,'utf-8', (err, content) => {
    if(err){
        throw err
    }
    console.log(content)
    // const data = Buffer.from(content)
    // console.log('Content:', data.toString())
})