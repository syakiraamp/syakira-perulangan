"use strict";
const output = document.getElementById("output");
let batas = prompt("Masukkan sebuah angka:");
output.innerHTML = "";
for (let i = 1; i <= 10; i++) {
    output.innerHTML += `<p>${i} x ${batas} = ${i * Number(batas)}</p>`;
}