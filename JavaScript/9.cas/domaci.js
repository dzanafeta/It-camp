// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// let i = 1;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 1.

let c = 1;

while (c <= 10) {
  if (c % 2 === 0) {
    console.log(c);
  }
  c++;
}

// // 2.
// let broj21 = parseInt(prompt("Unesite prvi broj: "));
// let broj22 = parseInt(prompt("Unesite drugi broj: "));

// let manjiBroj, veciBroj;
// if (broj1 < broj2) {
//   manjiBroj = broj1;
//   veciBroj = broj2;
// } else {
//   manjiBroj = broj2;
//   veciBroj = broj1;
// }

// let i = manjiBroj;
// while (i <= veciBroj) {
//   console.log(i);
//   i++;
// }

// // 2.

let brojj1 = +prompt("Unesite prvi broj: ");
let brojj2 = +prompt("Unesite drugi broj: ");

if (isNaN(brojj1) || isNaN(brojj2)) {
  console.log("Niste uneli korektne vrednosti");
}
if (brojj1 < brojj2) {
  while (brojj1 <= brojj2) {
    console.log(brojj1);
    broj1++;
  }
} else if (brojj2 < brojj1) {
  while (brojj2 <= brojj1) {
    console.log(brojj2);
    brojj2++;
  }
} else {
  console.log("Uneli ste iste brojeve.");
}

const NZS = (br1, br2) => {
  const veci = br1 > br2 ? br1 : br2;
  let NZS = veci;
};
