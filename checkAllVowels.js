function checkVowel (sentence) {
    var vocal = ['a','i','u','e','o']
    var count = 0

    for (var i = 0; i < sentence.length; i++) {
        for (var j = 0; j < vocal.length; j++) {
            if (sentence[i] === vocal[j]) {
                count ++
            }
        }
    }

    if (count === sentence.length) {
        return true
    } else {
        return false
    }
}

console.log(checkVowel('aiueo'))
console.log(checkVowel('oeuia'))
console.log(checkVowel('abcde'))
console.log(checkVowel('bcdfgh'))
console.log(checkVowel('aaaaaaa'))
console.log(checkVowel('oiaoieau'))
