// Zadatak: Izračunaj faktorijel
// Napiši funkciju koja će primiti broj kao argument i vratiti faktorijel tog broja.
// Faktorijel broja N (označava se s N!) je proizvod svih brojeva od 1 do N.

function faktorijel(num) {
  //   if (num === 0 || num === 1) {
  //     return 1;
  //   }
  for (let i = num - 1; i >= 1; i--) {
    num = num *= i;
  }
  return num;
}

console.log(faktorijel(6));
