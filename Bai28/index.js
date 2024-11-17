/**
 * Bài 28: Viết hàm xoá các cặp key-value từ một object dựa trên một mảng các key
 * @param obj - The object
 * @param keysToOmit - An array of keys
 * @returns A new object
 */
var omit = function (obj, keysToOmit) {
    return Object.keys(obj)
        .filter(function (key) { return !keysToOmit.includes(key); })
        .reduce(function (acc, key) {
        acc[key] = obj[key];
        return acc;
    }, {});
};
console.log(omit({ a: 1, b: "2", c: 3 }, ["b"]));
console.log(omit({ a: 1, b: 2, c: 3 }, ["c"]));
