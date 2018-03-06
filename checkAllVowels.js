function cekVocal(str) {
  var alpabet = 'aiueo';
  var jumlah = 0;
  for (var i = 0; i < str.length; i++) {
    if (alpabet.includes(str[i])) {
      jumlah ++;
    }
  }
  if (jumlah < str.length) {
    return false;
  } else {
    return true;
  }
}


console.log(cekVocal('aaaa')); // true
console.log(cekVocal('babab')); // false
console.log(cekVocal('bbbb')); // false
console.log(cekVocal('aoius')); // false
console.log(cekVocal('auao')); // true
