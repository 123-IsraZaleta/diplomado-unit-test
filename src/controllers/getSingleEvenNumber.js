const getSingleEvenNumber = number => {

    if(number%2==0){
        console.log('even number');
        return 'SI';
    }else{
        console.log('not even number');
        return 'NO';
    };

};

module.exports = {
    getSingleEvenNumber
}