const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express(); // createApplication

// L'ordre des routes est important (la première définie sera testée en premier)

// app.all('/url')
// Method HTTP : toutes
// URL : dans l'url :var défini un param
// ex : GET /api/hello/Romain
// req.params.name === 'Romain'
app.all('/api/hello/:name', (req, res) => {
  const name = req.params.name;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ msg: 'Hello ' + name }));
});

// Intercepter l'erreur 404 (équivalent wildcard en Angular **)
app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not found\n');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
