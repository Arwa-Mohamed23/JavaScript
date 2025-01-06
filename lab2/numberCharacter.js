function numberCharacter(input){
    if (typeof input !== 'string') {
        throw new Error('not valid input');
    }

    var result={};

    for(var i=0;i<input.length;i++){
        var char =input.charAt(i).toLowerCase();
        if (result.hasOwnProperty(char)) {
            result[char]++;
        }else{
            result[char]=1; 
        }
    }
    return result;
}

console.log(numberCharacter('abcoAuzrzz'));