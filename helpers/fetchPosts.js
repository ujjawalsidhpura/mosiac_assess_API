const fetchPosts = async (arr) => {
    try {
        const res = await Promise.all(arr);
        const data = res.map((res) => res.data.posts);

        return data[0]
    } catch {
        throw Error("Promise failed");
    }
};

module.exports = { fetchPosts }