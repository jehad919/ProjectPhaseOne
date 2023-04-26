const express = require("express");
const app = express();

app.use("/api", require("./api.js"));

app.get("/", (req, res) => {
    res.redirect("/main")
});

app.get("/main", (req, res) => {
    res.sendFile(__dirname + "/views/puzzle.html");
});

app.listen(8080, () => {
    console.log("Server started on 8080");
});
