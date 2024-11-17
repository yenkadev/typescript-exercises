/**
 * Bài 44: Viết hàm thực hiện chuyển thành chữ hoa từng từ trong chuỗi:
 * @param str - The input string
 * @param fn - A function that transforms each character
 * @returns A new string
 */

const mapString = (
  str: string,
  fn: (char: string, index: number, originalString: string) => string
): string => {
  return str
    .split("")
    .map((c, i) => fn(c, i, str))
    .join("");
};

console.log(mapString("Javascript exercises", (c) => c.toUpperCase()));
