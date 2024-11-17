/**
 * Bài 31: Viết hàm xoá đi các falsy value từ mảng cho trước
 * @param arr - The array to process.
 * @returns A new array with all falsy values removed.
 */

const compact = (arr: any[]): any[] => arr.filter(Boolean);

console.log(compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34])); 
console.log(compact([false, NaN, "e" * 23])); 
