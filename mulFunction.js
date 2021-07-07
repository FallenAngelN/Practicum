function mulExternal(a) {
    function mulMiddle(b){
        function mulInterior(c) {
            return a * b * c;
        }
        return mulInterior;
    }
    return mulMiddle;
}

let a = 3;
let b = 4;
let c = 5;
console.log(mulExternal(a)(b)(c));