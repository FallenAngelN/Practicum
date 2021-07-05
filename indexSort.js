function indexSort(str) {
    let str2 = '';
    if (str.length > 2 && str.length < 100) {
        for (let i = 0; i < str.length; i++) {
            if (i % 2 == 1) {
                str2 += str[i];
            }
        }
        console.log(str2);
    }
    else {
        console.log('invalid string')
    }
}

let str = '9';
indexSort(str);