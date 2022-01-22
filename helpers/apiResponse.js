const axios = require('axios');
const { fetchPosts } = require('./fetchPosts')

const apiResponse = async (arr, res) => {

    const promiseArr = arr.map((tag) =>
        axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`));

    const data = await fetchPosts(promiseArr);
    res.status(200).send(data);
}


module.exports = { apiResponse }

