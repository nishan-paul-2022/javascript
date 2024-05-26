import os from 'os';

console.log('process.arch :', process.arch);

console.log('os.arch() :', os.arch());
console.log('os.totalmem() :', os.totalmem());
console.log('os.freemem() :', os.freemem());
console.log('os.homedir() :', os.homedir());
console.log('os.tmpdir() :', os.tmpdir());
console.log('os.hostname() :', os.hostname());
console.log('os.release() :', os.release());
console.log('os.type() :', os.type());
console.log('os.userInfo() :', os.userInfo());
console.log('os.platform() :', os.platform());

console.log('os.cpus() :', os.cpus());

console.log('os.endianness() :', os.endianness());
console.log('os.loadavg() :', os.loadavg());
console.log('os.networkInterfaces() :', os.networkInterfaces());
console.log('os.uptime() :', os.uptime());

/* 
operating-system related utility functions
process is a global object */
