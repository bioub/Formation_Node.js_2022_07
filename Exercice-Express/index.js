const express = require('express');
const cors = require('cors');

const todos = [
  {
    id: 1,
    title: 'Acheter du pain',
    completed: false,
  },
  {
    id: 2,
    title: 'Introduire Express',
    completed: true,
  },
];

const app = express();

app.use(cors());

function nextId() {
  // 1er appel : acc=0, el={id: 1}, return 1
  // 2e appel : acc=1, el={id: 2}, return 2
  return todos.reduce((acc, el) => acc < el.id ? el.id : acc, 0) + 1;
}

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.get('/api/todos/:todoId', (req, res) => {
  const todoId = +req.params.todoId; // + revient à convertir en number

  const todo = todos.find((el) => el.id === todoId);

  if (!todo) {
    res.status = 404;
    res.json({
      msg: 'Todo not found',
    });
  }

  res.json(todo);
});

app.post('/api/todos', express.json(), (req, res) => {
  const todo = {
    id: nextId(),
    ...req.body
  };

  // pour la validation :
  // libs : joi, ajv, class-validator

  todos.push(todo);

  res.status = 201;
  res.json(todo);
});

app.delete('/api/todos/:todoId', (req, res) => {
  const todoId = +req.params.todoId; // + revient à convertir en number

  const todo = todos.find((el) => el.id === todoId);

  if (!todo) {
    res.status = 404;
    res.json({
      msg: 'Todo not found',
    });
  }

  const index = todos.indexOf(todo);
  todos.splice(index, 1);

  res.json(todo);
});

app.patch('/api/todos/:todoId', express.json(), (req, res) => {
  const todoId = +req.params.todoId; // + revient à convertir en number

  const todo = todos.find((el) => el.id === todoId);

  if (!todo) {
    res.status = 404;
    res.json({
      msg: 'Todo not found',
    });
  }

  delete req.body.id; // on ne garde que l'id de l'URL

  for (const [key, value] of Object.entries(req.body)) {
    todo[key] = value;
  }

  res.json(todo);
});

app.put('/api/todos/:todoId', express.json(), (req, res) => {
  const todoId = +req.params.todoId; // + revient à convertir en number

  const todo = todos.find((el) => el.id === todoId);

  if (!todo) {
    res.status = 404;
    res.json({
      msg: 'Todo not found',
    });
  }

  for (const key of Object.keys(todo)) {
    if (key === 'id') {
      continue;
    }
    delete todo[key];
  }

  delete req.body.id; // on ne garde que l'id de l'URL

  for (const [key, value] of Object.entries(req.body)) {
    todo[key] = value;
  }

  res.json(todo);
});

app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});
