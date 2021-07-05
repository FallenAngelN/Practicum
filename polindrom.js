function polindrom(str) {
    let a;
    let str2 = '';
    for (let i = 0, j=0; i < str.length; i++) {
        if (str[i] != ' ') {
            str2 += str[i];
            j++;
        }
    }
    for (let i = 0, j = str2.length - 1; i < str2.length / 2; i++, j--) {
            if (str2[i] == str2[j]) {
                a = true;
            }
            else {
                a = false;
                break;
            }
        }
    console.log(a);
}

let str = 'abc Cba';
str = str.toLowerCase();
polindrom(str);
