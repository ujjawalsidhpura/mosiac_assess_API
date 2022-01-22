const filterDuplicates = (arr) => {

    //Returned Promise array may contain duplicates since simultaneos api calls were made and results were pushed into single output array. 
    //Refer './handlePromises.js' 

    return Object.values(arr.reduce((acc, cur) =>
        Object.assign(acc, { [cur.id]: cur }), {}))

}


module.exports = { filterDuplicates }

