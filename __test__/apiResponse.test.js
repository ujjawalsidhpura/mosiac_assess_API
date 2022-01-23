
const apiResponse = require('../helpers/apiResponse');
const res = require("express/lib/response");
const { resolve } = require('path');

describe("Api Endpoints ", () => {
    test("should return an array without crashing", async () => {
        const queryParam = {
            tags: 'health',
            sortBy: undefined,
            direction: undefined
        }
        const response = await apiResponse(queryParam, res);
        // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
});