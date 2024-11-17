"use strict";
/**
 * Bài 46: Viết hàm chuyển n phần tử của mảng về cuối mảng:
 * @param arr - The input array
 * @param offset - The number of elements to move
 * @returns A new array
 */
const offsetArray = (arr, offset) => {
    return [...arr.slice(offset), ...arr.slice(0, offset)];
};
console.log(offsetArray([1, 2, 3, 4, 5], 2));
console.log(offsetArray([1, 2, 3, 4, 5], -2));
