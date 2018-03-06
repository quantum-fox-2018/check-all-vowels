
//RELEASE 0

function checkVowel(str){
    let vowels = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];

    //Normal Way
    //=============
    // for(let counter=0; counter<str.length; counter++){
    //     for(let counter2 = 0; counter2<vowels.length; counter2++){
    //         if(str.charAt(counter) === vowels[counter2]) return true;
    //     }
    // }

    // return false;

    //Recursive
    //=============
    if(str.length === 0) return false;
    else{
        for(let counter = 0; counter<vowels.length; counter++){
            if(str.charAt(0) === vowels[counter]) return true;
        }
        return checkVowel(str.slice(1));
    }
}

console.log(checkVowel('Bob'));
console.log(checkVowel('Blob'));
console.log(checkVowel('Bb'));
console.log(checkVowel('bbbbbbbbbbbbbbbbbbbbbbaBb'));