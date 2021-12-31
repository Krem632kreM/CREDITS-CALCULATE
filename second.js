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

let array = ['apple', 'orange', 'banana']
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
  }*/

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


