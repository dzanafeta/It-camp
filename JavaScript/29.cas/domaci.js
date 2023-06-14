// Domaci:
// 1.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije.

// 2.
// Napraviti funkciju za pretvaranje radijana u stepene.

// 1.

const precnik = (r) => {
  return Math.PI * r ** 2;
};

console.log(precnik(4));

// 2.

const stepen = (radijan) => {
  return radijan * (180 / Math.PI);
};

console.log(stepen(9));
