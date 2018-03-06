function checkAllVowels(str) {
    str = str.toLowerCase().split('')

    for(let i=0; i<str.length; i++) {
        if(!checkVowels(str[i])) {
            return false
        }
    }
    return true    
}

function checkVowels(str) {
    let vowels = ['a','i','u','e','o']
    for(let i=0; i<vowels.length; i++) {
        if(str == vowels[i]) {
            return true
        }
    }
    return false
}

console.log(checkAllVowels('aiueo')); //true
console.log(checkAllVowels('aiuEo')); //true
console.log(checkAllVowels('aiueob')); //false
console.log(checkAllVowels('aaeaeieiaeiaieaieiueo')); //true
console.log(checkAllVowels('aaebaeieiaeiaieaieiueo')); //false
