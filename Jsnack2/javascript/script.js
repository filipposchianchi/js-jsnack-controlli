//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

//chiedo le due parole all utente
var parola1 = prompt("Inserisci la prima parola");
var parola2 = prompt("Inserisci la seconda parola");

//confronto la lunghezza delle parole
if (parola1.length < parola2.length) {
    document.getElementById("corta").innerHTML = "La parola più corta è: <span>" + parola1 + "</span>";
    document.getElementById("lunga").innerHTML = "La parola più lunga è: <span>" + parola2 + "</span";

    console.log("parola più corta", parola1);
    console.log("parola più lunga", parola2);
    
} else {
    document.getElementById("corta").innerHTML = "La parola più corta è <span> " + parola2 + "</span>";
    document.getElementById("lunga").innerHTML = "La parola più lunga è <span>" + parola1 + "</span>";

    console.log("parola più corta", parola2);
    console.log("parola più lunga", parola1);
}