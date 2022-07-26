const path = require('path');

console.log(path.extname('04-path.js')); // .js

console.log(path.join('..', 'APIs-Node', '04-path.js'));
console.log(path.resolve('..', 'APIs-Node', '04-path.js'));

// Pour avoir le chemin vers un fichier qui ne dépende pas
// du CWD (la où on se trouve en ligne de commande) :
// on combine join ou resolve et __dirname (le dossier dans le lequel se trouve ce fichier 04-path.js)
console.log(path.resolve(__dirname, '..', 'APIs-Node', '04-path.js'));
