const { Jeu } = require('./jeu');

const partie = new Jeu();
partie.jouer();

// Exercice CommonJs
// Avec le système de modules CommonJS (la variable exports et la fonction require)
// Ecrire une version du Jeu en 3 fichiers
// random.js doit exporter getRandomInt
// jeu.js doit importer getRandomInt et exporter Jeu
// main.js doit importer Jeu

// vous devrez exécuter main.js avec Node pour démarrer la partie
// selon où vous vous trouvez en ligne de commande :
// ex : node main.js
// ex : node Exercice-Jeu/main.js
