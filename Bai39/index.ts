/**
 * Bài 39: Viết hàm đếm số lần xuất hiện của một phần tử cho trước trong mảng
 * @param arr - The array to check
 * @param val - The element to count occurrences
 * @returns The number of occurrences
 */

const countOccurrences = <T>(arr: T[], val: T): number => {
  return arr.reduce(
    (count, element) => (element === val ? count + 1 : count),
    0
  );
};

console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));
