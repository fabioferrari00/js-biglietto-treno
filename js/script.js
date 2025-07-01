//dichiarazione variabili
const kmToGo = parseInt(prompt('Inserisci quanti KM vuoi percorrere'));
const age = parseInt(prompt('Inserisci la tua età per un eventuale sconto'));
let discount;
let price = 0.21 * kmToGo;

if (age < 18) {
  discount = price * 20 / 100;
  price = price - discount;
}

console.log(price);