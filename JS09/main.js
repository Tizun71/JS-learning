//Input
let nam = Number(prompt("Nhập năm dương lịch:"));

//Caculate

//Output
console.log("Năm của bạn = " + nam);

if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  console.log(`${nam} là năm nhuận`);
} else {
  console.log(`${nam} không là năm nhuận`);
}
