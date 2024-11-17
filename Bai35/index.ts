/**
 * Bài 35: Viết hàm khởi tạo mảng theo các tham số: bắt đầu, kết thúc, và bước nhảy, trong đó 
bước nhảy là khoảng cách giữa các phần tử
 * @param start - The starting number
 * @param end - The ending number
 * @param step - The step between each element
 * @returns An array of numbers from start to end
 */

const initializeArrayWithRange = (
  end: number,
  start: number = 0,
  step: number = 1
): number[] => {
  return Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i) => i * step + start
  );
};

console.log(initializeArrayWithRange(5));
console.log(initializeArrayWithRange(8, 3));
console.log(initializeArrayWithRange(6, 0, 2));
