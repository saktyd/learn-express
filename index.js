const express = require('express');
const app = express();
const port = 8000;

const users = [
  {
    id: 1,
    name: 'Haidar'
  },
  {
    id: 2,
    name: 'Sakti'
  },
  {
    id: 3,
    name: 'Ajin'
  },
  {
    id: 4,
    name: 'Bara'
  },
  {
    id: 5,
    name: 'Mario'
  },
  {
    id: 6,
    name: 'Fahri'
  }
];

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  });
});

app.get('/users', (req, res) => {
  res.send({
    message: 'List of users',
    data: users
  });
});

app.listen(port, () =>
  console.log(`Example app listening on localhost:${port}!`)
);
