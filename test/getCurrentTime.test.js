const { getCurrentTime } = require("../src/controllers/getCurrentTime");

test('get current time', () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const currentTime = getCurrentTime();
    expect(currentTime).toBe(`${hours}:${minutes}`);
})