const money =  50000;
let income = 'Грузоперевозки';
const addExpenses = 'Общественный Транспорт, Поход В Фаст-фуд, Покупка Игр';
let deposit = true;
const mission = 500000;
let period = 9;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('период равен ' + period + ' месяцев');
console.log('цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(','));

const budgetDay = 50000 / 30;
console.log(budgetDay.toFixed());