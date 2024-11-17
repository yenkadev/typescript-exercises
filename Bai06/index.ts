/**
 * Bài 6: Viết hàm giữ lại n phần tử từ bên phải của một mảng cho trước
 * @param arr - The array to slice
 * @param n - The number of elements
 * @returns A new array
 */

const removeFromRight = (arr: number[], n = -1): number[] => {
  return arr.slice(n);
}

console.log(removeFromRight([1, 2, 3]));
console.log(removeFromRight([1, 2, 3], -1));
console.log(removeFromRight([1, 2, 3], -2));
console.log(removeFromRight([1, 2, 3], -4));