export default function (...values) {
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
