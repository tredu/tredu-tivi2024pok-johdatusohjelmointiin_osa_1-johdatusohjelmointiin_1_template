//console.log("latasin js:ää")

let countryList = document.getElementById("countries")

function toggleData(item){
    if(item.style.display == "none"){
        item.style.display = "block"
    } else {
        item.style.display = "none"
    }
}

fetch("https://jsonserver.tiipar.treok.io/countries")
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
            let myDiv = document.createElement("div")  // tyhja div-tag
            myDiv.className = "country"                // jotta css toimii
            let myTitle = document.createElement("H3") //tyhjä H3-tag
            myTitle.textContent = country.name
            // lisää elementtejä
            let infoDiv = document.createElement("div") // UUSI
            let myCapital = document.createElement("p") //tyhjä p-tag
            myCapital.textContent = country.capital
            let myPopulation = document.createElement("p") //tyhjä p-tag
            myPopulation.textContent = country.population
            // lisää kuva
            let myFlag = document.createElement("img")  // tyhjä img-tag
            myFlag.src = country.flag
            infoDiv.append(myCapital, myPopulation, myFlag)  // UUSI
            infoDiv.style.display = "none"   // UUSI
            myTitle.addEventListener("click", ()=> toggleData(infoDiv)) // UUSI 
            myDiv.append(myTitle,infoDiv)  // MUUTETTU!
            countryList.appendChild(myDiv) 
        });
    })