const queryValidator = (queryStr, res) => {

    let tags, sortBy, direction;

    // "Tags" Param MUST be present
    if (queryStr.tags) {
        tags = queryStr.tags
    } else {
        return res
            .status(400)
            .send({ "error": "Tags parameter is required" })
    }

    // Check for validity of optional params IF ANY
    if (queryStr.sortBy) {

        if (queryStr.sortBy === 'id' || queryStr.sortBy === 'reads' || queryStr.sortBy === 'likes' || queryStr.sortBy === 'popularity') {
            sortBy = queryStr.sortBy
        } else {
            return res
                .status(400)
                .send({ "error": "sortBy parameter is invalid" })
        }
    }

    if (queryStr.direction) {

        if (queryStr.direction === 'desc' || queryStr.direction === 'asc') {
            direction = queryStr.direction
        } else {
            return res
                .status(400)
                .send({ "error": "Direction parameter is invalid" })
        }
    }

    // Only If none of the conditions fail, then param obj with values will be return
    return { tags, sortBy, direction }
}

module.exports = { queryValidator }