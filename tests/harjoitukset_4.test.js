const {listWithFor, listWithForeach, listWithToString} = require("../Harjoitukset_4/t1")
const modifyList = require("../Harjoitukset_4/t2")
const analyseNumbers = require("../Harjoitukset_4/t3")
const printGroups = require("../Harjoitukset_4/t4")
const userNames = require("../Harjoitukset_4/t5")
const longestTask = require("../Harjoitukset_4/t6")
const contactInfo = require("../Harjoitukset_4/t7")
const contactInfoAll = require("../Harjoitukset_4/t8")
const fullTeams = require("../Harjoitukset_4/t9")
const greetings = require("../Harjoitukset_4/t10")

const inputList1 = ["osta maitoa", "kuntoile", "lue kokeeseen", "vie roskat", "istuta tulppaaneja"]
const outputList1 = "- osta maitoa\n- kuntoile\n- lue kokeeseen\n- vie roskat\n- istuta tulppaaneja\n"

const inputList2 = ["maitoa", "piimää", "perunoita", "makkaraa", "herneitä"]
const outputList2 = "- maitoa\n- piimää\n- perunoita\n- makkaraa\n- herneitä\n"

const outputArray1 = ["kuntoile", "lue kokeeseen", "vie roskat", "istuta tulppaaneja", "hanki työpaikka"]
const outputArray2 = ["piimää", "perunoita", "makkaraa", "herneitä", "karkkia"]

const groups1 = [["Mikko","Janne","Sanna"],["Jussi","Pirkko"],["Heikki","Elina"]]
const groups2 = [["Ulla","Pia"],["Sinikka","Yrjö","Eijaliisa"],["Annikki","Untamo","Pekkajussi"],["Nalle"]]

const users1 = ["Mikko Mainio","Janne Ruskokivi","Sanna Könkkölä"]
const users2 = ["Essi Jokinen","Pasi Äijö","Ninni Ilonen", "Asko Åberg"]

const dailyTasks1 = [["Opiskelu", 3.5],["Syöminen",2],["Lenkkeily",1],["Pelaaminen",4]]
const dailyTasks2 = [["Opiskelu", 10],["Syöminen",2],["Lenkkeily",1],["Pelaaminen",4]]

const contact1 = {name: "Aku Ankka", age: 33, phonenumber: "01012312312", email: "aku.ankka@ankkalinna.com"}
const contact2 = {name: "Minni Hiiri", age: 25, phonenumber: "0403452344", email: "minni.hiiri@ankkalinna.com"}
const contact3 = {name: "Hessu Hopo", age: 36, phonenumber: "123123123", email: "hessu.hopo@ankkalinna.com"}

const teams1 = [
    {name: "Hervannan joukkue", members: 11, representative: "Jesse Mikkola"},
    {name: "Vuoreksen Joukkue", members: 4, representative: "Kari Vanaja"},
    {name: "Hallilan joukkue", members: 7, representative: "Pia Ilmonen"},
    {name: "Lukonmäen joukkue", members: 1, representative: "Hanna Joensuu"},
    {name: "Kaukajärven joukkue", members: 9, representative: "Jussi Ikälä"},
    {name: "Annalan joukkue", members: 3, representative: "Keijo Kukkonen"}
];

const teams2 = [
    {name: "Hervannan joukkue", members: 2, representative: "Jesse Mikkola"},
    {name: "Vuoreksen Joukkue", members: 4, representative: "Kari Vanaja"},
    {name: "Hallilan joukkue", members: 7, representative: "Pia Ilmonen"},
    {name: "Lukonmäen joukkue", members: 1, representative: "Hanna Joensuu"},
    {name: "Kaukajärven joukkue", members: 9, representative: "Jussi Ikälä"},
    {name: "Annalan joukkue", members: 3, representative: "Keijo Kukkonen"}
];
let timestamps1 = ["2024-08-21T13:26:00.000Z","2024-08-20T06:10:00.000Z","2024-08-23T19:19:00.000Z", "2024-08-25T01:34:00.000Z"]
let timestamps2 = ["2024-08-20T06:10:00.000Z","2024-08-23T19:19:00.000Z", "2024-08-25T01:34:00.000Z","2024-08-21T13:26:00.000Z"]
   
/* 1 */
describe('listWithFor', () => {
    test('listWithFor: tulostaa annetun taulukon oikein', () => {
        expect(listWithFor(inputList1)).toBe(outputList1)
        expect(listWithForeach(inputList1)).toBe(outputList1)
        expect(listWithToString(inputList1)).toBe(outputList1)
        expect(listWithFor(inputList2)).toBe(outputList2)
        expect(listWithForeach(inputList2)).toBe(outputList2)
        expect(listWithToString(inputList2)).toBe(outputList2)
})})

/* 2 */ 
describe('modifyList', () => {
    test('modifyList: palauttaa muokatun taulukon oikein', () => {
        expect(modifyList(inputList1)).toEqual(outputArray1)
        expect(modifyList(inputList2)).toEqual(outputArray2)
})})

/* 3 */ 
describe('analyseNumbers', () => {
    test('analyseNumbers: palauttaa numeroanalyysin oikein', () => {
        expect(analyseNumbers([2,5,-2,44,3])).toBe(`Lukumäärä: 5\nSumma: 52\nKeskiarvo: 10.4\nSuurin arvo: 44\nPienin arvo: -2\nParillisia: 3\nParittomia: 2`)
        expect(analyseNumbers([77,54,456,1,-38,2322])).toBe(`Lukumäärä: 6\nSumma: 2872\nKeskiarvo: 478.67\nSuurin arvo: 2322\nPienin arvo: -38\nParillisia: 4\nParittomia: 2`)
})})

/* 4 */
describe('printGroups', () => {
    test('printGroups: palauttaa ryhmät tulostettuna halutussa muodossa', () => {
        expect(printGroups(groups1)).toBe(`Ryhmä 1:\n\t- Mikko\n\t- Janne\n\t- Sanna\nRyhmä 2:\n\t- Jussi\n\t- Pirkko\nRyhmä 3:\n\t- Heikki\n\t- Elina\n`)
        expect(printGroups(groups2)).toBe(`Ryhmä 1:\n\t- Ulla\n\t- Pia\nRyhmä 2:\n\t- Sinikka\n\t- Yrjö\n\t- Eijaliisa\nRyhmä 3:\n\t- Annikki\n\t- Untamo\n\t- Pekkajussi\nRyhmä 4:\n\t- Nalle\n`)
})})

/* 5 */
describe('userNames', () => {
    test('userNames: luo halutussa muodossa olevia käyttäjänimiä', () => {
        expect(userNames(users1,2024)).toEqual(["mikmai24","janrus24","sankon24"])
        expect(userNames(users2,2023)).toEqual(["essjok23","pasaij23","ninilo23", "askabe23"])
})})

/* 6 */
describe('longestTask', () => {
    test('longestTask: etsii pisimmän tehtävän', () => {
        expect(longestTask(dailyTasks1)).toBe("Pelaaminen: 4h")
        expect(longestTask(dailyTasks2)).toBe("Opiskelu: 10h")
})})

/* 7 */
describe('contactInfo', () => {
    test('contactInfo: tulostaa oikein yhteystiedot', () => {
        expect(contactInfo(contact1)).toBe(`nimi: Aku Ankka\nikä: 33\npuh: 01012312312\nemail: aku.ankka@ankkalinna.com\n`)
        expect(contactInfo(contact2)).toBe(`nimi: Minni Hiiri\nikä: 25\npuh: 04034523442\nemail: minni.hiiri@ankkalinna.com\n`)
})})

/* 8 */
describe('contactInfoAll', () => {
    test('contactInfoAll: tulostaa oikein yhteystietolistan', () => {
        expect(contactInfoAll([contact1,contact2])).toBe(`nimi: Aku Ankka\nikä: 33\npuh: 01012312312\nemail: aku.ankka@ankkalinna.com\n\nnimi: Minni Hiiri\nikä: 25\npuh: 04034523442\nemail: minni.hiiri@ankkalinna.com\n`)
        expect(contactInfoAll([contact2,contact1,contact3])).toBe(`nimi: Minni Hiiri\nikä: 25\npuh: 04034523442\nemail: minni.hiiri@ankkalinna.com\n\nnimi: Aku Ankka\nikä: 33\npuh: 01012312312\nemail: aku.ankka@ankkalinna.com\n\nnimi: Hessu Hopo\nikä: 36\npuh: 123123123\nemail: hessu.hopo@ankkalinna.com\n\n`)
    })})

/* 9 */
describe('fullTeams', () => {
    test('fullTeams: tulostaa täydet joukkueet oikein', () => {
        expect(fullTeams(teams1)).toBe(`tiimi: Hervannan joukkue\njäsenet: 11\nyhteyshenkilö: Jesse Mikkola\n\ntiimi: Hallilan joukkue\njäsenet: 7\nyhteyshenkilö: Pia Ilmonen\n\ntiimi: Kaukajärven joukkue\njäsenet: 9\nyhteyshenkilö: Jussi Ikälä\n\n`)
        expect(fullTeams(teams2)).toBe(`tiimi: Hallilan joukkue\njäsenet: 7\nyhteyshenkilö: Pia Ilmonen\n\ntiimi: Kaukajärven joukkue\njäsenet: 9\nyhteyshenkilö: Jussi Ikälä\n\n`)   
    })})

/* 10 */
describe('greetings', () => {
    test('greetings: tervehtii käyttäjää oikein', () => {
        expect(greetings(timestamps1)).toBe(`Päivää!\nTänään on keskiviikko 21.8.2024 ja kello on 16:26:00\nHuomenta!\nTänään on tiistai 20.8.2024 ja kello on 9:10:00\nIltaa!\nTänään on perjantai 23.8.2024 ja kello on 22:19:00\nHyvää yötä!\nTänään on sunnuntai 25.8.2024 ja kello on 04:34:00\n`)
        expect(greetings(timestamps2)).toBe(`Huomenta!\nTänään on tiistai 20.8.2024 ja kello on 9:10:00\nIltaa!\nTänään on perjantai 23.8.2024 ja kello on 22:19:00\nHyvää yötä!\nTänään on sunnuntai 25.8.2024 ja kello on 04:34:00\nPäivää!\nTänään on keskiviikko 21.8.2024 ja kello on 16:26:00\n`)
    })})
   