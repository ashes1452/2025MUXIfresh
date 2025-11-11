//一个范围内的总和
function range(start, end) {
    let arr = [];
    for (let i = start; i < end + 1; i++) {
        arr[i - 1] = i;
    }
    return arr;
}
console.log(range(1, 10));
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sum(range(1, 10)));
function range1(start, end, step) {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
        return arr;
    }
    else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
        return arr;
    }
    else if (step === undefined) {
        for (let i = start; i < end + 1; i += 1) {
            arr[i - start] = i;
        }
        return arr;
    }
    else if (step === 0) {
        return 'step cannot be 0';
    }
}
console.log(range1(5, 2, -1));
console.log(range1(5, 9));
console.log(range1(4, 10, 2));
console.log(range1(4, 10, 0));

//反转数组
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
function reverseArrayInPlace(arr) {
    if (arr.length % 2 === 0) {
        for (let i = 0; i < arr.length / 2; i++) {
            let temp = 0;
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        return arr;
    }
    else {
        for (let i = 0; i < (arr.length - 1) / 2; i++) {
            let temp = 0;
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }
    return arr;
}
console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));

//列表