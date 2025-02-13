const express = require("express");
const app = express();

app.listen(1234);

app.get("/products/:n", function (req, res) {
    res.json(req.params);
});

// Youtube path test
app.get("/:nickname", function (req, res) {
    const param = req.params;
    res.json({
        channel: param.nickname,
    });
});
