let n = Number(prompt("Nhập n:"));

function gt(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
}

console.log(`Kết quả ${n}! = ${gt(n)}`);
