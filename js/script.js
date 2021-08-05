


// Distance user input
let travelDistance = parseInt (prompt ("Inserisci i Km vorresti percorrere?") );

if (isNaN (travelDistance) ) {
    // if the distance is not given in number
    alert("Inserisci una distanza valida in km");

} else if (travelDistance <= 0){

    // if the distance is negative
    alert("Inserisci una distanza valida in km");

}

// age user input
let passengerAge = parseInt (prompt ("Quanti anni hai?") );

if (isNaN (passengerAge) ) {

    // If the age is not given in number
    alert("Inserisci un età valida");

} else if ( (passengerAge < 0) && (passengerAge > 120) ) {

    // if the age is not between 0 and 120 
    alert("Inserisci un età valida compresa tra 0 e 120 anni");

}

// price per km const
const pricePerKm = 0.21;

// formula for ticket price before discounts
let ticketFullPrice = travelDistance * pricePerKm;

// Elderly discount value 
const elderlyDiscount = 0.4;

// youth discount value
const youthDiscount = 0.2;

// ticket price variable defined
let ticketPrice;

if (passengerAge >= 65) {

    // if the passenger is over 65 years
    ticketPrice = ticketFullPrice - (ticketFullPrice * elderlyDiscount);

} else if (passengerAge <18) {

    // if the passenger is under 18 years
    ticketPrice = ticketFullPrice - (ticketFullPrice * youthDiscount);   

} else {

    // if the passenger age is between 18 years and 65
    ticketPrice = ticketFullPrice;

}

// to display in the html the final price of ticket 
// (toFixed(2) used for cut decimals after 2 of them)
document.getElementById("ms_ticket-price"). innerHTML = ticketPrice.toFixed(2) + "&euro;";
 