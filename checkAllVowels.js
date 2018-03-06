
//RELEASE 0

function checkVowel(str){
    let vowels = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];

    if(str.length === 0) return true;
    else{
        for(let counter = 0; counter<vowels.length; counter++){
            if(str.charAt(0) === vowels[counter]) return checkVowel(str.slice(1));
        }
        return false;
    }
}

console.log(checkVowel('Bob'));
console.log(checkVowel('Blob'));
console.log(checkVowel('Bb'));
console.log(checkVowel('bbbbbbbbbbbbbbbbbbbbbbaBb'));
console.log(checkVowel('aaaaaaaaaaaaaaaaaaaaa'));