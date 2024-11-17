/**
 * Bài 1: Viết hàm kiểm tra object thứ 2 có phải là con của object thứ nhất hay không?
 * @param obj1 - The base object to compare
 * @param obj2 - The object to check
 * @returns A boolean
 */
var matches = function (obj1, obj2) {
    var keys2 = Object.keys(obj2);
    for (var _i = 0, keys2_1 = keys2; _i < keys2_1.length; _i++) {
        var key = keys2_1[_i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};
console.log(matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true }));
console.log(matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true }));
console.log(matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true }));
