function checkVowels(words){
    vowels = ['a','i','u','e','o'];

    words = words.toLowerCase();

    count = 0;
    for(let i=0; i<vowels.length; i++){
        for(let j=0; j<words.length; j++){
            if(vowels[i] == words[j]){
                count += 1;
            }
        }
    }

    if(count == vowels.length){
        return true;
    }
    return false;
}

console.log(checkVowels('ajijkuEolkm')); // true
console.log(checkVowels('aklogmnupq')); // false
console.log(checkVowels('aiUEo')); // true
console.log(checkVowels('abcdEfgh')); // false