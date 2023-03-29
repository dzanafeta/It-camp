// Neku poruku u JavaScriptu mozemo prikazati na vise nacina:

//1. InnerHTML
naslov = document.getElementById("naslov");
naslov.innerHTML = "Prvi nacin ispisa";

// 2.document.write - obicno se koristi za testiraje koda.

// 3. Alert() - Upozorenje korisniku:

alert("Jos jedan nacin prikazivanje poruke.");

// 4. console.log()- Prikazivanje nekih informacija u konzoli. Najcesce koriscen metod.

console.log("Poruka u konzoli.");

// JavaScript nazivi promenljivih

// Ime promenljive u JavaScriptu mora poceti:

// 1. Velikim ili malim slovom (A-Z ili a-z);
// 2. $(dollar sign)
// 3. _(donja crta)

// Broj moze biti sadrzan u nazivu promenljive, ali promenljiva ne sme poceti brojem.

// JavaScript je case sensitive(razlikuje velika i mala slova)!!!

a = 10;
// console.log(A); eror - A is not defined
console.log(a);

// Zapisivanje promenljivih koje sadrze 2 ili vise reci:

// vecernji termin - nije ispravan nacin da pravim razmak
vecernji_termin = 19.3;
// ispravan nacin zapisivanja promenljive - Under score
vecernjiTermin = 19.3;
// ispravan nacin zapisivanja promenljive, najcesce koriscen nacin zapisivanja promenljive u JavaScriptu. - Upper Camel Case (Pascal Code)

// deklaracija i inicijalizacija
// Postoje 4 nacina za deklaraisanje promenljive u JavaScriptu

// 1. Koriscenjem var reci (keyword). Vise je ranije bila koriscena (dok nismo dobili nove dve).

var a;
// deklarisanje promenljive (obezbedjivanje lokacijijske memorije za promeljivu a)
a = 10;
// inicijalizacija promenljive(dodeljivanje vrednosti vec deklarisanoj promenljivoj a)

// Kroz jednu liniju koda mozemo takodje izvrsiti deklaraciju i inicijalizaciju:

var a = 10;

// 2.Koriscenjem let rezervisane reci (keyword). Promenljive koje su sklone menjanju vrednosti.

// let b;
// (b = 14), console.log(b);
// b = 14, inicijalizacija promenljive b

// 3. Koriscenejem const rezervisane reci (keyword). Na ovaj nacin deklarisemo promenljive cija se vrendost nece menjati.

// Nije moguca posebna deklaracija i inicijalizacija za promenljive definisane preko const keyword.

// const c;
// c = 20;

// Neophodno je odjednom izvrsiti deklaraciju i inicijalizaciju:
const c = 20;
console.log(c);

// 4.Koriscenje nicega.

d = 5;
console.log(5);

// Varijable (promenljive) u JavaScriptu predstavljaju kontejnere za skaldistenje vrednosti.
