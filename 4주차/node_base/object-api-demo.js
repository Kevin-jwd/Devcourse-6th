const express = require("express");
const app = express();

app.listen(1234);

let youtuber1 = {
    channelTitle: "육식맨",
    subs: "130만명",
    videoNum: "289개",
};

let youtuber2 = {
    channelTitle: "침착맨",
    subs: "227만명",
    videoNum: "6600개",
};

// Youtube channel path test
app.get("/:nickname", function (req, res) {
    const { nickname } = req.params;
    if (nickname == "@YOOXICMAN") {
        res.json(youtuber1);
    } else if (nickname == "@ChimChakMan_Official") {
        res.json(youtuber2);
    } else {
        res.json({
            message: "존재하지 않는 채널입니다.",
        });
    }
});
