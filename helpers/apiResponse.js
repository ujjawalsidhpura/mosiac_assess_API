const axios = require('axios');
const { fetchPosts } = require('./fetchPosts');

const apiResponse = async (arr, res) => {

    const promiseArr = arr.map((tag) =>
        axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`));

    const data = await fetchPosts(promiseArr);
    res.status(200).send(data);
}


module.exports = { apiResponse };

// Error Responses: If `tags` parameter is not present: Response body (JSON): { "error": "Tags parameter is required" } Response status code: 400 If a `sortBy` or `direction` are invalid values, specify an error like below: Response body (JSON): { "error": "sortBy parameter is invalid" } Response status code: 400