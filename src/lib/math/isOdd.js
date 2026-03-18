import isEven from "./isEven";

export default function isOdd(value) {
    if (Number.isInteger(value)) {
        return !isEven(value);
    }

    return false;
}
