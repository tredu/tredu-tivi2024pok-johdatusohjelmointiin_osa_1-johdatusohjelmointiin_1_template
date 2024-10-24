// Muuttujat 

const name = "Tiina";
const name2 = "Partanen";

let age = 52;

//console.log("Nimi:", name, name2)

// funktion määrittely:
function greetings(fname, lname){
    return `Welcome to Tredu, ${fname} ${lname}`  // template string
}

// funktion kutsu:
console.log(greetings('Tiina', 'Partanen'));
console.log(greetings('Azaliia', 'Aitanova'));

function showDatingAdvertisement(age, name){
    let result = ""
    if(age >= 50){
        result = `${name}, löydä elämäsi kumppani! Klikkaa tästä!`
    } else if (age === 30){
        result = `${name}, onneksi olkoot voitit ilmaisen kokeilujakson`
    } else if(age >= 18){
        result = `${name}, lataa Tinderi, klikkaa täältä`
    } else {
        result = "Ei mainoksia tänään"
    }
    return result
}

console.log(showDatingAdvertisement(52, "Tiina"))
console.log(showDatingAdvertisement(26, "Jessika"))
console.log(showDatingAdvertisement(16, "Nico"))
console.log(showDatingAdvertisement(30, "Jonne"))
