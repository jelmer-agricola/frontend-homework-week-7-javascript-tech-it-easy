// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// De array methode die je hier gebruikt is natuurlijk de map() methode, omdat je meerdere waardes zoekt. (sort misschien als je ook wil veranderen)
// vanuit de inventory in main js. halen we de data op.

const tvTypes = inventory.map((tv) => {
    return tv.type;
})

console.log(tvTypes);



//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Hiervoor waarschijnlijk wel de filter-methode, want dan krijg je hele object
// original stock - sold --> moet dan 0 zijn Als je de array naloopt moeten er 2 tv's uitkomen In dit geval is sold natuurlijk gelijk aan


const soldOutTvs = inventory.filter((soldOutTv)=>{
    return soldOutTv.originalStock - soldOutTv.sold === 0;
//  return soldOuttv.originalStock === soldOuttv.sold
})
console.log(soldOutTvs);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// 2 televisies hebben een ambi light. Dit wordt aangegeven met een boolean true false

const hasAmbiLights = inventory.filter((ambiLightTv)=> {
    // alleen aangeven = true geeft aan dat de tv wel/niet een ambilight kan hebben (dus krijg je ze alle 8)
    //options.ambilight, want object binnen object.
    return ambiLightTv.options.ambiLight === true;
})
console.log(hasAmbiLights);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
function sortPriceTvLowToHigh(priceTvs) {
priceTvs.sort((a, b) => a.price - b.price);
}
sortPriceTvLowToHigh(inventory);
console.log(inventory);

//function sortPriceTvLowToHigh(priceTvs) {
//     return priceTvs.sort((a, b) => {
//         if (a.price > b.price) {
//             return 1;
//         }
//         if (a.price < b.price) {
//             return -1;
//         }
//         return 0;
//     });
// }