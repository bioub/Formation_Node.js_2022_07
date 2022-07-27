// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// timeout(1000).then(() => console.log('1s'))

// function timeout(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

const { promisify } = require('util');

const timeout = promisify(setTimeout);

// timeout(Math.random() * 1000, 'A').then((val) => console.log(val))
// timeout(Math.random() * 1000, 'B').then((val) => console.log(val))

// combine plusieurs promesses en une,
// qui sera résolue (le callback de .then est appelé)
// lorsque toute auront été résolues
// la valeur résolue sera un tableau avec les valeurs résolues
// par chaque promesses (ici A et B)
// dans l'ordre de création et non de résolution (ici toujours [A, B])
Promise.all([
  timeout(Math.random() * 1000, 'A'),
  timeout(Math.random() * 1000, 'B'),
]).then((values) => {
  console.log(values);
})
