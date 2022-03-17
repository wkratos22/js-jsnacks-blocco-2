let nomi = ["Modestino", "Abdelhamid", "Andrea", "Alberto", "Vincenzo", "Gerardo", "Luca", "Tancredi", "Valentino", "Ludovica", "Davide", "Nizar", "Alessandro", "Gabriele", "Stefano", "Angelo", "Caterina", "Sergio", "Clara", "Matteo", "Simone", "Noemi", "Roberto", "Andrea", "Andrea", "Simone", "Samuele", "Vera", "Ivan", "Michael", "Simone Luca", "Francesco"];
let cognomi = ["Arpa", "Ayadi", "Bellucci", "Biga", "Borriello", "Calia", "Carbone", "Carluccio", "De Stefano", "Di Benedetto", "Di Pietro", "Fergag", "Fonzi", "Magni", "Maiorchini", "Melotti", "Moccia", "Nifosi", "Nocilla", "Nuvoloni", "Pavone", "Pintaldi", "Piva", "Pontillo", "Rosellini", "Saputo", "Spadaro", "Sprinceana", "Toselli", "Wachnicki", "Zaino", "Natoli"];

let list = [];

let i = 0;

while (i < nomi.length) {

    console.log(i);

    let listNomi = nomi[i] + " " + cognomi[i];
    console.log(listNomi);
    i++;

    list.push(listNomi);

}

console.log(list)

let l = 0;



let bottone = document.getElementById("bottone")

bottone.addEventListener("click",



function () {

    let random = Math.floor(Math.random() * (list.length));
    console.log(list[random])
    let risultato = document.getElementById("scrittura-risultato").innerHTML = list[random];
}

) 