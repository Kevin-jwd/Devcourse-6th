const express = require('express')
const app = express()


// GET + "/"
app.get('/', function (req, res) {
  res.send('Hello World')
})

// API : GET + "http://localhost:1234/test"
app.get('/test', function(req, res) {
    res.send('TEST SUCCESS');
})

// API : GET + "http://localhost:1234/test/1"
app.get('/test/1', function(req, res) {
    res.send('One!');
})

app.listen(1234)