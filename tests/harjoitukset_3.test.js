const printTenTimes = require("../Harjoitukset_3/t1")
const loopSquares = require("../Harjoitukset_3/t2")
const loopNumbersWithSkip = require("../Harjoitukset_3/t3")
const multiplication = require("../Harjoitukset_3/t4")
const multiplicationAll = require("../Harjoitukset_3/t5")
const loopUntilMax = require("../Harjoitukset_3/t6")
const loopFromMinToMax = require("../Harjoitukset_3/t7")
const factorial = require("../Harjoitukset_3/t8")
const lottery = require("../Harjoitukset_3/t9")
const studentId = require("../Harjoitukset_3/t10")

const n1 = "Tiina"
const n2 = "Jussi"

/* 1 */
describe('printTenTimes', () => {
    test('printTenTimes: tulostaa nimen 10 kertaa', () => {
        expect(printTenTimes(n1)).toBe(`1. ${n1}\n2. ${n1}\n3. ${n1}\n4. ${n1}\n5. ${n1}\n6. ${n1}\n7. ${n1}\n8. ${n1}\n9. ${n1}\n10. ${n1}\n`);
        expect(printTenTimes(n2)).toBe(`1. ${n2}\n2. ${n2}\n3. ${n2}\n4. ${n2}\n5. ${n2}\n6. ${n2}\n7. ${n2}\n8. ${n2}\n9. ${n2}\n10. ${n2}\n`);
    });
})

/* 2 */ 
describe('loopSquares', () => {
    test('loopSquares: 1-10 neliöt vaihtuvalla välimerkillä', () => {
        expect(loopSquares(',')).toBe(`1,4,9,16,25,36,49,64,81,100`);
        expect(loopSquares('+')).toBe(`1+4+9+16+25+36+49+64+81+100`);
        expect(loopSquares('.')).toBe(`1.4.9.16.25.36.49.64.81.100`);
})})

/* 3 */ 
describe('loopNumbersWithSkip', () => {
    test('loopNumbersWithSkip: tulostaa luvut 1-20 mutta hyppää yli pyydetyn määrn lukuja', () => {
        expect(loopNumbersWithSkip(1)).toBe(`1 3 5 7 9 11 13 15 17 19`);
        expect(loopNumbersWithSkip(2)).toBe(`1 4 7 10 13 16 19`);
        expect(loopNumbersWithSkip(5)).toBe(`1 7 13 19`);
        expect(loopNumbersWithSkip(10)).toBe(`1 12`);
})})

/* 4 */ 
describe('multiplication', () => {
    test('multiplication: tulostaa annetun luvun kertotaulun', () => {
        expect(multiplication(2)).toBe(`2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n2 * 4 = 8\n2 * 5 = 10\n2 * 6 = 12\n2 * 7 = 14\n2 * 8 = 16\n2 * 9 = 18\n2 * 10 = 20\n`);
        expect(multiplication(6)).toBe(`6 * 1 = 6\n6 * 2 = 12\n6 * 3 = 18\n6 * 4 = 24\n6 * 5 = 30\n6 * 6 = 36\n6 * 7 = 42\n6 * 8 = 48\n6 * 9 = 54\n6 * 10 = 60\n`);
})})

/* 5 */ 
describe('multiplicationAll', () => {
    test('multiplicationAll: tulostaa kaikkien lukujen kertotaulut', () => {
        expect(multiplicationAll()).toBe(`1 * 1 = 1\n1 * 2 = 2\n1 * 3 = 3\n1 * 4 = 4\n1 * 5 = 5\n1 * 6 = 6\n1 * 7 = 7\n1 * 8 = 8\n1 * 9 = 9\n1 * 10 = 10\n2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n2 * 4 = 8\n2 * 5 = 10\n2 * 6 = 12\n2 * 7 = 14\n2 * 8 = 16\n2 * 9 = 18\n2 * 10 = 20\n3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n3 * 5 = 15\n3 * 6 = 18\n3 * 7 = 21\n3 * 8 = 24\n3 * 9 = 27\n3 * 10 = 30\n4 * 1 = 4\n4 * 2 = 8\n4 * 3 = 12\n4 * 4 = 16\n4 * 5 = 20\n4 * 6 = 24\n4 * 7 = 28\n4 * 8 = 32\n4 * 9 = 36\n4 * 10 = 40\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50\n6 * 1 = 6\n6 * 2 = 12\n6 * 3 = 18\n6 * 4 = 24\n6 * 5 = 30\n6 * 6 = 36\n6 * 7 = 42\n6 * 8 = 48\n6 * 9 = 54\n6 * 10 = 60\n7 * 1 = 7\n7 * 2 = 14\n7 * 3 = 21\n7 * 4 = 28\n7 * 5 = 35\n7 * 6 = 42\n7 * 7 = 49\n7 * 8 = 56\n7 * 9 = 63\n7 * 10 = 70\n8 * 1 = 8\n8 * 2 = 16\n8 * 3 = 24\n8 * 4 = 32\n8 * 5 = 40\n8 * 6 = 48\n8 * 7 = 56\n8 * 8 = 64\n8 * 9 = 72\n8 * 10 = 80\n9 * 1 = 9\n9 * 2 = 18\n9 * 3 = 27\n9 * 4 = 36\n9 * 5 = 45\n9 * 6 = 54\n9 * 7 = 63\n9 * 8 = 72\n9 * 9 = 81\n9 * 10 = 90\n10 * 1 = 10\n10 * 2 = 20\n10 * 3 = 30\n10 * 4 = 40\n10 * 5 = 50\n10 * 6 = 60\n10 * 7 = 70\n10 * 8 = 80\n10 * 9 = 90\n10 * 10 = 100\n`)
})})

/* 6 */

describe('loopUntilMax', () => {
    test('loopUntilMax: tulostaa luvut yhdestä annettuun maksimiin asti', () => {
        expect(loopUntilMax(4)).toBe(`1\n2\n3\n4\n`);
        expect(loopUntilMax(7)).toBe(`1\n2\n3\n4\n5\n6\n7\n`);
})})

/* 7 */

describe('loopFromMinToMax', () => {
    test('loopFromMinToMax: tulostaa annetulta väliltä', () => {
        expect(loopFromMinToMax(2,4)).toBe(`2\n3\n4\n`);
        expect(loopFromMinToMax(3,10)).toBe(`3\n4\n5\n6\n7\n8\n9\n10\n`);
})})

/* 8 */

describe('factorial', () => {
    test('factorial: tulostaa annetun luvun kertoman', () => {
        expect(factorial(3)).toBe(`3! = 1 * 2 * 3 = 6`);
        expect(factorial(4)).toBe(`4! = 1 * 2 * 3 * 4 = 24`);
})})

/* 9 */

describe('lottery', () => {
    test('lottery: palauttaa 7 arvottua numeroa taulukkomuodossa', () => {
        let result = lottery()
        expect(result.length).toBe(7);
        expect(result.max()).toBeLessThanOrEqual(40);
        expect(result.min()).toBeGreaterThanOrEqual(1);
        expect(result.reduce((acc,x)=>acc && (typeof x == 'number'),true)).toBe(true);
})})

/* 10 */

describe('studentId', () => {
    test('studentId: palauttaa oppilasryhmän tunnukset taulukkomuodossa', () => {
        expect(studentId("Tivi2408POk", 5)).toEqual([
            "Tivi2408POk_oppilas_1",
            "Tivi2408POk_oppilas_2",
            "Tivi2408POk_oppilas_3",
            "Tivi2408POk_oppilas_4",
            "Tivi2408POk_oppilas_5"
        ]);
        expect(studentId("Tivi2308POk", 7)).toEqual([
            "Tivi2308POk_oppilas_1",
            "Tivi2308POk_oppilas_2",
            "Tivi2308POk_oppilas_3",
            "Tivi2308POk_oppilas_4",
            "Tivi2308POk_oppilas_5",
            "Tivi2308POk_oppilas_6",
            "Tivi2308POk_oppilas_7",
        ]);
})})
