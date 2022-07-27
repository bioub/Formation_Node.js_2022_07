const fs = require('fs');
const path = require('path');

const prettierRcPath = path.resolve(__dirname, '.prettierrc');
const prettierRcCopyPath = path.resolve(__dirname, '.prettierrc.copy');

// Sync
try {
  const buffer = fs.readFileSync(prettierRcPath);
  fs.writeFileSync(prettierRcCopyPath, buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err);
}

// Async - Callback Hell / Pyramid of Doom
fs.readFile(prettierRcPath, (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(prettierRcCopyPath, buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy done');
      }
    });
  }
});
