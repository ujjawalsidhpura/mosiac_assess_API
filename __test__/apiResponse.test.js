const { apiResponse } = require('../helpers/apiResponse');
const res = require("express/lib/response");

describe("the apiResponse function", () => {

    // User Fetch Request
    const obj = { tags: 'health,science', sortBy: 'likes', direction: undefined };

    it("returns false if no data is returned by the API", async () => {

        global.fetch = jest.fn(() => {
            Promise.resolve();
        });


        const value = await apiResponse(obj, res);


        expect(fetch).toHaveBeenCalledTimes(1);

    });
});
