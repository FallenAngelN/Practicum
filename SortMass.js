//Сортировка по убыванию
function arrSortWaning(arr,n) {
    let local1 = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] < arr[j + 1]) {
                local1 = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = local1;
            }
        }
    }
    console.log(arr);
}

function arrSortAscending(arr, n) {
    let local1 = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                local1 = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = local1;
            }
        }
    }
    console.log(arr);
}

let arr = [3, 5, 1, 2, 3, 7, 8, 1, 2, 3, 4, 6];
let n = arr.length;
arrSortWaning(arr, n);
console.log('----------------------------------------');
arrSortAscending(arr, n);