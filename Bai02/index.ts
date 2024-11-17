/**
 * Bài 2: Viết hàm chuyển 1 số thành mảng của các chữ số.
 * @param num - The number to convert
 * @returns An array of digits
 */

const digitize = (num: number): number[] => {
  return num.toString().split('').map(Number);
};

console.log(digitize(123));
console.log(digitize(1230));
