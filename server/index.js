const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const todos = [
  {
    id: 1,
    title: 'Gerai pailseti',
  },
];

app.get('/', async (req, res) => {
  res.send(todos);
});

app.post('/', async (req, res) => {
  const newTodo = { id: Date.now(), ...req.body };
  todos.push(newTodo);
  res.send(newTodo);
});

app.listen(port, () => {
  console.log(`it works on ${port} port`);
});
