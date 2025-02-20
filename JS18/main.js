let cnt = 0;
for (let i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
    cnt++;
  }
}
console.log(`Có ${cnt} số chia hết cho 3 từ 10 đến 50`);
