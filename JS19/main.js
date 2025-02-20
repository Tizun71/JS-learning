let n = Number(prompt("Nhập n:"));
let ans = 0;
for (let i = 1; i <= n; i++) {
  let tmp_gt = 1;
  for (let j = 1; j <= i; j++) {
    tmp_gt *= j;
  }
  ans += tmp_gt;
}
console.log("Tổng S = " + ans);
