// Traziti unos korisnickog imena sve dok korisnik ne unese pravilno koriscnicko ime.
// (npr. duzina korisnickog imena mora imati najmanje 6 karaktera).

let username = "";
while (username.length < 6) {
  username = prompt("Unesite ispravan username: ");
  console.log(username, username.length);
}

// DRY

// Funkcije predstavljaju deo koda koji ce se izvrsiti samo u slucaju njihovog pozivanja.
// Koristimo ih da bi nas kod bio reusable (isti kod resava vise problema slicnog tipa).

// Fukcije mozemo napraviti na dva nacina:
// 1. Preko function keyword;
// 2. Arrow function.

// 1.
function myFunc() {
  // kod unutar fukcije
}

// 2.
const myFunc2 = () => {
  //  kod unutar fukcije
};

// funkcija koja ispisuje zdravo
function greeting() {
  console.log("Zdravo");
}

greeting();

// Prilikom definisanja fukcije mozemo joj proslediti parametre koji su neophodni za izvrsavanje koda date funkcije.
// Dok prilikom pozivanja fukcije to sto saljemo fukciji zovu se argumenti.

function greeting2(_ime) {
  console.log("Zdravo" + _ime);
}
greeting2("Tarike");

// Napraviti funkciju koja nam vraca zbir 3 i 5.
function zbirTriIPet() {
  const prom1 = 3;
  const prom2 = 5;
  //   kada se izvrsi cela logika funkcije, krajnji rezultat treba vratiti u return keyword (rezervisanoj reci)
  return prom1 + prom2;
  // console.log("nesto) kod koji se nadje nakon return u function scope se nece primeniti
}
// Napraviti funkciju koja vraca zbir dva broja:

function zbirDvaBroja(br1, br2) {
  return br1 + br2;
}
console.log(zbirDvaBroja(10, 5));
console.log(zbirDvaBroja(10));

// Dodeljivanje defaultne vrednosti se moze izvrsiti na dva nacina:

1;
function zbirDvaBroja2(br1, br2) {
  if (br2 === undefined) {
    return br1;
  } else {
    return br1 + br2;
  }
}

console.log(zbirDvaBroja2(34));

// 2.
function zbirDvaBroja3(br1, br2 = 0) {
  return br1 + br2;
}

console.log(zbirDvaBroja3(15));
console.log(zbirDvaBroja3(15, 12));

// Domaci zadaci:
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.
