// Silmukat:
// 
// for-loop
// while-loop
// foreach
// map

// for
function userIds (word, amount){
    let result = ""
    for(let i=1; i <= amount; i++){
        result +=`${word}_${i}\n`
    }
    return result
}

//console.log(userIds("vierailija", 25))

// while
function userIds2(word, amount){
    let result= ""
    let i=1;
    while(i <= amount){
        result +=`${word}_${i}\n`;
        i++;
    }
    return result
}

//console.log(userIds2("tredu", 25))

// taulukoille (array)

// for return array
function userIds3 (word, amount){
    let result = []
    for(let i=1; i <= amount; i++){
        result.push(`${word}_${i}`)
    }
    return result
}

// foreach
function createPasswords(users){
    let result = []
    users.forEach(user => {
        result.push([user, Math.floor(Math.random()*1000000000000000)])
    });
    return result
}

let users = userIds3("vierailija", 20)

console.log(createPasswords(users))

//console.log(users)