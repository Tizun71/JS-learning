let choice = Number(
  prompt(`
Chọn cách tìm kiếm
1. Tìm theo tên
2. Tìm theo tác giả
3. Tìm theo nhà xuất bản
4. Tìm theo tiêu đề  
`)
);

switch (choice) {
  case 1:
    alert("Bạn đã chọn tìm theo tên");
    break;
  case 2:
    alert("Bạn đã chọn tìm theo tác giả");
    break;
  case 3:
    alert("Bạn đã chọn tìm theo nhà xuất bản");
    break;
  case 4:
    alert("Bạn đã chọn tìm theo tiêu đề");
    break;
  default:
    alert("Lựa chọn không hợp lệ");
    break;
}
