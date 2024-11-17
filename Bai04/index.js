/**
 * Bài 4: Viết chương trình lấy giá trị của mảng được cho bởi một khoảng cho trước
 * @param arr - The array to pull
 * @param pullArr - An array containing the indices
 * @returns A new array
 */
var pullAtIndex = function (arr, pullArr) {
    return pullArr.map(function (index) { return arr[index]; });
};
var arra1 = ["a", "b", "c", "d", "e", "f"];
var arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pullAtIndex(arra1, [1, 3]));
console.log(pullAtIndex(arra2, [4]));
