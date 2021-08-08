'use strict';

let money =  50000;
let isNumber = function (n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function (){

    do{
        money = prompt('Ваш ежемесячный зароботок?');
    } while (!isNumber(money));
    
};
start();

let appData = {
    income:{},
    addIncome:[],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period:3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function (){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').toLowerCase();
        appData.addExpenses = addExpenses.toString().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for(let i = 0; i < 2; i++){
            let answer = prompt('Введите обязательную статью раходов').toLowerCase();
            let question = prompt('Во сколько это обойдётся?');
            
            appData.expenses[answer] = question;
            appData.expensesMonth += +question;
        }
        
    },
    
    getTargetMonth: function (){

        appData.period = Math.ceil(appData.mission / appData.budgetMonth);
    
        if(appData.period < 0){
            return `Цель не будет достигнута`;
        } else if(appData.period > 0) {
            return `Цель будет достигнута через ${Math.ceil(appData.period)} месяцев`;
        }
    },
    getStatusIncome: function (){
        if(appData.budgetDay > 1200){
            return'уровень высокий';
        } else if(appData.budgetDay < 1200 && appData.budgetDay > 600){
            return'уровень средний';
        } else if(appData.budgetDay < 600 && appData.budgetDay > 0){
            return'уровень маленький';
        } else if(appData.budgetDay < 0){
            return'Всё плохо';
        }
    },
    
    getBudget: function (){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    }

};
let asking = appData.asking();
let getBudget = appData.getBudget();
let targetMonth = appData.getTargetMonth();

console.log(`${appData.budgetDay} рублей, ${appData.period} месяцев, ${appData.getStatusIncome()}`);
for(let key in appData){
    console.log(`Наша программа в себя включает
    ${key} = ${appData[key]}`);
}