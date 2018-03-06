function cekVokal(str){
  var vokal='aiueo'
  var count=[]
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vokal.length; j++) {
      if(vokal.includes(str)===true){
        count.push(str[i])
      }

    }
  }
  //console.log(count);
  if(count.length==0){
    return false;
  }else{
    return true;
  }
}

console.log(cekVokal('amkan'));//false
console.log(cekVokal('aiueo'));//true
console.log(cekVokal('abbbe'));//false
console.log(cekVokal('abbae'))//FALSE
console.log(cekVokal('aabae'))//FALSE
