/**
 * Bài 49: Viết hàm trả về một mảng có n phần tử cho trước, nếu n nhập vào lớn hơn số phần tử
thì mảng giữ nguyên, nếu n bé hơn số phần tử thì mảng sẽ được xoá từ bên trái các phần tử cho 
đến khi số lượng phần tử của mảng bằng với n
 * @param arr - Input array
 * @param n - The number of elements
 * @returns A new array
 */

const take = <T>(arr: T[], n: number = 1): T[] => {
  return arr.slice(0, n);
};

console.log(take([1, 2, 3], 5));
console.log(take([1, 2, 3], 0));
