const isSunny = false;
if (isSunny === true) {
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju nije suncano.");
}

// Postoji 8 FALSY  vrednosti. to su:

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefiend
// 8. null

// Napraviti funkciju gde se trazi unos od korisnika i
// vraca poruka da li je uneta vrednost truthy ili falsy vrednost.

// const unosKorisnika = () => {
//   const hladno = prompt("Je li hladno: ");
//   if (hladno) {
//     return "Napolju je hladno";
//   } else {
//     return "Napolju nije hladno";
//   }
// };

// console.log(unosKorisnika());

function isTruthy() {
  const userInput = prompt("Unesite neku poruku: ");
  if (userInput) {
    return "Uneli ste TRUTHY vrednost.";
  } else {
    ("Uneli ste FALSY vrednost.");
  }
}

console.log(isTruthy());

// Ako korisnik unosi broj:

function isTruthyNumber() {
  const userInputt = +prompt("Unesite neki broj: ");
  if (userInputt) {
    return "Uneli ste TRUTHY vrednost.";
  } else {
    ("Uneli ste FALSY vrednost.");
  }
}

console.log(isTruthyNumber());

// Trazi se unos od strane korisnika sve dok ne unese bilo sta:
let recenica = "";
while (!recenica) {
  recenica = prompt("Unesite neku recenicu.");
}
