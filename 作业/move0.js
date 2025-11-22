function moveZero(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newarr.push(arr[i]);
        }

    }
    let zeroCount = arr.length - newarr.length;
    for (let j = 0; j < zeroCount; j++) {
        newarr.push(0);
    }
    return newarr;
}
console.log(moveZero([0, 1, 0, 3, 12]));