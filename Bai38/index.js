/**
 * Bài 38: Viết hàm chuyển các phần tử trong mảng theo một điều kiện cho trước và đếm số phần tử sau khi nhóm của từng loại
 * @param arr - The array to group and count
 * @param fn - A function or string to determine the grouping condition
 * @returns An object with keys representing each group
 */
var countBy = function (arr, fn) {
    return arr
        .map(function (val) { return (typeof fn === "function" ? fn(val) : val[fn]); })
        .reduce(function (acc, val) {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
};
console.log(countBy([6, 10, 100, 10], Math.sqrt));
console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(["one", "two", "three"], "length"));
