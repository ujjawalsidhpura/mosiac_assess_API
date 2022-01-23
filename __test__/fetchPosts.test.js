const { fetchPosts } = require('../helpers/fetchPosts');

describe("test fetchPost function", () => {

    // User Fetch Request
    const queryTags1 = ['health'];
    const queryTags2 = ['science'];
    const queryTags3 = ['science', 'health', 'history'];

    test("fetchPosts returns an array", async () => {
        const result = await fetchPosts(queryTags1);

        expect(Array.isArray(result)).toBe(true);
    });

    test("returns an array with 29 posts with queryTags1 arg", async () => {
        const result = await fetchPosts(queryTags1);

        expect(result.length).toEqual(29);
    });

    test("returns an array with 25 posts with queryTags2 arg", async () => {
        const result = await fetchPosts(queryTags2);

        expect(result.length).toEqual(25);
    });

    test("returns an array with 65 posts with queryTags3 arg", async () => {
        const result = await fetchPosts(queryTags3);

        expect(result.length).toEqual(65);
    });
});