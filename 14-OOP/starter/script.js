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

// class CarCl {
// constructor (make, speed){
//   this.speed = speed;
//   this.make = make;
// }

// accelerate (){
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`)
// };

// brake (){
//   this.speed = this.speed -5;
//   console.log(`${this.make} is going at ${this.speed} km/h`)
// };

// get speedUS(){
//   return this.speed / 1.6;
// }

// set speedUS(speed){
//   this.speed= speed * 1.6;

// }

// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS)
// ford.accelerate()
// ford.speedUS = 100;

// const account = {
//   owner: "Jonas",
//   movements: [200,530,120,300],

//   get latest(){
//     return this.movements.slice(-1).pop();
//   }
// }
// console.log(account.latest)
/*

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// const mike = new Student('Mike', 2000, 'Computer Science');
// console.table(mike);
// mike.introduce();
// mike.calcAge();

const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.getspeedUS = function () {
  return this.speed / 1.6;
};

Car.prototype.setspeedUS = function (speed) {
  this.speed = speed * 1.6;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
console.log(tesla.getspeedUS());

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movments = [];
    this.local = navigator.language;
  }

  deposit(val) {
    this.movments.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    const amount = this.movments.reduce((acc, current) => acc + current, 0);
    return amount * 10 > val ? true : false;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
    } else {
      console.log('Loan rejected');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(1000);
acc1.withdraw(500);
acc1.requestLoan(10000);
console.table(acc1);
*/

// Mock data for products
const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 14.99 },
  // Add more products as needed
];

// Mock data for customers
const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', email: 'michael@example.com' },
  // Add more customers as needed
];

// Mock data for order items

//Erweitern um z.B. Datum und dann das Beste und schlechteste Jahr auslesen
// Top Kunde pro Jahr, wie hat sich der Kund Pro Jahr entwickelt etc. (Daten von ChatGPT um Datum ergänzen + mehr Daten)
const orderItems = [
  {
    id: 1,
    orderId: 1,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 3,
    orderDate: '2022-03-12', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 2,
    orderId: 1,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 2,
    orderDate: '2022-05-05', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 3,
    orderId: 2,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 1,
    orderDate: '2021-12-28', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 4,
    orderId: 2,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 1,
    orderDate: '2023-01-15', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 5,
    orderId: 3,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 2,
    orderDate: '2022-08-07', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 6,
    orderId: 3,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 1,
    orderDate: '2023-03-20', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 7,
    orderId: 3,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 3,
    orderDate: '2022-09-10', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 8,
    orderId: 3,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 2,
    orderDate: '2022-06-25', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 9,
    orderId: 4,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 4,
    orderDate: '2021-10-18', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 10,
    orderId: 4,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 2,
    orderDate: '2022-11-30', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 11,
    orderId: 4,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 1,
    orderDate: '2022-02-14', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 12,
    orderId: 4,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 3,
    orderDate: '2022-09-01', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 13,
    orderId: 5,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 1,
    orderDate: '2023-02-28', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 14,
    orderId: 5,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 2,
    orderDate: '2022-12-10', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 15,
    orderId: 3,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 1,
    orderDate: '2022-07-05', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 16,
    orderId: 2,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 3,
    orderDate: '2021-11-20', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 17,
    orderId: 1,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 2,
    orderDate: '2023-04-03', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 18,
    orderId: 3,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 1,
    orderDate: '2022-10-12', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 19,
    orderId: 1,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 3,
    orderDate: '2023-01-30', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
  {
    id: 20,
    orderId: 5,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 2,
    orderDate: '2022-09-18', // Beispiel-Datum innerhalb der letzten 3 Jahre
  },
];

const orders = [
  { id: 1, customerId: 1 },
  { id: 2, customerId: 2 },
  { id: 3, customerId: 1 },
  { id: 4, customerId: 3 },
  { id: 5, customerId: 2 },
];

//Wie viel Geld hat jeder Kunde bisher ausgegeben?

const getCustomersTotalSpending = function (customerId) {
  const customer = customers.find(customer => customer.id === customerId);
  const orderSums = [];
  let totalSums = 0.0;

  if (!customer) {
    return console.log('Customer not found');
  }

  const myOrdersIds = orders
    .filter(order => order.customerId === customerId)
    .map(myOrder => myOrder.id);

  myOrdersIds.forEach(myOrderId => {
    orderSums.push(
      Math.round(
        orderItems
          .filter(orderItem => orderItem.orderId === myOrderId)
          .map(myOrderItem => myOrderItem.price * myOrderItem.quantity)
          .reduce((acc, val) => acc + val, 0) * 100
      ) / 100 //Kaufmännisch runden
    );
  });

  totalSums = orderSums.reduce((acc, val) => acc + val, 0);

  return console.log(
    `${customer.name} hat bisher einen Umsatz von ${totalSums.toFixed(2)}€`
  );
};

const getTotalProductsSelled = function (productID) {
  const product = products.find(product => product.id === productID);

  if (!product) return console.log('Product not found!');

  let productTotalSum = 0.0;
  let productTotalSelled = 0;

  const productOrderItemsArray = orderItems.filter(
    orderItem => orderItem.productId === productID
  );

  productTotalSum = productOrderItemsArray
    .map(order => order.price * order.quantity)
    .reduce((acc, val) => acc + val, 0);

  productTotalSelled = productOrderItemsArray
    .map(order => order.quantity)
    .reduce((acc, val) => acc + val, 0);

  return console.log(
    `${
      product.name
    } wurde insgesamt ${productTotalSelled}x verkauft und hat einen Umsatz von ${productTotalSum.toFixed(
      2
    )}€ erzielt`
  );
};

//getCustomersTotalSpending(2);
//getTotalProductsSelled(2);

//aus der Order die customerID auslesen un die dazugehörige "order"id. Danach die Order ID's eines Nutzers in den orderItems suchen und alle zusammen addieren. Danach per customerID den Namen auslesen und alles ausgeben

//////////////////////////////////////////////////////////////////////////

const getTotalAmount = function (productId) {
  const product = getProduct(productId);

  if (!product) return 'Product not found!';

  let productTotalAmount = 0.0;

  const productOrderItemsArray = orderItems.filter(
    orderItem => orderItem.productId === productId
  );

  productTotalAmount = productOrderItemsArray
    .map(order => order.price * order.quantity)
    .reduce((acc, val) => acc + val, 0);

  return Number(productTotalAmount.toFixed(2));
};

const getTotalUnitsSold = function (productId) {
  const product = getProduct(productId);

  if (!product) return 'Product not found!';

  let productTotalUnitSold = 0;

  const productOrderItemsArray = orderItems.filter(
    orderItem => orderItem.productId === productId
  );

  productTotalUnitSold = productOrderItemsArray
    .map(order => order.quantity)
    .reduce((acc, val) => acc + val, 0);

  return productTotalUnitSold;
};

const getLowestUnitsOrder = function (productId) {
  const product = getProduct(productId);

  if (!product) return 'Product not found!';

  let lowestUnitsOrder = 0;

  const productOrderItemsArray = orderItems.filter(
    orderItem => orderItem.productId === productId
  );

  lowestUnitsOrder = Math.min(
    ...productOrderItemsArray.map(order => order.quantity)
  );

  return lowestUnitsOrder;
};

const getHighestUnitsOrder = function (productId) {
  const product = getProduct(productId);

  if (!product) return 'Product not found!';

  let highestUnitsOrder = 0;

  const productOrderItemsArray = orderItems.filter(
    orderItem => orderItem.productId === productId
  );

  highestUnitsOrder = Math.max(
    ...productOrderItemsArray.map(order => order.quantity)
  );

  return highestUnitsOrder;
};

const getProductName = function (productId) {
  const product = getProduct(productId);
  return product ? product.name : 'Product not found';
};

const getProduct = function (productId) {
  const product = products.find(product => product.id === productId);
  return product ? product : undefined;
};

/////////////////////////////////////////////////////////////////////////////////////

const getOrderYears = function () {
  const yearsSet = new Set(
    orderItems.map(orderItem => orderItem.orderDate.slice(0, 4)).sort()
  );
  const uniqueYears = Array.from(yearsSet);
  return uniqueYears;
};

const getOrdersInYear = function (year) {
  if (!year) return console.log('forgot year');
  return orderItems.filter(
    orderItem => orderItem.orderDate.slice(0, 4) === String(year)
  );
};

const getTotalAmountYear = function (year) {
  return (
    Math.round(
      getOrdersInYear(year)
        .map(orderItem => orderItem.price * orderItem.quantity)
        .reduce((acc, val) => acc + val, 0) * 100
    ) / 100 // Kaufmännsiches Runden
  );
};

const getTotalAmountsYearMap = function () {
  const orderYears = getOrderYears();
  const totalAmountsYearMap = new Map();
  orderYears.forEach(year =>
    totalAmountsYearMap.set(year, getTotalAmountYear(year))
  );
  return totalAmountsYearMap;
};

const getYearWithHighestTotalAmount = function () {
  const totalAmountsYear = getTotalAmountsYearMap();
  let maxAmount = 0.0;
  let maxYear = '';
  let maxAmountAndYear = new Map();

  totalAmountsYear.forEach((value, key) => {
    if (value > maxAmount) {
      maxAmount = value;
      maxYear = key;
    }
  });
  maxAmountAndYear.set('year', maxYear);
  maxAmountAndYear.set('amount', maxAmount);
  return maxAmountAndYear;
};

const getYearWithLowestTotalAmount = function () {
  const totalAmountsYear = getTotalAmountsYearMap();
  let minAmount = Infinity;
  let minYear = '';
  let minAmountAndYear = new Map();

  totalAmountsYear.forEach((value, key) => {
    if (value < minAmount) {
      minAmount = value;
      minYear = key;
    }
  });
  minAmountAndYear.set('year', minYear);
  minAmountAndYear.set('amount', minAmount);
  return minAmountAndYear;
};

function getProductReportObj(productId) {
  const productReport = {
    name: '',
    totalAmount: 0.0,
    totalUnitsSold: 0,
    lowestUnitsOnOrder: 0,
    highestUnitsOnOrder: 0,
  };

  productReport.name = getProductName(productId);
  productReport.totalAmount = getTotalAmount(productId);
  productReport.totalUnitsSold = getTotalUnitsSold(productId);
  productReport.lowestUnitsOnOrder = getLowestUnitsOrder(productId);
  productReport.highestUnitsOnOrder = getHighestUnitsOrder(productId);
  console.table(productReport);
  console.log(
    `${productReport.name} wurde bisher ${productReport.totalUnitsSold}x verkauft. Der Gesamtumsatz beträgt ${productReport.totalAmount}€. Die niedrigste Bestellung war ${productReport.lowestUnitsOnOrder} Teil und die höchste ${productReport.highestUnitsOnOrder} Teile.`
  );
}

getProductReportObj(2);

function getYearReport() {
  const yearReport = {
    bestYear: '',
    worstYear: '',
  };
  yearReport.bestYear = getYearWithHighestTotalAmount();
  yearReport.worstYear = getYearWithLowestTotalAmount();

  console.log(
    `Das Beste Jahr war ${yearReport.bestYear.get(
      'year'
    )} mit einem Umsatz von ${yearReport.bestYear.get(
      'amount'
    )}€ und das schlechteste Jahr war ${yearReport.worstYear.get(
      'year'
    )} mit einem Umsatzu von ${yearReport.worstYear.get('amount')}€`
  );
}

getYearReport();
