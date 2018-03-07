function checkAllVowels (str) {
  var hurufVokal = 'aiueoAIUEO';

  /*
  // CARA BIASA
  for (let i in str) {
    for (let j in hurufVokal) {
      if (str.charAt(i) === hurufVokal.charAt(j)) {
        return true;
      }
    }
  }

  return false;
  */

  // CARA RECURSIVE
  if (str.length === 0) {
    return false;
  } else {
    for (let i in hurufVokal) {
      if (str.charAt(0) === hurufVokal.charAt(i)) {
        return true;
      }
    }
    return checkAllVowels(str.slice(1));
  }
}

console.log(checkAllVowels('yeaa')); // true
console.log(checkAllVowels('YEAA')); // true
console.log(checkAllVowels('aiueo')); // true
console.log(checkAllVowels('zxcvbnmAIUEO')); // true
console.log(checkAllVowels('ZXCVBN')); // false
console.log(checkAllVowels('')); // false
