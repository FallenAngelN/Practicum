function deleteMin(arr) {
    let minim = arr[0];
    let j = 0;
    let local1;
    for (let i = 1; i < arr.length; i++) {
        if (minim > arr[i]) {
            minim = arr[i];
            j = i;
        }
    }
    for (let i = j; i < arr.length-1; i++)
    {
        local1 = arr[i+1];
        arr[i + 1] = arr[i];
        arr[i] = local1;
    }
    arr.pop();
    console.log(arr);
}

let arr = [10, 12, 321, 345, 2, 6547, 123];
deleteMin(arr);