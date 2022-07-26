// importe readline depuis le binaire de Node (readline n'est pas global)
const readline = require('readline'); // readline.js dans le binaire (.exe) de Node.js
const { getRandomInt } = require('./random');

class Jeu {
  constructor() {
    // configurer readline pour lui indiquer que la ligne doit être lue sur le clavier
    this.rl = readline.createInterface({
      input: process.stdin, // process est un API global de Node.js, process.stdin représente le clavier
      output: process.stdout, // process.stdout fait référence au Terminal
    });

    this.entierAlea = getRandomInt(0, 100);
  }
  jouer() {
    // le callback sera appelé au moment où on termine une ligne (appui sur la touche ENTREE)
    this.rl.question('Quel est le nombre ? ', (answer) => {
      // on converti answer (de type string) en entier
      const entierSaisi = Number.parseInt(answer, 10);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        // pour rejouer
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        // pour rejouer
        this.jouer();
      } else {
        console.log('Gagné');
        // pour terminer la partie :
        this.rl.close();
      }
    });
  }
}

exports.Jeu = Jeu;
