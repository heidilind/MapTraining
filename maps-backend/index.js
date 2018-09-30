const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

let paths = [
    {
      "content": [
        {
          "name": "Path 1",
          "key": 1538157896402,
          "path": [
            {
              "position": {
                "lat": 60.158532226201196,
                "lng": 24.9289542327881
              },
              "key": 1538157892371
            },
            {
              "position": {
                "lat": 60.161906104440234,
                "lng": 24.91848288879396
              },
              "key": 1538157893253
            },
            {
              "position": {
                "lat": 60.16677412839074,
                "lng": 24.922688592529312
              },
              "key": 1538157894654
            }
          ]
        }
      ],
      "id": 5
    }
 ]



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
