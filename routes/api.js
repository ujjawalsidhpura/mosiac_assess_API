const express = require('express');
const router = express.Router();
const { apiResponse } = require('../helpers/apiResponse');

router.get('/ping', (req, res) => {

    res
        .status(200)
        .send({ "success": true })
});

router.get('/posts', (req, res) => {
    const queryStr = req.query;

    // "Tags" Param MUST be present
    if (!(queryStr.tags || queryStr.tag)) {
        res
            .status(400)
            .send({ "error": "Tags parameter is required" })
    }

    // Check for validity of optional params IF ANY


    const tags = queryStr.tags.split(',');
    apiResponse(tags, res)

})

module.exports = router;