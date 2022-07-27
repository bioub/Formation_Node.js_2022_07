const fs = require('fs/promises');
const path = require('path');

const prettierRcPath = path.resolve(__dirname, '.prettierrc');
const prettierRcCopyPath = path.resolve(__dirname, '.prettierrc.copy');

// Async - Callback Hell / Pyramid of Doom
// fs.readFile(prettierRcPath, (err, buffer) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile(prettierRcCopyPath, buffer, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Copy done');
//       }
//     });
//   }
// });

// si dans .then (ou .catch) on retourne une promesse
// ici le retour de writeFile
// on a le droit de ne pas imbriquer les .then et .catch
// donc plus de pyramide et le catch fonctionne pour les opérations
fs.readFile(prettierRcPath)
  .then((buffer) => fs.writeFile(prettierRcCopyPath, buffer))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log(err))
