/**
 * Bài 23: Viết hàm lọc mảng từ mảng cho trước (lọc ra các số không xuất hiện trong mảng điều kiện)
 * @param arr - The array to filter
 * @param args - The values to exclude
 * @returns A new array
 */
var without = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return arr.filter(function (v) { return !args.includes(v); });
};
console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));
