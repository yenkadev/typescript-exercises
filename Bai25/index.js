/**
 * Bài 25: Viết hàm trả về một số ngẫu nhiên trong khoảng cho trước.
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns A random number
 */
var randomNumberInRange = function (min, max) {
    return Math.random() * (max - min) + min;
};
console.log(randomNumberInRange(2, 10));
console.log(randomNumberInRange(1, 5));
console.log(randomNumberInRange(-5, -2));
console.log(randomNumberInRange(0, 1));
