function message(name, age) {
    let maturity;
    if (age < 18) {
        maturity = 'child!';
    }
    else if (age < 31) {
        maturity = 'young!';
    }
    else if (age < 56) {
        maturity = 'mature!';
    }
    else {
        maturity = 'old man!';
    }
    console.log(name, 'is', age, 'years old and', maturity);
}

let name = 'Jonny';
let age = '33';
message(name, age);
