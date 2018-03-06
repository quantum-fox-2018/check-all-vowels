function allVowels(str){
  let strSplit = str.split("");
  let vocal= ['a','i','u','e','o','A','I','U','E','O'];
  let result='';
  for(let i=0; i<strSplit.length; i++){
    for(let j=0; j<vocal.length; j++){
      if(strSplit[i] === vocal[j]){
        result += strSplit[i];
      }
    }
  }

  if(str === result){
    return true
  }
  return false
}

console.log(allVowels('aiueoIUoE'));
console.log(allVowels('aibueo'));
