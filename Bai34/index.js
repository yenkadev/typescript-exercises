/**
 * Bài 34: Viết hàm khởi tạo 1 mảng 2 chiều từ 3 tham số, chiều dài, chiều rộng và giá trị của mỗi
phần tử
 * @param w - The width (number of columns)
 * @param h - The height (number of rows)
 * @param val - The value to fill each element
 * @returns A 2D array
 */
var initialize2DArray = function (w, h, val) {
    if (val === void 0) { val = null; }
    return Array.from({ length: h }).map(function () {
        return Array.from({ length: w }).fill(val);
    });
};
console.log(initialize2DArray(2, 2, 0));
console.log(initialize2DArray(3, 3, 3));
