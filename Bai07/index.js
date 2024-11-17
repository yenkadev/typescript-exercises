/**
 * Bài 7: Viết hàm lọc các phần tử chia hết cho n cho trước trong mảng
 * @param arr - The array to filter
 * @param nth - The number to divide
 * @returns A new array
 */
var everyNth = function (arr, nth) {
    return arr.filter(function (e, i) { return i % nth === nth - 1; });
};
console.log(everyNth([1, 2, 3, 4, 5, 6], 1));
console.log(everyNth([1, 2, 3, 4, 5, 6], 2));
console.log(everyNth([1, 2, 3, 4, 5, 6], 3));
console.log(everyNth([1, 2, 3, 4, 5, 6], 4));
