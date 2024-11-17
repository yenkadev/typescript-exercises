/**
 * Bài 40: Viết hàm thực hiện deepClone object: deep clone là sao chép giá trị của object đã cho
 * và gán vào một object mới với địa chỉ mới trên RAM
 * @param obj - The object to clone
 * @param seen - Objects that have been seen
 * @returns A new deep-cloned object
 */

const deepClone = (obj: any): any => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj)
    ? (clone.length = obj.length) && Array.from(clone)
    : clone;
};

const a = { foo: "bar", obj: { a: 1, b: 2 } };
const b = deepClone(a);

console.log(b);
