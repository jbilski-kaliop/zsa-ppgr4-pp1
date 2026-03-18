function isEven(value) {
    if (Number.isInteger(value)) {
        return !(value % 2);
    }

    return false;
}

function isOdd(value) {
    if (Number.isInteger(value)) {
        return !isEven(value);
    }

    return false;
}

function max(...values) {
    if (values.length === 0) {
        return NaN;
    }

    let i = 0;
    let result = NaN;
    for (; i < values.length; i++) {
        if (!isNaN(values[i])) {
            result = values[i];
            break;
        }
    }

    for (i = i + 1; i < values.length; i++) {
        if (!isNaN(values[i]) && values[i] > result) {
            result = values[i];
        }
    }

    return isNaN(result) ? NaN : result;
}
