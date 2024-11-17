/**
 * Bài 20: Viết hàm trả về true nếu string là y hoặc yes, trả về false nếu string là n hoặc no.
 * @param val - The string value
 * @param def - The default value
 * @returns True if the string is "y" or "yes", false if it's "n" or "no"
 */

const yesNo = (val: string, def: boolean = false): boolean => {
  return /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
};

console.log(yesNo("Y"));
console.log(yesNo("yes"));
console.log(yesNo("No"));
console.log(yesNo("Foo", true));
