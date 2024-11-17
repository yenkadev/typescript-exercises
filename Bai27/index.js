/**
 * Bài 27: Viết hàm trả về một mảng n phần tử nguyên được random ngẫu nhiên trong một khoảng cho trước
 * @param min - The minimum value
 * @param max - The maximum value
 * @param n - The number of random integers
 * @returns An array
 */
var randomIntArrayInRange = function (min, max, n) {
    if (n === void 0) { n = 1; }
    return Array.from({ length: n }, function () { return Math.floor(Math.random() * (max - min + 1)) + min; });
};
console.log(randomIntArrayInRange(1, 20, 10));
console.log(randomIntArrayInRange(-10, 10, 5));
