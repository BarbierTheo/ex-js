// // Exercice 1

// // Faire un tableau contenant les 12 mois de l'année : Ex. Janvier, Février, Mars ...
// // Le faire de 2 manières différentes
// // Afficher le tableau dans la console à l'aide de la "syntaxe adéquate" autre que le console.log().

// let calendrier = ["Janvier" , "Février" , "Mars" , "Avril" , "Mai" , "Juin" , "Juillet" , "Août" , "Septembre" , "Octobre" , "Novembre" , "Décembre"]
// console.log(calendrier)

// let month = new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre")
// console.table(month)


// // Exercice 2

// // Faire un tableau contenant les 7 jours de la semaine en anglais : Ex. Monday, Tuesday, Wednesday ...
// // Afficher Friday dans la console à l'aide de la bonne syntaxe.

// let week = [
//     "Monday" ,
//     "Tuesday" ,
//     "Wednesday" ,
//     "Thursday" ,
//     "Friday" ,
//     "Saturday" ,
//     "Sunday"
// ]

// console.log(week[4])


// // Exercice 3

// // Faire un tableau contenant les 7 jours de la semaine : Ex. Lundi, Mardi, Mercredi ...
// // Afficher le 6ème jour de la semaine dans la console à l'aide de la bonne syntaxe.

// let week = [
//     "Lundi" ,
//     "Mardi" ,
//     "Mercredi" ,
//     "Jeudi" ,
//     "Vendredi" ,
//     "Samedi" ,
//     "Dimanche"
// ]

// console.log(week[5])


// // Exercice 4

// // Faire un tableau contenant les 12 mois de l'année : Ex. Janvier, Février, Mars ...
// // Afficher dans la console : le chiffre et le nom du mois ... et ceci, pour tous les mois. Ex.

// //     1 - Janvier
// //     2 - Février
//     ...

// let calendrier = ["Mois" , "Janvier" , "Février" , "Mars" , "Avril" , "Mai" , "Juin" , "Juillet" , "Août" , "Septembre" , "Octobre" , "Novembre" , "Décembre"]

// console.table(calendrier)

// Exercice 5

// Faire 2 tableaux :
//     (12 Mois) : Janvier, Février, Mars ...
//     (7 Jours) : Lundi, Mardi, Mercredi ...

// Faire de nouveau 2 tableaux :
//     (12 Mois) : January, Febuary, March ...
//     (7 jours) : Monday, Tuesday, Wednesday ...

// Vous devez stocker les 4 tableaux dans un seul tableau, cependant : Vous devez stocker les 2 tableaux français ensemble et les 2 autres tableaux anglais ensemble également.

// Dans la console, afficher successivement :

//     Novembre
//     Friday
//     Tous les mois en Anglais séparés par une virgule, ex . "January, February, March, ... "
//     Tous les jours en Francais séparés par une virgule ex. "Lundi, Mardi, Mercredi, ... "

// TIPS : exo du Kebab Case (k-e-b-a-b)

let weekfr = ["Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi" , "Samedi" , "Dimanche"]
let calendarfr = ["Janvier" , "Février" , "Mars" , "Avril" , "Mai" , "Juin" , "Juillet" , "Août" , "Septembre" , "Octobre" , "Novembre" , "Décembre"]
let fr = [weekfr , calendarfr]

console.table(fr)

let weeken = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
let calendaren = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
let en = [weeken , calendaren]

console.table(en)

console.log(calendarfr[10])
console.log(weeken[4])

let months = ""
for (let i = 0; i <= 11; i++) {
    months = months + calendaren[i]
    if (i < 11) {
        months = months + ", "
    }
}
console.log(months)


let days = ""
for (let i = 0; i <= 6; i++) {
    days = days + weekfr[i]
    if (i < 6) {
        days = days + ", "
    }
}
console.log(days)



// // Exercice 6

// // Créer un tableau qui contiendra des noms de princesses Disney. Nous allons commencer par y ajouter une première princesse : Cendrillon.

// // Afficher le tableau créé dans la console.

// // Rajouter dans le tableau, les princesses suivantes :

// //     Mulan
// //     Peach
// //     Raiponce
// //     Belle
// //     Vaiana
// //     Zelda
// //     Jasmine

// // Afficher le tableau avec les nouvelles princesses dans la console.

// // Oopsy, nous avons ajouté 2 princesses d'un univers différents : Peach et Zelda. Vous allez donc devoir les supprimer du tableau en JS.

// // Afficher le tableau corrigé (Sans les 2 princesses) dans la console.

// // Nous allons faire un peu de tri dans ses noms : Trier les données du tableau dans l'ordre alphabétique.

// // 1 - Afficher le tableau dans la console une fois trié.
// // 2 - Afficher dans la console le nombre total de princesse à l'aide d'une phrase : ex. Il y a 17 princesses dans le tableau.


// let princess = ["Cendrillon"]
// console.table(princess)

// princess.push("Mulan", "Peach", "Raiponce", "Belle", "Vaiana", "Zelda", "Jasmine")
// console.table(princess)

// princess.splice(2, 1)
// princess.splice(-2, 1)
// console.table(princess)

// princess.sort()
// console.table(princess)

// console.log("Il y a " + princess.length + " princesses dans le tableau")