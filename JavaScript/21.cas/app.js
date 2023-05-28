let a = 7;

let b = 4;

const c = 8;

/*Cesto u literaturi cemo naci na tvrdnju da je java interpretarski jezik, ali to nije bas tako.
 U pozaddini postoji JS masina koja vrsi pozadinsko kompajliranje pre izvrsenja koda.
Stoga nije pogresno reci da je JS kompajliran jezik.*/
/* Pojam hoisting u JS predstavalja izvlacenje svih deklaracija na vrh skripte (fajla). */

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

// Domaci zadaci:
/* 1.	Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com',
 dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju
  isključivo engleskoj abecedi.*/

// 2.	Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.

/* 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', 
rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake. */

// 1.

console.log("WEBnSTUDY.com".toLowerCase());

//2.
// lastIndexOf metoda()

let recenica6 = "Bajni, poeticni i bezbrizni seoski zivot.";
console.log(recenica6.lastIndexOf(" "));

// 3.
//indexOf

const str = "Bajni, poeticni i bezbrizni seoski zivot.";

// const trimString = str.trim();
// const prvaRec = trimString.split(",")[0];
// const duzinaPrveReci = prvaRec.length;
// console.log(duzinaPrveReci.length(str));

// let splitMetoda = str.split(",");
// let duzina = splitMetoda[0].length;
// console.log(duzina);

// 3.

const rec = "Pera ima devojku";

const third = (recenica8) => {
  const prviRazmak = recenica8.indexOf(" ");
  const prvaRec = recenica8.slice(0, prviRazmak);
  const duzina = prvaRec.length;
  return duzina;
};

console.log(third("Pera ima devojku"));

const firstAndLastWord = (sentence) => {
  const arr = sentence.split("");
  const firstWord = arr[0];
  const lastWord = arr[arr.length - 1];
  const B = `${firstWord} ${lastWord}`;
  // return fisrtWord + " " + lastWord
  // return fisrtWord.concat("", lastWord)
  return B;
};
console.log(firstAndLastWord("Svuda podji, kuci dodji."));

function firstSix(sentence, N) {
  if (N > sentence.length) {
    return sentence;
  } else {
    return sentence.substr(0, N);
  }
}

console.log(firstSix("Pera ima devojku", 7));

// function triArgumenta(A, N, M) {
//   const B = A.substr(N, M);
//   return;
// }

// console.log(triArgumenta("Pera ima devojku", 6, 7));
