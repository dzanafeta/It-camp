// Domaci:
// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz?
const nizz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  "ananas",
  49,
  694,
  "tresnja",
];

let numString = 0;
let numNumber = 0;
let numBoolean = 0;
let numArray = 0;
for (let item of nizz) {
  if (typeof item === "string") {
    numString++;
  } else if (typeof item === "number") {
    numNumber++;
  } else if (typeof item === "boolean") {
    numBoolean++;
  } else if (Array.isArray(item)) {
    numArray++;
  }
}
console.log(
  `U nizu ima ${numString} elemenata tipa string, \n
${numNumber} elemenata tipa number, \n
${numBoolean} elemenata tipa boolean i \n
${numArray} nizova.`
);
