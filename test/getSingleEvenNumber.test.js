const { getSingleEvenNumber } = require('../src/controllers/getSingleEvenNumber')

test('67 es numero par? ', () => {
    const isEvenNumber = getSingleEvenNumber(67);
    expect(isEvenNumber).toBe('NO')
})


