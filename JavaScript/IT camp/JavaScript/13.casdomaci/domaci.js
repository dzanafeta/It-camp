// Domaci zadaci:
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.

function ZbirKvadrataDvaBroja(_br1, _br2) {
  if (_br2 === undefined) {
    return Math.pow(_br1, 2);
  } else {
    return Math.pow(_br1, 2) + Math.pow(_br2, 2);
  }
}
console.log(Math.pow(3, 4));

// 2.

function myFunc(_num1 = 0, _num2 = 0, _num3 = 0) {
  const sum = _num1 + _num2 + _num3;
  const mean = sum / 3;
  return mean;
}
console.log(myFunc(3, 5, 15));

// 3.
function povrsine(_br3, _br4) {
  if (_br3 !== _br4) {
    return _br3 * _br4;
  } else {
    return _br3 * _br4;
  }
}

console.log(povrsine(7, 8));
console.log(povrsine(4, 9));
povrsine();
