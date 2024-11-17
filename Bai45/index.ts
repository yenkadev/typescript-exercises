/**
 * Bài 45: Viết hàm giữ lại n kí tự từ chuỗi cho trước, các kí tự còn lại thay bằng kí tự mask cho 
trước
 * @param cc - The input string or number
 * @param num - The number of characters to keep unmasked
 * @param mask - The character to replace the masked
 * @returns The masked string
 */

const mask = (
  cc: string | number,
  num: number = 4,
  mask: string = "*"
): string => {
  return ("" + cc).slice(0, -num).replace(/./g, mask) + ("" + cc).slice(-num);
};

console.log(mask(1234567890));
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, "$"));
