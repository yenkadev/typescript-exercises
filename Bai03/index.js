/**
 * Bài 3: Viết hàm lọc các phần tử trong mảng theo điều kiện cho trước, nếu không có điều kiện lọc thì trả về mảng ban đầu.
 * @param arr - The array to filter
 * @param args - The values to exclude
 * @returns The filtered array
 */
var pull = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === 0) {
        return arr;
    }
    return arr.filter(function (item) { return args.indexOf(item) === -1; });
};
var arra1 = ["a", "b", "c", "a", "b", "c"];
var arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra1, "a", "c"));
console.log(pull(arra2, "b"));
["a", "c", "a", "c"];
