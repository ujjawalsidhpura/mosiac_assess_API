const { handlePromises } = require('../helpers/handlePromises');

describe("handlePromises function", () => {

    const promises = [{ data: { posts: [Promise] } }, { data: { posts: [Promise] } }];

    test("it returns an array of resolved promises, given an array of unresolved Promises", async () => {
        const result = await handlePromises(promises);

        expect(result[0]).toEqual(Promise)
    });
});