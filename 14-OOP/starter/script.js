'use strict';
/*
function countBoomerangs(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      counter++;
    }
  }
  return counter;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));

// function canNest(arr1, arr2) {
//   let isGreater,
//     isSmaller = false;

//   arr2.forEach(arr => {
//     if (arr1.find(element => element > arr)) isGreater = true;
//     if (arr1.find(element => element < arr)) isSmaller = true;
//   });
//   return isGreater, isSmaller;
// }

// 1) Arr1 min is greater than arr 2 min
// 2) Arr1 max is less than arr2 max

function canNest(arr1, arr2) {
  let arr1Max = Math.max(...arr1);
  let arr1Min = Math.min(...arr1);
  let arr2Max = Math.max(...arr2);
  let arr2Min = Math.min(...arr2);
  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    return true;
  } else {
    return false;
  }
}

console.log(canNest([1, 2, 3, 4], [2, 3]));

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function (){
  console.log(2023 - this.birthYear);
}

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 1999);
const jack = new Person('Jack', 1975)

console.log(jonas);
console.log(matilda);
console.log(jack.calcAge());


function oddishOrEvenish(num) {
	let sum = String(num).split('').reduce((acc, sum) => acc = Number(acc)+ Number(sum),0)

  return sum%2 === 0 ? "Evenish" : "Oddish";
  
}

console.log("🚀 ~ file: script.js:63 ~ oddishOrEvenish:", oddishOrEvenish(43))
// 4 + 3 = 7
// 7 % 2 = 1

function getLength(arr) {
	return arr.flat(Infinity).length;
}

console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))

function compact(arr) {
	const newArr = [];
  for (let i = 0; i<arr.length; i++){
    if (arr[i]){
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(compact([0, 1, false, 2, "", 3]));
*/

const Car = function (make, speed){
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`)
};

Car.prototype.brake = function(){
  this.speed = this.speed -5;
  console.log(`${this.make} is going at ${this.speed} km/h`)
};

const bmw = new Car('BMW', 100);
const mercedes = new Car('Mercedes', 95);
console.log(bmw)
bmw.accelerate()
bmw.brake()
bmw.accelerate()
mercedes.brake()