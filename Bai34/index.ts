/**
 * Bài 34: Viết hàm khởi tạo 1 mảng 2 chiều từ 3 tham số, chiều dài, chiều rộng và giá trị của mỗi 
phần tử
 * @param w - The width (number of columns)
 * @param h - The height (number of rows)
 * @param val - The value to fill each element
 * @returns A 2D array
 */

const initialize2DArray = (w: number, h: number, val: any = null): any[][] => {
  return Array.from({ length: h }).map(() =>
    Array.from({ length: w }).fill(val)
  );
};

console.log(initialize2DArray(2, 2, 0));
console.log(initialize2DArray(3, 3, 3));
