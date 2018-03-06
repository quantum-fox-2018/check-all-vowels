//Check All Vowals
function checkAllVowels(str){
    let vocals = 'aiueo';

    if(str.length < 1){
        return true;
    }else{
        let sliceStr = str.slice(1);
        for(let i = 0; i < vocals.length; i++){
            if(str[0] === vocals[i]){
                return true == checkAllVowels(sliceStr);
            }
        }
        return false;
    }

}


console.log(checkAllVowels('cobaa')); //false
console.log(checkAllVowels('auiuiooouoiuoe')); //true
console.log(checkAllVowels('eaiiiaaoow')); //false
