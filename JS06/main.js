//Input
let diemToan = Number(prompt("Nhập điểm môn toán:"));
let diemVan = Number(prompt("Nhập điểm môn văn:"));
let diemAnh = Number(prompt("Nhập điểm môn anh:"));

//Caculate
let dtb = (diemToan + diemVan + diemAnh) / 3;

//Output
console.log("Điểm trung bình = " + dtb.toFixed(2));
