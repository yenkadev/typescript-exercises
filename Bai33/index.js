/**
 * Bài 33: Viết hàm nhận vào một url và chuyển các url parameter thành object
 * @param url - The URL string to extract parameters
 * @returns An object containing key-value pairs
 */
var getUrlParameters = function (url) {
    return (url.match(/([^?=&]+)=([^&]*)/g) || []).reduce(function (a, v) {
        var _a = v.split("="), key = _a[0], value = _a[1];
        a[key] = decodeURIComponent(value || "");
        return a;
    }, {});
};
console.log(getUrlParameters("https://url.com/page?name=Adam&surname=Smith"));
console.log(getUrlParameters("google.com"));
console.log(getUrlParameters("https://www.w3resource.com"));
