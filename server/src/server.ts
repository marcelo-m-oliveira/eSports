import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, nome: 'batata1' },
    { id: 2, nome: 'batata2' },
    { id: 3, nome: 'batata3' },
    { id: 4, nome: 'batata4' },
  ])
})

app.listen(3333)