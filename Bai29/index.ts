/**
 * Bài 29: Viết hàm trả về một mảng với các phần tử là mảng chứa key-value của object
 * @param obj - The object to convert into key-value pairs
 * @returns An array
 */

const objectToPairs = (obj: Record<string, any>): [string, any][] => {
  return Object.keys(obj).map((key) => [key, obj[key]]);
};

console.log(objectToPairs({ a: 1, b: 2 }));
console.log(objectToPairs({ a: 1, b: 2, c: 3 }));
