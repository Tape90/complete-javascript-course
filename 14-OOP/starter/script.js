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
const orderItems = [
  {
    id: 1,
    orderId: 1,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 3,
  },
  {
    id: 2,
    orderId: 1,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 2,
  },
  {
    id: 3,
    orderId: 2,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 1,
  },
  {
    id: 4,
    orderId: 2,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 1,
  },
  {
    id: 5,
    orderId: 3,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 2,
  },
  {
    id: 6,
    orderId: 3,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 1,
  },
  {
    id: 7,
    orderId: 3,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 3,
  },
  {
    id: 8,
    orderId: 3,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 2,
  },
  {
    id: 9,
    orderId: 4,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 4,
  },
  {
    id: 10,
    orderId: 4,
    productId: 3,
    productName: 'Product 3',
    price: 14.99,
    quantity: 2,
  },
  {
    id: 11,
    orderId: 4,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 1,
  },
  {
    id: 12,
    orderId: 4,
    productId: 2,
    productName: 'Product 2',
    price: 19.99,
    quantity: 3,
  },
  {
    id: 13,
    orderId: 5,
    productId: 1,
    productName: 'Product 1',
    price: 10.99,
    quantity: 1,
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

//aus der Order die customerID auslesen un die dazugehörige "order"id. Danach die Order ID's eines Nutzers in den orderItems suchen und alle zusammen addieren. Danach per customerID den Namen auslesen und alles ausgeben

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

//getTotalProductsSelled(2);

//////////////////////////////////////////////////////////////////////////

// const getTotalAmount = function (productId) {
//   const product = getProduct(productId);

//   if (!product) return 'Product not found!';

//   let productTotalAmount = 0.0;

//   const productOrderItemsArray = orderItems.filter(
//     orderItem => orderItem.productId === productId
//   );

//   productTotalAmount = productOrderItemsArray
//     .map(order => order.price * order.quantity)
//     .reduce((acc, val) => acc + val, 0);

//   return Number(productTotalAmount.toFixed(2));
// };

// const getTotalUnitsSold = function (productId) {
//   const product = getProduct(productId);

//   if (!product) return 'Product not found!';

//   let productTotalUnitSold = 0;

//   const productOrderItemsArray = orderItems.filter(
//     orderItem => orderItem.productId === productId
//   );

//   productTotalUnitSold = productOrderItemsArray
//     .map(order => order.quantity)
//     .reduce((acc, val) => acc + val, 0);

//   return productTotalUnitSold;
// };

// const getLowestUnitsOrder = function (productId) {
//   const product = getProduct(productId);

//   if (!product) return 'Product not found!';

//   let lowestUnitsOrder = 0;

//   const productOrderItemsArray = orderItems.filter(
//     orderItem => orderItem.productId === productId
//   );

//   lowestUnitsOrder = Math.min(
//     ...productOrderItemsArray.map(order => order.quantity)
//   );

//   return lowestUnitsOrder;
// };

// const getHighestUnitsOrder = function (productId) {
//   const product = getProduct(productId);

//   if (!product) return 'Product not found!';

//   let highestUnitsOrder = 0;

//   const productOrderItemsArray = orderItems.filter(
//     orderItem => orderItem.productId === productId
//   );

//   highestUnitsOrder = Math.max(
//     ...productOrderItemsArray.map(order => order.quantity)
//   );

//   return highestUnitsOrder;
// };

// const getProductName = function (productId) {
//   const product = getProduct(productId);
//   return product ? product.name : 'Product not found';
// };

// const getProduct = function (productId) {
//   const product = products.find(product => product.id === productId);
//   return product ? product : undefined;
// };

// function getProductReportObj(productId) {
//   const setProduct = function (productId) {
//     return products.find(product => product.id === productId);
//   };

//   const productReport = {
//     // setProduct: function (productId) {
//     //   this.product = ;
//     // },

//     product: this.setProduct(productId),
//     totalAmount: 0.0,
//     totalUnitsSold: 0,
//     lowestUnitsOnOrder: 0.0,
//     highestUnitsOnOrder: 0.0,
//   };
//   return productReport;
// }

//   productReport.name = getProductName(productId);
//   productReport.totalAmount = getTotalAmount(productId);
//   productReport.totalUnitsSold = getTotalUnitsSold(productId);
//   productReport.lowestUnitsOnOrder = getLowestUnitsOrder(productId);
//   productReport.highestUnitsOnOrder = getHighestUnitsOrder(productId);
//   console.table(productReport);
//   console.log(
//     `${productReport.name} wurde bisher ${productReport.totalUnitsSold}x verkauft. Der Gesamtumsatz beträgt ${productReport.totalAmount}€. Die niedrigste Bestellung war ${productReport.lowestUnitsOnOrder} Teil und die höchse ${productReport.highestUnitsOnOrder} Teile.`
//   );
// }

// console.log(getProductReportObj(3));

//soll sub funktionen für jedes einzelen Property aufrufen
