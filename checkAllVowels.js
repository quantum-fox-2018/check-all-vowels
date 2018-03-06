var vocal = ['a', 'i', 'u', 'e', 'o']

function checkVocal(str) {
  var jumlah = 0

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vocal.length; j++) {
      if (str[i] === vocal[j]) {
        jumlah += 1
      }
    }
  }
  if (jumlah === str.length) {
    return true
  } else {
    return false
  }
}

console.log(checkVocal('aaaaa'));
console.log(checkVocal('aiueo'));
console.log(checkVocal('abbaa'));
console.log(checkVocal('auiuiuiuaa'));
