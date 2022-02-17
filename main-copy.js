'use strict'
const isNumber = n => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

const buttonStart = document.getElementById('start'),
  buttonCancel = document.getElementById('cancel'),
  buttonPlus = document.getElementsByTagName('button'),

  depositCheck = document.querySelector('#deposit-check'),
  depositBank = document.querySelector(".deposit-bank"),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent'),
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
  range = document.querySelector('[type="range"]');

  let expensesItems = document.querySelectorAll('.expenses-items'),
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
    this.getExpInc();
    this.getInfoDeposit();
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
      this.expensesMonth = 0,
      this.incomeMonth = 0
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

  addExpIncBlock(i) {
    let items;
    if(i===0) {items = incomeItems;}
    if(i===1) {items = expensesItems;}
    const count = (item) => {
      const startStr = item.className.split('-')[0]
      let cloneItem = items[0].cloneNode(true)
      cloneItem.getElementsByTagName('input')[0].value = ''
      cloneItem.getElementsByTagName('input')[1].value = ''
      items[0].parentNode.insertBefore(cloneItem, buttonPlus[i])
      items = document.querySelectorAll(`.${startStr}-items`)
    if (items.length === 3) {
        buttonPlus[i].style.display = 'none'
      }
    } 
    items.forEach(count)
  }
  getExpInc() {
    const count = (item) => {
      const startStr = item.className.split('-')[0]
      const itemTitle = item.querySelector(`.${startStr}-title`).value
      const itemAmount = item.querySelector(`.${startStr}-amount`).value
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = itemAmount
      }

    }

    expensesItems.forEach(count)
    incomeItems.forEach(count)
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
  getBudget() {
    const monthDeposit = this.moneyDeposit*(this.percentDeposit / 100);
    let sum = 0;
    for (const key in this.income) {
    sum += +this.income[key]
    }
    console.log(sum)
    this.budgetMonth = (this.budget - this.getExpensesMonth()) + sum + monthDeposit;
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
      
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
      
    }
  }
  calcSevedMoney() {
    return this.budgetMonth * this.period
  }
  changePercent() {
    const valueSelect = this.value;
    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block'
    } else {
      depositPercent.value = valueSelect
      depositPercent.style.display = 'none'
    }
  }

  depositHandler() {
    if(depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
      
    }
      else {
        depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositBank.value=''
      depositAmount.value=''
      depositBank.removeEventListener('change', this.changePercent);
      }
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

    buttonPlus[1].addEventListener('click', () => this.addExpIncBlock(1))
    buttonPlus[0].addEventListener('click', () => this.addExpIncBlock(0))
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

    depositCheck.addEventListener('change', this.depositHandler.bind(this))

    depositPercent.addEventListener('input', function() {
      if(!isNumber(this.value) || this.value<0 || this.value>100 ) {
        alert('Введите корректное значение в поле проценты')
        depositPercent.value = ''
        buttonStart.disabled = true;
      } else {
        buttonStart.disabled = false;
      }
    })
  }
};

buttonStart.disabled = true;

const appData = new AppData();
appData.eventListners();
console.log(appData)