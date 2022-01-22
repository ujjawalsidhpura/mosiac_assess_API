const express = require('express');
const router = express.Router();
const { apiResponse } = require('../helpers/apiResponse');
const { queryValidator } = require('../helpers/queryValidator');

router.get('/ping', (req, res) => {

    res
        .status(200)
        .send({ "success": true })

});

router.get('/posts', (req, res) => {
    const queryStr = req.query;

    //Validate the Query
    let validatedParams = queryValidator(queryStr, res);

    // If all given paramters are Valid, then proceed to fetch and respond
    let temptags = validatedParams.tags.split(',')
    apiResponse(temptags, res);

})


module.exports = router;