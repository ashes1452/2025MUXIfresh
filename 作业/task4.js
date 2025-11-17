//扁平化
function reduce(arr) {
    let array = [];
    for (let arrs of arr) {
        array = array.concat(arrs);
    }
    return array;
}
console.log(reduce([[1, 2, 3], [4, 5], [6]]));

//您自己的循环
function loop(value, test, update, body) {
    for (let i = value; test(i);) {
        if (test(i)) {
            body(i);
            i = update(i);
        }
        else {
            break;
        }

    }
}
loop(3, n => n > 0, n => n - 1, console.log);

//所有
function every(array, test) {
    for (let i of array) {
        if (!test(i)) {
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(every([1, 3, 5], n => n < 10));

function every2(array, test) {
    return !array.some(element => !test(element));
}
console.log(every([2, 4, 16], n => n < 10));

