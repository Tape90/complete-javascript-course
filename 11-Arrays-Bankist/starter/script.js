'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMovments(movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovments(currentAccount.movements, !sorted);
  sorted = !sorted;
});

function calcPrintBalance(acc) {
  acc.balance = acc.movements.reduce((ac, sum) => ac + sum, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

function calcDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, val) => (val >= 1 ? acc + val : acc), 0);
  labelSumInterest.textContent = `${interest}€`;
}

function createUsernames(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .split(' ')
      .map(element => element[0])
      .join('')
      .toLowerCase();
  });
}
createUsernames(accounts);

function updateUI(currentAccount) {
  displayMovments(currentAccount.movements);
  calcDisplaySummary(currentAccount);
  calcPrintBalance(currentAccount);
}

let currentAccount;

btnLogin.addEventListener('click', event => {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    displayMovments(currentAccount.movements);
    calcDisplaySummary(currentAccount);
    calcPrintBalance(currentAccount);
  }
});

// function login() {
//   currentAccount = accounts.find(
//     acc => acc.username === 'js' || inputLoginUsername.value
//   );

//   if (currentAccount?.pin === Number('1111') || Number(inputLoginPin.value)) {
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();
//     updateUI(currentAccount);
//   }
// }
// login();

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  } else {
    alert('Something went wrong. Please try again');
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.blur();
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputClosePin.value = inputCloseUsername.value = '';
    labelWelcome.textContent = 'Log in to get started';
    //console.log(accounts);
  } else {
    alert('Account not deleted!');
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, [-1, -2]];

/////////////////////////////////////////////////

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// GOOD LUCK 😀

dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.forEach(dog => {
  if (dog.curFood * 1.1 > dog.recommendedFood) {
    ownersEatTooMuch.push(dog.owners);
  } else if (dog.curFood * 0.9 < dog.recommendedFood) {
    ownersEatTooLittle.push(dog.owners);
  }
});

console.log(
  `${ownersEatTooLittle.flat().join(' and ')}'s dogs eat too little!`
);
console.log(`${ownersEatTooMuch.flat().join(' and ')}'s dogs eat too much!`);

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(e => e > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(cur => cur >= 1000).length;
// console.log(numDeposits1000);

// const { deposit, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (acc, val) => {
//       val > 0 ? (acc.deposit += val) : (acc.withdrawals += val);
//       return acc;
//     },
//     { deposit: 0, withdrawals: 0 }
//   );

// console.log(deposit, withdrawals);

// const convertTitleCase = function (title) {
//   const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

//   const capitalization = str => str[0].toUpperCase() + str.slice(1);

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => {
//       if (word === expections.find(val => val === word)) {
//         return word;
//       } else {
//         return capitalization(word);
//       }
//     })
//     .join(' ');

//   return capitalization(titleCase);
// };

// console.log(convertTitleCase('and this is a nice title'));

// const randomDiceRoll = Array.from({ length: 100 }, (_, i) => i + 1);
// console.log(randomDiceRoll);

// const returnPush = movements.push(200);

// const returnFlat = movements.flat();

// console.log(returnPush);
// console.log(returnFlat);

// console.log(movements);

// console.log(movements.includes(200));
// console.log(movements.flat().every((val, _, array) => val >= -1000));

// const arr = [5, 6];
// arr[1]++;
// console.log(arr);

// const balanceArr = accounts
//   .flatMap(arr => arr.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(balanceArr);

// const balanceArr2 = accounts
//   .map(arr => arr.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(balanceArr2);

// console.log(movements.sort((a, b) => a - b));
// console.log(movements.filter(e => e >= 0));
// console.log(movements);

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(1, -1));

// arr.forEach((element, i) => {
//   console.log(i, element);
// });

// currencies.forEach((value, key, map) => {
//   console.log(value, key, map);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
// currenciesUnique.forEach((value, _, map) => {
//   console.log(value, map);
// });

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function checkDogs(dogsJulia, dogsKate) {
//   const copyDogsJulia = [...dogsJulia];
//   copyDogsJulia.splice(-2);
//   copyDogsJulia.shift();
//   const dogsBoth = copyDogsJulia.concat(dogsKate);
//   dogsBoth.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is a puppy, and is ${dog} years old`);
//     }
//   });
//   //console.log(dogsBoth);
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const eurToUsd = 1.1;
// const movementsTest = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const mov = movementsTest.map(element => Math.trunc(element * eurToUsd));

// const mov2 = [];
// for (const el of movementsTest) mov2.push(Math.trunc(el * eurToUsd));

// console.log(mov);
// console.log(mov2);

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(deposits, withdrawals);

// const balance = movements.reduce((acc, cur) => (acc > cur ? acc : cur));

// console.log(balance);

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

// function calcAverageHumanAge(ages) {
//   const dogsHumanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const teenDogs = dogsHumanAge.filter(age => age < 18);
//   const averageAdultDogs =
//     dogsHumanAge.reduce((acc, val) => (val >= 18 ? acc + val : acc)) /
//     (dogsHumanAge.length - teenDogs.length);
//   console.log(averageAdultDogs);
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// function calcAverageHumanAge(ages) {
//   return ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age > 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// console.log(movements.find(mov => mov < 0 && mov < -410));

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
