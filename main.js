'use strict'

let money,
    start = function () {
      do {
        money = prompt("Ваш месячный доход?", 15000)
      } while (!isNumber(money));
    },
    isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }
    

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  asking: function () {
    if(confirm("Есть ли у Вас дополнительный заработок?")) {
      let itemIncome
      do {
      itemIncome = prompt("Какой у вас есть дополнительный заработок?", "Таксую")
      } while(isNumber(itemIncome))
      let cashIncome
      do {
      cashIncome = prompt("Сколько в месяц зарабатываете на этом?", 10000)
      }while (!isNumber(cashIncome));
      appData.income[itemIncome]=cashIncome
    }
    let addExpenses
    do { addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 'ком,инт');
    } while (isNumber(addExpenses))
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    let j;
    let k;
    for (let i = 0; i < 2; i++) {

      k = prompt("Введите обязательную статью расходов?", 'ком')
      do {
        j = +prompt("Во сколько это обойдется?", 6000)
      } while (!isNumber(j));
      appData.expenses[k] = j
    }
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    let sum = 0;
    for (const key in appData.expenses) {
      sum += +appData.expenses[key]
    }
    return sum;
  },
  getBudget: function () {
    appData.budgetMonth = (appData.budget - appData.getExpensesMonth())
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function () {
    if (Math.ceil(appData.mission / appData.budgetMonth) <= 0) {
      return "Цель не будет достигнута"
    } else {
      return "Цель будет достигнута за " + Math.ceil(appData.mission / appData.budgetMonth) + " месяца(-ев)"
    }
  },

  getStatusIncome: function () {
    if (this.budgetDay >= 1200) {
      return ("У вас высокий уровень дохода")
    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
      return ('У вас средний уровень дохода')
    } else if (this.budgetDay >= 0 && this.budgetDay < 600) {
      return ("К сожалению у вас уровень дохода ниже среднего")
    } else {
      return ("Что то пошло не так")
    }
  },
  getInfoDeposit: function(){
    if(appData.deposit){
      do {
      appData.percentDeposit=prompt('какой годовой процент?', 10)
      } while(!isNumber(appData.percentDeposit))
      do {
      appData.moneyDeposit=prompt('какая сумма заложена?', 10000)
    } while(!isNumber(appData.moneyDeposit))
    }
  },
  calcSevedMoney: function(){
    return appData.budgetMonth*appData.period
  }

}

/*appData.asking();
appData.getBudget();
appData.getInfoDeposit();*/

console.log('Расходы за месяц: ' + appData.getExpensesMonth())
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

const buttonStart = document.getElementById('start')
const buttonPlusAdditionalIncome = document.getElementsByTagName('button')[0]
const buttonPlusObligatoryExpenses = document.getElementsByTagName('button')[1]
const depositCheck = document.querySelector('#deposit-check')
const additionalIncomeItem_0 = document.querySelectorAll('.additional_income-item')[0]
const additionalIncomeItem_1 = document.querySelectorAll('.additional_income-item')[1]
/*
Каждый элемент в правой части программы через класс(не через querySelector), которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">*/
 const budgetMonthValue = document.getElementsByClassName('budget_month-value') , 
 budgetDayValue = document.getElementsByClassName(' budget_day-value'),
 expensesMonthValue = document.getElementsByClassName('expenses_month-value'), 
 additionalIncomeValue  = document.getElementsByClassName('additional_income-value'),
 additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'), 
 incomePeriodValue = document.getElementsByClassName('income_period-value'), 
 targetMonthValue = document.getElementsByClassName('target_month-value');

/*Оставшиеся поля через querySelector каждый в отдельную переменную:

поля ввода (input) с левой стороны и не забудьте про range.
*/
console.log(budgetDayValue)
const salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelector('.income-title'),
incomeAmount = document.querySelector('.income-amount'),
expensesTitle = document.querySelector('.expenses-title'),
expensesAmount = document.querySelector('.expenses-amount'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
targetAmount = document.querySelector('.target-amount'),
Range = document.querySelector('[type="range"]');

console.log(Range)
