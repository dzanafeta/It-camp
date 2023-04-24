// for ( let i = 1; i <= 5; i++){
//     console.log(i);
// }

// while petlja se takodje koristi za interaciju kroz neki objekat  i izvrsavanje odredjenog koda.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do while petlja se koristi za interaciju kroz neki objekat. s tim sto u ovakvoj petlji imamo prvo izvrsenje koda pa tek onda ispitivanje uslova.

let k = 5;
do {
  console.log(k);
  k++;
} while (i <= 10);

let broj = 15;
do {
  console.log(broj);
  k++;
} while (i <= 10);

//Traziti od korisnika da unese neki broj.
//Na osnovu te vrednosti ispis kvadrata brojeva od 1 do tog unetog broja:

const broj2 = +prompt("Unesite neki broj:");
let iterator = 1;
while (iterator <= broj) {
  console.log(iterator ** 2);
  iterator++;
}

//Traziti unos brojeva od korisnika sve dok ne unese nulu:

let vrednost = 1; //sve sem nule
while (vrednost !== 0) {
  vrednost = +prompt("Unesite neku vrednost: ");
}
