const inchToCm = require('../Harjoitukset_2/t1');
const revenue = require('../Harjoitukset_2/t2');
const mathOperations = require('../Harjoitukset_2/t3');
const circle = require('../Harjoitukset_2/t4');
const calculator = require('../Harjoitukset_2/t5');
const inBetween = require('../Harjoitukset_2/t6');
const celsiusToFahrenheit = require('../Harjoitukset_2/t7');
const evenOrOdd = require('../Harjoitukset_2/t8');
const findMax = require('../Harjoitukset_2/t9');
const putInOrder = require('../Harjoitukset_2/t10');

/* 1 */
describe('inchToCm', () => {
    test('inchToCm: muuntaa tuumat oikein', () => {
        expect(inchToCm(6)).toBe("6 tuumaa on 15.2 senttimetriä");
        expect(inchToCm(8.5)).toBe("8.5 tuumaa on 21.6 senttimetriä");
    });
})

/* 2 */
describe('revenue', () => {
    test('revenue: laske tilikauden tuloksen oikein', () => {
        expect(revenue(1200, 450)).toBe("Tulot: 1200€\nMenot: 450€\nTilikauden tulos: 750€ voittoa");
        expect(revenue(302, 2344)).toBe("Tulot: 302€\nMenot: 2344€\nTilikauden tulos: -2042€ tappiota");
    });
})

/* 3 */

describe('mathOperations', () => {
    test('mathOperations: laske matemaattiset operaatiot oikein', () => {
        expect(mathOperations(3, 4)).toBe("Luvut: 3 ja 4\nSumma: 7\nErotus: -1\nTulo: 12\nOsamäärä: 0.75\nJakojäännös: 3");
        expect(mathOperations(54, 2)).toBe("Luvut: 54 ja 2\nSumma: 56\nErotus: 52\nTulo: 108\nOsamäärä: 27\nJakojäännös: 0");
    });
})

/* 4 */

describe('circle', () => {
    test('circle: laske ympyrän mitat oikein', () => {
        expect(circle(4)).toBe("r = 2cm\np = 12.57cm\nA = 12.57cm^2");
        expect(circle(16.4)).toBe("r = 8.2cm\np = 51.52cm\nA = 211.24cm^2");
    });
})

/* 5 */

describe('calculator', () => {
    test('calculator: laskin laskee oikein', () => {
        expect(calculator(11,43,'+')).toBe("11 + 43 = 54");
        expect(calculator(-4,33,'-')).toBe("-4 - 33 = -37");
        expect(calculator(4.3,8,'*')).toBe("4.3 * 8 = 34.4");
        expect(calculator(356,3.6,'/')).toBe("356 / 3.6 = 98.89");
    });
})

/* 6 */

describe('inBetween', () => {
    test('inBetween: tutkii oikein onko luku välillä 0-10', () => {
        expect(inBetween(3.5)).toBe("Luku on välillä 0-10");
        expect(inBetween(0)).toBe("Luku on liian pieni");
        expect(inBetween(34)).toBe("Luku on liian suuri");
        expect(inBetween(-1)).toBe("Luku on liian pieni");
        expect(inBetween(10)).toBe("Luku on liian suuri");
    });
})

/* 7 */

describe('convertToFahrenheit', () => {
    test('convertToFahrenheit: laskee muunnoksen oikein', () => {
        expect(celsiusToFahrenheit(4)).toBe(39.2);
        expect(celsiusToFahrenheit(12)).toBe(53.6);
        expect(celsiusToFahrenheit(65)).toBe(149);
        expect(celsiusToFahrenheit(-54)).toBe(65.2);
    });
})

describe('celsiusToFahrenheit', () => {
    test('celsiusToFahrenheit: tulostaa muunnoksen oikein', () => {
        expect(celsiusToFahrenheit(4)).toBe("4°C on 39.2°F");
        expect(celsiusToFahrenheit(12)).toBe("12°C on 53.6°F");
        expect(celsiusToFahrenheit(65)).toBe("65°C on 149°F");
        expect(celsiusToFahrenheit(-54)).toBe("-54°C on -65.2°F");
    });
})

/* 8 */

test('evenOrOdd: ilmoittaa parillisuuden oikein', () => {
    expect(evenOrOdd(4)).toBe("4 on parillinen");
    expect(evenOrOdd(12)).toBe("12 on parillinen");
    expect(evenOrOdd(65)).toBe("65 on pariton");
    expect(evenOrOdd(0)).toBe("0 on parillinen");
});

/* 9 */

test('findMax: löytään suurimman oikein', () => {
    expect(findMax(-1,4,0.4)).toBe("Luvuista: -1, 4 ja 0.4 suurin on: 4");
    expect(findMax(45,3,23)).toBe("Luvuista: 45, 3 ja 23 suurin on: 45");    
    expect(findMax(-45,-3,-23)).toBe("Luvuista: -45, -3 ja -23 suurin on: -3");  
});

/* 10 */

test('putInOrder: järjestää suuruusjärjestykseen', () => {
    expect(putInOrder(345,234,231)).toBe("Luvut: 345 234 231\nPienimmästä suurimpaan: 231 234 345");
    expect(putInOrder(-1,4,0.4)).toBe("Luvut: -1 4 0.4\nPienimmästä suurimpaan: -1 0.4 4");
    expect(putInOrder(0.01,0.1,0.001)).toBe("Luvut: 0.01 0.1 0.001\nPienimmästä suurimpaan: 0.001 0.01 0.1");
});

