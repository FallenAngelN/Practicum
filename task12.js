let arr = ['a', 1, 2, false, 'b'];
let obj = {
    number: [],
    string: [],
    boolean: []
};
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) == 'string') {
        obj.string.push(arr[i]);
    }
    else if (typeof (arr[i]) == 'number') {
        obj.number.push(arr[i]);
    }
    else if (typeof (arr[i]) == 'boolean') {
        obj.boolean.push(arr[i]);
    }
}
console.log(obj);