const { getSortNumbers } = require("../src/controllers/getSortNumbers");

test('sort array equal', () => {
    const arr = [9,5,2,8,1];
    const sortArr = arr.sort((a,b) => a-b);
    const sortTestArr = getSortNumbers(arr);
    expect(sortTestArr).toEqual(sortArr);
})