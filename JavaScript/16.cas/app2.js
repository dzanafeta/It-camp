// Domaci zadaci:
// 1. zadatak Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima;
// 2. recenicu ispisanu malim slovima;
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima;
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.

// 2. zadatak: Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti.
// Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string.
// Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".

// 3. zadatak: Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore.
// Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.

// 1. zadatak

// 2. zadatak

let recenica =
  "Danas je takav dan, oblacan, ali na mahove i suncan, ali uglavnom oblacan.";
let recenica1 = recenica.replace(/oblacan/g, "#");
console.log(recenica);
console.log(recenica1);
