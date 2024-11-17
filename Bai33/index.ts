/**
 * Bài 33: Viết hàm nhận vào một url và chuyển các url parameter thành object
 * @param url - The URL string to extract parameters
 * @returns An object containing key-value pairs
 */

const getUrlParameters = (url: string): { [key: string]: string } => {
  return (url.match(/([^?=&]+)=([^&]*)/g) || []).reduce(
    (a: { [key: string]: string }, v: string) => {
      const [key, value] = v.split("=");
      a[key] = decodeURIComponent(value || "");
      return a;
    },
    {}
  );
};

console.log(getUrlParameters("https://url.com/page?name=Adam&surname=Smith"));
console.log(getUrlParameters("google.com"));
console.log(getUrlParameters("https://www.w3resource.com"));
