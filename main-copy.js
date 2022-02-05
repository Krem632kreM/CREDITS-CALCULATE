'use strict'
const isNumber = n => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

const buttonStart = document.getElementById('start'),
  buttonCancel = document.getElementById('cancel'),
  buttonPlus = document.getElementsByTagName('button'),

  depositCheck = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

  budgetMonthValue = document.querySelector('.budget_month-value'),
  budgetDayValue = document.querySelector('.budget_day-value'),
  expensesMonthValue = document.querySelector('.expenses_month-value'),
  additionalIncomeValue = document.querySelector('.additional_income-value'),
  additionalExpensesValue = document.querySelector('.additional_expenses-value'),
  incomePeriodValue = document.querySelector('.income_period-value'),
  targetMonthValue = document.querySelector('.target_month-value'),

  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelectorAll('.income-title')[1],
  incomeAmount = document.querySelector('.income-amount'),
  expensesTitle = document.querySelectorAll('.expenses-title'),
  expensesAmount = document.querySelector('.expenses-amount'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  range = document.querySelector('[type="range"]'),

  expensesItems = document.querySelectorAll('.expenses-items'),
  incomeItems = document.querySelectorAll('.income-items');

class AppData {
  constructor() {
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.mission = 50000;
    this.period = 3;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
  }
  check() {
    if (salaryAmount.value === '') {
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false
    }
  }

  start() {
    this.budget = salaryAmount.value;
    this.getExpenses();
    this.getBudget();
    this.getExpensesMonth()
    this.showResult()
  }
  reset() {
    this.income = {},
      this.addIncome = [],
      this.expenses = {},
      this.addExpenses = [],
      this.deposit = false,
      this.percentDeposit = 0,
      this.moneyDeposit = 0,
      this.mission = 50000,
      this.period = 3,
      this.budget = 0,
      this.budgetDay = 0,
      this.budgetMonth = 0,
      this.expensesMonth = 0
  }
  showResult() {
    budgetMonthValue.value = this.budgetMonth
    budgetDayValue.value = this.budgetDay
    expensesMonthValue.value = this.expensesMonth
    incomePeriodValue.value = this.budgetMonth * range.value;

    range.addEventListener('input', () => {
      incomePeriodValue.value = this.budgetMonth * range.value;
    })
  }
  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true)
    cloneExpensesItem.getElementsByTagName('input')[0].value = ''
    cloneExpensesItem.getElementsByTagName('input')[1].value = ''
    //document.querySelector('.expenses-items').getElementsByTagName('input')[0]
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus[1])
    expensesItems = document.querySelectorAll('.expenses-items')
    if (expensesItems.length === 3) {
      buttonPlus[1].style.display = 'none'
    }
  }
  addIncomeBlock() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true)
    cloneIncomeItem.getElementsByTagName('input')[0].value = ''
    cloneIncomeItem.getElementsByTagName('input')[1].value = ''
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonPlus[0])
    incomeItems = document.querySelectorAll('.income-items')
    if (incomeItems.length === 3) {
      buttonPlus[0].style.display = 'none'
    }


  }
  rangeDigit() {
    const titlePeriodAmount = document.querySelector('.period-amount')
    titlePeriodAmount.innerHTML = range.value
  }
  getExpensesMonth() {
    let sum = 0;
    for (const key in this.expenses) {
      sum += +this.expenses[key]
    }
    this.expensesMonth = sum;
    return sum;
  }
  getExpenses() {
    const _this = this;
    expensesItems.forEach(function (item) {
      const itemExpenses = item.querySelector('.expenses-title').value
      const cashExpenses = item.querySelector('.expenses-amount').value
      if (itemExpenses !== '' && cashExpenses !== '') {
        _this.expenses[itemExpenses] = cashExpenses
      }
    })
  }
  getIncome() {
    incomeItems.forEach(function (item) {
      const itemIncome = item.querySelector('.income-title').value
      const cashIncome = item.querySelector('.income-amount').value
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = cashIncome
      }
    })
  }
  getBudget() {
    this.budgetMonth = (this.budget - this.getExpensesMonth())
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }
  getTargetMonth() {
    if (Math.ceil(this.mission / this.budgetMonth) <= 0) {
      return "Цель не будет достигнута"
    } else {
      return "Цель будет достигнута за " + Math.ceil(this.mission / this.budgetMonth) + " месяца(-ев)"
    }
  }
  getStatusIncome() {
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
  getInfoDeposit() {
    const _this = this;
    if (this.deposit) {
      do {
        _this.percentDeposit = prompt('какой годовой процент?', 10)
      } while (!isNumber(this.percentDeposit))
      do {
        this.moneyDeposit = prompt('какая сумма заложена?', 10000)
      } while (!isNumber(this.moneyDeposit))
    }
  }
  calcSevedMoney() {
    return this.budgetMonth * this.period
  }

  eventListners() {
    salaryAmount.addEventListener('input', function () {
      if (salaryAmount.value === '') {
        buttonStart.disabled = true;
      } else {
        buttonStart.disabled = false
      }
    })
    buttonStart.addEventListener('click', () => this.start())
    buttonStart.addEventListener('click', function () {
      for (let i = 0; i < document.querySelectorAll('input[type="text"]').length; i++) {
        document.querySelectorAll('input[type="text"]')[i].disabled = true
      }
      buttonStart.style.display = 'none'
      buttonCancel.style.display = 'block'
    })
    buttonCancel.addEventListener('click', () => {
      this.reset()
      for (let i = 0; i < document.querySelectorAll('input[type="text"]').length; i++) {
        document.querySelectorAll('input[type="text"]')[i].value = ''
        document.querySelectorAll('input[type="text"]')[i].disabled = false

      }
    })

    buttonPlus[1].addEventListener('click', () => this.addExpensesBlock())
    buttonPlus[0].addEventListener('click', () => this.addIncomeBlock())
    range.addEventListener('input', () => this.rangeDigit())

    salaryAmount.addEventListener('keyup', function () {
      this.value = this.value.replace(/[^\d]/g, '');
    })
    incomeAmount.addEventListener('keyup', function () {
      this.value = this.value.replace(/[^\d]/g, '');
    })
    expensesAmount.addEventListener('keyup', function () {
      this.value = this.value.replace(/[^\d]/g, '');
    })
    targetAmount.addEventListener('keyup', function () {
      this.value = this.value.replace(/[^\d]/g, '');
    })
    incomeTitle.addEventListener('keyup', function () {
      this.value = this.value.replace(/[\da-zA-Z]/g, '');
    })
    additionalIncomeItem[0].addEventListener('keyup', function () {
      this.value = this.value.replace(/[\da-zA-Z]/g, '');
    })
    additionalIncomeItem[1].addEventListener('keyup', function () {
      this.value = this.value.replace(/[\da-zA-Z]/g, '');
    })
    expensesTitle[1].addEventListener('keyup', function () {
      this.value = this.value.replace(/[\da-zA-Z]/g, '');
    })
  }
};

buttonStart.disabled = true;

const appData = new AppData();
appData.eventListners();
console.log(appData)