const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express(); // createApplication

// L'ordre des routes est important (la première définie sera testée en premier)

// app.use('/prefix')
// Method HTTP : toutes
// URL : toutes les URLs qui commencent par /prefix
app.use('/api', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({msg: 'Hello'}));
});

// app.use
// Method HTTP : toutes
// URL : toutes

app.use((req, res) => {
  // req hérite de http.IncomingMessage (req de http)
  // res hérite de http.ServerResponse (res de http)
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home\n');
  } else if (req.method === 'GET' && req.url === '/hello') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello\n');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found\n');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
