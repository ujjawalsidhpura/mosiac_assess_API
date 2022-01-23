const filterDuplicates = (arr) => {

    //Returned Promise array may contain duplicates since simultaneos api calls were made and results were pushed into single output array. 
    //Refer './handlePromises.js' 

    return Object.values(arr.reduce((acc, cur) =>
        Object.assign(acc, { [cur.id]: cur }), {}))

}

const optionalFilters = (arr, obj) => {

    const sortBy = obj.sortBy
    const direction = obj.direction

    if (sortBy && !direction || sortBy && direction === 'asc') {

        return arr.sort((a, b) => { return a[sortBy] - b[sortBy] })

    } else if (obj.sortBy && obj.direction === 'desc') {

        return arr.sort((a, b) => { return b[sortBy] - a[sortBy] })

    } else {

        return arr;

    }
}

module.exports = { filterDuplicates, optionalFilters }

