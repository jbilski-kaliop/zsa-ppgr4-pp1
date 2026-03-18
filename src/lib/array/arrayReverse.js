export default function(values) {
    const result = [];

    if (!Array.isArray(values)) {
        return result;
    }

    for (let i = values.length - 1; i >= 0; i--) {
        result.push(values[i]);
    }

    return result;
}
