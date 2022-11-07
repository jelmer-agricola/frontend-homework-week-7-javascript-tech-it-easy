// Opdracht 3 - Array methoden en functies
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
// array functie creëren om brand eigenschap te vinden

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#:~:text=The%20join()%20method%20creates,returned%20without%20using%20the%20separator.

// const brandList=document.getElementById('tv-brands')

// const listItems =inventory.map((tv)=>{
//     return `<li>${tv.brand}</li>`
// });

// brandList.innerHTML= `${listItems.join('')}`;


// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

function brandList(tvArray) {

    const brandList = document.getElementById('tv-brands');

    const listItems = inventory.map((tv) => {
        return `<li>${tv.brand}</li>`;
    });
    brandList.innerHTML = `${listItems.join('')}`;
}

brandList(inventory);