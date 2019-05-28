function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let total = 0;
    for (let num of ar) {
        total += num;
    }
    return total;
}

console.log(simpleArraySum([1,3,5]));
