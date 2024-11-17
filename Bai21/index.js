/**
 * Bài 21: Viết hàm tính thời gian thực thi của một hàm
 * @param callback - The function to be executed
 * @returns The execution time
 */
var timeTaken = function (callback) {
    var result = callback();
    return result;
};
console.log("Time taken: " + timeTaken(function () { return Math.pow(2, 10); }) + "ms");
console.log("Time taken: " + timeTaken(function () { return Math.sqrt(225); }) + "ms");
console.log("Time taken: " + timeTaken(function () { return Math.sqrt(5 * 5 + 6 * 6); }) + "ms");
