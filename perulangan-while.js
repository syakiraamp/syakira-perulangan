"use strict";
//versi for
const output = document.getElementById("output");
const N = Number(prompt("Masukkan sebuah angka:"));
output.innerHTML = `<h2>Versi FOR</h2>`;
for (let i = 1; i <= 10; i++) {
    output.innerHTML += `${i} x ${N} = ${i * N}<br>`;
}
//versi while
let j = 1;
output.innerHTML += "<hr>";
output.innerHTML += `<h2>Versi WHILE</h2>`;
while (j <= 10) {
    output.innerHTML += `${j} x ${N} = ${j * N}<br>`;
    j++;
}