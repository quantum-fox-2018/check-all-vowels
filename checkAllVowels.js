function checkAllVowel(str) {
    str = str.toLowerCase();
    var vowels = 'aiueo';
    var countVowels = 0;

    for (var i = 0; i < vowels.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (vowels[i] === str[j]) {
                countVowels++;
            }
        }
    }

    return str.length === countVowels;
}

console.log(checkAllVowel('bc'));
console.log(checkAllVowel('bac'));
console.log(checkAllVowel('aaaiiiuua'));
