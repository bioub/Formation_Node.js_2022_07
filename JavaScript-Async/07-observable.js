// function interval(delay) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve();
//       console.log('1s setInterval')
//     }, delay);
//   });
// }

// interval(1000).then(() => console.log('1s then'));

// Les promesses ne fonctionne que si le callback async est appelé une fois
// setTimeout OK -> setInterval KO
// addEventListener -> KO
// readFile OK -> readFileLineByLine KO
// requete HTTP OK -> WebSocket KO
// Dans Angular le changement de paramètre dans l'URL KO

// Pour cela AngularJS utilisait les promesses
// Angular utilise Observable (Promise++), qui entre autre fonctionne pour les appels multiples
// Pour l'instant on passe par des bibliothèque, ex: rxjs
// Observable a été proposé au TC39 (norme ES)
// TC39 a publié une norme appelé Asynchronous Iteration qui permet de faire la même chose

const { Observable } = require('rxjs');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delay);
  });
}

interval(1000).subscribe(() => console.log('1s observable'));
