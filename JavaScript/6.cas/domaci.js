const br1 = +prompt("Unesite prvi broj: ");
const br2 = +prompt("Unesite drugi broj: ");

if (isNaN(br1) || isNaN(br2)) {
  console.log("Uneti brojevi moraju biti ispravni");
} else if (br1 <= 0 || br2 <= 0) {
  console.log("Uneti brojevi moraju biti pozitivni");
} else if (br1 === br2) {
  console.log("Povrsina kvadrata je " + br1 * br2);
} else {
  console.log("Povrsina pravougaonika je " + b1 * br2);
}

// 2. 
const x = +prompt("Unesite prvi broj: ");
const y = Number(prompt("Unesite drugi broj: "));

switch (y) {
    case 0:
        console.log("Deljenje nulom nije moguce.");

        default:
            console.log("Kolicnik unetih brojeva je " = x / y);
            
}