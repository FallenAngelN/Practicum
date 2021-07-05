let oneMan = 10;
let twoMan = 5;
let man = [1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1];
let departed = 0;
for (let i = 0; i < man.length; i++) {
    if (man[i] == 1) {
        if (oneMan != 0) {
            oneMan -= 1
        }
        else if (twoMan != 0) {
            twoMan -= 1;
        }
        else {
            departed += 1;
        }
    }
    else if (man[i] == 2) {
        if (twoMan != 0) {
            twoMan -= 1;
        }
        else {
            departed += 2;
        }
    }
}
console.log(departed);