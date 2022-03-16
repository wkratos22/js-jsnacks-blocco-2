const numeri = [1,2,3,4,5,6,7,8,9,10];
console.log(numeri);

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    
    if (numeri[i]%2==1)
    {
    somma += numeri[i];
    } else {

    } 
}
console.log(somma);
document.getElementById("sommaNumeri").innerHTML += `<div>La somma dei numeri è: ${somma}</div>`;