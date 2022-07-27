const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('client connecté');
  socket.pipe(process.stdout); // affiche la requête
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-Type: text/html; charset=UTF-8\r\n');
  socket.write('\r\n');
  socket.write('<h2>Hello</h2>\r\n');
  socket.write('\r\n');
  socket.end(); // obligatoire pour envoyer la réponse
})

server.on('listening', () => {
  console.log('serveur est prêt');
});

server.on('error', () => {
  console.log('une erreur s est produit');
});


server.listen(8080);

