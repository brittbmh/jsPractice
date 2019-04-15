function narcissistic(value) {
    // Code me to return true or false
    let sum = 0;
    let valueArr = value.toString().split('');
    console.log(valueArr);

    for (let i = 0; i < valueArr.length; i++) {
        let x = Math.pow(valueArr[i], valueArr.length);
        console.log(x);

        sum = sum + x;
    }
    console.log(sum);

    return (sum === value);
}


// console.log(narcissistic(7));

function isIsogram(str) {
    let strArr = str.toLowerCase().split('');
    if (strArr.length <= 1) {
        return true;
    } else {
        let counter = 0;
        for (let i = 0; i < strArr.length; i++) {
            counter += 1;
            for (let j = counter; j < strArr.length; j++) {
                if (strArr[i] === strArr[j]) {
                    return false;
                }
            }
            
        }
        return true;
    }
}

// console.log(isIsogram("Dermatoglyphics"), true);
// console.log(isIsogram("isogram"), true);
// console.log(isIsogram("aba"), false, "same chars may not be adjacent");
// console.log(isIsogram("moOse"), false, "same chars may not be same case");
// console.log(isIsogram("isIsogram"), false);
// console.log(isIsogram(""), true, "an empty string is a valid isogram");


