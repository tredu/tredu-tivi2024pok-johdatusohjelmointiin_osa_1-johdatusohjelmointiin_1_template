/* 

Tehtävä 9. Pelijoukkueet

Kisaa varten on ilmoittautunut muutama joukkue. Valitettavasti mukaan pääsevät vain ne, joissa on 
vähintään viisi jäsentä. Tulosta niiden joukkueiden nimet ja yhteyshenkilöt, joissa on viisi tai 
useampi jäsentä. Tulosta myös osallistujien kokonaismäärä.
Esimerkkitulostus:

    tiimi: Hervannan joukkue
    jäsenet: 11
    yhteyshenkilö: Jesse Mikkola

    tiimi: Hallilan joukkue
    jäsenet: 7
    yhteyshenkilö: Pia Ilmonen

    ...jne

Aja koodi terminaalissa:
node t9.js

*/

function fullTeams(teams){
    // lisää koodia tähän
}

// täydennä koodia:
const teams = [
    {name: "Hervannan joukkue", members: 11, representative: "Jesse Mikkola"},
    {name: "Vuoreksen Joukkue", members: 4, representative: "Kari Vanaja"},
    {name: "Hallilan joukkue", members: 7, representative: "Pia Ilmonen"},
    {name: "Lukonmäen joukkue", members: 10, representative: "Hanna Joensuu"},
    {name: "Kaukajärven joukkue", members: 9, representative: "Jussi Ikälä"},
    {name: "Annalan joukkue", members: 3, representative: "Keijo Kukkonen"}
];

console.log(fullTeams());

// Älä koske tähän:
module.exports = fullTeams;