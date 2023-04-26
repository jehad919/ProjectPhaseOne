const router = require('express').Router();

router.get('/first.png', (req, res) => {
    res.sendFile(__dirname + "/imgs/first.png");
});

router.get('/second.png', (req, res) => {
    res.sendFile(__dirname + "/imgs/second.png");
});

module.exports = router;