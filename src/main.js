function isEven(value) {
    return !(value % 2);
}

function isOdd(value) {
    return !isEven(value);
}

function max(val1, val2, val3) {
    if (val1 > val2 && val1 > val3) {
        return val1;
    } else if (val2 > val3) {
        return val2;
    } else {
        return val3;
    }
}
