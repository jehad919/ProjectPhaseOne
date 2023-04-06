const app = require("express")()
const fs = require('fs');

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/1", function (req, res) {
    res.json({
        data: fs.readFileSync('./1.jpg', { encoding: 'base64' }),
        title: "Unsolved",
        text: "Unsolved Puzzle"
    })
})

app.get("/2", function (req, res) {
    res.json({
        data: fs.readFileSync('./2.jpg', { encoding: 'base64' }),
        title: "Solved",
        text: "Solved Puzzle"
    })
})

app.listen(3000, function () {
    console.log("Server is listening on port 3000")
})
