const os = require('os')    // build in moudle is there, not need to build
                            // 2, just 'os'  not  './os'

// info about current user
const user = os.userInfo()
console.log(user)

// method return the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentsOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(currentsOS)