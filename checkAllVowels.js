function checkAllVowels (str) {
  var hurufVokal = 'aiueoAIUEO';

  // CARA BIASA
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < hurufVokal.length; j++) {
      if (str.charAt(i) === hurufVokal.charAt(j)) {
        return true;
      }
    }
  }

  return false;
}

console.log(checkAllVowels('yeaa')); // true
console.log(checkAllVowels('YEAA')); // true
console.log(checkAllVowels('aiueo')); // true
console.log(checkAllVowels('zxcvbnmAIUEO')); // true
console.log(checkAllVowels('ZXCVBN')); // true
console.log(checkAllVowels('')); // false
