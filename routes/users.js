const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    console.log("Users Page");
    res.sendFile(path.join(__dirname,'..','views','users.html'));
});

module.exports = router;