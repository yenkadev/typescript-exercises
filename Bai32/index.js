/**
 * Bài 32: Viết hàm nhập vào 1 số bé hơn 25 và chuyển đổi thành giờ dạng am hoặc pm
 * @param num - A number
 * @returns A string representing the hour
 */
var getMeridiemSuffixOfInteger = function (num) {
    return num === 0 || num === 24
        ? 12 + "am"
        : num === 12
            ? 12 + "pm"
            : num < 12
                ? (num % 12) + "am"
                : (num % 12) + "pm";
};
console.log(getMeridiemSuffixOfInteger(0));
console.log(getMeridiemSuffixOfInteger(11));
console.log(getMeridiemSuffixOfInteger(13));
console.log(getMeridiemSuffixOfInteger(25));
