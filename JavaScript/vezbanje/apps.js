// console.log("neki string");
// console.log(typeof "neki string");
// console.log(78);
// console.log(typeof 78);
// console.log(45.5);
// console.log(typeof 45.5);
// console.log(BigInt(26318761876418746817n));
// console.log(typeof BigInt(26318761876418746817n));
// console.log(true);
// console.log(typeof true);
// var b;
// console.log(b);
// console.log(typeof b);
// b = null;
// console.log(b);
// console.log(typeof b);
// c = Symbol("IT CAMP");
// console.log(c);
// console.log(typeof c);

// const broj_godina = 28;
// if (broj_godina <= 18) {
//   console.log("Punoletni ste");
// } else broj_godina >= 18;
// {
//   console.log("Maloletni ste");
// }

// let x = 16;
// let y = 0;

// if (y === 0) {
//   console.log("Deljenje je nemoguce");
// } else {
//   console.log(x / y);
// }

// const ime = prompt("Unesite Vase ime");
// console.log(ime);

// const brojGodina2 = Number(brojGodina);
// console.log(brojGodina2);
// console.log(typeof brojGodina2);

// const visina = +prompt("Unesite vasu visinu");
// console.log(visina);

// console.log(isNaN(56));
// console.log(isNaN(djsfsjf));

// const brojGodina = +prompt("Unesite broj vasih godina");

// if (isNaN(brojGodina)) {
//   console.log("Niste uneli broj godina");
// } else if (brojGodina > 0 && brojGodina < 12) {
//   console.log("Vi ste decijih godina");
// } else if (brojGodina >= 18 && brojGodina < 40) {
//   console.log("Vi ste punoletni");
// } else if (brojGodina >= 40) {
//   console.log("Vi ste zrela osoba");
// } else {
//   console.log("Niste uneli broj veci od 0");
//   }

// for (let i = 1; i < 11; i++);

// while (b <= 5);
// {
//   console.log(i);
// }
// i++;

let korisnickoIme = "mojeime";
let lozinka = "mojalozinka";
let brojPokusaja = 3;

while (brojPokusaja > 0);
{
  let unesenoIme = prompt("Unesite vase ime");
  let unesenaLozinka = prompt("Unesite vasu lozinku");
  if (unesenoIme === korisnickoIme && unesenaLozinka === lozinka) {
    console.log("Dobrodosli");
  } else {
    brojPokusaja--;
    {
      console.log("Pogresno korisnicko ime ili lozinka");
    }
  }
}
