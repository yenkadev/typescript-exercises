"use strict";
/**
 * Bài 43: Viết chương trình trả về mảng có độ dài lớn nhất từ một danh sách các mảng được
truyền vào
 * @param vals - The list of arrays or strings
 * @returns The longest array or string
 */
const longestItem = (...vals) => {
    return [...vals].sort((a, b) => b.length - a.length)[0];
};
console.log(longestItem("this", "is", "a", "testcase"));
console.log(longestItem(...["a", "ab", "abc"]));
console.log(longestItem(...["a", "ab", "abc"], "abcd"));
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(longestItem([1, 2, 3], "foobar"));
