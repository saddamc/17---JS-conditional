/* 
MULTI LEVEL CONDITION


*/

const price = 5000;

if(price >= 5000){
    const discount = price * 10 / 100;
   const payAmount = price - discount;
   console.log(payAmount);
}