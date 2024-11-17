/**
 * Bài 26: Viết hàm trả về một mảng n phần tử nguyên được random ngẫu nhiên trong một khoảng cho trước.
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns An array
 */

const randomIntegerInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomIntegerInRange(0, 5));
console.log(randomIntegerInRange(2, 5));
console.log(randomIntegerInRange(5, -5));
console.log(randomIntegerInRange(-2, -7));
