/**
 * Bài 28: Viết hàm xoá các cặp key-value từ một object dựa trên một mảng các key
 * @param obj - The object
 * @param keysToOmit - An array of keys
 * @returns A new object
 */

const omit = <T extends Record<string, any>>(obj: T, keysToOmit: string[]): Partial<T> => {
  return Object.keys(obj)
    .filter((key) => !keysToOmit.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {} as Partial<T>);
};

console.log(omit({ a: 1, b: "2", c: 3 }, ["b"]));
console.log(omit({ a: 1, b: 2, c: 3 }, ["c"])); 
