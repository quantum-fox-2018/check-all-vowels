const vowels = ["a", "i", "u", "e", "o"]

function checkAllVowels(sentence){
  var flag = true;
  for (var i = 0; i < sentence.length; i++) {
    if (vowels.indexOf(sentence[i]) === -1) {
      flag = false;
    }
  }

  if (flag) {
    return true;
  }else{
    return false;
  }
}

console.log(checkAllVowels("aaaaa")) //true
console.log(checkAllVowels("aiueo")) //true
console.log(checkAllVowels("abcde")) //false
console.log(checkAllVowels("aaaab")) //false
