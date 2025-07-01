//dichiarazione variabili
const kmToGo = parseFloat(prompt('Inserisci quanti KM vuoi percorrere'));
const age = parseInt(prompt('Inserisci la tua età per un eventuale sconto'));
let discount = 0;
let price = 0.21 * kmToGo;

//logica
if (isNaN(kmToGo) || isNaN(age)) {
  alert('ATTENZIONE: devi inserire dei numeri');
  console.log(`non hai inserito dei numeri`)
} else {
  if (age < 18) {
    discount = price * 20 / 100;
  } else if (age > 65) {
    discount = price * 40 / 100;
  }
  price = price - discount;
  console.log(price.toFixed(2));
}



