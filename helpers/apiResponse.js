const axios = require('axios');
const { fetchPosts } = require('./fetchPosts');

const apiResponse = async (arr, res) => {

    const data = await fetchPosts(arr);
    res.status(200).send({ posts: data });
}

module.exports = { apiResponse };
