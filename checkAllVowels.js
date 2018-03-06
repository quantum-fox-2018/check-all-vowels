function checkAllVowels(input){
  let vowel ='aiueo'
  let counter=0
  for (var i = 0; i < input.length; i++) {
    if(vowel.indexOf(input[i])===-1){
      counter++
    }
  }
  if(counter>0){
    return false
  }
  else {
    return true
  }
}

console.log(checkAllVowels('qwertyuiop'));
console.log(checkAllVowels('aoiueoiue'));
console.log(checkAllVowels('ooiiuu'));
console.log(checkAllVowels('ppjdsds'));
