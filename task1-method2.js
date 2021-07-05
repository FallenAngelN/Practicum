let arr = [1, 2, 3, 4, 5, 'solo', 'gg', 'gh', 'ez', true, false];
let lendtharr = arr.length;
let str = '';
for (let i = 0; i < lendtharr; i++) {
    str += arr.shift();
    str += ',';
}
console.log(str);