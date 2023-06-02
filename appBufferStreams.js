const fs = require('fs')

const readStream = fs.createReadStream('./docs/text.txt')
const writeSteam = fs.createWriteStream('./docs/new-text.txt')

// readStream.on('data', (chunk) =>{
//     writeSteam.write('\n-----chunk start------\n')
//     writeSteam.write(chunk)
//     writeSteam.write('\n-----chunk end------\n')
// })

const handleError = () =>{
    console.log('Error');
    readStream.destroy()
    writeSteam.end('Finished with error....')
}

readStream
    .on('error', handleError)
    .pipe(writeSteam)
    .on('error', handleError)