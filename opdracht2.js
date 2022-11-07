/*Opdracht 2 - Elementen in de DOM plaatsen
Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!*/

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Functie schrijven die ervoor zorgt dat we alle waardes van inventory.sold by elkaar optellen
//tip geeft aan om dit met een for loop te doen.
//output variable let soldTvs = 0;
// log in inventory alle tv's en prijzen


let soldTvs = 0;

for (let i = 0; i < inventory.length; i++) {
    soldTvs = soldTvs + inventory[i].sold;
}

console.log(soldTvs);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// zorgen dat tekst wordt weergeven op pagina met css kleur groen

// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak twee nieuwe elementen  en zet dit in ons 'anker' element*/
// schrijf styling voor de id van het item

const soldTvContainer = document.getElementById('tvs-sold');

soldTvContainer.innerHTML =
    `<h2> Aantal verkochte Televisies</h2> 
    <h3> ${soldTvs}</h3>`;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//Script wat je hiervoor nodig hebt is originalStock bij elkaar opgeteld
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak twee nieuwe elementen  en zet dit in ons 'anker' element*/
// schrijf styling voor de id van het item

let originalTvs = 0;

for (let i = 0; i < inventory.length; i++) {
    originalTvs = originalTvs + inventory[i].originalStock;
}

console.log(originalTvs);


// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak twee nieuwe elementen  en zet dit in ons 'anker' element*/
// schrijf styling voor de id van het item

const originalTvContainer = document.getElementById('tvs-originalStock');

originalTvContainer.innerHTML =
    `<h2> Aantal ingekochte Televisies</h2> 
    <h3> ${originalTvs}</h3>`;


// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
//Stappen hieronder met als toevoeging dat je toevoegd toBeSold =originalStock- sold

// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak twee nieuwe elementen  en zet dit in ons 'anker' element*/
// schrijf styling voor de id van het item



const toBeSoldContainer = document.getElementById('tvs-toBeSold');

toBeSoldContainer.innerHTML =
    `<h2> Tv's om te verkopen</h2><h3> ${originalTvs - soldTvs}</h3>`;

