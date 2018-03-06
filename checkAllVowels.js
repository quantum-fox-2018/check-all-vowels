function checkAllVowels(str){
  var vowels = ['a','e','i','o','u'];
  var condition = true;

  if(str.length>0){
    for(var i=0;i<vowels.length;i++){
      if(str[0] == vowels[i]){
        return checkAllVowels(str.slice(1));
      }
    }
      return false;
    }
  else{
    return true;
  }
}

console.log(checkAllVowels('w'));
console.log(checkAllVowels('eaaa'));
console.log(checkAllVowels('eaiueoaa'));
