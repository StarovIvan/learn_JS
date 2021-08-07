'use strict';

let money =  50000;
let income = 'Грузоперевозки';
let addExpenses = 'Общественный Транспорт, Поход В Фаст-фуд, Покупка Игр';
let deposit = true;
let mission = 500000;
let period = 9;


const showTypeOf = function  (a){
    return typeof a;
};

let isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

console.log('showTypeOf: ', showTypeOf(money));
console.log('showTypeOf: ', showTypeOf(income));
console.log('showTypeOf: ', showTypeOf(deposit));

console.log(addExpenses.length);
console.log('период равен ' + period + ' месяцев');
console.log('цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase());

let budgetDay = money / 30;
console.log(budgetDay.toFixed());

let start = function (){

    do{
        money = prompt('Ваш ежемесячный зароботок?');
    } while (!isNumber(money));
    
};
start();
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').toLowerCase();
console.log(addExpenses.toString().split(','));
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses = [];
let amount;

let getExpensesMonth = function (){

    let sum = 0;

    for(let i = 0; i < 2; i++){
        expenses[i] = prompt('Введите обязательную статью раходов').toLowerCase();

        do{
            amount = prompt('Во сколько это обойдётся?');
        } while (!isNumber(amount));
        sum += +amount;
    }
    console.log(sum);
    return sum;
};
let expensesMonth = money - getExpensesMonth();



period = Math.ceil(mission / expensesMonth);
budgetDay = expensesMonth / 30;

console.log(`Ваш месячный бюджет составляет: ${expensesMonth} рублей`);
console.log(`Через ${period} месяцев вы дойдёте до цели`);
console.log(`Ваш дневной бюджет составляет: ${Math.ceil(budgetDay)} рублей`);

function getStatusIncome(){
    if(budgetDay > 1200){
        return'уровень высокий';
    } else if(budgetDay < 1200 && budgetDay > 600){
        return'уровень средний';
    } else if(budgetDay < 600 && budgetDay > 0){
        return'уровень маленький';
    } else if(budgetDay < 0){
        return'Всё плохо';
    }
}
console.log(getStatusIncome());

console.log(`Ваши накопления: ${expensesMonth} рублей`);

let getTargetMonth = function (){

    let purpose = mission / expensesMonth;

    if(purpose < 0){
        return `Цель не будет достигнута`;
    } else if(purpose > 0) {
        return `Цель будет достигнута через ${Math.ceil(purpose)} месяцев`;
    }
};
console.log(`${getTargetMonth()}`);