// ['A', 'B', 'C'].forEach((val) => console.log(val));

// Le callback synchrone s'exécute dans la même pile d'appel
// le callback ici est appelé par forEach

// ^
// |
// |
// |=> - => - =>
// |forEach
// +-------------------------------------------------->

setTimeout(() => console.log(1), 500);
setTimeout(() => console.log(2), 0);
setTimeout(() => console.log(3), 1000);
setTimeout(() => console.log(4), 500);

console.log(5)


// A - 1 2 3 4 5
// B - 2 5 1 4 3
// C - 5 2 1 4 3 <--
// D - 1 4 2 3 5

// Coté C++ (Node.js étant écrit en C++)
// a été programmée une boucle appelée Bouche d'Evenement (Event Loop)
// La boucle ressemble à :
// do {
//   executeJSCallstack();
// } while (hasPendingTasks());

// Le callback asynchrone s'exécutera dans une nouvelle pile d'appel
// le callback ici est n'est pas appelé par setTimeout


// ^
// |
// |
// |                              lg               lg    lg              lg
// |st - st - st - st - lg ..⟳..  cb2  ..⟳..       cb1 - cb4 ..⟳..       cb3
// 0-----2ms------------7ms-------10ms-------------500ms-----------------1000ms----->
// Sortie               5         2                1     4               3

// A 2ms -> setTimeout(() => {}, 0);
// File d'attente :
// 2ms    : cb2
// 500ms  : cb1 - cb4
// 501ms  : cb4
// 502ms  :
// 1000ms : cb3
// 1001ms :
// Le programme s'arrête

// Video Youtube
// Jake Archibald (Google)
// Service Worker (mode hors-ligne du navigation)
// Lib : idb (Manipuler IndexedDB)

// 2018 -> JSConf.asia
// In The Loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0


