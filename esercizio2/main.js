// GENERATORE NOME
function nome() { 
    var testo = ""; 
    var random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
    for (var i = 0; i < 5; i++) 
    testo += random.charAt(Math.floor(Math.random() * random.length)); 
    return testo; 
} 
console.log(nome());
document.getElementById("numeroVincente").innerHTML += `<div>Nome: ${(nome())}</div>`;

// GENERATORE NOME
function cognome() { 
    var cogn = ""; 
    var rand = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
    for (var i = 0; i < 5; i++) 
    cogn += rand.charAt(Math.floor(Math.random() * rand.length)); 
    return cogn; 
} 
console.log(cognome());
document.getElementById("numeroVincente2").innerHTML += `<div>Cognome: ${(cognome())}</div>`;