export default function (value) {
    if (Number.isInteger(value)) {
        return !(value % 2);
    }

    return false;
}
