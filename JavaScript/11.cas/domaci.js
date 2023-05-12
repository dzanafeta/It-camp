// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

// 2.

// let string = "Mama ima momu";
// let brojac = 0;

// for (let i = 0; i < string.length; i++) {
//   if (string[i] === "M" || string[i] === "m") {
//     brojac++;
//   }
// }

// console.log(brojac);

// 1.

const recenica =
  "Treba nam nova recenica gde se svaka rec zavrsava velikim slovom.";
let recenica2 = "";
for (let i = 0; i < recenica.lenght; i++);
{
  if (i === recenica.lenght - 1) {
    recenica2 += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    recenica2 += recenica[i].toUpperCase();
  } else {
    recenica2 += recenica[i];
  }
}

console.log(recenica2);

// 2.

const recenica3 = prompt("Unesite neki string: ");

let brojaci = 0;
for (let i = 0; i < recenica3.length; i++);
{
  if (recenica3[i] === "M" || recenica3[i] === "m") {
    brojaci++;
  }
}

console.log(brojaci);
