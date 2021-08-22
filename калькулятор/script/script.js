let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income:{},
    incomeMonth: 0,
    addIncome:[],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentageDeposit: 0,
    depositAmount: 0,
    period: 0,
    periodAmount: 0,
    
    start: function (){
        
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
        
        let textDisable = document.querySelectorAll('input[type="text"]')
        textDisable.disab
    },

    cancel: function(){

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
        this.period = 0;
        this.periodAmount = 0;

    },



    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItem[0].cloneNode(true);
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItem = document.querySelectorAll('.expenses-items');
        
        if(expensesItem.length === 3){
            expensesPlus.style.display = 'none';
        }
    },

    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
        console.log(cloneIncomeItem);
    },

    getExspenses: function(){
        expensesItem.forEach(function(item){
            let titleExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(titleExpenses !== '' && cashExpenses !== ''){
                appData.expenses[titleExpenses] = cashExpenses;
            }
            // console.log(appData.expenses[titleExpenses]);
        });
    },

    getIncome: function (){
        incomeItems.forEach(function(item){
            let incomeTitle = item.querySelector('.income-title').value;
            let incomeAmount = item.querySelector('.income-amount').value;

            if(incomeTitle !== '' && incomeAmount !== ''){
                appData.income[incomeTitle] = incomeAmount;
            }
        });
    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        periodSelect.addEventListener('input', appData.stepChange);
        incomePeriodValue.value = appData.calcAccumulations();
    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let addItem = item.value.trim();
            if(addItem !== ''){
                appData.addIncome.push(addItem);
            }
        });
    },

    getTargetMonth: function (){
        
        appData.period = +targetAmount.value / appData.budgetMonth;
    
        if(appData.period < 0){
            return `Цель не будет достигнута`;
        } else if(appData.period > 0) {
            return appData.period;
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
        appData.budgetMonth = appData.budget - appData.expensesMonth + appData.incomeMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    },
    calcAccumulations: function(){
        return appData.budgetMonth * appData.periodAmount;
    },
    getBudgetIncome: function(){
        for(let key in appData.income){
            let incomeBudget = +(appData.income[key]);
            appData.incomeMonth = incomeBudget;
        }
    },
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            let incomeBudget = +appData.expenses[key];
            appData.expensesMonth += incomeBudget;
        }
    },