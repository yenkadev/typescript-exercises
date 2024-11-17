/**
 * Bài 37: Viết hàm gom các tham số đưa vào thành mảng
 * @param val - The value to be converted to an array
 * @returns An array containing the provided value
 */

const castArray = <T>(val: T | T[]): T[] => {
  return Array.isArray(val) ? val : [val];
};

console.log(castArray("w3r"));
console.log(castArray([100]));
