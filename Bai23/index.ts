/**
 * Bài 23: Viết hàm lọc mảng từ mảng cho trước (lọc ra các số không xuất hiện trong mảng điều kiện)
 * @param arr - The array to filter
 * @param args - The values to exclude
 * @returns A new array
 */

const without = <T>(arr: T[], ...args: T[]): T[] =>
  arr.filter((v) => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));
