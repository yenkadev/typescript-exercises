/**
 * Bài 30: Viết hàm chuyển ngược kết quả của câu trên thành object
 * @param arr - An array
 * @returns An object
 */
var objectFromPairs = function (arr) {
    return arr.reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc[key] = value;
        return acc;
    }, {});
};
console.log(objectFromPairs([
    ["a", 1],
    ["b", 2],
]));
console.log(objectFromPairs([
    [1, 10],
    [2, 20],
    [3, 30],
]));
