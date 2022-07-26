import { hello } from './hello.mjs';

console.log(hello('Romain'));

// Pour pouvoir utiliser les modules ESM (Node 14 minimum)
// soit on renomme ses fichiers .mjs (module JS)
// soit on ajoute la clé "type": "module" au fichier package.json