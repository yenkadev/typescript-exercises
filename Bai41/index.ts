/**
 * Bài 41: Viết hàm chạy trên browser kiểm tra xem web đang được chạy trên môi trường nào
 * @returns A string
 */

const detectDeviceType = (): "Mobile" | "Desktop" | "Unknown" => {
  if (typeof navigator !== "undefined" && navigator.userAgent) {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";
  } else {
    return "Unknown";
  }
};

console.log(detectDeviceType());
