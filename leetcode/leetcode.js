var reverseString = function (s) {
    let newArr = [];
    for (letter of s) {
        newArr.unshift(letter);
    }
    s = newArr;
    return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
