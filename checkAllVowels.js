// function checkAllVowels(str) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] !== 'a' && str[i] !== 'i' && str[i] !== 'u' && str[i] !== 'e' && str[i] !== 'o') {
//       return false;
//     }
//   }
//   return true;
// }

function checkAllVowels(str) {
  var hitung = 0;
  var newVowel = 'aiueo';
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < newVowel.length; j++) {
      if (str[i] === newVowel[j]) {
        hitung++;
      }
    }
  }
  return (hitung === str.length);
}

console.log(checkAllVowels('aikkku')); // false
console.log(checkAllVowels('aaaaa')); // true
console.log(checkAllVowels('aaiueo')); // true
console.log(checkAllVowels('abcaeo')); // false
console.log(checkAllVowels('aiueooeui')); // true
