// primitifs
const phrase = "laissez moi refléchir"
const number = 15
const boolean = true

// array
const randomArray = [
    "hello",
    "hello 2 ",
]

//object
const valentin = { 
    "name": "valentin",
    "birthdate": "05/02/2001",
}

//fonction
function estilmajeur(param1) {
    if (param1.age > 18) {
        return "Il est bien majeur !"
    } else {
        return " il ne l'est pas ... "
    }
}
function donneLanneeEnCours() {
    return new Date().getFullYear()
}

function donneLanneeApartirDuneDateDeNaissance(date) {
    return date.split("/")[2]
}


const birthYearOfValentin = donneLanneeApartirDuneDateDeNaissance(valentin.birthdate)
const ageOfValentin = donneLanneeEnCours() - birthYearOfValentin

console.log(ageOfValentin);
console.log(estilmajeur({age: ageOfValentin}));