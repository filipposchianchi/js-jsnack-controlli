// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
var somma=0;

for (var i =0; i<5; i++) {
    var numero = parseInt(prompt("Inserisci il numero"));
    somma += numero;
}

document.getElementById("somma").innerHTML = "La somma dei numeri inseriti è: " + somma;


// var j =0;
// while (j < 5) {
//     var numero = parseInt(prompt("Inserisci il numero"));
//     somma += numero;
//     j++;

// }
// console.log(somma);





