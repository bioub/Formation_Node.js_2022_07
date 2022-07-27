const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(morgan('tiny'))
// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.url);
//   next();
// });

// permet d'accepter les requete cross-origin
// ex: localhost:4200 qui requete localhost:3000
app.use(cors());

app.get('/', (req, res) => {
  // si la réponse est HTML
  res.send('<h2>Home</h2>')
});

app.get('/api/hello/:name', (req, res) => {
  // si la réponse est JSON
  const name = req.params.name;
  res.json({ msg: 'Hello ' + name });
});

app.post('/api/users', express.json(), (req, res) => {
  // express.json()
  // historiquement bodyParser.json()

  // POST /api/users
  // {"username": "romain"}

  // pour accédé au body parsé

  const user = req.body;

  res.json(user);
})

app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not found\n');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
