function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }

    return false;

    return (value % 2 === 0 ? true : false);

    retrun (value % 2 === 0);

    return !(value % 2);
}

function isOdd(value) {
    return !isEven(value);
}
