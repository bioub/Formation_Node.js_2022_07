const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express(); // createApplication

// L'ordre des routes est important (la première définie sera testée en premier)

// app.all('/url')
// Method HTTP : toutes
// URL : /url passée en param
app.all('/api/hello', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ msg: 'Hello' }));
});

// app.METHOD (Method HTTP : GET, POST, PUT, DELETE...)
// Method HTTP : méthode utilisée en nom de fonction
// URL : /url passée en param
// ici : GET /
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Home\n');
});

app.get('/hello', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello\n');
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
