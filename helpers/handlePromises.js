const handlePromises = (responses) => {
    let posts = [];
    for (let eachRes of responses) {
        let temp = (eachRes.data.posts)
        posts.push(temp)
    }
    return posts;
}

module.exports = { handlePromises }