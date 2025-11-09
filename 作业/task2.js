//最小数函数
function min(a, b) {
    if (a > b) {
        return b;
    }
    else {
        return a;
    }
}
console.log(min(0, -10));

//递归函数
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else if (num % 2 !== 0) {
        return false;
    }
    else if (num < 0) {
        return isEven(-num);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//豆子计数
function countBS(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            count++;
        }
    }
    return count;

}
console.log(countBS('BOB'));
function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;

}
console.log(countChar('kakkerlak', 'k'));


