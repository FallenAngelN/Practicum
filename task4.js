let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [0,1];
for (let i = 0; i < arr.length; i++) {
    arr2[0] += arr[i];
    arr2[1] *= arr[i];
}
console.log(arr2);