let thang = parseInt(prompt("Nhập vào 1 tháng:"));
if (thang >= 1 && thang <= 12) {
  console.log(`tháng ${thang} thuộc quý ${(thang - 1) / 3 + 1}`);
} else {
  console.log("Tháng không hợp lệ");
}
