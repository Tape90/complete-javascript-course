'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

function logger(text) {
  console.log(text);
}

const loggerTwo = (text) => {
  console.log(text);
}

logger("Hallo");
loggerTwo("hallo zwei");

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleJuice, appleOrangeJuice);


//Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1990);
console.log(age1);

//Function expression
const calcAge2 = (birthYear) => {
  return 2023 - birthYear;
}
const age2 = calcAge2(1990);
console.log(age2)

// Arrow function
const calcAge3 = birthyear => 2023 - birthyear;
console.log(calcAge3(1990));

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2023 - birthyear;
  const retirement = 67 - age;
  return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1990, 'Jens'));
console.log(yearsUntilRetirement(1970, 'Bob'));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} applepieces and ${orangePieces} orangepieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3))


function calcAge(birthYear) {
  return 2023 - birthYear;
}

function yearsUntilRetirement(birthYear) {
  const age = calcAge(birthYear);
  const retirement = 67 - age;
  if (retirement >= 0) {
    return retirement
  } else {
    return 0
  }
}

console.log(yearsUntilRetirement(1950));


function calcAverage(scoreOne, scoreTwo, scoreThree) {
  return (scoreOne + scoreTwo + scoreThree) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins < avgKoalas / 2) {
    console.log(`Koalas wins, Dolphins (${avgDolphins}) and Koalas (${avgKoalas})`)
  } else if (avgKoalas < avgDolphins / 2) {
    console.log(`Dolphin wins, Dolphins (${avgDolphins}) and Koalas (${avgKoalas})`)
  } else {
    console.log(`no Winner, Dolphins (${avgDolphins}) and Koalas (${avgKoalas})`)
  }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const winner = checkWinner(avgDolphins, avgKoalas);


const friends = ['Michael', 'Peter', 'Steven'];
console.log(friends)
const newLength = friends.push('Klaus');
console.log(friends)
friends.unshift('Max');
//console.log(newLength)
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf('Peter'));

console.log(friends.includes('Peter'));
console.log(friends.includes('Bob'));

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

const jonas = ['Jonas', 'Schmedtmann', 32, 'teacher', friends]

console.log(jonas);


function calcTip(bill) {
  if (bill >= 300 || bill <= 50) {
    return bill * 0.2;
  } else {
    return bill * 0.15;
  }
}

const bills = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = (calcTip(bills[i]));
  tips.push(tip);
  total.push(bills[i] + tip);
}

console.log(tips, total);


const jens = {
  firstName: 'Jens',
  lastName: 'Otten',
  birthyear: 1990,
  job: 'Accountant and maybe programmer',
  friends: ['Michael', 'Bob', 'Max', 'Marco'],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2023 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license!`
  }

};

console.log(jens.lastName);
jens.lastName = 'Grote';

const nameKey = 'Name';
console.log(jens['first' + nameKey]);
console.log(jens['last' + nameKey]);

//const interestedIn = prompt('What do you want to know about Jens. Choose between firstName, lastName, age, job and friends');

//jens[interestedIn] ? console.log(jens[interestedIn]) : console.log('Input invalid');
jens.location = 'Germany';
console.log(jens);

console.log(`${jens.firstName} has ${jens.friends.length} friends and his best friend is called ${jens.friends[0]}!`);

// jens.calcAge();
// console.log(jens);

console.log(jens.getSummary)


console.log(jens)


const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return this.mass / (this.height ** 2)
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return this.mass / (this.height ** 2)
  }
};

let personWithHigherBMI = null;
let personWithLowerBMI = null;

personWithHigherBMI = mark.calcBMI() > john.calcBMI() ? mark : john;
personWithLowerBMI = mark.calcBMI() < john.calcBMI() ? mark : john;

personWithHigherBMI.fullName = 'Jann Peters';

console.log('marks fullname: ' + mark.fullName)

console.log(`${personWithHigherBMI.fullName}'s BMI (${personWithHigherBMI.calcBMI()}) is higher than ${personWithLowerBMI.fullName}'s (${personWithLowerBMI.calcBMI()})`)

//save lower BMI Person
//console.log content

// mark.calcBMI() > john.calcBMI() ? console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`) : console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is lower than ${john.fullName}'s (${john.calcBMI()})`);

// console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is ${mark.calcBMI() > john.calcBMI() ? 'higher' : 'lower'} than ${john.fullName}'s (${john.calcBMI()})`)


for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`)
};


const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2023 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

for (let i = 0; i < jonasArray.length; i++) {
  const element = (jonasArray[i]);
  console.log(element);
  if (Array.isArray(element)) {
    for (let i = 0; i < element.length; i++) {
      console.log(element[i]);
    }
  }
}

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}


for (let i = 1; i <= 3; i++) {
  console.log(`-----Starting exercise ${i}`)

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Excercise ${i} Lifting weight repetition ${rep}`);
  }
}

let rep = 1;
while (rep <= 5) {
  console.log(`Lifting ${rep}`)
  rep++
}

let dice = Math.floor(Math.random() * 6) + 1

while (dice !== 6) {
  console.log(`You rolled a ${dice}`)

  dice = Math.floor(Math.random() * 6) + 1;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calctTip(bills) {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 300 || bills[i] <= 50) {
      tips.push(bills[i] * 0.2);
      totals.push(bills[i] + tips[i]);
    } else {
      tips.push(bills[i] * 0.15);
      totals.push(bills[i] + tips[i]);
    }
  }
}

function calcAverage(arr) {
  let num = null;
  for (let i = 0; i < arr.length; i++) {
    num = num + arr[i];
  }
  return num / arr.length;
}

calctTip(bills);
console.log(tips, totals);

console.log(calcAverage(totals));
*/

const temperatures = [3, 2, 6, 1, 'error', 9, 13, 17, 15, 14, 9, 5];

function amplitudeAlt(incArr) {
  let highest = 0;
  let lowest = 0;

  const cleanArr = incArr.filter(el => typeof el === 'number')

  cleanArr.sort((a, b) => a - b);

  highest = cleanArr[cleanArr.length - 1];
  lowest = cleanArr[0];

  console.log(`${highest - lowest}`)
}

amplitudeAlt(temperatures);

// function amplitude(temp) {
//   let high = temp[0];
//   let low = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] === 'number') {
//       if (temp[i] > high) {
//         high = temp[i];
//       }
//       if (temp[i] < low) {
//         low = temp[i];
//       };
//     }
//   }
//   console.log(`highest ${high} and lowest ${low} and the amplitude is ${high - low}`);
// }

// amplitude(temperatures);


