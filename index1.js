const http = require('http')
const fs = require('fs')
const path = require('path')

const message = 'hello Alex'

const server = http.createServer((req,res) =>{
res.end(message)
console.log(req.url)

// if(req.url === '/'){
//     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,data)=>{
//         if (err){
//             throw err
//         }
//         res.writeHead(200,{
//             'Content-Type': 'text/html'
//         })
//         res.end(data)
//     })
// }
// else if(req.url === '/contact'){
//     fs.readFile(path.join(__dirname, 'public', 'contact.html')), (err,data)=>{
//         if (err){
//             throw err
//         }
//         res.writeHead(200,{
//             'Content-Type': 'text/html'
//         })
        
//         res.end(data)
//     }
// } 

    
})

server.listen(3000,()=>{
    console.log('Server has been startsd...')
})