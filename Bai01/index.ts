/**
 * Bài 1: Viết hàm kiểm tra object thứ 2 có phải là con của object thứ nhất hay không?
 * @param obj1 - The base object to compare
 * @param obj2 - The object to check
 * @returns A boolean
 */

const matches = (
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
): boolean => {
  const keys2 = Object.keys(obj2);
  for (const key of keys2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
);
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
);
console.log(
  matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
);
