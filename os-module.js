const os=require('os')

//info about user

const user=os.userInfo()
console.log(user);

// ifo about uptime of the system
console.log(`the uptime of system is ${os.uptime()} seconds`);


// current os info 

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log((currentOS));