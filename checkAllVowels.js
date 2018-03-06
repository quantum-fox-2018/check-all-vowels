function checkAllVowels(str) {
  let vokal = ["A", "I", "U", "E", "O"];
  str = str.toUpperCase().split('');

  for(let i in str) {
    if(vokal.indexOf(str[i]) === -1)
      return false;
  }

  return true;
}

// recursive
function checkAllVowels(str) {
  let vokal = ["A", "I", "U", "E", "O"];
  str = str.toUpperCase();
  let checkIndex = vokal.indexOf(str[0]);
  str = str.slice(1);

  if(!str) {
    return true;
  }

  if(checkIndex === -1) {
    return false;
  }

  return checkAllVowels(str);
}

console.log(checkAllVowels("sdawwda"));
console.log(checkAllVowels("AjdiwVksd"));
console.log(checkAllVowels("aiu"));
