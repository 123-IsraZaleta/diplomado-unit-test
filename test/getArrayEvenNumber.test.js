const { getArrayEvenNumbers } = require("../src/controllers/getArrayEvenNumbers");

test('[2,4,6,8,10] numeros pares?', () => {
    const arr = [2,4,6,8,10];
    const areEvenNumbers = getArrayEvenNumbers(arr);
    expect(areEvenNumbers).toBe('SI')
})