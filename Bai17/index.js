/**
 * Bài 17: Viết hàm lọc ra các phần tử không xuất hiện 2 lần trong mảng
 * @param arr - The array to filter
 * @returns A new array
 */
var filterNoneUnique = function (arr) {
    return arr.filter(function (i) { return arr.indexOf(i) === arr.lastIndexOf(i); });
};
console.log(filterNoneUnique([1, 2, 2, 3, 4, 4, 5]));
console.log(filterNoneUnique([1, 2, 3, 4]));
