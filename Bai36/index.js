/**
 * Bài 36: Viết hàm kiểm tra xem các phần tử trong mảng có bằng nhau hay không?
 * @param arr - The array to check the elements
 * @returns True if all elements in the array are equal, false otherwise.
 */
var allEqual = function (arr) {
    return arr.every(function (val) { return val === arr[0]; });
};
console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([12, 12, 12, 12]));
