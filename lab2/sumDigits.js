function sumDigits(input) {
    if (typeof input !== 'number') {
        throw new Error('not valid input');
    }

    var sum=0;
    while(input){
        sum+=(input%10);
        input/=10;
    }
    return parseInt(sum);
}

try{
    console.log(sumDigits(123));
    console.log(sumDigits(1003));
    console.log(sumDigits('a'));
}catch(e){
    console.log(e.message);
}
