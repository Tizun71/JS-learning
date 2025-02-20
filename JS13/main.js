let dth = parseFloat(prompt("Nhập vào điểm trung bình:"));

let loai =
  dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung bình" : "Yếu";
console.log("Xếp loại của học sinh là: " + loai);
