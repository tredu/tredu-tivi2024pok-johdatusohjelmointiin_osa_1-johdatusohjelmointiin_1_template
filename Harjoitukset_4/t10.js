/* 

Tehtävä 10. Tervehtijäbotti

Tee funktio, joka kertoo päivämäärän, kellonajan sekä tervehtii oikein 
    - aamulla klo 6-10 "Huomenta!"
    - päivällä klo 10-17 "Päivää!"
    - illalla klo 17-22 "Iltaa!
    - yöllä klo 22-6 "Hyvää yötä!"
    
Parametrina funktio saa taulukon, jossa on päivämäärä- ja kellonaikatietoja ISO UTC-formaatissa. 
ISO UTC-formaatti on merkkijono, jossa on vuosi-kuukausi-päivä_T_tunnit-minuutit-sekunnit_Z 
(aika on UTC aikana):

    "2024-08-21T13:26:00.000Z"
    
Esimerkkitulostus:

    Päivää!
    Tänään on keskiviikko 21.8.2024 ja kello on 16:26:00

Vinkki 1: Muuta ISO-formaatti olioksi näin 
let date = new Date()

Vinkki 2: Käytä seuraavia Date-luokan metodeja: toLocaleDateString() ja toLocaleTimeString() 
(nämä funktiot ottavat huomioon aikavyöhykkeet sekä kesäajan)

Aja koodi terminaalissa:
node t10.js

*/

function greetings(timestamps){
    // lisää koodia tähän
}

// täydennä koodia:
let timestamps = ["2024-08-21T13:26:00.000Z","2024-08-20T09:10:00.000Z","2024-08-23T20:20:00.000Z", "2024-08-25T23:34:00.000Z"]
console.log(greetings())

// Älä koske tähän:
module.exports = greetings;