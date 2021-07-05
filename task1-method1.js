let arr = [1, 2, 3, 4, 5, 'solo', 'gg', 'gh', 'ez', true, false];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr2 += arr[i];
    arr2 += ',';
}
console.log(arr2);