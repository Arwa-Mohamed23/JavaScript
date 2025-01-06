function isPalindrome(input) {
    if (typeof input !== 'string') {
        throw new Error('not valid input');
    }

    var length = input.length;
    for (var j = 0; j < length / 2; j++) {
        if (input[j] !== input[length - 1 - j]) {
            return false;
        }
    }

    return true;
}

try{
    console.log(isPalindrome('madam'));
    console.log(isPalindrome('maam'));
    console.log(isPalindrome(''));
    console.log(isPalindrome('hello'));
    console.log(isPalindrome());
    console.log(isPalindrome(12321));
    console.log(isPalindrome(null));
}catch(e){
    console.log(e.message);
}
