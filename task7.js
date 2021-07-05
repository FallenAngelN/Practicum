let arr = [1, 11, 35, 44, 76, 123, 5234, 6547, 432];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum / arr.length);