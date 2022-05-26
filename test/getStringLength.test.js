const { getStringLength } = require("../src/controllers/getStringLength")

test('Parangaricutirimicuaro length is? ', () => {
    const stringLength = getStringLength('Parangaricutirimicuaro');
    const isCorrectLength = ('Parangaricutirimicuaro').length
    expect(stringLength).toBe(isCorrectLength)
})