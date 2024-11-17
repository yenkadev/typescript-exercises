/**
 * Bài 22: Viết hàm làm tròn số thực đến 0.5
 * @param num - The number to round
 * @returns The number rounded
 */
var roundToHalf = function (num) {
    return Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
};
console.log(roundToHalf(5.2));
console.log(roundToHalf(5.52));
console.log(roundToHalf(Infinity));
