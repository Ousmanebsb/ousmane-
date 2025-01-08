// visibità globale ciaò in tutte le partri del codice
{
    var mioVariabile = 80;

}



//vasibilità di blocco

    let mioVariabile2 = 67;

   
console.log("dichiarata con var: " + mioVariabile);
console.log("dichiarata con il let: " + mioVariabile2);

//-------------------------------------------
//una variabile dichiarata con let può essere riassegnata
let esempio1 = 30;


console.log("esempio1= " + esempio1);

esempio1 ="castagne";

console.log("esempio1=" + esempio1);

//con const non può essereriassegnata (tranne per alcuni casi specifice)
const esempio2 = 7;
console. log("esempi2= " + esempio2)//ok



//dichiarazione di funzione

function saluto(saluto, nome){
    console.log(saluto + " " + nome);
}

//chiamata alla funzione

saluto("ciao", "Pinco");
saluto("hello","Zio");
saluto("Vai a quel paese","prof");
saluto("ciao", "Palla");
saluto("Eeeeeeeehh","Ugo");




function somma(a,b){
    let risultato = a + b;
    console.log(" la somma è: " + risultato);

}

somma(20,90)

function multiplicazione(a,b){
    let risultato = a * b;
console.assert("La multiplicazione è: " * risultato);

}
multiplicazione(5,5);

function sePari(numero){
    if( numero % 2 === 0){
        console.log("il numero è pari");  
     }else {
        
         console.log("il numeroè dispari");
     }

}


sePari(80);



























































































































