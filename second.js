document.addEventListener('DOMContentLoaded', function(){
'use strict';
/*let lang = prompt("ru or en?")
let ru = ['понедельник'], en=['monday'];

if(lang==='ru'){ console.log(ru)}
else if(lang==='en') {console.log(en)}
else {console.log('что-то пошло не так')}

switch(lang) {
  case "ru" : {console.log(ru); break}
  case "en" : {console.log(en); break}
}

var lang_array = [];
lang_array['ru'] = ['понедельник'];
lang_array['en'] = ['monday'];
console.log(lang_array[lang])

let namePerson = prompt();
namePerson==="Артём" ? console.log("директор") : namePerson==="Максим" ? console.log("препод") : console.log("Студент")*/

/*let f = function(arg) {
  if (typeof arg !== "string") return "не строка"
  else { 
    return arg.trim().length > 30 ?  arg.trim().substr(0, 30)+'...' : arg.trim()
  }
}

console.log(f(prompt('введи шонить')));

let arr=['5456','453565','2323232','22','6666','987','1111']
let k=0;
for(let i=0; i<arr.length; i++){
  //console.log(arr[i][0]==2)
  if(arr[i][0]==2||arr[i][0]==4) k++;
}

//console.log(k)
let p=0;

for (let i=2; i<100; i++) 
{
  for(let j=0; j<i; j++) {
    if(i%j===0) p++
  }
  if(p<=1) {console.log("Делители этого числа: 1 и "+ i)}
  p=0
}

let car= {
  model: 'mazda',
  year: 2006,
  turbocharging: true,
  specification: [],
  style: {
    color:'blue'
  }
};

car.ride = function(speed) {
  console.log('Машина едет со скоростью ' + speed + ' км/ч');
}

console.log(car.model)
console.log(car['model'])

car['best place'] ='city'


let titleTrans = 'Коробка передач'
let bodyTrans = 'автоматич коробка передач'
car[titleTrans] = bodyTrans
console.log(car)*/

//let array = ['apple', 'orange', 'banana']
//array.push('kiwi')

//array.unshift('papaya', 'Mango')
/*console.log(array.pop())
console.log(array.shift())
console.log(array)
console.log(array.sort())

console.log(array.slice(-2))

console.log(array)

console.log(array.splice(1,2,'avocado', 'papaya'))

console.log(array)

console.log(array.join(' - '))
console.log(array.reverse())//изменяет текущий массив
console.log(array.concat(['avocado', 'papaya', 'kiwi'], 'mango'))*/



/*let car= {
  model: 'mazda',
  year: 2006,
  turbocharging: true,
  specification: [],
  style: {
    color:'blue'
  }
};

for (let key in car) {
  console.log('Ключ: '+ key + ' Значение: ' + car[key])
}

console.log(Object.keys(car).length)*/

let arr =[1,3,5,10,15]

/*arr.forEach(function(item, i, array){
  console.log(item, i, array)
});
for (const key in arr) {
    console.log(arr[key])
  }

for (const key of arr) {
  console.log(key)
}

delete arr[3]
console.log('arr: ', arr[3])

let obj ={
  a:3,
  b:true,
  c:'js'
}

delete obj.b
console.log(obj)

//псевдомассив обьект который похож на массив, но методов массива у него нет

function test() {
  console.log(arguments.shift())
}

test(1,2,3,4)

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение']
var date = new Date();

let html;

for (let index = 0; index < week.length; index++) {
  let html = week[index]
  if(week[index]==='суббота' || week[index]==='воскресение'){
    html = html.italics() }
  if (index===(date.getDay()-1)) {html = html.bold()}


const div = document.createElement('div');
div.innerHTML = html;
document.body.appendChild(div);

  }
*/

const people = [
  {name: 'Владилен', age: 25, budget: 4000},
  {name: 'Елена', age: 17, budget: 3400},
  {name: 'Игорь', age: 49, budget: 50000},
  {name: 'Михаил', age: 15, budget: 1800},
  {name: 'Василиса', age: 24, budget: 25000},
  {name: 'Виктория', age: 38, budget: 2300}
]

/*for(let i=0; i<people.length; i++){
  console.log(people[i])
}

for (const person of people) {
  console.log(person)
}*/

//ForEach
/*people.forEach(function (person){
  console.log(person)
  })
people.forEach(person => console.log(person))*/
//Map
/*
const newPeople = people.map(person => `${person.name[0].toUpperCase()}${person.name.substr(1)}`).join(", ")

const newPeople2 = people.map(person => person.name.replace(/./, m => m[0].toUpperCase())).join(", ")

console.log(newPeople)
console.log(newPeople2)

People = people.map(person => person.age * 3)
console.log(People)
*/
//Filter
/*const adults=[]
for(let i=0; i<people.length;i++){
if(people[i].age>=18) adults.push(people[i])
}
console.log(adults)*/

/*const adults  = people.filter(person => {
  if (person.age>=18) return true
})
console.log(adults)*/

/*const adults  = people.filter(person => person.age>=18)
console.log(adults)*/

//Reduce//получаем финальное значение совершив итерации по акому то массиву
/*
let amount=0;
for(let i=0; i<people.length;i++){
  amount+=people[i].budget
}
console.log(amount)*/
/*
const amount = people.reduce((total, person)=> total+person.budget, 0)

console.log(amount)*/
//Find

/*const Igor = people.find(person =>person.name==="Игорь")
console.log(Igor)
//FindIndex
const IgorIndex = people.findIndex(person =>person.name==="Игорь")
console.log(IgorIndex)*/
/*
const amount = people
.filter(person=>person.budget>3000)
.map(person => {
  return {
    info: `${person.name}(${person.age})`,
    budget: Math.sqrt(person.budget)
  }
})
.reduce((total,person)=>total+person.budget, 0)

console.log(amount)

console.log(appData.addExpenses.map(n => n.replace(/./, m => m.toUpperCase())).join(', '))

const mainHead = document.querySelector('.btn_plus');
const computedStyleMainHead = getComputedStyle(mainHead);
console.log(computedStyleMainHead.backgroundOrigin);
console.log(computedStyleMainHead);*/


/*
let func = function () {
  let date = new Date()
let days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
let n = date.getDay();

function getLocalDayYearMonth_2digit(d) {
  let month = date.toLocaleDateString("ru-RU", { month: '2-digit' })
  let year = date.toLocaleDateString("ru-RU", { year: '2-digit' })

  return d.toLocaleDateString("ru-RU", { day: '2-digit' }) + "." + month + "." + year;
}

function getLocalTime_2digit(d) {
  return d.toLocaleTimeString("ru-RU", { 
    hours: '2-digit',
    minutes: '2-digit',
    seconds: '2-digit'
  });
}

function getLocalTime(d) {
  let hoursWord = function (hours) {
    if (hours===1||hours===21) return "час"
    else if ((hours%10===2||hours%10===3||hours%10===4)&&hours!==12&&hours!==13&&hours!==14) return "часа"
    else if (hours===1&&hours!==12&&hours!==13&&hours!==14) return "часов" 
    else return "часов" 
  }

  let minutesWord = function (minutes) {
    if (minutes%10===1&&minutes!==11) return "минута"
    else if ((minutes%10===2||minutes%10===3||minutes%10===4)&&minutes!==12&&minutes!==13&&minutes!==14) return "минуты"
    else if(minutes===11&&minutes!==12&&minutes!==13&&minutes!==14) return "минут" 
    else return "минут" 
  }

  let secondsWord = function (seconds) {
    if (seconds%10===1&&seconds!==11) return "секунда"
    else if ((seconds%10===2||seconds%10===3||seconds%10===4)&&seconds!==12&&seconds!==13&&seconds!==14) return "секунды"
    else if (seconds===11&&seconds!==12&&seconds!==13&&seconds!==14) return "секунд" 
    else return "секунд" 
  }

  return d.getHours() + " " + hoursWord(d.getHours()) + " " + d.getMinutes() + " " + minutesWord(d.getMinutes()) + " " + d.getSeconds()+ " " + secondsWord(d.getSeconds());
}

function getLocalDayYearMonth(d) {
  let word = date.toLocaleDateString("ru-RU", { month: 'long' })
  let month = word.substring(0, word.length-1) + "я"
  let year = date.toLocaleDateString("ru-RU", { year: 'numeric' }) + ' года'

  return d.toLocaleDateString("ru-RU", { day: 'numeric' }) + " " + month + " " + year;
}
let str = `${"Сегодня "+ days[n] +', '+ getLocalDayYearMonth(date) +', '+getLocalTime(date)  + '<BR/>' + getLocalDayYearMonth_2digit(date) + ' - ' + getLocalTime_2digit(date)}`;
const div = document.createElement('div');
//div.innerHTML = str
document.body.innerHTML = str;
}
setInterval(func,1000);
*/

/*
const collections = document.querySelectorAll('.collections'), elems = document.querySelectorAll('.elem')

console.log(collections, elems)

elems[3].remove()

collections[1].append(elems[3])//вставитьв конец родителя//перемещает

collections[1].prepend(elems[5])//вставляет елемн в начало родителя

collections[0].before(collection[1])//берёт передаваемый эл-нт вставляет перед тем элементом который указали

elems[4].after(elems[0])//0 вставит после 4, перместит 0 после 4ого*/

/*'use strict'

const books = document.querySelector('.books')
const book = document.querySelectorAll('.book')

console.log(books)
console.log(book)
books.prepend(book[1])
//4 поставить после 0
book[0].after(book[4]) 
// 2 поставить после 5
book[5].after(book[2]) 
const nameBook_3 = book[4].getElementsByTagName('a')[0]
nameBook_3.innerText = 'Книга 3. this и Прототипы Объектов'
console.log(nameBook_3.innerText)

const adv = document.querySelector('.adv')
adv.remove();

const pointOfTheSecondBook = book[0].getElementsByTagName('ul')[0].getElementsByTagName('li')
//6 поставить после 3
pointOfTheSecondBook[3].after(pointOfTheSecondBook[6])
//8 поставить после 4
pointOfTheSecondBook[4].after(pointOfTheSecondBook[8])
pointOfTheSecondBook[9].after(pointOfTheSecondBook[2])

const pointOfTheFifthBook = book[5].getElementsByTagName('ul')[0].getElementsByTagName('li')

pointOfTheFifthBook[1].after(pointOfTheFifthBook[9])
pointOfTheFifthBook[5].after(pointOfTheFifthBook[3])
pointOfTheFifthBook[8].after(pointOfTheFifthBook[6])


const pointOfTheSixthBook = book[2].getElementsByTagName('ul')[0].getElementsByTagName('li')
let newPointOfTheSixthBook = document.createElement('li')
newPointOfTheSixthBook.innerHTML = 'Глава 8: За пределами ES6'
pointOfTheSixthBook[8].after(newPointOfTheSixthBook)
console.log(pointOfTheSixthBook[8])
console.log(newPointOfTheSixthBook)

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";


//elems[2].replaceWith(elem[3]) 2ой элемент был убран*/


/*btn.onclick = function() {
  console.log('text')
}*/

/*btn.addEventListener('click', function(){
  console.log('щёлк')
})
btn.addEventListener('click', function(){
  console.log('пёлк')
})
btn.addEventListener('click', function(){
  console.log('сёлк')
})*/

/*
  console.log('стр загузилась')


let eventFunc = function(event){
  console.log(event.type)
  console.log(event.target.value)
}
//document.querySelector('.target-amount').addEventListener('input', eventFunc);
//document.querySelector('.target-amount').addEventListener('change', eventFunc);
//btn.addEventListener('mousemove', eventFunc)

//document.querySelector('.target-amount').addEventListener('focus', eventFunc);
//document.querySelector('.target-amount').addEventListener('blur', eventFunc);

document.querySelector('.period-select').addEventListener('change', eventFunc);

window.onbeforeunload = function(){
  return "вы уверены что хотите уйти со страницы?";
};*/

let clickElem = null;

function greenHundler(event){

  if(clickElem){
    clickElem.classList.remove('green')
  }

  clickElem  = event.currentTarget
  clickElem.classList.add('green')
}
document.getElementById('start').addEventListener('click', greenHundler)
document.getElementById('start1').addEventListener('click', greenHundler)
document.querySelector('body').addEventListener('click', greenHundler)

console.log(document.querySelector('.expenses-title'))
});