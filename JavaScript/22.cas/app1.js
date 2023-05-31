const first = (string) => {
  let noviString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    noviString += string[i];
  }
  return noviString;
};

console.log(first("32243"));

/// Ispisati brojeve od 1 do 10 izuzev broja 2 i broja 5.

for (i = 1; i < 11; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// for (let i = 1; i < 11; i++) {
//   if (i !== 2 && i !== 5) {
//     console.log(i);
//   }
// }

// Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja.

// for (i = 1; i < 11; i++) {
//   if ((i /= 7)) {
//     console.log(i);
//   }
// }

// Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja.

for (i = 1; i < 11; i++) {
  if ((i /= 7)) {
    break;
  } else {
    console.log(i);
  }
}

function palindrom() {}
