var express = require('express')
var server = express()

var App = require('')
var PORT = 3000


server.use(express.static('public'))

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

server.get('/*', (req, res) => {
  res.send(App)
})