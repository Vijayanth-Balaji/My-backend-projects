const os = require('os');
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
var free=os.freemem();
console.log(`${free/1024/1024/1024}`);
var total=os.totalmem()
console.log(`${total/1024/1024/1024}`);