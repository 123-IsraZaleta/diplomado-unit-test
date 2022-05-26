const { getDayOfWeek } = require("../src/controllers/getDayofWeek")

test('day of week ', () => {
    const weekNumber = 2;
    const weekDay = getDayOfWeek(weekNumber);
    const arrWeekDays = ['dom', 'lun', 'mar', 'mier', 'jue', 'vie', 'sab'];
    expect(weekDay).toBe(arrWeekDays[weekNumber-1])
})