'use strict'

let money,
    isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }
    

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
  start: function () {

    appData.budget = salaryAmount.value;

    appData.getExpenses();

    
    appData.getBudget();
    appData.getExpensesMonth()
    appData.showResult()

  },

  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth
    budgetDayValue.value = appData.budgetDay
    expensesMonthValue.value = appData.expensesMonth

    range.addEventListener('input', function(){
      incomePeriodValue.value=appData.budgetMonth*range.value;
    })
  },
  addExpensesBlock: function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true)
    cloneExpensesItem.getElementsByTagName('input')[0].value=''
    cloneExpensesItem.getElementsByTagName('input')[1].value=''
    //document.querySelector('.expenses-items').getElementsByTagName('input')[0]
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem,buttonPlus[1])
    expensesItems = document.querySelectorAll('.expenses-items')
    if(expensesItems.length === 3) {
      buttonPlus[1].style.display='none'
    }
  },

  addIncomeBlock:  function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true)
    cloneIncomeItem.getElementsByTagName('input')[0].value=''
    cloneIncomeItem.getElementsByTagName('input')[1].value=''
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem,buttonPlus[0])
    incomeItems = document.querySelectorAll('.income-items')
    if(incomeItems.length === 3) {
      buttonPlus[0].style.display='none'
    }

    
  },

  rangeDigit: function(){
    const titlePeriodAmount = document.querySelector('.period-amount')
    titlePeriodAmount.innerHTML = range.value
  },

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
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    let sum = 0;
    for (const key in appData.expenses) {
      sum += +appData.expenses[key]
    }
    appData.expensesMonth = sum;
    return sum;
  },
  getExpenses: function () {
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value
      let cashExpenses = item.querySelector('.expenses-amount').value
      if(itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses
      }
    })
  },
  getIncome: function () {
    incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value
      let cashIncome = item.querySelector('.income-amount').value
      if(itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome
      }
    })
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


const buttonStart = document.getElementById('start')
const buttonPlus = document.getElementsByTagName('button')

const depositCheck = document.querySelector('#deposit-check')
const additionalIncomeItem = document.querySelectorAll('.additional_income-item')

/*
Каждый элемент в правой части программы через класс(не через querySelector), которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">*/
 let budgetMonthValue = document.querySelector('.budget_month-value') , 
 budgetDayValue = document.querySelector('.budget_day-value'),
 expensesMonthValue = document.querySelector('.expenses_month-value'), 
 additionalIncomeValue  = document.querySelector('.additional_income-value'),
 additionalExpensesValue = document.querySelector('.additional_expenses-value'), 
 incomePeriodValue = document.querySelector('.income_period-value'), 
 targetMonthValue = document.querySelector('.target_month-value');

/*Оставшиеся поля через querySelector каждый в отдельную переменную:

поля ввода (input) с левой стороны и не забудьте про range.
*/

const salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelectorAll('.income-title')[1],
incomeAmount = document.querySelector('.income-amount'),
expensesTitle = document.querySelectorAll('.expenses-title'),
expensesAmount = document.querySelector('.expenses-amount'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
targetAmount = document.querySelector('.target-amount'),
range = document.querySelector('[type="range"]');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');

start.disabled = true; 
salaryAmount.addEventListener('input', function(){
  if(salaryAmount.value === '') {start.disabled = true;}
  else {start.disabled = false}
})

start.addEventListener('click', appData.start)

buttonPlus[1].addEventListener('click', appData.addExpensesBlock)
buttonPlus[0].addEventListener('click', appData.addIncomeBlock)
range.addEventListener('input', appData.rangeDigit)

salaryAmount.addEventListener('keyup', function(){
  this.value = this.value.replace(/[^\d]/g, '');
})
incomeAmount.addEventListener('keyup', function(){
  this.value = this.value.replace(/[^\d]/g, '');
})
expensesAmount.addEventListener('keyup', function(){
  this.value = this.value.replace(/[^\d]/g, '');
})
targetAmount.addEventListener('keyup', function(){
  this.value = this.value.replace(/[^\d]/g, '');
})

incomeTitle.addEventListener('keyup', function(){
  this.value = this.value.replace(/[\da-zA-Z]/g, '');
})
additionalIncomeItem[0].addEventListener('keyup', function(){
  this.value = this.value.replace(/[\da-zA-Z]/g, '');
})
additionalIncomeItem[1].addEventListener('keyup', function(){
  this.value = this.value.replace(/[\da-zA-Z]/g, '');
})
expensesTitle[1].addEventListener('keyup', function(){
  this.value = this.value.replace(/[\da-zA-Z]/g, '');
})





