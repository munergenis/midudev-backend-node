const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')

const app = express()

const PORT = process.env.PORT ?? 1234

// middlewares
app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  const pokemon = req.body
  
  pokemon.timestamp = Date.now()

  res.status(201).json(pokemon)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})