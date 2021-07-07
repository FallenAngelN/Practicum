function deleteDublicate(arr) {
    let arr2 = arr.filter((symbol, index) => {
        return arr.indexOf(symbol) === index
    });
    let str2 = arr2.join('');
    console.log(str2);
}

let str = 'Aacbbbe112344GGWp';
str = str.toLowerCase();
let arr = str.split('');
deleteDublicate(arr);