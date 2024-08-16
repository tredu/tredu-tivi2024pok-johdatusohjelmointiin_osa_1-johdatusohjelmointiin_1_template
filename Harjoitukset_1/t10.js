/* 

Tehtävä 10. Tuotteen hinta

Tee funktio, joka laskee tuotteen kokonaishinnan, kun sen parametrit ovat hinta (price) ja 
alv-prosentti (vat). Ennen ALV:in lisäämistä hinnasta vähennetään alennus 
seuraavien ehtojen mukaisesti:

- hinta on välillä 100 - 200€ alennus 5%
- hinta on välillä 200 - 500€ alennus 10%
- hinta on 500€ tai yli alennus 15%

Kutsu funktiota kolme kertaa eri arvoilla ja tulosta tiedot konsolille.

------------------------------------------------------------------------
Vihjeet:

1. Alennuksen prosenttikertoimet laskeminen:
    - alennus on 10% –> prosenttikerroin on 0.9
    - alennus on 20% –> prosenttikerroin on 0.8 jne

2. Hinnan korotuksen (alv nostaa hintaa) prosenttikertoimen laskeminen:
    - jos alv on 24% –> prosenttikerroin on 1.24
    - jos alv on 19% –> prosenttikerroin on 1.19 jne

Lopullinen hinta lasketaan: hinta x alennuksen prosenttikerroin x alv:in prosenttikerroin. Pyöristä vastaus
kahden desimaalin tarkkuuteen.

Aja koodi terminaalissa:
node tehtava_10.js

*/

function finalPrice(price, vat){
    // lisää koodia tähän
}

// täydennä koodia:
console.log(finalPrice());


// Älä koske tähän:
module.exports = finalPrice;