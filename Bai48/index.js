"use strict";
/**
 * Bài 48: Viết hàm chuyển số cho trước thành đơn vị tiền tệ của quốc gia cho trước
 * @param n - The number to be formatted
 * @param curr - The currency code
 * @param LanguageFormat - The optional language/locale
 * @returns The formatted currency string.
 */
const toCurrency = (n, curr, LanguageFormat) => {
    return new Intl.NumberFormat(LanguageFormat, {
        style: "currency",
        currency: curr,
    }).format(n);
};
console.log(toCurrency(123456.789, "EUR"));
console.log(toCurrency(123456.789, "USD", "en-US"));
console.log(toCurrency(123456.789, "USD", "fa"));
console.log(toCurrency(322342436423.2435, "JPY"));
console.log(toCurrency(322342436423.2435, "JPY", "fi"));
