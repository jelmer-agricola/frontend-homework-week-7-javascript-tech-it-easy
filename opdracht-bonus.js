/*
#### Bonusopdracht

1. Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de  console loggen als de gebruiker op
de bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!
    2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!*/
// prijs sorteren
//


const sortPriceButton = document.getElementById('sort-price-button');
sortPriceButton.addEventListener('click', displaySortedTvs);


function displaySortedTvs(){
sortPriceTvLowToHigh(inventory);
generateTvList(inventory);

}

const filterAmbilightButton = document.getElementById('filter-ambilight-button');
filterAmbilightButton.addEventListener('click', displayAmbiLightTvs);

function displayAmbiLightTvs(){
    const hasAmbiLights = inventory.filter((tv)=>{
        return tv.options.ambiLight === true;
    })
    generateTvList(hasAmbiLights);
}


const filterSoldOutButton = document.getElementById('filter-sold-out-button');
filterSoldOutButton.addEventListener("click", displaySoldOutTvs);

function displaySoldOutTvs() {
    const soldOutTvs = inventory.filter((tv)=>{
        return tv.originalStock === tv.sold
})
generateTvList(soldOutTvs);
}