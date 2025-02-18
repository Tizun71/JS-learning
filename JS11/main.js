let a = parseFloat(prompt("Nhập giá trị a:"));
let b = parseFloat(prompt("Nhập giá trị b:"));
let c = parseFloat(prompt("Nhập giá trị c:"));

let delta = b ** 2 - 4 * a * c;
console.log(delta);
if (delta > 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(`Phương trình có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
} else if (delta === 0) {
  let x1 = -b / (2 * a);
  console.log(`Phương trình có nghiệm kép x1 = x2 = ${x1}`);
} else {
  console.log("Phương trình vô nghiệm");
}
