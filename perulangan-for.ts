const output = document.getElementById("output") as HTMLElement;
let batas: string | null = prompt("Masukkan sebuah angka:");
output.innerHTML = "";
for (let i = 1; i <= 10; i++) {
  output.innerHTML += `<p>${i} x ${batas} = ${i * Number(batas)}</p>`;
}