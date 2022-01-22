const express = require('express');
const router = express.Router();
const { apiResponse } = require('../helpers/apiResponse');

router.get(`/ping`, (req, res) => {

    res
        .status(200)
        .send({ "success": true })
});

router.get(`/posts`, (req, res) => {
    const queryStr = req.query;

    const tags = queryStr.tags.split(',');
    apiResponse(tags, res)

})

module.exports = router;