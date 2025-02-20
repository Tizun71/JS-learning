let a = parseInt(prompt("Nhập vào số a:"));

let ans;
if (a % 2 === 0) {
  ans = (a * (a / 2 + 1)) / 2;
  console.log("Tổng các số chẵn từ 0 đến 4 là: " + ans);
} else {
  console.log("Tôi không tính số lẻ");
}
