function checkVocals(arr) {

  let vocals = 'aiueo'

  for (var i = 0; i < arr.length; i++) {

    if (vocals.indexOf(arr[i]) == -1) {
      return false
    }

  }

  return true

}

console.log(checkVocals('aiueo'));
console.log(checkVocals('aiueb'));
console.log(checkVocals('aaaaauuuuuaoiue'));
console.log(checkVocals('bjkso'));
