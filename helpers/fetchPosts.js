const axios = require("axios");
const res = require("express/lib/response");
const { handlePromises } = require('./handlePromises')

const fetchPosts = async (arr) => {

    let posts;

    //Map through each Tag to make uniqure request to API with that tag
    const promiseArr = await arr.map((eachTag) => {
        return axios
            .get(`https://api.hatchways.io/assessment/blog/posts?tag=${eachTag}`)
    })

    //Combine all resolved promises into posts Array[]
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


