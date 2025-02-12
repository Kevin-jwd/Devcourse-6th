const express = require("express");
const app = express();

app.listen(1234);

// API : GET + "/hello"
app.get("/hello", function (req, res) {
    res.json({
        say: "Hello!",
    });
});

// API : GET + "/bye"
app.get("/bye", function (req, res) {
    res.json({
        say: "Bye!",
    });
});

// API : GET + "/nicetomeetyou"
app.get("/nicetomeetyou", function (req, res) {
    res.json({
        say: "Nice 2 meet u!",
    });
});