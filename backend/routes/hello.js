//import the pacakages
const express = require('express');
const router = express.Router();

router.get(`/`, function (req, res) {
    res.status(200).json({msg: `It's a GET request.`});
});

router.post('/', function (req, res) {
    res.status(200).json({msg: `It's a post request.`});
});

router.put('/', function (req, res) {
    res.status(200).json({msg: `It's a DELETE request.`});
});

module.exports = router;