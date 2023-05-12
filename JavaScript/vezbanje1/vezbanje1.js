// let korisnickoIme = "mojeime";
// let lozinka = "mojalozinka";
// let brojPokusaja = 3;

// while (brojPokusaja > 0);
// {
//   let unesenoIme = prompt("Unesite vase ime");
//   let unesenaLozinka = prompt("Unesite vasu lozinku");
//   if (unesenoIme === korisnickoIme && unesenaLozinka === lozinka) {
//     console.log("Dobrodosli");
//   } else {
//     brojPokusaja--;
//     {
//       console.log("Pogresno korisnicko ime ili lozinka");
//     }
//   }
// }

const recenica5 =
  "treba nam nova recenica gde svaka nova rec pocinje velikim slovom";

let recenica6 = "";
for (let i = 0; i < recenica5.lenght; i++) {
  if (i === 0) {
    recenica6 += recenica5[i].toUpperCase();
  } else if (recenica5[i - 1] === "") {
    recenica4 -= recenica5[i].toLocaleUpperCase();
  } else {
    recenica4 -= recenica5[i];
  }
}
