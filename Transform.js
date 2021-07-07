function Transformation(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) == arr.indexOf(arr[i])) {
            arr2 += '(';
        } else
            arr2 += ')';
    }
    console.log(arr2);
}

let str = 'soRRy, i StupId';
str = str.toLowerCase();
let arr = str.split('');
Transformation(arr);