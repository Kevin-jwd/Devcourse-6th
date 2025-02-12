const express = require('express')
const app = express()

app.listen(1234)

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

// API : GET + /hello, /bye, /nicetomettyou 
app.get('/hello', function(req, res) {
    res.send('Hello!');
})

app.get('/bye', function(req, res) {
    res.send('Bye!');
})

app.get('/nicetomeetyou', function(req, res) {
    res.send('Nice to meet U!');
})
