/**
 * Bài 30: Viết hàm chuyển ngược kết quả của câu trên thành object
 * @param arr - An array
 * @returns An object
 */

const objectFromPairs = (
  arr: [string | number, any][]
): Record<string | number, any> => {
  return arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string | number, any>);
};

console.log(
  objectFromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
console.log(
  objectFromPairs([
    [1, 10],
    [2, 20],
    [3, 30],
  ])
);
