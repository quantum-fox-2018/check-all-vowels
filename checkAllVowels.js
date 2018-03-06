function checkVowels(string) {
  var vowels = ['a', 'i', 'u' , 'e', 'o', 'A', 'I', 'U', 'E', 'O']
  var jumlahVowel = 0;

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        jumlahVowel += 1;
      }
    }
  }
  if (jumlahVowel == string.length) {
    return true;
  } else {
    return false
  }
}

console.log(checkVowels('aaiou'));
console.log(checkVowels('dfeui'));
console.log(checkVowels('sahdkjashd'));
