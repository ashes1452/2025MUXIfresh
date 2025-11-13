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
function arrayTolist(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}
function listToArray(list) {
    let arr = [];
    for (let node = list; node !== null && node !== undefined; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}
function prepend(value, list) {
    let newlist = { value: value, rest: list };
    return newlist;
}
function nth(list, num) {
    let arr = [];
    for (let node = list; node !== null && node !== undefined; node = node.rest) {
        arr.push(node.value);
    }
    return arr[num];
}
console.log(arrayTolist([10, 20, 30]));
console.log(listToArray(arrayTolist([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayTolist([10, 20, 30]), 1));

//深度比较
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    else if (obj1 == null || typeof obj1 != 'object' || obj2 == null || typeof obj2 != 'object') {
        return false;
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false
        }

    }
    return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));