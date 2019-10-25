// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var invitati = ["filippo", "marco", "luca", "francesco"];
document.getElementById("inviti").innerHTML = "Invitati: " + invitati

var tuonome = prompt("Inserisci il tuo nome");

var trovato = false;

for(var i =0; i<invitati.length; i++) {
    if(tuonome === invitati[i]) {
        trovato = true;
    }
}

if(trovato == true) {
    document.getElementById("yes").innerHTML = tuonome + " puoi partecipare alla festa";
} else {
    document.getElementById("no").innerHTML = tuonome + " non puoi partecipare alla festa";
}