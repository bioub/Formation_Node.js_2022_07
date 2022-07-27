const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  // si la réponse est HTML
  res.send('<h2>Home</h2>') // .send appelle .end
});

app.get('/api/hello/:name', (req, res) => {
  // si la réponse est JSON
  const name = req.params.name;
  res.json({ msg: 'Hello ' + name }); // .json appelle .end
});

app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not found\n');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
