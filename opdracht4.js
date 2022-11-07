// /*
// Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

// tv.brand en tv.type  wil je weten volgorde merk type naam
// merk type en naam bij elkaar als inner text tussen backticks

function createTvName(tv) {
    return`${tv.brand}${tv.type}${tv.brand}`;
}


//     Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

// euroteken en (,-) toevoegen

function createTvPrice(price){
    return`€${price},-`
}


// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

//
function screenSizeString(sizesArray){
    let output= '';

    for (let i = 0; i < sizesArray.length; i++) {
        const currentSizeInches = sizesArray[i];
        const currentSizeCentimeters = sizesArray[i]*2.54;
        output = output + `${currentSizeInches} inch (${currentSizeCentimeters} cm)`;
        if (i < sizesArray.length - 1) {
            output = `${output} | `;
        }
    }
        return output;
}



//     Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// 1. maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<div id="single-tv"></div> gemaakt)
// 2. sla de referentie naar dit element op
// 3. overschrijf de innerHTML van dit element met de volgende elementen:
//    4. een <h3> element voor de naam van de tv
//        genereer de tv naam met de functie uit 4a
//        stop deze naam als tekst in het element
//    5. een <h4> element voor de prijs van de tv
//        genereer de tv prijs met de functie uit 4b
//        stop deze string als tekst in het element
//    6. maak een HTML element (<p>) aan voor de schermgroottes van de tv
//        genereer de schermgroottes-string met de functie uit 4c
//        stop deze string als tekst in het element


const exampleTvContainer = document.getElementById('example-model');

exampleTvContainer.innerHTML= `
  <h3>${createTvName(inventory[3])} </h3>
  <h4>${createTvPrice(inventory[3].price)}</h4>  
  <p>${screenSizeString(inventory[3].availableSizes)}</p>  

`;




// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.*/

// 1. maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<ul id="inventory-models"></ul> gemaakt)
// 2. sla de referentie naar dit element op
// 3. maak een variabele aan om alle <li>'s in op te kunnen slaan
// 4. map over de tv-array heen en zorg dat je voor iedere tv in de array een <li> maakt met daarin:
//    5. een <h3> element voor de naam van de tv
//        genereer de tv naam met de functie uit 4a
//        stop deze naam als tekst in het element
//    6. een <h4> element voor de prijs van de tv
//        genereer de tv prijs met de functie uit 4b
//        stop deze string als tekst in het element
//    7. maak een HTML element (<p>) aan voor de schermgroottes van de tv
//        genereer de schermgroottes-string met de functie uit 4c
//        stop deze string als tekst in het element
// 8. ten slotte gebruik je deze array met <li>'s om de innerHTML van onze lijst <ul> te overschrijven
// 9. is dit gelukt? Dan zetten we er een functie omheen!

function generateTvList(tvArray) {
    const tvModelList = document.getElementById('inventory-tv-list');

    const modelItems = tvArray.map((tvObject)=>{
        return`
        <li>
        <h3>${createTvName(tvObject)}</h3>
        <h3>${createTvPrice(tvObject.price)}</h3>
        <p>${screenSizeString(tvObject.availableSizes)}</p>
</li>
        `;

        });
    tvModelList.innerHTML= `${modelItems.join('')}`;
}

generateTvList(inventory);