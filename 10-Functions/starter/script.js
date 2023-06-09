'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n'
        )} \n (Write option number)`
      )
    );
    if (answer >= 0 && answer <= 3) {
      this.answers[answer]++;
      this.displayResults();
      this.displayResults('string');
    } else {
      alert('Number is not between 0 and 3');
    }
  },
  displayResults: function (type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(' ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log(type);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker1 = secureBooking();
const booker2 = secureBooking();

// booker1();
// booker1();
// booker1();
// booker2();
// booker2();
// booker2();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 10000000;
// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  //console.dir(window);
  document.body.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();

//poll.registerNewAnswer();

// function addTax(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }

// const addVAT = addTax(0.23);
// console.log(addVAT(200));
// console.log(addTax(0.19)(100));

// function count() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// }

// // function () {
// //   counter++;
// //   return counter;
// // }

// console.log({ name: 'Jens', count: count() });

// const arr = ['Adam', 'Peter', 'Eve'];
// arr.push(5);
// console.log(arr);

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Moin')('Tom');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book: function (flightnum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightnum}`,
//       name: `${name}`,
//     });
//   },
//   planes: 300,
//   buyPlane: function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
//   },
// };

// lufthansa.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// lufthansa.book(5687, 'Jens');
// console.log(lufthansa.bookings);
// const eurowing = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const copyFunction = lufthansa.book;
// console.log(copyFunction);
// eurowing.book = copyFunction;
// eurowing.book(5648, 'Tom');
// eurowing.book = 'Haha';
// console.log(eurowing);
// console.log('String start');
// console.log(lufthansa.book);
// console.log(eurowing.book);

// console.log(`String end`);
