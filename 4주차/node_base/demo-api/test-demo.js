const express = require("express");
const app = express();

app.listen(1234);

// API : GET + "/test"
app.get("/test", function (req, res) {
    res.send("TEST SUCCESS");
});

// API : GET + "/test/1"
app.get("/test/1", function (req, res) {
    res.send("One!");
});
