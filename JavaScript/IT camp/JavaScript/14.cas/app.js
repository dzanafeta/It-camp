const zbirKvadrata = function (_a, _b) {
  if (_a === _b) {
    return "Povrsina kvadrata iznosi: " + _a * _b;
  } else {
    return "Povrsina pravougaonika iznosi: " + _a * _b;
  }
};

console.log(zbirKvadrata(4, 5));
console.log(zbirKvadrata(5, 5));

// Arrow function:
const KvadratBroja = (a) => {
  return a ** 2;
};
console.log(KvadratBroja(4));

// Ako arrow function ima samo jedan parametar nije neophodno stavljati ga u zagrade.
// Ako funkcija vraca neki jednostavan izraz (prethodno nije bilo dodatnog koda) mozewmo izostaviti viticaste zagrade
// i return keyword.

const KvadratBroja2 = (_c) => _c ** 2;
console.log(KvadratBroja2(3));

const arrowFunkcija = () => {
  const _brroj = +prompt("Unesite neki broj: ");
  if (_brroj > 0) {
    return "Unet je pozitivan broj";
  } else if (_brroj < 0) {
    return " Unet je negativan broj";
  } else if (_brroj === 0) {
    return "Uneli ste broj 0";
  } else {
    return "Niste uneli broj";
  }
};

arrowFunkcija(); //takodje se izvrsava
console.log(arrowFunkcija());

const radnoVreme = (broj1, broj2) => {
  if (broj1 < 17 && broj1 >= 9 && broj2 >= 0 && broj2 < 60) {
    return "za vreme radnog vremena";
  } else {
    return "posle radnog vremena";
  }
};

console.log(radnoVreme(16, 188));
