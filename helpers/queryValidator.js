const queryValidator = (queryStr, res) => {

    let tags, sortBy, direction;

    // "Tags" Param MUST be present
    queryStr.tags ?
        tags = queryStr.tags :
        res
            .status(400)
            .send({ "error": "Tags parameter is required" })


    // Check for validity of optional params IF ANY
    if (queryStr.sortBy) {

        (queryStr.sortBy === 'id' || queryStr.sortBy === 'reads' || queryStr.sortBy === 'likes' || queryStr.sortBy === 'popularity') ?
            sortBy = queryStr.sortBy :
            res
                .status(400)
                .send({ "error": "sortBy parameter is invalid" })
    }

    if (queryStr.direction) {

        (queryStr.direction === 'desc' || queryStr.direction === 'asc') ?
            direction = queryStr.direction :
            res
                .status(400)
                .send({ "error": "Direction parameter is invalid" })
    }

    return { tags, sortBy, direction }
}

module.exports = { queryValidator }