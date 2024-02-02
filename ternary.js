/*  
TERNARY --> Three parts

*    ?    :


condition  ? do something when true : do something when false




*/
// const age = 12;

// simple ternary
// age >=18 ? console.log('vote') : console.log('under age')


let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0;
}

else {
    price = price + 100;
}

// console.log(price)

price = isLeader === true ? 0 : price + 100;

// OPTIONAL: semi-advance ternary

if(isLeader === true){
    if(price > 1000){
        price = price /2;
    }  
}
else {
    price = price + 100;
}

// price > 1000 ? price /2 : 0
// Feel free to ignore this one
// price > 1000 ? price /2 : 0 : price + 1 000;

price > 1000 ? price /2 : 0 : price + 1 000;
