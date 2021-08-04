'use strict';

let money =  50000;
let income = 'Грузоперевозки';
let addExpenses = 'Общественный Транспорт, Поход В Фаст-фуд, Покупка Игр';
let deposit = true;
let mission = 500000;
let period = 9;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('период равен ' + period + ' месяцев');
console.log('цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(','));

let budgetDay = money / 30;
console.log(budgetDay.toFixed());

money = Number (prompt('Ваш ежемесячный зароботок'));
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.toString().split(','));
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью раходов (1 из 2)');
let expenses2 = prompt('Введите обязательную статью раходов (2 из 2)');

let amount1 = Number (prompt(`Во сколько обойдётся ${expenses1}?`));
let amount2 = Number (prompt(`Во сколько обойдётся ${expenses2}?`));

let budgetMonth = money - (amount1 + amount2);
period = Math.ceil(mission / budgetMonth);
budgetDay = budgetMonth / 30;

console.log(`Ваш месячный бюджет составляет: ${budgetMonth} рублей`);
console.log(`Через ${period} месяцев вы дойдёте до цели`);
console.log(`Ваш дневной бюджет составляет: ${budgetDay} рублей`);

if(budgetDay > 1200){
    console.log('уровень высокий');
} else if(budgetDay < 1200 && budgetDay > 600){
    console.log('уровень средний');
} else if(budgetDay < 600 && budgetDay > 0){
    console.log('уровень маленький');
} else if(budgetDay < 0){
    console.log('Всё плохо');
}