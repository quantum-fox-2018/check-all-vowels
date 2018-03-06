function checkAllVowels(string){
  var arrVokal = ['a','i','u','e','o']
  var count = 0
  for(var i=0; i<string.length; i++){
    for(var j=0; j<arrVokal.length; j++){
      if(string[i]===arrVokal[j]){
        count++
      }
    }
  }
  // console.log(count)
  if(count===string.length){
    return true
  }
  else {
    return false
  }
}

console.log(checkAllVowels('rei')) //false
console.log(checkAllVowels('ueeeiao')) //true
