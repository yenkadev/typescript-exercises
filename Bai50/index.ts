/**
 * Bài 50: Viết hàm chuyển văn bản text có kí tự xuống hàng thành mảng các phần tử.
 * @param str - The input string
 * @returns An array of strings
 */

const splitLines = (str: string): string[] => {
  return str.split(/\r?\n/);
};
const multilineString = "This\nis a\nmultiline\nstring.\n";

console.log("Original string:");
console.log(multilineString);
console.log(splitLines(multilineString));
