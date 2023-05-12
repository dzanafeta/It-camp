// 2. Napraviti novu r gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

//  3. Na osnovu date r napraviti i ispisati novu r tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.

// 2.

let recenica2 = "Ako danas nema kiše, planiram da odem na plažu.";
let novaRecenica = "";

for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === "a") {
    novaRecenica += "t";
  } else if (recenica2[i] === "n" && recenica2[i - 1] === "a") {
    novaRecenica += "d";
  } else {
    novaRecenica += recenica2[i];
  }
}

console.log(novaRecenica);

// 2.

let recenica3 = "Ovde je neka recenica.";
let novaRecenica1 = "";

for (let i = 0; i < recenica.length; i++) {
  let trenutniKarakter = recenica3[i];
  if (
    trenutniKarakter === "a" ||
    trenutniKarakter === "e" ||
    trenutniKarakter === "i" ||
    trenutniKarakter === "o" ||
    trenutniKarakter === "u"
  ) {
    novaRecenica1 += trenutniKarakter.toUpperCase();
  } else {
    novaRecenica1 += trenutniKarakter;
  }
}

console.log(novaRecenica1);
