'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.replaceAll('_', ' ').padStart(25)} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ':',
    'h'
  )})`;
  console.log(output);
}

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   oderPizza: function (mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(otherIng);
//   },
// };

// let counter = 0;
// function camelCase(incText) {
//   counter++;
//   const splitText = incText.trim().toLowerCase().split('_');
//   //console.log(splitText);
//   const camelCase =
//     splitText[0] + splitText[1][0].toUpperCase() + splitText[1].slice(1);
//   console.log(`${camelCase.padEnd(20)}  ${'👍'.repeat(counter)}`);
// }

// camelCase('underscore_case');
// camelCase(' first_name');
// camelCase('Some_Variable');
// camelCase(' calculate_AGE');
// camelCase('delayed_departure');

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

// function capitalizeName(incName) {
//   const splitName = incName.split(' ');
//   console.log(splitName);
//   const correctName = [];
//   for (let name of splitName) {
//     correctName.push(name[0].toUpperCase() + name.slice(1));
//   }
//   const fullName = correctName.join(' ');
//   console.log(fullName);
// }

// capitalizeName('jessica ann smith davis');

// const priceDE = '288,97€';
// const priceUS = priceDE.replace('€', '$').replace(',', '.');
// console.log(priceUS);

// function checkBaggage(items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('gun') || baggage.includes('knife')) {
//     console.log('Baggage not okay!!');
//   } else {
//     console.log('Good flight');
//   }
// }

// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('snacks and a gun');

// const passenger = 'jeNs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@mail.de';
// const loginEmail = '  Hello@Mail.DE  \n';
// const loginLowerCase = loginEmail.toLowerCase();
// console.log(loginLowerCase);
// const loginCorrect = loginLowerCase.trim();
// console.log(loginCorrect);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]), console.log(airline.length);

// console.log(airline.indexOf('r'));
// const split = airline.split('');
// console.log(split);
// const str = `${[...split]}`;
// console.log(str);

// console.log(airline.slice(4, 10));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(1, -1));

// function checkMiddleSeat(seat) {
//   //B and E are middle seats
//   const letter = seat.slice(-1);
//   console.log(letter);
//   if (letter === 'B' || letter === 'E') {
//     return console.log("It's a middle seat");
//   }
// }

// checkMiddleSeat('11A');
// checkMiddleSeat('11B');
// checkMiddleSeat('11E');

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const lastEvent = [...gameEvents.keys()];
const time = lastEvent[lastEvent.length - 1];

// oder mit pop!

const time2 = lastEvent.pop();
console.log(time2);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (let [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'First Half' : 'Second Half';
  console.log(`[${half}] ${minute}: ${event}`);
}
*/
// GOOD LUCK 😀

// const question = new Map([
//   ['question', 'What is the best programming languega in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScipt'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// const hoursMap = new Map(Object.entries(restaurant.openingHours));

// console.log(hoursMap);
// console.log(question.get('question'));
// for (let [key, value] of question) {
//   if (typeof key === 'number') console.log(key, value);
// }
//const answer = Number(prompt('Your answer'));

//console.log(question.get(question.get('correct') === answer));

// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
// console.log(Date.now());

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
// console.log(new Set('Enno'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Pizza');
// console.log(ordersSet);

// for (let el of ordersSet) console.log(el);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

// console.log(new Set('jensotten').size);
// const properties = Object.keys(restaurant.openingHours);
// const values = Object.values(restaurant.openingHours);

// const entries = Object.entries(restaurant.openingHours);

//console.log(properties, values, entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`At ${day} we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Mehtod does not exist');

// const arr = [{ name: 'Jonas', email: 'test' }];

// console.log(arr[0]?.name ?? 'Arry empty');

/*

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const key of menu.entries()) console.log(key);

for (const key in menu) console.log(key);
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
*/
// const scored = Object.entries(game.scored);
// console.log(scored);
// for (let [key, player] of scored) {
//   console.log(`Goal ${Number(key) + 1}: ${player}`);
// }
/*
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
*/
// let average = 0;
// let odds = Object.values(game.odds);
// for (let odd of odds) {
//   average += odd;
// }
// average = average / odds.length;
// console.log(average);

/*
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
*/

// for (const [team, odd] of Object.entries(game.odds)) {
//   const strTeam = team === 'x' ? 'draw' : game[team];
//   console.log(`Odd of victory ${strTeam}: ${odd}`);
// }

/*
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const scorers = {};

// for (let player of game.scored) {
//   console.log(player);
//   scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
// }
// console.log(scorers);

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
*/
// const [players1, players2] = game.players;
// console.log(players1, players2);

/*
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
*/
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

/*
3. Create an array 'allPlayers' containing all players of both teams (22 players)
*/
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

/*
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
*/
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

/*
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
*/
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

/*
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
*/
// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} scored in total`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

/*
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
*/
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

/*
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const res1 = {
  name: 'Capri',
  numGuest: 0,
};

const res2 = {
  name: 'La Piazza',
  owner: 'Lars Larson',
};

// res1.numGuest = res1.numGuest || 10;
// res2.numGuest = res2.numGuest || 10;

res1.numGuest ??= 10;
res2.numGuest ??= 10;

console.log(res1);
console.log(res2);

//restaurant.numGuest = 0;
const guest = restaurant.numGuest ?? 10;
console.log(guest);


restaurant.oderPizza('1', '2', '3');

const { sat, ...otherWeekdays } = restaurant.openingHours;
console.log(sat, otherWeekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// restaurant.orderPasta(...ingredients);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr, 10, 11, 12];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

const str = 'Jonas';
console.log(...str);
const letters = [...str, ' ', 'S.'];
console.log(letters);


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , secondary] = restaurant.categories;
console.log(first, secondary);

// const temp = first;
// first = secondary;
// secondary = temp;
// console.log(first, secondary)

[first, secondary] = [secondary, first]
console.log(first, secondary);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
// const [arrOne, , arrThird] = nested;
// console.log(arrOne, arrThird)
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
