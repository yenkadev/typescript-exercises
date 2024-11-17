/**
 * Bài 47: Viết hàm truncate string: Truncate là viết string cho sẵn thành một string mới có độ dài n 
kí tự trong đó có chứa 3 dấu chấm ví dụ kết quả của hàm đáp án sau khi thực thi là: boom...
 * @param str - The input string
 * @param num - The maximum length of the resulting string
 * @returns The truncated string
 */

const truncateString = (str: string, num: number): string => {
  return str.length > num
    ? str.slice(0, num > 3 ? num - 3 : num) + "..."
    : str;
};

console.log(truncateString("boomerang", 7));
