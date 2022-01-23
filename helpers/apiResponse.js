const { fetchPosts } = require('./fetchPosts');
const { optionalFilters } = require('./filterApiResponse');

const apiResponse = async (obj, res) => {

    // Use split(',') since api.js:Line15 destructures tags to a string of tags separated by ','
    const tagsArr = obj.tags.split(',');

    // Make API request
    const data = await fetchPosts(tagsArr);

    const filteredData = optionalFilters(data, obj);

    res.status(200).send({ posts: filteredData });
}

module.exports = { apiResponse };
