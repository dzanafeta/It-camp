prva();

function prva() {
  console.log("prva");
}

/* U prvom slucaju vazi hoisting. Deklarisanje funkcija na vrhu fajla. 
Stoga ih mozemo pozvati pre definisanja. */

// druga();

// const druga = () => console.log("druga");

// Za arrow funkcije ne vazi hoisting. Moramo je definisati pre koriscenja.

let x = 123e5; // 123 * 100000
console.log(x);
let y = 123e-5; // 123 / 100000
console.log(y);

console.log(typeof ("100" / "10"));
console.log("10k0" / "10");

console.log("100" - "10"); // 90
console.log("100e5" * "10"); // 10000000
console.log("100e5" * "10");

console.log("100" + "10"); //10010

isNaN("100");

NaN; // je Number tipa.

//infinity (-Infinity) je vrednost u JS koja prelazi najveci (najmanji) dozvoljeni broj.
// Infinity (-Infinity) je number tip podatka.
//Delejnjem nulom dobijamo Infinity (-Infinity).
console.log(1 / 0);

// Brojevi kao objekti:
//Brojevi mogu biti definisani kao objekti preko new keyworda.

let z = new Number(123);
console.log(z);
console.log(typeof z);
console.log(z + 2);

//numbers i number objects ne mogu biti jednaki (zbog razlicitosti tipa).
let w = 123;
console.log(z === w);

// JavaScript interpretira brojeve kao hexadecimalne ako im prethodi 0x.

let broj = 0xff;
console.log(broj);
