function checkVowel (sentence) {

    var vocal = ['a','i','u','e','o']
    var temp = 0

    for (var i = 0; i < sentence.length; i++) {
        
        for (var j = 0; j < vocal.length; j++) {
            
            if (sentence[i] === vocal[j]) {

                temp ++
            }

        }
    }

    if (temp === sentence.length) {

        return true
    } else {

        return false
    }

}

console.log(checkVowel('aaiiuu'))
console.log(checkVowel('aiiiuuuuuuaaaeeee'))
console.log(checkVowel('abcd'))
console.log(checkVowel('bcd'))
