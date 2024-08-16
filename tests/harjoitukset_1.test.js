const sayHello = require('../Harjoitukset_1/t1');
const squareOf = require('../Harjoitukset_1/t2');
const ageCategory = require('../Harjoitukset_1/t3');
const findLarger = require('../Harjoitukset_1/t4');
const areaOfTriangle = require('../Harjoitukset_1/t5');
const division = require('../Harjoitukset_1/t6');
const convertCurrency = require('../Harjoitukset_1/t7');
const taxiFare = require('../Harjoitukset_1/t8');
const colorRobot = require('../Harjoitukset_1/t9');
const finalPrice = require('../Harjoitukset_1/t10');

/* 1 */
describe('sayHello', () => {
    test('sayHello: tervehtii oikein', () => {
        expect(sayHello("Liisa")).toBe("Hello, Liisa, how are you?");
        expect(sayHello("Kalle")).toBe("Hello, Kalle, how are you?");
    });
})

/* 2 */
describe('squareOf', () => {
    test('squareOf: laskee neliön oikein', () => {
        expect(squareOf(2)).toBe(4);
        expect(squareOf(-2)).toBe(4);
        expect(squareOf(5)).toBe(25);
    });
    test('squareOf: check input', () => {
        expect(squareOf("höpö")).toBe("check input")
        expect(squareOf()).toBe("check input")
    });
})     

/* 3 */
describe('ageCategory', () => {
    test('ageCategory: tunnistaa aikuisen ja alaikäisen', () => {
        expect(ageCategory(0)).toBe("minor")
        expect(ageCategory(1)).toBe("minor")
        expect(ageCategory(17)).toBe("minor")
        expect(ageCategory(18)).toBe("major")
        expect(ageCategory(100.5)).toBe("major")
    });

    test('ageCategory: check input', () => {
        expect(ageCategory("höpö")).toBe("check input")
        expect(ageCategory()).toBe("check input")
    });
})

/* 4 */
describe('findLarger', () => {
    test('findLarger: löytää suuremman numeron', () => {
        expect(findLarger(6, 2)).toBe("Of given numbers 6 and 2, the larger is 6")
        expect(findLarger(5, 10)).toBe("Of given numbers 5 and 10, the larger is 10")
        expect(findLarger(-2, 2)).toBe("Of given numbers -2 and 2, the larger is 2")
    });

    test('findLarger: check input', () => {
        expect(findLarger()).toBe("check input")
        expect(findLarger(3)).toBe("check input")
        expect(findLarger("kolme", 3)).toBe("check input")
    });
})

/* 5 */
describe('areaOfTriangle', () => {
    test('areaOfTriangle: laskee pinta-alan oikein', () => {
        expect(areaOfTriangle(2, 4)).toBe(4)
        expect(areaOfTriangle(1, 45)).toBe(22.5)
        expect(areaOfTriangle(10.1, 3.5)).toBe(18.4)
        expect(areaOfTriangle(0, 0)).toBe(0)
        expect(areaOfTriangle(5.55, 4.53)).toBe(12.6)
    });

    test('areaOfTriangle: check input', () => {
        expect(areaOfTriangle("matti", 6)).toBe("check input")
        expect(areaOfTriangle(3)).toBe("check input")
        expect(areaOfTriangle()).toBe("check input")
    });
})

/* 6 */
describe('division', () => {
    test('division: jakolasku suoritetaan oikein', () => {
        expect(division(6, 2)).toBe(3)
        expect(division(10, 5)).toBe(2)
        expect(division(-2, 2)).toBe(-1)
        expect(division(1, 2)).toBeCloseTo(0.5)
        expect(division(-100, 400)).toBeCloseTo(-0.25)
    });

    test('division: ei voi jakaa nollalla', () => {
        expect(division(3, 0)).toBe("you cannot divide with a zero")
    });

    test('division: check input', () => {
        expect(division()).toBe("check input")
        expect(didivisionvide(3)).toBe("check input")
        expect(division("kissa")).toBe("check input")
    });
})

/* 7 */
describe('convertCurrency', () => {
    test('convertCurrency: valuuttamuunnos suoritetaan oikein', () => {
        expect(convertCurrency(10, "YEN")).toBe("¥1087.5")
        expect(convertCurrency(10, "USD")).toBe("$5.85")
        expect(convertCurrency(10, "GBP")).toBe("£7.58")
    });

    test('convertCurrency: check input', () => {
        expect(convertCurrency()).toBe("check input")
        expect(convertCurrency(3)).toBe("check input")
        expect(convertCurrency("kissa")).toBe("check input")
    });
})

/* 8 */
describe('taxiFare', () => {
    test('taxiFare: laskee hinnan oikein', () => {
        expect(taxiFare(2, 4)).toBe(11.8)
        expect(taxiFare(3, 3)).toBe(11.1)
        expect(taxiFare(5, 5.4)).toBe(16.2)
        expect(taxiFare(7, 3.1)).toBe(12.22)
    });

    test('taxiFare: check input', () => {
        expect(taxiFare()).toBe("check input")
        expect(taxiFare(3)).toBe("check input")
        expect(taxiFare("kissa", 3)).toBe("check input")
    });
})

/* 9 */
describe('colorRobot', () => {
    test('colorRobot: tulkitsee värit oikein', () => {
        expect(colorRobot(344)).toBe("violetti")
        expect(colorRobot(456)).toBe("sininen")
        expect(colorRobot(496)).toBe("vihreä")
        expect(colorRobot(578)).toBe("keltainen")
        expect(colorRobot(623)).toBe("oranssi")
        expect(colorRobot(678)).toBe("punainen")
    });

    test('colorRobot: check input', () => {
        expect(colorRobot(34)).toBe("check input")
        expect(colorRobot("kissa")).toBe("check input")
        expect(colorRobot()).toBe("check input")
        expect(colorRobot(1000)).toBe("check input")
    });
 })

/* 10 */
describe('finalPrice', () => {
    test('finalPrice: laskee hinnan oikein', () => {
        expect(finalPrice(50, 24)).toBe(62);
        expect(finalPrice(110, 24)).toBe(129.58);
        expect(finalPrice(230, 19)).toBe(246.33);
        expect(finalPrice(500, 19)).toBe(505.75);
        expect(finalPrice(540, 19)).toBe(546.21);
    });

    test('finalPrice: check input', () => {
        expect(finalPrice()).toBe("check input")
        expect(finalPrice(4)).toBe("check input")
        expect(finalPrice("kissa", 2)).toBe("check input")
    });
})