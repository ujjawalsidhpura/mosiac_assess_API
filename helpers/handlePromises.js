const { filterDuplicates } = require('./filterApiResponse')

const handlePromises = (responses) => {

    let posts = [];

    for (let eachRes of responses) {
        let temp = (eachRes.data.posts)
        for (let each of temp) {
            posts.push(each)
        }
    }

    const filteredPosts = filterDuplicates(posts)

    return filteredPosts
}

module.exports = { handlePromises }