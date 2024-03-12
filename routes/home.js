const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Home Page");
    res.sendFile(path.join(__dirname,'..','views','home.html'));
});

module.exports = router;