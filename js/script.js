//  a1 - inserire prompt per definire i km che si vogliono percorrere
//  a2 - inserire prompt per definire l'età del passeggero

//  b1 - definire le variabili necessarie al calcolo del prezzo intero del biglietto



let travelDistance = prompt("Quanti Km vorresti percorrere?");
let passengerAge = prompt("Quanti anni hai?");
let ticketPrice;
let pricePerKm = 0.21;
let elderlyDiscount = 0.4;
let youthDiscount = 0.2;

if (passengerAge >= 65) {

    ticketPrice = travelDistance * pricePerKm * elderlyDiscount;

} else if (passengerAge <=18) {


    ticketPrice = travelDistance * pricePerKm * youthDiscount;
    
}
// let ticketFullPrice = pricePerKm * travelDistance;

document.getElementById("ms_ticket-price"). innerHTML = ticketPrice;
 