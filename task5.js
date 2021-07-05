for (let i = 1; i < 101; i++) {
    console.log(i);
    if (i < 18) {
        console.log('child');
    }
    else if (i < 31) {
        console.log('young');
    }
    else if (i < 56) {
        console.log('mature');
    }
    else {
        console.log('old man');
    }
}