'use strict';

const start = document.getElementById('start');
const cancel = document.getElementById('cancel');
const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];
const checkbox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeAmount = document.querySelector('.income-amount');
const additionalIncomeItemLeft = document.querySelectorAll('.additional_income-item')[0];
const additionalIncomeItemRight = document.querySelectorAll('.additional_income-item')[1];
const expensesTitle = document.querySelectorAll('.expenses-title')[1];
let expensesItem = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let inputText = document.querySelectorAll('input[type="text"]');


let isNumber = function (n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

function startShow(){
    start.style.display = 'none';
    salaryAmount.oninput = function(){
        
        if(salaryAmount.value.length !== 0){
            start.style.display = 'block';
        } else {
            start.style.display = 'none';
        }
        return;
    };
}
startShow();

const AppData = function(){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income ={};
    this.incomeMonth = 0;
    this.addIncome =[];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentageDeposit = 0;
    this.depositAmount = 0;
    this.period = 0;
    this.periodAmount = 0;
};

AppData.prototype.start = function (){
        
    // let asking = appData.asking();
    // let getBudget = appData.getBudget();
    // let targetMonth = appData.getTargetMonth();
    
    if(salaryAmount.value === ''){
        alert('Ошибка, поле "Месячный доход" должно быть заполненно');
        return;
    }

    this.budget = salaryAmount.value;

    this.getExspenses();
    this.getIncome();
    this.getBudgetIncome();
    this.getExpensesMonth();
    this.getBudget();
    this.stepChange();
    this.getAddExpenses();
    this.getAddIncome();
    this.showResult();
    
    inputText.forEach(function(elem){
        elem.disabled = true;
        
    });
    start.style.display = 'none';
    cancel.style.display = 'block';
    
};

AppData.prototype.cancel = function(){

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income ={};
    this.incomeMonth = 0;
    this.addIncome =[];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpense = [];
    this.deposit = false;
    this.percentageDeposit = 0;
    this.depositAmount = 0;
    this.period = 1;
    this.periodAmount = 1;
    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;
    inputText.forEach(function(elem){
        elem.disabled = false;
        elem.value = '';
    });

    periodAmount.textContent = periodSelect.value;
    cancel.style.display = 'none';
    start.style.display = 'block';
    startShow();

};



AppData.prototype.addExpensesBlock = function(){
    let cloneExpensesItem = expensesItem[0].cloneNode(true);
    expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItem = document.querySelectorAll('.expenses-items');
    
    if(expensesItem.length === 3){
        expensesPlus.style.display = 'none';
    }
};

AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if(incomeItems.length === 3){
        incomePlus.style.display = 'none';
    }
    console.log(cloneIncomeItem);
};

AppData.prototype.getExspenses = function(){
    expensesItem.forEach(function(item){
        let titleExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;

        if(titleExpenses !== '' && cashExpenses !== ''){
            appData.expenses[titleExpenses] = cashExpenses;
        }
        // console.log(appData.expenses[titleExpenses]);
    });
};

AppData.prototype.getIncome = function (){
    incomeItems.forEach(function(item){
        let incomeTitle = item.querySelector('.income-title').value;
        let incomeAmount = item.querySelector('.income-amount').value;

        if(incomeTitle !== '' && incomeAmount !== ''){
            appData.income[incomeTitle] = incomeAmount;
        }
    });
};

AppData.prototype.showResult = function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    periodSelect.addEventListener('input', appData.stepChange.bind(appData));
    incomePeriodValue.value = appData.calcAccumulations();
};

AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            appData.addExpenses.push(item);
        }
    });
};

AppData.prototype.getAddIncome = function(){
    additionalIncomeItem.forEach(function(item){
        let addItem = item.value.trim();
        if(addItem !== ''){
            appData.addIncome.push(addItem);
        }
    });
};

AppData.prototype.getTargetMonth = function (){
    
    appData.period = +targetAmount.value / appData.budgetMonth;

    if(appData.period < 0){
        return `Цель не будет достигнута`;
    } else if(appData.period > 0) {
        return appData.period;
    }
};

AppData.prototype.getStatusIncome = function (){
    if(appData.budgetDay > 1200){
        return'уровень высокий';
    } else if(appData.budgetDay < 1200 && appData.budgetDay > 600){
        return'уровень средний';
    } else if(appData.budgetDay < 600 && appData.budgetDay > 0){
        return'уровень маленький';
    } else if(appData.budgetDay < 0){
        return'Всё плохо';
    }
};

AppData.prototype.getBudget = function (){
    this.budgetMonth =  this.budget - this.expensesMonth + this.incomeMonth;
    this.budgetDay = Math.ceil (this.budgetMonth / 30);
};
AppData.prototype.calcAccumulations = function(){
    return this.budgetMonth * this.periodAmount;
};
AppData.prototype.getBudgetIncome = function(){
    for(let key in appData.income){
        let incomeBudget = +(appData.income[key]);
        appData.incomeMonth = incomeBudget;
    }
};
AppData.prototype.getExpensesMonth = function(){
    for(let key in this.expenses){
        let incomeBudget = +this.expenses[key];
        this.expensesMonth += incomeBudget;
    }
};
AppData.prototype.stepChange = function (){
        this.periodAmount = +periodSelect.value;
        periodAmount.textContent = this.periodAmount;
        incomePeriodValue.value = appData.calcAccumulations();
};

const appData = new AppData();
console.log(appData);

    // функця отвечает за показ кнопки расчитать
// function startShow(){
//     start.style.display = 'none';
//     salaryAmount.oninput = function(){
        
//         if(salaryAmount.value.length !== 0){
//             start.style.display = 'block';
//         } else {
//             start.style.display = 'none';
//         }
//         return;
//     };
// }
// startShow();



start.addEventListener('click', appData.start.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click' ,appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.stepChange);
cancel.addEventListener('click', appData.cancel.bind(appData));
// console.log(`${appData.budgetDay} рублей, ${appData.period} месяцев, ${appData.getStatusIncome()}`);
// for(let key in appData){
//     console.log(`Наша программа в себя включает
//     ${key} = ${appData[key]}`);
// }