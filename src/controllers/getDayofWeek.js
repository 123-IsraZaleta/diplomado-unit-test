
const getDayOfWeek = (day) => {
    if(day <= 0 || day >= 8) return 'please with an valid day number 1-7';
    const weekDays = ['dom', 'lun', 'mar', 'mier', 'jue', 'vie', 'sab'];
    return weekDays[day-1];
}

const result = getDayOfWeek(8);
console.log({result})

module.exports = {
    getDayOfWeek
}