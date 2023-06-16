// Write a JS function to get a greatest common divisior (NZD) of two integers.

const NZD = (br1, br2) => {
  //6,4
  const manji = br1 > br2 ? br2 : br1;
  let NZD = 1;
  for (let i = manji; i >= 1; i--) {
    if (br1 % i === 0 && br2 % i === 0) {
      NZD = i;
      break;
    }
  }
  return NZD;
};

console.log(NZD(6, 4));
console.log(NZD(8, 12));

// Write a JS function to get a greatest common divisior (NZS) of two integers.

const NZS = (br1, br2) => {
  let veci;
  if (br1 > br2) {
    veci = br1;
  } else {
    veci = br2;
  }
  // const veci = br1 > br2 ? br1 : br2;
  let NZS = veci;
  let i = veci;
  while (true) {
    if (i % br1 === 0 && i % br2 === 0) {
      NZS = i;
      break;
    }
    i++;
  }
  return NZS;
};

console.log(NZS(3, 4));
console.log(NZS(6, 8));

// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"
