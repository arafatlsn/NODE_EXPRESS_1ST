const express = require('express');
const cors = require('cors');
const { json } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const users = [
  {id: 1, name: 'Arafat', age: 22},
  {id: 2, name: 'Hossan', age: 22},
  {id: 3, name: 'Lisan', age: 22}
]

app.get('/', (req, res) => {
  res.send('hello world from my smart pc pc!')
})

app.get('/users', (req, res) => {
  console.log(req.query.name)
  res.send(users)
})

app.get('/users/:id', (req, res) => {
  console.log(req.query)
  console.log(req.params)
  const id = req.params.id;
  const user = users.find(elFind => elFind.id === parseInt(id));
  res.send(user)
})

app.post('/user', (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
})


app.listen(port, () => {
  console.log('Listening to port', port)
})