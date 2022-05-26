const getArrayEvenNumbers = (numbersArray = []) => {
    const even = [];
    numbersArray.forEach(number => {
        if(number%2===0){
            even.push(number);
        }
    });
    if(numbersArray.length === even.length){
        console.log('all of them are even');
        return 'SI';
    }else{
        console.log('all of them arent even');
        return 'NO'
    }
}
const arr = [2,4,6,8,10];
getArrayEvenNumbers(arr);

module.exports = {
    getArrayEvenNumbers
}