// Stream, un API qui permet de lire, écrire ou transformer
// des suites d'octets (fichiers, réseaux....)
// de façon asynchrone

const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('.prettierrc');
const writeStream = fs.createWriteStream('.prettierrc.zip');
const transformStream = zlib.createGzip();


// readStream.on('data', (buffer) => {
//   writeStream.write(buffer);
// });

// Pipe (récupère la sortie d'un programme pour la passer à l'entrée
// d'un autre)
// cat .prettierrc | zip > .prettierrc.zip

readStream.pipe(transformStream).pipe(writeStream);
