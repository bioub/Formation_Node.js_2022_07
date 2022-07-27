const fs = require('fs/promises');
const path = require('path');

const prettierRcPath = path.resolve(__dirname, '.prettierrc');
const prettierRcCopyPath = path.resolve(__dirname, '.prettierrc.copy');

// ES2017 async functions (mots clés async/await)
// ne fonctionne qu'avec des fonctions async (mais depuis 2022 top-level await)
// doit utiliser un API basé sur des promesses fs/promises ou fetch
// devant la promesse on rajoute await

async function copy() {
  try {
    const buffer = await fs.readFile(prettierRcPath);
    await fs.writeFile(prettierRcCopyPath, buffer);
    console.log('Copy done');
  } catch (err) {
    console.log(err);
  }
}

copy();
