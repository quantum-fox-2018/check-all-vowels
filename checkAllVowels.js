
function checkVocal(string){

  var vokal = 'aiueo';
  for(var i = 0; i < string.length; i++){
      if (vokal.indexOf(string[i].toLowerCase()) !== -1){
        return true;
      } else {
        return false;
      }
  }

}

console.log(checkVocal('aiueo'));
console.log(checkVocal('eoaiou'));
console.log(checkVocal('mouse'));
console.log(checkVocal('vokal'));
console.log(checkVocal('AAA'));
console.log(checkVocal('OIOI'));
