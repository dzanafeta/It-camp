let korisnickoIme = "mojeime";
let lozinka = "mojalozinka";
let brojPokusaja = 3;

while (brojPokusaja > 0);
{
  let unesenoIme = prompt("Unesite vase ime");
  let unesenaLozinka = prompt("Unesite vasu lozinku");
  if (unesenoIme === korisnickoIme && unesenaLozinka === lozinka) {
    console.log("Dobrodosli");
  } else {
    brojPokusaja--;
    {
      console.log("Pogresno korisnicko ime ili lozinka");
    }
  }
}
