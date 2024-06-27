const array = [];
const numeri = document.getElementById("tombolone");
for (let index = 1; index <= 90; index++) {
  const element = [index];
  array.push(element);
  numeri.innerHTML += `<div id="${element}" class='cell'>${element}</div>`;
}
function casuale() {
  let estratto = Math.floor(Math.random() * 90) + 1;
  document.getElementById("casuale").innerHTML = "Numero estratto " + estratto;
  document.getElementById(estratto).classList.add("colora");
}
console.log(array);
