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

app.listen(1234)