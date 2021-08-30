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
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
let expensesItem = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');

class Class{
    constructor(){
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
    }

    start() {
        
        this.budget = salaryAmount.value;

        this.getExspenses();
        this.getIncome();
        this.getBudgetIncome();
        this.getExpensesMonth();
        this.getInfoDeposit();
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
        
    }

    reset(){

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
        this.startDisabled();
        this.hideDeposit();
        this.showResult();
    }

    addExpensesBlock(){

        let cloneExpensesItem = expensesItem[0].cloneNode(true);
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItem = document.querySelectorAll('.expenses-items');
        
        if(expensesItem.length === 3){
            expensesPlus.style.display = 'none';
        }
    }

    addIncomeBlock(){

        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
    
        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    }

    getExspenses(){
    
        expensesItem.forEach((item) => {
            let titleExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            
            if(titleExpenses !== '' && cashExpenses !== ''){
                this.expenses[titleExpenses] = cashExpenses;
            }
        });
    }

    getIncome(){

        incomeItems.forEach((item) => {
            let incomeTitle = item.querySelector('.income-title').value;
            let incomeAmount = item.querySelector('.income-amount').value;
    
            if(incomeTitle !== '' && incomeAmount !== ''){
                this.income[incomeTitle] = incomeAmount;
            }
        });
    }

    showResult(){

        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        periodSelect.addEventListener('input', class1.stepChange.bind(class1));
        incomePeriodValue.value = this.calcAccumulations();
    }

    getAddExpenses(){

        let addExpenses = additionalExpensesItem.value.split(',');
        
        addExpenses.forEach((item) =>{
            item = item.trim();
            if(item !== ''){
                this.addExpenses.push(item);
            }
        });
    }

    getAddIncome(){

        additionalIncomeItem.forEach((item) =>{
            let addItem = item.value.trim();
            if(addItem !== ''){
                this.addIncome.push(addItem);
            }
        });
    }

    getTargetMonth(){

        if(+targetAmount.value === 0){
            return targetMonthValue.getAttribute('placeholder');
        } else {
            let _period = this.period;
            _period = +targetAmount.value / this.budgetMonth;
            return Math.ceil(_period);
        }
    }

    getYourForecast(){
    
        if(this.period < 0){
            return `Цель не будет достигнута`;
        } else if(this.period > 0) {
            return this.period;
        }
    }

    getStatusIncome(){

        if(this.budgetDay > 1200){
            return'уровень высокий';
        } else if(this.budgetDay < 1200 && this.budgetDay > 600){
            return'уровень средний';
        } else if(this.budgetDay < 600 && this.budgetDay > 0){
            return'уровень маленький';
        } else if(this.budgetDay < 0){
            return'Всё плохо';
        }
        
    }
    getBudget(){
        const percentMonthValue = this.depositAmount * (this.percentageDeposit / 100);
        this.budgetMonth = this.budget - this.expensesMonth + this.incomeMonth + percentMonthValue;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    }
    calcAccumulations(){
        return this.budgetMonth * this.periodAmount;
    }
    getBudgetIncome(){
    
        for(let key in this.income){
            let incomeBudget = +this.income[key];
            this.incomeMonth += incomeBudget;
        }
    }
    getExpensesMonth(){
        
        for(let key in this.expenses){
            let incomeBudget = +this.expenses[key];
            this.expensesMonth += incomeBudget;
        }
    }
    stepChange(){
    
        this.periodAmount = +periodSelect.value;
        periodAmount.textContent = this.periodAmount;
        incomePeriodValue.value = this.calcAccumulations();
    }

    // suitablePercentage(){
    //     while(depositPercent.value < 0 || depositPercent.value > 100){

    //         this.startDisabled();
    //     }
    // }

    changePercent(){
        const selectPercent = this.value;
        
        if(selectPercent === 'other'){
            depositPercent.value = '';
            this.percentageDeposit = depositPercent.value;
            
        } else {
            depositPercent.value = selectPercent;
        }
    }

    getInfoDeposit(){
        if(this.deposit){
            this.percentageDeposit = +depositPercent.value;
            this.depositAmount = +depositAmount.value;
            // console.log(this.depositBank.value);
        }
    }

    hideDeposit(){
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositPercent.style.display = 'none';
        checkbox.checked = false;
    }

    depositCalc(){
        if(checkbox.checked){
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            depositPercent.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change' , this.changePercent);
        } else{
            this.hideDeposit();
            depositPercent.value = '';
            depositAmount.value = '';
            this.deposit = false;
            depositBank.removeEventListener('change' , this.changePercent);
        }
    }

    eventsListeners(){
        start.addEventListener('click', class1.start.bind(class1));
        cancel.addEventListener('click', class1.reset.bind(class1));
        expensesPlus.addEventListener('click', class1.addExpensesBlock);
        incomePlus.addEventListener('click' ,class1.addIncomeBlock);
        periodSelect.addEventListener('input', class1.stepChange.bind(class1));
        checkbox.addEventListener('change', class1.depositCalc.bind(class1));



    }
    startDisabled(){
        start.disabled = true;
        salaryAmount.addEventListener('input', () =>{
            start.disabled = salaryAmount.value === '' ? true : false;
        });
        depositPercent.addEventListener('change' , () =>{
            let percentValue = +depositPercent.value;
            if(percentValue > 0 && percentValue < 100){
                start.disabled = false;
                
            } else{
                
                this.hideDeposit();
                depositAmount.value = '';
                depositPercent.value = '';
                alert('Введите корректное значение');
                start.disabled = true;
            }
        });
    }
}

const class1 = new Class();

class1.startDisabled();
class1.eventsListeners();