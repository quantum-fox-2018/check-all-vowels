function checkAllVowels(str) {
  let vokal = ["A", "I", "U", "E", "O"];
  str = str.toUpperCase().split('');

  for(let i in str) {
    if(vokal.indexOf(str[i]) === -1)
      return false;
  }

  return true;
}

console.log(checkAllVowels("sdawwda"));
console.log(checkAllVowels("AjdiwVksd"));
console.log(checkAllVowels("Aiu"));
