const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

// -----------------------------------------------------------------------------
// EXPRESS PLUGINS

// Use body-parser into express
app.use(bodyParser.json())

// -----------------------------------------------------------------------------
// DATA

let nextId = 8
let users = [
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
  },
  {
    id: 7,
    name: 'Jonathan'
  }
]

// -----------------------------------------------------------------------------
// EXPRESS ROUTES/ENDPOINTS

// Get hello world
app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

// List all users
app.get('/users', (req, res) => {
  res.send({
    message: 'List of users',
    data: users
  })
})

// Create new user
app.post('/users', (req, res) => {
  // Check if name in request body is exist
  if (req.body.name) {
    // Get new user data from request
    const newUser = {
      id: nextId,
      name: req.body.name
    }

    // Concat new user into newUsers variable
    // Then replace old users with new users
    users = users.concat(newUser)
    // Increment nextId
    nextId++

    // Send response
    res.send({
      message: 'Created new user',
      newUser: newUser,
      data: users
    })
  }
})

app.delete('/users', (req, res) => {
  users = []

  res.send({
    message: 'All users has been deleted',
    users: users
  })
})

app.delete(`/users/:id`, (req, res) => {
  const idUser = Number(req.params.id)

  users = users.filter(user => user.id !== idUser)

  res.send({
    message: 'One user has been deleted',
    id: idUser
  })
})

// -----------------------------------------------------------------------------
// RUN EXPRESS

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
