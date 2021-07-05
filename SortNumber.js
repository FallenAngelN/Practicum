function sortArr(arr) {
    let arr2 = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'number') {
            arr2[j] = arr[i];
            j++;
        }
    }
    console.log(arr2);
}

let arr = [1, 2, 3, 4, 5, 'ads', 'sdfewr', true, false];
sortArr(arr);
