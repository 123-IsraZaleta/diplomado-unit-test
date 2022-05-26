
const getSortNumbers = (numbersArr = []) => {
    return numbersArr.sort((a,b) => a-b)
};

module.exports = {
    getSortNumbers
}