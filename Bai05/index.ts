/**
 * Bài 5: Viết hàm xoá n phần tử từ bên trái của một mảng cho trước
 * @param arr - The array to slice
 * @param n - The number of elements
 * @returns A new array
 */

const removeFromLeft = (arr: number[], n = 1): number[] => {
  return arr.slice(n);
};

console.log(removeFromLeft([1, 2, 3]));
console.log(removeFromLeft([1, 2, 3], 1));
console.log(removeFromLeft([1, 2, 3], 2));
console.log(removeFromLeft([1, 2, 3], 4));
