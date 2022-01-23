const { filterDuplicates, optionalFilters } = require('../helpers/filterApiResponse');

// filterDuplicates Function
describe("filterDuplicates function", () => {

    const testArr = [
        { id: 1 },
        { id: 15 },
        { id: 1 },
        { id: 555 },
        { id: 555 },
        { id: 1 }
    ]

    test("returns an array", () => {
        const result = filterDuplicates(testArr);

        expect(Array.isArray(result)).toBe(true);
    });

    test("returns an array after removing duplicates", () => {
        const result = filterDuplicates(testArr);

        expect(result.length).toEqual(3);
    });
});

// optionalFilters Function
describe("optionalFilter function", () => {

    const testArr = [
        { id: 1, likes: 444 },
        { id: 15, likes: 888 },
        { id: 5, likes: 234 },
        { id: 6, likes: 8 },
        { id: 8, likes: 77 },
    ]

    const testObj1 = {
        tags: [],
        sortBy: undefined,
        direction: undefined
    }

    const testObj2 = {
        tags: [],
        sortBy: 'likes',
        direction: undefined
    }

    const testObj3 = {
        tags: [],
        sortBy: 'likes',
        direction: 'asc'
    }

    const testObj4 = {
        tags: [],
        sortBy: 'likes',
        direction: 'desc'
    }

    test("returns the same input array when no optional filter given", () => {
        const result = optionalFilters(testArr, testObj1);

        expect(result).toEqual(testArr);
    });

    test("returns an array sorted by likes in ascending order", () => {
        const result = optionalFilters(testArr, testObj2);
        const firstItem = result[0]['likes'];
        const lastItem = result[result.length - 1]['likes'];
        const firstValue = 8;
        const lastValue = 888;
        expect(firstItem).toEqual(firstValue);
        expect(lastItem).toEqual(lastValue);
    });

    test("returns an array sorted by likes in ascending order when direction is given as 'asc", () => {
        const result = optionalFilters(testArr, testObj3);
        const firstItem = result[0]['likes'];
        const lastItem = result[result.length - 1]['likes'];
        const firstValue = 8;
        const lastValue = 888;
        expect(firstItem).toEqual(firstValue);
        expect(lastItem).toEqual(lastValue);
    });

    test("returns an array sorted by likes in descending order when direction is given as 'desc", () => {
        const result = optionalFilters(testArr, testObj4);
        const firstItem = result[0]['likes'];
        const lastItem = result[result.length - 1]['likes'];
        const firstValue = 888;
        const lastValue = 8;
        expect(firstItem).toEqual(firstValue);
        expect(lastItem).toEqual(lastValue);
    });
});