let instru1 = {
    name: "Shöhvit",
    type: "sähköbasso",
    age: 8,
    producer: "Tiina Partanen",
    color: "valkoinen"
}

let instru2 = {
    name: "Mimosa",
    type: "kontrabasso",
    age: 12,
    producer: "Mikko Karvonen",
    color: "ruskea"
}

let instru3 = {
    name: "B:n kitara",
    type: "akustinen kitara",
    age: 2,
    producer: "Santeri Korvenpää",
    color: "v.ruskea"
}

function printInstruments(instruments){
    let result = ""
    instruments.forEach(instru => 
        result += `${instru.name}: ${instru.type} by ${instru.producer}\n`
    )
    return result
}

let myInstruments = [instru1, instru2, instru3]
console.log(printInstruments(myInstruments))



