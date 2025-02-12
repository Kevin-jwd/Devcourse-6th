const express = require("express");
const app = express();

app.listen(1234);

// API : GET + "/"
app.get("/", function (req, res) {
    res.send("Hello World");
});

// API : GET + "/test"
app.get("/test", function (req, res) {
    res.send("TEST SUCCESS");
});

// API : GET + "/test/1"
app.get("/test/1", function (req, res) {
    res.send("One!");
});

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

// API : GET + "/products/1"
app.get("/products/1", function (req, res) {
    res.json({
        title: "객체를 공부해보자",
        price: "20000",
        description: "객체에 대해 완벽히 이해해보세요.",
    });
});
