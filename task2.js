function returnElement(arr, n) {
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        arr2[i] = arr[i];
    }
    console.log(arr2);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 5;
returnElement(arr, n);