// Domaci zadaci:
// 1. Zavrsiti zadatak za racunanje duzine ograde fudbalskog terena;

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

// let broj = +prompt("Unesite jedan broja od 12 do 16");
// let c = 1;
// while (c < 17) {
//   console.log(i);
//   c--;
// }

// let num = +prompt("Unesite broj iz intervala [12,16): ");

// if (num < 12 || num >= 16) {
//   console.log("Uneti broj nije u intervalu [12,16).");
// }

// let i = num;
// while (i >= 1) {
//   console.log(i, i ** 2, i - 25);
//   i--;

const broj = +prompt("Unesite neki broj: ");
if (isNaN(broj) || broj < 12 || broj >= 16) {
  console.log("Niste uneli korektan broj.");
}

for (let i = broj; i >= 1; i--) {
  console.log(i, i ** 2, i - 25);
}
