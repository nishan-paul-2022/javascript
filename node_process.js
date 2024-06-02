import process from 'process';

console.log(process.arch);
console.log(process.pid);
console.log(process.platform);
console.log(process.version);
console.log(process.versions);
console.log(process.cwd());
console.log(process.hrtime());
console.log(process.memoryUsage());
console.log(process.uptime());

process.argv.forEach((value, index) => {
	console.log(`${index}: ${value}`);
});

/*  
TTY is being used iternally :
	- process.stdin / tty.ReadStream instance
	- process.stdout / tty.WriteStream instance
	- process.stderror

if (process.stdout.isTTY) : console.log('running in terminal environment')

node:tty module provides classes for terminal I/O streams in node.js
for most cases, we can use process.stdin, process.stdout, process.stderr for terminal interactions
node:tty module is useful for advanced scenarios requiring fine-grained control over terminal interactions. */
