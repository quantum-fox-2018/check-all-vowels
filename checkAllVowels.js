function checkVowels(str) {
  var vocals = ['a', 'i', 'u', 'e', 'o'];
  str = str.toLowerCase().split('');
  for(var i = 0; i < vocals.length; i++) {
    for(var j = 0; j < str.length; j++) {
      if(vocals.indexOf(str[j]) === -1) {
        return false;
      }
    }
  }
  return true;
}

console.log(checkVowels('abrakadabra'));
console.log(checkVowels('uuaaaieiioo'));
console.log(checkVowels('OoAaOoAa'));
