let hex = "0123456789ABCDEF";

// 2AB = 2 *16 **2 + 10*16 **1+11*16**0

// 01 = 0 *2 ** 1 *2** 0

// rgb(123, 250, 54)

// #a2fe12

// a2 = 10*16**1+2*16**0 = 160 + 2 = 162

// fe = 15 * 16 + 14 *1= 240 +14 = 254

// 12 = 1* 16 + 2* 1 = 16+ 2 = 18

// rgb(162, 254, 18)

//Bolje u dve discipline

function bolji(mat1, pro1, mat2, pro2) {
  const poeni1 = mat1 + pro2;
  const poeni2 = mat2 + pro2;
  if (poeni1 < poeni2) {
    return "Pobedio je drugi takmicar";
  } else if (poeni1 === poeni2) {
    if (pro1 < pro2) {
      return "Pobedio je drugi takmicar";
    } else {
      return "Pobedio je prvi takmicar";
    }
  } else {
    return "Pobedio je prvi takmicar";
  }
}
console.log(bolji(34, 40, 45, 45));
console.log(bolji(50, 50, 45, 45));
console.log(bolji(23, 32, 32, 22));

//Domaci:
// 1.
// a=int(input('Unesite prvu potencijalnu stranicu pravougaonika: '))
// b=int(input('Unesite drugu potencijalnu stranicu pravougaonika: '))
// c=int(input('Unesite trecu potencijalnu stranicu pravougaonika: '))
// d=int(input('Unesite cetvrtu potencijalnu stranicu pravougaonika: '))

// 2. Unesite broj sekundi koji zelite pretvoriti u sate, minute i sekunde:

// 1 sat ima 60 minuta
// 1 sat ima 60*60 = 3600 sekundi
// 1 minut ima 60 sekundi

// 1.
const recenica1 = +prompt("Unesite prvu potencijalnu stranicu pravougaonika: ");
const recenica2 = +prompt(
  "Unesite drugu potencijalnu stranicu pravougaonika: "
);
const recenica3 = +prompt(
  "Unesite trecu potencijalnu stranicu pravougaonika: "
);
const recenica4 = +prompt(
  "Unesite cetvrtu potencijalnu stranicu pravougaonika: "
);

function pravougaonik(a, b, c, d) {
  let stranice1 = a + b;
  let stranice2 = c + d;

  if (a === b && c === d) {
    console.log("Uneli ste odgovarajuce mere");
  }
}
//   } else if (stranice1 !== stranice2) {
//     return;
//   }
// }
