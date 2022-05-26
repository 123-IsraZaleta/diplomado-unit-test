
const getCurrentTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    console.log(`${hours}:${minutes}`)
    return `${hours}:${minutes}`;
}

getCurrentTime();

module.exports = {
    getCurrentTime
}