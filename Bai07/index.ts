/**
 * Bài 7: Viết hàm lọc các phần tử chia hết cho n cho trước trong mảng
 * @param arr - The array to filter
 * @param nth - The number to divide
 * @returns A new array
 */

const everyNth = (arr: number[], nth: number): number[] => {
  return arr.filter((e, i) => i % nth === nth - 1);
};

console.log(everyNth([1, 2, 3, 4, 5, 6], 1));
console.log(everyNth([1, 2, 3, 4, 5, 6], 2));
console.log(everyNth([1, 2, 3, 4, 5, 6], 3));
console.log(everyNth([1, 2, 3, 4, 5, 6], 4));
