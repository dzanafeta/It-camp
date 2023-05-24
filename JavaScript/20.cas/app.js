/* includes() metoda  vraca boolean (true ili false ) u zavisnosti od toga da li se argument
nalazi u stringu na kojem se primenjuje metoda ili ne */
/* Opciono, drugi argument predstavlja poziciju od koje cemo traziti dati argument u stringu. */

const recenica = "Dobar dan!";
console.log(recenica.includes("vece"));
console.log(recenica.includes("dan"));

const recenica2 = "Na koliko ste casova bili danas u skoli?";

/*match () metoda vraca niz u zavisnosti od toga u kom obliku smo poslali 
argument, dobijamo razlicite nizove.*/

console.log(recenica2.match("a")); //niz sa informacijama vezano za argument i string na
// koji smo primenili metodu
console.log(recenica2.match(/a/g)); //niz sa elementima iste vrednosti ( ima ih onoliko
//koliko se argument pojavljuje puta u stringu)
console.log(recenica2.match(/adfv/g)); // Ako poosaljemo argument koji se ne nalazi u stringu
//dobijamo null.

//Ponasanje match metode:
/*console.log("ko osvaja je rec koju trazimo.".match(/ko osvaja/g));
console.log(
    "ko osvaja je rec koju trazimo. Dakle, ko osvaja?".match(/ko osvaja/g)
);
console.log ("Dobro vece".match(/ko osvaja/g));*/

const zadatak = (recenica) => {
  if (!recenica.match(/ko osvaja/g)) {
    return "Nismo pronasli dati string.";
  } else if (recenica.match(/ko osvaja/g).length === 1) {
    return recenica.indexOf("ko osvaja");
  } else {
    return `Pozicija prvog pojavljivanja: ${recenica.indexOf(
      "ko osvaja"
    )}; \n Pozicija poslednjeg pojavljivanja: ${recenica.lastIndexOf(
      "ko osvaja"
    )}.`;
  }
};
console.log(zadatak("ko osvaja ligu sampiona?"));
console.log(zadatak("Ko osvaja ligu sampiona?"));
console.log(zadatak("ko osvaja ligu sampiona? ko osvaja? ko osvaja?"));

// Domaci zadaci:
// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
// Inace vratiti duzinu datog stinga.

// 3.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

//1.

const first = (recenica) => {
  if (recenica.includes("skola")) {
    return recenica.indexOf("skola");
  } else if (recenica.startsWith("Automobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    if (recenica.match(/kuca/g) === null) {
      return 0;
    } else {
      return recenica.match(/kuca/g).length;
    }
  } else {
    return recenica.length;
  }
};
console.log(first("Koja se skola podrazumeva?"));
console.log(first("Automobil na prodaji"));
console.log(first("parna recenica kuca "));
console.log(first("parna recenica kuca"));

// 2.
// const second = (recenica) => {

// }

console.log("a");
console.log("b");

console.log("a" > "b");
console.log("a" > "A");
//Prvo idu velika pa mala slova.

console.log("a".charCodeAt(0));
console.log("A".charCodeAt(0));

// 2.
const second = (recenica) => {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brojac++;
    }
  }
  return brojac;
};

console.log(second("Koliko ima MALIH SLOVA?"));
