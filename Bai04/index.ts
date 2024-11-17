/**
 * Bài 4: Viết chương trình lấy giá trị của mảng được cho bởi một khoảng cho trước
 * @param arr - The array to pull
 * @param pullArr - An array containing the indices
 * @returns A new array
 */

const pullAtIndex = (arr: any[], pullArr: number[]): any[] => {
  return pullArr.map((index) => arr[index]);
};

let arra1 = ["a", "b", "c", "d", "e", "f"];
let arra2 = [1, 2, 3, 4, 5, 6, 7];

console.log(pullAtIndex(arra1, [1, 3]));
console.log(pullAtIndex(arra2, [4]));
