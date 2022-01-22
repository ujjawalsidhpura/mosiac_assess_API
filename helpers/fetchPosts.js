const axios = require("axios");
const res = require("express/lib/response");

const fetchPosts = async (arr) => {

    let posts;

    const promiseArr = await arr.map((eachTag) => {
        return axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${eachTag}`)
    })

    await axios
        .all(promiseArr)
        .then((responses) => {
            posts = process(responses)
        })
        .catch(errors => {
            console.error(errors);
        });

    return posts;
};

const process = (responses) => {
    let posts = [];
    for (let eachRes of responses) {
        let temp = (eachRes.data.posts)
        posts.push(temp)
    }
    return posts;
}

module.exports = { fetchPosts }


