// Svaki karakter neke recenice neka se ispise jedan ispod drugog.
const recenica =
  "U ponedeljak je neradni dan, to znaci da je nas sledeci cas u sredu.";

for (let i = 0; i < recenica.length; i++) {
  console.log(recenica[i]);
}

//Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
//Dok ako je neki karakter = "a", neka se ispise broj 5.
//A u slucaju da je neki karakter "s", neka se ne ispise nista.

const recenica2 = prompt("Unesite jednu recenicu: ");
const duzina = recenica2.lenght;
for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === "a") {
    console.log(5);
  } else if (recenica2[i] === "s") {
    continue;
  } else {
    console.log(recenica2[i]);
  }
}

//Metoda toLowerCase() pretvara se ceo string u mala slova:
console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA".toLocaleLowerCase());

//Metoda toUpperCase() pretvara ceo string u velika  slova:
console.log("neki string za pretvaranje u mala slova".toLocaleUpperCase());

const recenica0 =
  "Zelimo DATu reCENIcu prikAzaTI MALIM, isto taKO i VELIkim slovima.";

console.log(recenica0.toLowerCase());
console.log(recenica0.toLocaleUpperCase());

//Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.
const recenica3 =
  "treba nam nova recenica gde svaka nova rec pocinje velikim slovom";

let recenica4 = "";
for (let i = 0; i < recenica3.lenght; i++) {
  if (i === 0) {
    recenica4 += recenica3[i].toUpperCase();
  } else if (recenica3[i - 1] === "") {
    recenica4 += recenica3[i].toLocaleUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4);
