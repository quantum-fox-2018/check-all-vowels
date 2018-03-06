function checkVowels(str){
    let vocal = 'aiueoAIUEO'

    for(let i=0; i<str.length; i++){
        // console.log( vocal.indexOf(str[i]))
        if(vocal.indexOf(str[i]) == -1){
            return false
            i -= 1
        }
    }
    return true

}

console.log(checkVowels('aioaa'))
console.log(checkVowels('hacktiv'))
console.log(checkVowels('AoEiaU'))