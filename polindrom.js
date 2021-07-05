function polindrom(str) {
    let a;
    for (let i = 0, j = str.length-1; i < str.length/2;i++,j--) {
        if (str[i] == str[j]) {
            a = true;
        }
        else {
            a = false;
            break;
        }
    }
    console.log(a);
}

let str = '111222333222111';
polindrom(str);
