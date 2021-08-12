'use strict';

let money =  50000;
let isNumber = function (n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function (){

    do{
        money = prompt('Ваш ежемесячный зароботок?', '55000');
    } while (!isNumber(money));
    
};
start();

let appData = {
    income:{},
    addIncome:[],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentageDeposit: 0,
    depositAmount: 0,
    mission: 500000,
    period:3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function (){

        if(confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome;
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок?');
            }while(Number(itemIncome));

            let itemCash;
                do{
                    itemCash = prompt('Какая сумма в месяц?');
                }while(!isNumber(itemCash));
            
            appData.income[itemIncome] = itemCash;
            console.log(appData.income);
        } 

        let addExpenses = prompt('Перечислите возможные расходы через запятую').toLowerCase();
        appData.addExpenses = addExpenses.toString().split(',');
        let capitalizeUp = '';
        for(let item of appData.addExpenses){
            let capitaize = item.charAt(0).toUpperCase() + item.slice(1);
            
            capitalizeUp += ', ' + capitaize;
        }
        console.log(capitalizeUp.slice(3));


        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let percent;
        let amount;
        if(appData.deposit){
            

            do{
                percent = prompt('Какой процент депозита?(Указать только число)');
            }while(!isNumber(percent));
            appData.percentageDeposit = percent;
            console.log(appData.percentageDeposit);

            do{
                amount = prompt('Какая сумма заложена?(Указать только число)');
            }while(!isNumber(amount));
            appData.depositAmount = amount;
            console.log(appData.depositAmount);

        }

        for(let i = 0; i < 2; i++){
            let answer;
            let question;

            do{
                answer = prompt('Введите обязательную статью раходов').toLowerCase().trimStart();
            }while(Number(answer) || answer === '' );
            console.log(typeof answer);


            do{
                question = prompt('Во сколько это обойдётся?');
            }while(!isNumber(question));
            
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
