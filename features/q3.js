
function sumTo(lastNum) {
    let sum = 0;
    for (let i = 1; i <= lastNum; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(10));
console.log(sumTo(30));

