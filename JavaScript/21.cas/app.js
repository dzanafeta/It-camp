let a = 7;

let b = 4;

const c = 8;

/*Cesto u literaturi cemo naci na tvrdnju da je java interpretarski jezik, ali to nije bas tako. U pozaddini postoji
JS masina koja vrsi pozadinsko kompajliranje pre izvrsenja koda.
Stoga nije pogresno reci da je JS kompajliran jezik.*/
/* Pojam hoisting u JS predtsvalja izvlacenje svih deklaracija na vrh skripte (fajla). */

d = 11;

console.log(d);
//Kasnije deklariranje neke promenljive je mogucw preko var keyworda, dok preko let i const
// nije dozvoljeno.

var d;
// let d;
//const d;

//4. Ispitati da li u nekom stringu ima vise malih ili velikih slova. Slova koja se koriste u stringu
//pripadaju isljucivo engleskoj abecedi.

function kojihJeVise(recenica) {
  let brVelikih = 0;
  let brMalih = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brMalih++;
    } else if (recenica[i] >= "a" && recenica[i] <= "z") {
      brVelikih++;
    }
  }
  if (brVelikih > brMalih) {
    return `U datoj recenici ima vise velikih slova. Ima ih ${brVelikih}, dok malih slova ima ${brMalih}.`;
  } else if (brMalih > brVelikih) {
    return ` U datoj recenici ima vise malih slova. Ima ih ${brMalih}, dok velikih slova ima ${brVelikih}.`;
  } else {
    return `Dati string ima jednak broj velikih i malih slova. ${brMalih}.`;
  }
}
console.log(kojihJeVise("Treba imati VISE malih Slova."));
console.log(kojihJeVise("Treba imati vise malih Slova."));
console.log(kojihJeVise("mala i VELIKA slova."));
