/**
 * Bài 42: Viết hàm forEach nhưng duyệt các phần tử từ phải sang trái:
 * @param arr - The input array
 * @param callback - The callback function to execute on each element
 */

const forEachRight = <T>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => void
): void => {
  return arr.slice(0).reverse().forEach(callback);
};

forEachRight([1, 2, 3, 4], (val) => console.log(val));
