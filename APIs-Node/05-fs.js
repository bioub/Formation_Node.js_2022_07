const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

const prettierRcPath = path.resolve(__dirname, '.prettierrc');

// Dans fs la plupart des fonctions existent sous 3 formes

// Sync : tant que le fichier n'est pas lu le thread est bloqué
// Le ligne se lisent et s'écrivent dans l'ordre
const buffer = fs.readFileSync(prettierRcPath);
console.log(buffer.toString('utf-8'));

// Async (basé sur des callbacks)
// Dans fs les callbacks sont normés
// - (err) => {} si pas de retour attendu
// - (err, val) => {} si on attend un retour
// au moment de lire le fichier le thread est libéré (le fichier est lu dans un autre thread, transparent en JS appelée Worker)
// les lignes ne s'exécutent pas dans l'ordre
fs.readFile(prettierRcPath, (err, buffer) => {
  // console.log('2');
  console.log(buffer.toString('utf-8'));
});
// console.log('1');

// Async (basé sur des promesses)
// au moment de lire le fichier le thread est libéré (le fichier est lu dans un autre thread, transparent en JS appelée Worker)
// les lignes ne s'exécutent pas dans l'ordre
// Promise fait partie de la norme JS (depuis 2015)
fs.promises.readFile(prettierRcPath)
  .then((buffer) => console.log(buffer.toString('utf-8')))
fsp.readFile(prettierRcPath)
  .then((buffer) => console.log(buffer.toString('utf-8')))

// 1er intérêt là où on passe le callback est normé
// .then(callbackSuccess).catch(callbackFailed)
// fetch().then
