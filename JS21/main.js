let n = Number("Nhập n:");

let isPrime = true;

for (let i = 2; i <= Math.sqrt(n, 2); i++) {
  if (n % 2 == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(n + "là số nguyên tố");
} else {
  console.log(n + "không là số nguyên tố");
}
