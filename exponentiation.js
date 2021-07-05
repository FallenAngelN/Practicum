function exponentiation(arr, n) {
    if (n <= arr.length) {
        let a = Math.pow(arr[n-1], n);
        console.log(a);
    }
    else {
        console.log(-1)
    }
}

let arr = [1,2,3,4,5,6,7,8,9];
let n = 3;
exponentiation(arr,n)