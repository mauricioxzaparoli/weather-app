const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


app.get('/help', (request, response) => {
  response.send([{
    name: 'Mauricio'
  }, {
    name: 'Sandra'
  }])
})

app.get('/about', (request, response) => {
  response.send('<p>About</p>')
})

app.get('/weather', (request, response) => {
  response.send({
    forecast: '53 degrees',
    location: 'London'
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})