// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var numero1 = parseInt(prompt("Inserisci il primo numero"));
var numero2 = parseInt(prompt("Inserisci il secondo numero"));

if (numero1 > numero2) {
    console.log("il numero maggiore è ", numero1);
    document.getElementById("risultato").innerHTML = "Il numero maggiore è: " + numero1;
} else if (numero1 < numero2) {
    console.log("il numero maggiore è ", numero2);
    document.getElementById("risultato").innerHTML = "Il numero maggiore è: " + numero2;
}
else {
    console.log("i due numeri sono uguali");
    document.getElementById("risultato").innerHTML = "I due numeri sono uguali";
}

