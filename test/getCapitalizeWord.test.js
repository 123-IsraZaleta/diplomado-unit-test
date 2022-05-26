const { getCapitalizeWord } = require("../src/controllers/getCapitalizeWord");

test('capitalize word', () => {
    const singleWord = 'cotorrito';
    const testWord = singleWord.toLocaleUpperCase();
    const capitalizeWord = getCapitalizeWord(singleWord);
    expect(testWord).toBe(capitalizeWord);
})