// let firstname = "Hervé"
// let city = "LH"
// let age = 28


// console.log("firstname : " + typeof firstname);
// console.log("city : " + typeof city);
// console.log("age : " + typeof age)

// alert(`Je m'appelle ${firstname}, j'ai ${age} ans et j'habite à ${city}`)

// EX 4

// let lastname = prompt("Votre nom");
// let firstname = prompt("Votre prénom")
// let age = prompt('Votre âge')
// let mail = prompt('Votre mail')

// age = parseInt(age)


// alert("Nom : " + lastname + "\nPrénom : " + firstname + "\nAge : " + age + " ans" + "\nAdresse Mail : " + mail)

// EX5

// let number1 = prompt('Entrez un premier nombre')
// let number2 = prompt('Entrez un deuxième nombre')
// let result = 0

// number1 = parseInt(number1)
// number2 = parseInt(number2)
// result = number1 + number2

// alert("Le résultat de l'addition est : " + number1 + " + " + number2 + " = " + result)

// PART 2 - Ex 1

// let age = prompt('Entrez votre âge')

// age = parseInt(age);

// if (age >= 18){
//     alert("L'utilisateur est majeur !")
// } else {
//     alert("L'utilisateur est mineur !")
// }

// Ex 2

// let userNumber = prompt('Entrez un entier');

// userNumber = parseInt(userNumber);
// if (userNumber%2==0){
//     alert("PAIR !")
// } else {
//     alert("IMPAIR !")
// }

// // Ex 3

// let password = "dangereuxcrimineldu76"
// let testpassword = prompt("Tapez votre mot de passe")

// if (testpassword == password){
//     alert("Hello Mr Anderson")
// } else {
//     alert("Mauvais mot de passe")
// }

// EX 4 

// let gender = prompt("Homme ou femme ?")
// let age = prompt("Age ?")

// age = parseInt(age)

// if(age<=18){
//     if(gender=="homme"){
//         alert("L'utilisateur est de type masculin et mineur")
//     } else {
//         alert("L'utilisatrice est de type féminin et mineure")
//     }
// }

// if(age>=18){
//     if(gender=="homme"){
//         alert("L'utilisateur est de type masculin et majeur")
//     } else {
//         alert("L'utilisatrice est de type féminin et majeure")
//     }
// }

// EX 5

// let moyenne = prompt("Tapez votre moyenne sur 20")

// while (moyenne > 20 || moyenne < 0) {
//     moyenne = prompt("Tapez votre moyenne sur 20")
//     moyenne = parseInt(moyenne)
// }
// moyenne = parseInt(moyenne)

// if (moyenne == 0) {
//     alert("Un rendez-vous sera programmé en raison de la moyenne")
// }
// if (moyenne >= 1 && moyenne <= 5) {
//     alert("Trimestre insuffisant")
// }
// if (moyenne >= 6 && moyenne <= 10) {
//     alert("Trimestre moyen")
// }
// if (moyenne >= 11 && moyenne <= 13) {
//     alert("Bon trimestre")
// }
// if (moyenne >= 14 && moyenne <= 18) {
//     alert("Excellent trimestre")
// }
// if (moyenne > 18) {
//     alert("Félicitations")
// }

// Ex 6

let month = prompt("Entrez un numéro de mois entre 1 et 12")

month = parseInt(month)
let monthWrite = " "

switch (month) {
    case 1:
        monthWrite = "Janvier"
        break;
    case 2:
        monthWrite = "Février"
        break;
    case 3:
        monthWrite = "Mars"
        break;
    case 4:
        monthWrite = "Avril"
        break;
    case 5:
        monthWrite = "Mai"
        break;
    case 6:
        monthWrite = "Juin"
        break;
    case 7:
        monthWrite = "Juillet"
        break;
    case 8:
        monthWrite = "Août"
        break;
    case 9:
        monthWrite = "Septembre"
        break;
    case 10:
        monthWrite = "Octobre"
        break;
    case 11:
        monthWrite = "Novembre"
        break;
    case 12:
        monthWrite = "Décembre"
        break;
    default:
        console.log("Le chiffre n'est pas valide, mettre un mois entre 1 et 12")
        monthWrite = "RIEN"
        break;
}
console.log("Le chiffre " + month + " correspond à " + monthWrite)

// ex 7 

// let userNumber = prompt("Entrez un nombre")
// userNumber = parseInt(userNumber)

// console.log(userNumber%2===0 ? "PAIR" : "IMPAIR")

// ex 8

// if (window.confirm("En cliquant sur OK, je confirme que je rentre sur ce site en 'mon âme et conscience")){
//     console.log("L'utilisateur a validé")
// } else {
//     console.log("L'utilisateur n'a pas validé")
// }