

// 1 - Visualizzare in pagina 5 numeri casuali. 
// 2 - Da lì parte un timer di 5 secondi. 
// 3 - Dopo 5 secondi i numeri scompaiono 
// 4 - e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// 5 - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// 1 - Visualizzare in pagina 5 numeri casuali. 

const numbers = document.querySelector('h1')



const numCasuali = []

const numScritti = []

const numTrovati = []

console.log(numCasuali);
console.log(numScritti);
console.log(numTrovati);


if (numCasuali == numScritti){

    numTrovati.push(foundNum)
}



for (let i = 0; i < 5; i++){
    
    const num = Math.floor(Math.random() * 100) + 1;
    
    numbers.insertAdjacentHTML("beforeend", num + ' ');
    
    console.log(num);
    
    numCasuali.push(num)
}



const time = document.querySelector('h2')

let seconds = 0;


// 2 - Da lì parte un timer di 5 secondi. 

let clock = setInterval(() => {
    
    
    if(seconds == 5){
        
        clearInterval(clock);
        
        // 3 - Dopo 10 secondi i numeri scompaiono 
        
        numbers.style.display = 'none';
        
        time.style.display = 'none';



        
        setTimeout(() => {

            for (let i = 1; i < 6; i++){
                        
                        // 4 - e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 

                        const foundNum = Number(prompt(`Qual è il ${i}° numero scomparso?`));

                        console.log(foundNum);

                        numScritti.push(foundNum)
                        
                    }

        }, 0)    

        
        
        
        
        
        
    }else{
        
        seconds++
        
        time.innerHTML = seconds
    }
    
    console.log(seconds);
    
}, 1000)



// 5 - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

if(numCasuali.includes(numScritti)){
    numTrovati.push(numScritti)
}





