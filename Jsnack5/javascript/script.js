// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var numeri = [];

for(var i = 0; i < 6; i++) {
    var numero = prompt("Inserisci un numero");
    if (numero % 2 != 0) {
        numeri.push(numero);
    }

}

document.getElementById("dispari").innerHTML = "I numeri dispari inseriti sono: " + numeri;
console.log(numeri);