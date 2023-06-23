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

celaGrupa.splice(2, 5);
console.log(celaGrupa);
