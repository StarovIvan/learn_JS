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

console.log('showTypeOf: ', showTypeOf(money));
console.log('showTypeOf: ', showTypeOf(income));
console.log('showTypeOf: ', showTypeOf(deposit));

console.log(addExpenses.length);
console.log('период равен ' + period + ' месяцев');
console.log('цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase());

let budgetDay = money / 30;
console.log(budgetDay.toFixed());

money = Number (prompt('Ваш ежемесячный зароботок', 55000));
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.toString().split(','));
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью раходов (1 из 2)');
let expenses2 = prompt('Введите обязательную статью раходов (2 из 2)');

let amount1 = Number (prompt(`Во сколько обойдётся ${expenses1}?`, 6000));
let amount2 = Number (prompt(`Во сколько обойдётся ${expenses2}?`, 14000));

function getAccumulatedMonth(){
    return money - (amount1 + amount2);
}

let accumulatedMonth = getAccumulatedMonth();


period = Math.ceil(mission / accumulatedMonth);
budgetDay = accumulatedMonth / 30;

console.log(`Ваш месячный бюджет составляет: ${accumulatedMonth} рублей`);
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


function getExpensesMonth(){
    return amount1 + amount2;
}


console.log(`Сумма обязательных расходов составляет: ${getExpensesMonth()} рублей`);
console.log(`Ваши накопления: ${accumulatedMonth} рублей`);

function getTargetMonth(){
    return mission / accumulatedMonth;
}

console.log(`Цель будет достигнута через ${Math.ceil(getTargetMonth())} месяцев`);