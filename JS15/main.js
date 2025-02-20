let n = parseInt(prompt("Nhập vào số nguyên:"));

let tmp = n;
let ans = 1;
while (tmp > 0) {
  ans *= tmp;
  tmp--;
}
console.log(`Kết quả ${n}!= ${ans}`);
