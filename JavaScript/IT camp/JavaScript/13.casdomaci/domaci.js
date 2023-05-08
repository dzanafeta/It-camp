// Domaci zadaci:
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.

function ZbirKvadrataDvaBroja(_br1, _br2) {
  if (_br2 === undefined) {
    return _br1;
  } else {
    return Math.pow(_br1, _br2);
  }
}
console.log(Math.pow(3, 4));
ZbirKvadrataDvaBroja("Kvadrat dva broja");

// 2.

function myFunc(_num1 = 0, _num2 = 0, _num3 = 0) {
  const sum = a + b + c;
  const mean = sum / 3;
  return mean;
}
console.log((3, 5, 15));

// 3.
function povrsine(_br3, _br4) {
  if (_br3 !== _br4) {
    return (_br3 *= _br4);
  } else {
    return Math.pow(_br3, _br4);
  }
}

console.log(povrsine(7, 8));
console.log(Math.pow(7, 8));
povrsine();
