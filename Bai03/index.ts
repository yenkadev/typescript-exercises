/**
 * Bài 3: Viết hàm lọc các phần tử trong mảng theo điều kiện cho trước, nếu không có điều kiện lọc thì trả về mảng ban đầu.
 * @param arr - The array to filter
 * @param args - The values to exclude
 * @returns The filtered array
 */

const pull = (arr: any[], ...args: any[]): any[] => {
  if (args.length === 0) {
    return arr;
  }
  return arr.filter((item) => args.indexOf(item) === -1);
};

let arra1 = ["a", "b", "c", "a", "b", "c"];
let arra2 = ["a", "b", "c", "a", "b", "c"];

console.log(pull(arra1, "a", "c"));
console.log(pull(arra2, "b"));
["a", "c", "a", "c"];
