/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5
let num2 = 10


function numeriInteri(a,b) {
  if(a > b) {
    return (`${a} è piu grande di ${b}`)
  } else if (b > a) {
      return (`${b} è piu grande di ${a}`)
  } else {
    return (`${a} è uguale a ${b}`)
  }
}

console.log(numeriInteri(num1,num2))

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 4

function notEqual(a) {
  if(a != 5) {
    return (`not equal`)
  } else {
    return (`equal`)
  }
}

console.log(notEqual(num3))

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num4 = 13

function divideByFive(a) {
  if( a % 5 == 0){
    return (`divisibile per 5`)
  } else {
    return (`not divisibile per 5`)
  }
}

console.log(divideByFive(num4))

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num5 = 11
let num6 = 2

function isEight(a,b) {
  if(a == 8 || b == 8) {
    return (`uno dei due valori è uguale a 8`)
  } else if ((a + b) == 8 || (a - b) == 8 || (b - a) == 8) {
    return (`la loro somma/sottrazione è uguale a 8`)
  } else {
    return (`ne uno dei due valori ne la loro somma/sottrazione è uguale a 8`)
  }
}  

console.log(isEight(num5,num6))

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = 51
let totalShoppingCart = shoppingCart + carrello(shoppingCart)

function carrello(a) {
  if(a > 50) {
    return 0
  } else {
    return 10
}
}
console.log(carrello(shoppingCart, totalShoppingCart))
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart1 = 80
let blackFridayPrice = carrello2(shoppingCart1)

let totalShoppingCart1 = blackFridayPrice + carrello1(blackFridayPrice)

function carrello2(a){
  return a - (a*20/100)
}

function carrello1(a) {
  if(a > 50) {
    return 0
  } else {
    return 10
}
}
console.log(totalShoppingCart1)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num9 = 9
let num10 = 10
let num11 = 11

let array = []
array.push(num9,num10,num11)
array.sort(function(a,b){
  return b-a
})

console.log(array)
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num12 = 1

function isNumber(a) {
  if (typeof a == 'number'){
    return (`${a} è un numero`)
  } else {
    return (`${a} non è un numero`)
  }
} 

console.log(isNumber(num12))

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num13 = 2

function isEven(a){
  if (a % 2 == 0){
    return (`${a} è pari`)
  } else {
    return (`${a} è dispari`)
  }
}

console.log(isEven(num13))


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 15

  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr = []

for (i = 0; i <= 10 ; i++){
  arr.push(i)
}

console.table(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr.splice(-1,1,100)
console.log(arr)