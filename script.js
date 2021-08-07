'use strict';

let arr = ['549', '23', '46952', '45743', '8765', '15234' , '25963'];
let massiv = [];
for(let i = 0; i < arr.length; i++){
    let number1 = arr[i].charAt(0);
    let number4 = arr[i].charAt(0);
    if(number1 === '2' || number4 === '4'){
        console.log(arr[i]);
    }
}

for(let i = 1; i <= 10; i++){
    let dividers = `Делители числа ${i} является число 1 и ${i}`;
    console.log(dividers);
}