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

let isNumber = function (n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

const AppData = function(){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
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
  
    this.budget = salaryAmount.value;

    this.getExspenses();
    this.getIncome();
    this.getBudgetIncome();
    this.getExpensesMonth();
    this.getBudget();
    this.getStatusIncome();
    this.stepChange();
    this.getAddExpenses();
    this.getAddIncome();
    this.showResult();

    cancel.style.display = 'block';
    start.style.display = 'none';

    expensesItem.forEach(function(elem){
        elem.disabled = true;
    });

    document.querySelectorAll('input[type="text"]').forEach(function(item){
        item.disabled = true;
    });
};

AppData.prototype.reset = function(){

    document.querySelectorAll('input[type="text').forEach(function(item){
        item.disabled = false;
        item.value = '';
    });
    
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentageDeposit = 0;
    this.depositAmount = 0;
    this.period = 1;
    this.periodAmount = 1;

    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;

    cancel.style.display = 'none';
    start.style.display = 'block';

    expensesItem.forEach(function(item, index){
        if(index !== 0){
            item.remove() === true;
            expensesPlus.style.display = 'block';
            
        }
    });

    incomeItems.forEach(function(item, index){
        if(index !== 0){
            item.remove() === true;
            incomePlus.style.display = 'block';
            
        }
    });
    appData.startDisabled();
    checkbox.checked = false;
    this.showResult();
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
};


AppData.prototype.getExspenses = function(){

    let _this = this;
    expensesItem.forEach(function(item){
        let titleExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        
        if(titleExpenses !== '' && cashExpenses !== ''){
            _this.expenses[titleExpenses] = cashExpenses;
        }
    });
};

AppData.prototype.getIncome = function (){

    let _this = this;
    incomeItems.forEach(function(item){
        let incomeTitle = item.querySelector('.income-title').value;
        let incomeAmount = item.querySelector('.income-amount').value;

        if(incomeTitle !== '' && incomeAmount !== ''){
            _this.income[incomeTitle] = incomeAmount;
        }
    });
};

AppData.prototype.getTargetMonth = function(){

    if(+targetAmount.value === 0){
        return targetMonthValue.getAttribute("placeholder");
    } else {
        let _period = this.period;
        _period = +targetAmount.value / this.budgetMonth;
        return Math.ceil(_period);
    }
    
    
};

AppData.prototype.showResult = function(){

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    console.log(this.getTargetMonth());
    periodSelect.addEventListener('input', appData.stepChange.bind(appData));
    incomePeriodValue.value = this.calcAccumulations();
};

AppData.prototype.getAddExpenses = function(){

    let addExpenses = additionalExpensesItem.value.split(',');
    let _this = this;
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }
    });
};

AppData.prototype.getAddIncome = function(){

    let _this = this;
    additionalIncomeItem.forEach(function(item){
        let addItem = item.value.trim();
        if(addItem !== ''){
            _this.addIncome.push(addItem);
        }
    });
};

AppData.prototype.getYourForecast = function (){

    
    // if(+targetAmount.value === 0){
    //     targetMonthValue.value = 'Срок';
    // } else {
        
    // }
    // debugger
    
    // if(this.period === 0){
    //     this.period = 'Срок';
    // }else{
    //     this.period = +targetAmount.value / this.budgetMonth;
    // }
    // console.log(this.period);

    if(this.period < 0){
        return `Цель не будет достигнута`;
    } else if(this.period > 0) {
        return this.period;
    }
};


AppData.prototype.getStatusIncome = function (){

    if(this.budgetDay > 1200){
        return'уровень высокий';
    } else if(this.budgetDay < 1200 && this.budgetDay > 600){
        return'уровень средний';
    } else if(this.budgetDay < 600 && this.budgetDay > 0){
        return'уровень маленький';
    } else if(this.budgetDay < 0){
        return'Всё плохо';
    }
    
};


AppData.prototype.getBudget = function (){
    this.budgetMonth = this.budget - this.expensesMonth + this.incomeMonth;
    this.budgetDay = Math.ceil(this.budgetMonth / 30);
};


AppData.prototype.calcAccumulations = function(){
    return this.budgetMonth * this.periodAmount;
};


AppData.prototype.getBudgetIncome = function(){

    for(let key in this.income){
        let incomeBudget = +this.income[key];
        this.incomeMonth += incomeBudget;
    }
};


AppData.prototype.getExpensesMonth = function(){
    
    for(let key in this.expenses){
        let incomeBudget = +this.expenses[key];
        this.expensesMonth += incomeBudget;
    }
};

// расчитывает сумму за период
AppData.prototype.stepChange = function (){

    this.periodAmount = +periodSelect.value;
    periodAmount.textContent = this.periodAmount;
    incomePeriodValue.value = this.calcAccumulations();
};


// обработчики событий
AppData.prototype.eventsListeners = function() {
    start.addEventListener('click', appData.start.bind(appData));
    cancel.addEventListener('click', appData.reset.bind(appData));
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click' ,appData.addIncomeBlock);
    periodSelect.addEventListener('input', appData.stepChange.bind(appData));
};

// блокировка кнопки
AppData.prototype.startDisabled = function(){
    start.disabled = true;
    salaryAmount.addEventListener('input', function(){
        start.disabled = salaryAmount.value === '' ? true : false;
    });
};


const appData = new AppData(); 

appData.startDisabled();
appData.eventsListeners();
