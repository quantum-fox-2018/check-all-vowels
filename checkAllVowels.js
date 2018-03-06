var vocals = ['a','i','u','e','o'];

function checkAllVowels (str) {
  var checkResult = [];
  for (var i = 0; i < str.length; i++) {
    var check = false;
    for (var x = 0; x < vocals.length; x++) {
      if (str[i] === vocals[x]) {
        debugger;
        check = true;
        break;
      }
    }
    if(typeof checkResult !== 'undefined' && checkResult !== null && checkResult.length !== null && checkResult.length > 0) {
      checkResult.push(check);
    } else {
      checkResult = [check];
    }
  }

  for (var i = 0; i < checkResult.length; i++) {
    debugger;
    if (checkResult[i] === false) {
      return false;
    }
  }

  return true;
}

console.log(checkAllVowels('doremi'));
console.log(checkAllVowels('aaaaaaaaaaaaaaaaaaaiiiiiiiiiiiiiioooooooooooo'));
