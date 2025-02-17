//Input
let chieuCao = Number(prompt("Nhập chiều cao (m):"));
let canNang = Number(prompt("Nhập cân nặng (kg):"));

//Caculate
let BMI = canNang / Math.pow(chieuCao, 2);

//Output
console.log("BMI của ban = " + BMI);
if (BMI < 15) console.log("Thân hình quá gầy");
else if (BMI < 16) console.log("Thân hình gầy");
else if (BMI < 18.5) console.log("Thân hình hơi gầy");
else if (BMI < 25) console.log("Thân hình bình thường");
else if (BMI < 30) console.log("Thân hình hơi béo");
else if (BMI < 35) console.log("Thân hình béo");
else console.log("Thân hình quá béo");
