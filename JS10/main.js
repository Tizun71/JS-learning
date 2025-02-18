//Input
let thang = Number(prompt("Nhập vào 1 tháng:"));

if (!isNaN(thang) && thang >= 1 && thang <= 12) {
  if (thang === 2) {
    let nam = parseInt(prompt("Nhập vào 1 năm:"));
    const checkNamNhuan = (nam) => {
      if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    };
    console.log(`tháng ${thang} có ${checkNamNhuan(nam)} ngày`);
  } else if (
    thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 8 ||
    thang === 10 ||
    thang === 12
  ) {
    console.log(`tháng ${thang} có 31 ngày`);
  } else {
    console.log(`tháng ${thang} có 30 ngày`);
  }
} else {
  console.log("Tháng không hợp lệ, Vui lòng nhập lại");
}
