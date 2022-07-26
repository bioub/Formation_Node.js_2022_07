// https://nodejs.org/dist/latest-v16.x/docs/api/process.html

const process = require('process');

// Pour manipuler les arguments et options passées en ligne de commande
// ex: node 02-process.js --print-width 10
// Bibliothèques : commander, yargs, minimist, nopt, meow
console.log(process.argv);

// Dans un programme en ligne de commande quand on fait référence à un fichier en
// relatif, le chemin dépend de où l'on se trouve dans le Terminal (Current Working Dir, CWD)
process.chdir('..'); // cd ..

console.log(process.cwd()); // Current Working Dir

// Entrées/Sorties Standard
// Le clavier process.stdin, le terminal process.stdout, une sortie d'erreur process.stderr

// Consommation CPU et mémoire du process
console.log(process.cpuUsage());
console.log(process.memoryUsage());

// Les variables d'environnements
console.log(process.env);
console.log(process.env.PATH);

// si NODE_ENV vaut production, la commande npm install, n'installerais pas les devDependencies
console.log(process.env.NODE_ENV);

// si 0 tout va bien
// sinon on indique une erreur
process.exit(1); // kill le process (quitte Node)
