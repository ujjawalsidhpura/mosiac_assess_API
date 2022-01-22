const axios = require('axios')
const res = require("express/lib/response")

function apiResponse(arr, res) {

    arr.map((eachTag) => {
        axios
            .get(`https://api.hatchways.io/assessment/blog/posts?tag=${eachTag}`)
            .then((response) => {
                const posts = response.data.posts

                res.send(posts)
            })
            .catch(error => console.log(error))
    })

}

module.exports = { apiResponse }