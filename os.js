const os = require('os')

console.log('opepation system:',os.platform())

console.log('processor architecture:', os.arch())

console.log('process information', os.cpus())

console.log('free memory:', os.freemem())

console.log('total memory:', os.totalmem())

console.log('home directory', os.homedir())

console.log('system enabled', os.uptime())