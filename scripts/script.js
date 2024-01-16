// JavaScript Document
console.log("hi");

/******************************/
/* nav openen de NAV button */
/******************************/
// zoek de nav-button op en sla die op in een variabele
var openHamburger = document.querySelector("header > button:first-of-type");

// laat de nav-button luisteren naar kliks en voer dan een functie uit
openHamburger.onclick = openNav;

// voeg in de functie een class toe aan de nav
function openNav() {  
  // zoek de nav op
  var deNav = document.querySelector("header > section");
  // voeg class toe aan nav
  deNav.classList.add("toonNav");
}



/************************************/
/* nav sluiten met de sluit button */
/************************************/
// zoek sluiten button op
var sluitHamburger = document.querySelector("header > section button");

// laat die button luisteren naar kliks
sluitHamburger.onclick = sluitNav;

// in de functie verwijder de class van de nav
function sluitNav() {
  var deNav = document.querySelector("header > section");
  deNav.classList.remove("toonNav");
}