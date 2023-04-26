//Fudbalski teren
//Fudbalski teren dimenzija dxs treba ograditi pravougaonom ogradom tako da rastojanje stranica ograda
// tako da rastojanje stranica ograda
//od linije terena r. Napisi program koji odredjuje

// const d = +prompt("Unesite duzinu terena");
// const s = +prompt("Unesite duzinu terena");
// const r = +prompt("Unesite duzinu terena");

// const duzinaOgrade = 2 * d + 2 * s + 8 * r;
// console.log("Treba nam " + duzinaOgrade + "metara za odredjivanje terena");

// Osnove o stringovima:
const recenica = " Necemo matematicke zadatke!!";
console.log(recenica);
//Pristupanje nekom karakteru ide preko indeksa!
//Indeksiranje ide od 0!
//Poslednji karakter u stringu ima index (Cela duzina stringa - 1)!
console.log(recenica[0]);
console.log(recenica[7]);

//Za izracunavanje duzine stringa se koristi lenght metoda:
const duzina = recenica.length;
console.log(duzina);
//Ispisivanje poslednjeg karaktera datog stringa:
console.log(recenica[duzina - 1]);
console.log(recenica[10]);
