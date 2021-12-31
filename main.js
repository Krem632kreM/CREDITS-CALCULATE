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
  mission: 50000,
  period: 3,
  asking: function () {
    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 'ком,инт');
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
  }

}

appData.asking();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.getExpensesMonth())
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

for (const key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' ' + appData[key])
}