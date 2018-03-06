function checkAllVowels(input){
  let vow = 'aiueo';
  let count = 0;
  for(let i=0; i<input.length; i++){
    for(let j=0; j<vow.length; j++){
      if(input[i].toLowerCase()===vow[j]){
        count++;
      }
    }
  }
  if(count == input.length){
    return true;
  }
  return false;
}

console.log(checkAllVowels('aiueo'));
console.log(checkAllVowels('ai6eo'));
console.log(checkAllVowels('aIueo'));
