//concat () metoda nam sluzi za spajanje dva ili vise niza.

const muskarci = ["Emir", "Selver"];
const devojke = ["Asija", "Dzana", "Ajsa", "Anastasija"];

// const celaGrupa = muskarci.concat(devojke);
// console.log(celaGrupa);

//Argument metode ne mora biti niz. Moze biti i element koji ce se dodati na
//prethodno spojene nizove.
const celaGrupa = muskarci.concat(devojke, "Nedim");
console.log(celaGrupa);

//slice() metoda vraca deo niza (onoliko elemenata koliko smo trazili slanjem
//argument-indeksa).

console.log(celaGrupa.slice(0, 2));
console.log(celaGrupa.slice(-4, -1));
console.log(celaGrupa.slice(3, celaGrupa.lenght));
console.log(celaGrupa.slice(3));

//splice() metoda se moze koristiti za dodavanje novih elemenata u niz, brisanje
//i sve mozemo vrsiti na zeljenim pozicijama unutar niza.

console.log(celaGrupa);
celaGrupa.splice(2, 0, "Merjem");
console.log(celaGrupa);

//Prvi argument metode predstavlja poziciju u nizu odakle zelimo promene.

//Drugi argument metode prestavlja broj elemenata koji treba da se izbrisu,
//krenuvsi od pozicije (prvog argumenta).

//Svi sledeci argumenti potencijalno predtsavljaju nove elemente u nizu
//(vrednosti koje zelimo dodati na vec definisanoj poziciji).

// Primenom splice metode izbrisati sve elemente sve devojke, zatim ih dodati na pocetak niza.

//splice() metoda vraca niz sa izbrisanim elementima
const devojke2 = celaGrupa.splice(2, 5);
console.log(celaGrupa);

console.log(celaGrupa);

const novaGrupa = devojke2.concat(celaGrupa);
console.log(novaGrupa);
novaGrupa.splice(5, 0, "Ajla");

novaGrupa.splice(5, 2, "Dzevdet", "Tarik", "Marija", "Alem");
console.log(novaGrupa);

novaGrupa.splice(-3, 1, "Melida");
console.log(novaGrupa);

// sort() metoda vrsi sortiranje niza (abecedno)

novaGrupa.sort();
console.log(novaGrupa);

//reverrse() metoda sortira niz od poslednjeg ka prvom elementu.

//Za sortiranje niza od Z do A prvo treba iskoristiti sort() metodu, pa onda
//reverse();
novaGrupa.sort();
novaGrupa.reverse();
console.log(novaGrupa);

//// sortiranje niz brojeva samo po sebi se ne vrsi kako bismo mi hteli:
const brojevi = [3, 4, -99, 23, 32];
brojevi.sort();
console.log(brojevi);

//Potrebno je poslati funkciju koja vrsi poredjenje dva broja kako bimo
//sortirali niz od najveceg ka najmanjem elementu:
brojevi.sort(function (a, b) {
  return a - b;
});
console.log(brojevi);

//Potrebno je poslati funkciju koja vrsi poredjenje dva broja kako bimo
//sortirali niz od najveceg ka najmanjem elementu:
brojevi.sort(function (a, b) {
  return b - a;
});

//brojevi.sort((a,b) => b - a);
console.log(brojevi);

//Sortiranje niza u random redosledu:

brojevi.sort(function () {
  return 0.5 - Math.random();
});
console.log(brojevi);

//1.Napraviti funkciju koja vraca najveci element nekog niza.
//2.Napraviti funkciju koja vraca najmanji element nekog niza.
