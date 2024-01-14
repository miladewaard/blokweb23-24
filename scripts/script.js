// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/
// zoek de menu-button op en sla die op in een variabele
var openHamburger = document.querySelector("header > button");

// laat de menu-button luisteren naar kliks en voer dan een functie uit
openHamburger.onclick = openMenu;

// voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/
// zoek sluiten button op
var sluitHamburger = document.querySelector("nav button");

// laat die button luisteren naar kliks
sluitHamburger.onclick = sluitMenu;

// in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}