

// 1 - Visualizzare in pagina 5 numeri casuali. 
// 2 - Da lì parte un timer di 30 secondi. 
// 3 - Dopo 30 secondi i numeri scompaiono 
// 4 - e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// 5 - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// 1 - Visualizzare in pagina 5 numeri casuali. 

const numbers = document.querySelector('h1')

for (let i = 0; i < 5; i++){
    
    const num = Math.floor(Math.random() * 100) + 1;

    numbers.insertAdjacentHTML("beforeend", num + ' ');

    console.log(num);

    
}















