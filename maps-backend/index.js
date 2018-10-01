const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('build'))
app.use(bodyParser.json())

// "database" to save jsons received from client side
let paths = []


app.get('/paths', (req, res) => {
  res.json(paths)
})


const generateId = () => {
  const maxId = paths.length > 0 ? paths.map(n => n.id).sort().reverse()[0] : 1
  return maxId + 1
}

app.post('/paths', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const path = {
    content: body.content,
    id: generateId()
  }

  paths = paths.concat(path)

  response.json(path)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
