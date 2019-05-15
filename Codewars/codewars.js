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

function makeItWork(num) {
    let newArr = num.toString().split('');
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        sum = sum + parseInt(newArr[i]);
    }
    newArr = sum;
    console.log(newArr);

    return newArr;
}

function digital_root(n) {
    if (n > 9) {
        let newNum = makeItWork(n);
        return digital_root(newNum)
    } else {
        return n;
    }
}

// console.log(trySum(156));


// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// function validatePIN(pin) {
//     //return true or false
//     let numMatch = /^[0-9]*$/gm;
//     let status = pin.match(numMatch);
//     if (status) {
//         let count = pin.length;
//         if (count === 4 || count === 6) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return false;
// }

// console.log(validatePIN("123"));
// console.log(validatePIN("09876"));


function deleteNth(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // let regex = new RegExp(arr[i], 'gi');
        // console.log(regex);
        let countArr = newArr.filter(number => {
            return number === arr[i];
        })
        console.log(`arr[i] is ${arr[i]}, countArr is ${countArr}`);
        if (countArr.length < n) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(deleteNth([1, 2, 3, 4, 1, 2, 3], 1));
// console.log(deleteNth([47, 20, 31, 20, 31, 20, 31, 2, 2, 38, 20, 2, 20, 31, 31, 20, 31, 20, 20, 2, 2, 2], 5));

// You are going to be given an array of integers.Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {

    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr.slice(0, arr[i]);
        console.log(arr1);
        let sum1 = 0;
        for (let j = 0; j < arr1.length; j++) {
            sum1 += arr1[j];
            // console.log(sum1);
            let arr2 = arr.slice(arr[i]);
            console.log(arr2);
            let sum2 = 0;
            for (let k = 0; k < arr1.length; k++) {
                sum2 += arr2[k];
            }
            // console.log(sum2);
            if (sum1 === sum2) {
                return i;
            }
        }
    }
    return -1;
}

console.log(findEvenIndex([1, 2, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([50,-51,1,1]));
