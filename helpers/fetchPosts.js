const axios = require("axios");
const res = require("express/lib/response");
const { handlePromises } = require('./handlePromises')

const fetchPosts = async (arr) => {

    let posts;

    const promiseArr = await arr.map((eachTag) => {
        return axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${eachTag}`)
    })

    await axios
        .all(promiseArr)
        .then((responses) => {
            posts = handlePromises(responses)
        })
        .catch(errors => {
            console.error(errors);
        });

    return posts;
};

module.exports = { fetchPosts }


