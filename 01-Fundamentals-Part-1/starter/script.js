// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');

// let firstName = 'Bob'

// console.log(firstName);

// let PI = 3.1415;

// let myFirstJob = 'Accountant'
// let myCurrentJob = 'Porgrammer, i hope'

// console.log(myCurrentJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'javascriptIsFun');

// javascriptIsFun = 'YES!'

// console.log(typeof javascriptIsFun)

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// const now = 2037
// const ageJonas = now - 1990;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Muster';
// console.log(`${firstName} ${lastName}`)

// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x)

// console.log(ageJonas > ageSarah) //true / <, >, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const now = 2037
// const ageJonas = now - 1990;
// const ageSarah = now - 2020;

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const markBMI = massMark / (heightMark ** 2);

// const johnBMI = massJohn / (heightJohn ** 2);

// const markHigherBMI = (markBMI > johnBMI);
// console.log(markBMI, johnBMI, markHigherBMI);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2023;

// const jonas = `I'm ${firstName} a ${year - birthYear} years
// old ${job}`;
// console.log(jonas);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving license 🚗');
// };

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗')
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;
// let century
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century)


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
// const markBMI = massMark / (heightMark ** 2);
// const johnBMI = massJohn / (heightJohn ** 2);
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// if (favourite === 23) console.log("Cool, 23 is an amazing number");

// const hasDriverLicense = true;
// const hasGoodVision = true;
// const isTired = false;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log('Sarah can drive')
// } else {
//   console.log('Sarah can not drive')
// }

// const dolphinesScoreOne = 97;
// const dolphinesScoreTwo = 112;
// const dolphinesScoreThree = 101;
// const koalasScoreOne = 109;
// const koalasScoreTwo = 95;
// const koalasScoreThree = 123;

// const avarageDolphins = (dolphinesScoreOne + dolphinesScoreTwo + dolphinesScoreThree) / 3;
// const avarageKoalas = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

// console.log(avarageDolphins, avarageKoalas);

// if (avarageDolphins === avarageKoalas || avarageDolphins < 100 && avarageKoalas < 100) {
//   console.log("Draw");
// } else if (avarageDolphins > avarageKoalas && avarageDolphins > 100) {
//   console.log("Dolphins win");
// } else {
//   console.log("Koalas win")
// }

// const day = 'saturday';

// switch (day) {
//   case 'monday':
//     console.log('It is monday');
//     break;
//   case 'tuesday':
//     console.log('It is tuesday');
//     break;
//   case 'wednesday':
//     console.log('It is wednesday');
//     break;
//   default:
//     console.log('Day is not defined')
// }

// if (day === 'monday') {
//   console.log("Plan Course structure");
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Wirte code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend');
// } else {
//   console.log('Not a valid day!');
// }

// const age = 18;
// age >= 18 ? console.log('I like to drink wine') : console.log('You have to drink water');

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`)

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 15 / 100 : bill * 20 / 100;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);