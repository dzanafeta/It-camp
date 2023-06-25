// 1. Napraviti funkciju koja vraca najveci element nekog niza.
// 2. Napraviti funkciju koja vraca najmanji element nekog niza.
// 3. Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Dzevdet, Marija, Melida i
//Tarik ne smeju naci.
// 4. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente
// koji su se nalazili na neparnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [1,3,5,7,9,11,13]

// 1.
// function maxBroj(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

function maxBroj(arr) {
  let max = arr[0];
  for (let item of arr) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

console.log(maxBroj([10, 2, 3]));

// 4.

const originalniNiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// i % 2 != 0
function noviNiz(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(noviNiz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// 2. prvi nacin
function minBroj(arr) {
  let min = arr[0];
  for (let number of arr) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
console.log(minBroj([1, 2, 5, 7, -5]));
// 2. drugi nacin

const minBroj2 = (arr) => {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[0];
};
console.log(minBroj2([1, 2, 5, -67, 7, -5]));

// 3.
const celaGrupa = [
  "Tarik",
  "Selver",
  "Nedim",
  "Merjem",
  "Melida",
  "Marija",
  "Dzevdet",
  "Dzana",
  "Asija",
  "Anastasija",
  "Ajsa",
];

const novaGrupa = [];
for (let item of celaGrupa) {
  if (
    item === "Dzevdet" ||
    item === "Tarik" ||
    item === "Marija" ||
    item === "Melida"
  ) {
    continue;
  } else {
    novaGrupa.push(item);
  }
}

console.log(novaGrupa);
