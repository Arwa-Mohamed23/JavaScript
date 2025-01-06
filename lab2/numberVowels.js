function numberVowels(input){
    if (typeof input !== 'string') {
        throw new Error('not valid input');
    }

    var result={
        'a':0,
        'o':0,
        'u':0,
        'i':0,
        'e':0
    }

    for(var i=0;i<input.length;i++){
        var char =input.charAt(i).toLowerCase();
        if (result.hasOwnProperty(char)) {
            result[char]++;
        }
    }
    return result;
}

console.log(numberVowels('abcoAu'));