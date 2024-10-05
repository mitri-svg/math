// let number =  -81 ;

// // let modul = Math.abs(number) ;
// // ededi menfi den musbete gecirir

// // let kokAlti = Math.sqrt(modul) ;
// // ededi kokalti ya salir

// // let ustu = Math.pow(2, 5) ; 
// // Yeni ki, 2 ustu 5

// // let random = Math.random();
// // 1 den asagi eded secir

// // let limit = Math.floor(random * 5);
// // 0 den 5 e qeder ededi secir

// // let limit2 = Math.floor(random * 5) + 5 ;
// // 1 den 5 e qeder ededi secir

// console.log(limit2);

let user1 = prompt("User 1 adiviz-i daxil edin:")
let user2 = prompt("User 2 adiviz-i daxil edin:")

let eded1 = +prompt("User 1 reqem yazin:(1 ,5 arasi ededler) :")
let eded2 = +prompt("User 2 reqem yazin:(1 ,5 arasi ededler) :")
let random = Math.floor(Math.random() * 5)+1

if (eded1 == random) {
    document.getElementById("user").innerHTML =  `${user1} ededi tapdi`
} else if(eded2 == random){
    document.getElementById("user").innerHTML =  `${user2} ededi tapdi`
} else {
    document.getElementById("user").innerHTML = "Heckes qalib gelmedi"
}

document.getElementById("eded").innerHTML = `Eded ${random}-dir`