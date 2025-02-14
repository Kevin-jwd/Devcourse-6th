const express = require("express");
const app = express();

app.listen(1234);

app.get("/products/:n", function (req, res) {
    res.json(req.params);
});

// // Youtube channel path test
// app.get("/:nickname", function (req, res) {
//     const param = req.params;
//     res.json({
//         channel: param.nickname,
//     });
// });

// Youtube video path test
// https://www.youtube.com/watch?v=pSVAgMIc9-c&t=580s
app.get("/watch", function (req, res) {
    const { v, t } = req.query;
    res.json({
        video: v,
        timeline: t,
    });
});
