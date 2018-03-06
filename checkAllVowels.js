function checkAllVowels(str) {
    let arrVowels = ['a','i','u','e','o'];
    // console.log('checkVowels===', arrVowels);
    
    let arrStr = str.split('');
    // console.log('checkStr===', arrStr);
    
    let arrStrLower = [];
    
    for (let i = 0; i < arrStr.length; i++) {
        arrStrLower.push(arrStr[i].toLowerCase());
    }
    // console.log('checkLower===', arrStrLower);
    
    let point = 0;
    for (let i = 0; i < arrVowels.length; i++) {
        for (let j = 0; j < arrStrLower.length; j++) {
            // console.log('====',i,j,arrVowels[i],arrStrLower[j]);
            if (arrStrLower[j] == arrVowels[i]) {
                point += 1;
            } else {
                point += 0;
            }

        }
    }

    console.log('Check Point:',point);

    if (point < str.length) {
        return false;
    } else {
        return true;
    }


}


console.log(checkAllVowels('aiueAb'));