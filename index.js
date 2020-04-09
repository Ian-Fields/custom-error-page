const express = require('express')

const app = express('.index.html')

app.use(express.static('public'))

app.get((request, response) => {
  return response.send('shalom')
})

app.all('*', (request, response) => {
  return response.status(404).send('Ya done messed up now')
})


app.listen(8080)
