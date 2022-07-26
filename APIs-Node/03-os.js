const os = require('os');

console.log(os.cpus());
console.log(os.totalmem() / (1024 * 1024 * 1024)); // en Go
console.log(os.freemem() / (1024 * 1024 * 1024)); // en Go

console.log(os.platform()); // darwin (MacOS)
