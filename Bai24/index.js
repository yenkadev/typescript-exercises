/**
 * Bài 24: Viết hàm bỏ đi phần tử đầu tiên của mảng, nếu mảng chỉ có 1 phần tử thì lấy phần tử đầu tiên.
 * @param arr - The input array
 * @returns A new array without the first element
 */
var tail = function (arr) { return (arr.length > 1 ? arr.slice(1) : arr); };
console.log(tail([1, 2, 3]));
console.log(tail([1]));
