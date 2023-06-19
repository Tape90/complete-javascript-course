const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
];

const orders = [
  { id: 1, customerId: 1, location: 'Store A' },
  { id: 2, customerId: 1, location: 'Store B' },
  { id: 3, customerId: 2, location: 'Store C' },
  { id: 4, customerId: 3, location: 'Store A' },
];

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const orderItems = [
  { orderId: 1, productId: 1, quantity: 2 },
  { orderId: 1, productId: 2, quantity: 1 },
  { orderId: 2, productId: 3, quantity: 3 },
  { orderId: 3, productId: 1, quantity: 1 },
  { orderId: 3, productId: 2, quantity: 2 },
  { orderId: 4, productId: 3, quantity: 4 },
];

// Schreibe eine Funktion, die alle Kunden ausgibt

function getAllCustomers() {
  const copiedCustomers = [...customers];
  return copiedCustomers;
}

function getAllCustomerNames() {
  const copiedCustomers = getAllCustomers();
  const customerNames = copiedCustomers.map(customer => customer.name);
  return customerNames;
}

function getListCustomerNames() {
  const customerNames = getAllCustomerNames();
  //   console.log(customerNames.join(', '));
  return customerNames;
}

getListCustomerNames();

// Schreibe eine Funktion, die den Namen und die E-Mail-Adresse des Kunden mit der ID 2 ausgibt

function getCustomerInfo(customerId) {
  const myCustomer = customers.find(customer => customer.id === customerId);
  let customerInfo = new Map();
  customerInfo.set('id', myCustomer.id);
  customerInfo.set('name', myCustomer.name);
  customerInfo.set('email', myCustomer.email);
  return customerInfo;
}

// console.log(getCustomerInfo(2));

// Schreibe eine Funktion, die alle Bestellungen für einen bestimmten Kunden (nach ID) ausgibt:

// Eingabe: Kunden-ID
// Erwartete Ausgabe: Bestellungen des Kunden mit den entsprechenden Details

function getCustomerOrders(customerId) {
  const customerOrders = orders.filter(
    order => order.customerId === customerId
  );
  return customerOrders;
}

// console.log(getOrderCustomer(1));

function getOrderItems(orders) {
  const myOrderItems = [];
  orders.forEach(o => {
    orderItems.filter(orderItem => {
      if (orderItem.orderId === o.id) {
        myOrderItems.push(orderItem);
      }
    });
  });

  return myOrderItems;
}

function getCustomerOrderItems(customerId) {
  const customerOrders = getCustomerOrders(customerId);
  const myOrderItems = getOrderItems(customerOrders);
  return myOrderItems;
}

// console.table(getCustomerOrderItems(1));

// Schreibe eine Funktion, die den Gesamtbetrag einer Bestellung berechnet:
// Eingabe: Bestellungs-ID
// Erwartete Ausgabe: Gesamtbetrag der Bestellung

function getOrderAmount(orderId) {
  let myOrderItems;
  let amounts = [];
  let totalAmount = 0.0;

  myOrderItems = orderItems.filter(orderItem => orderItem.orderId === orderId);
  myOrderItems.forEach(orderItem => {
    let product = products.find(product => {
      product.id === orderItem.productId;
      return product;
    });
    amounts.push(product.price * orderItem.quantity);
  });

  totalAmount = amounts.reduce((acc, val) => acc + val, 0);
  return totalAmount;
}

// console.log(getOrderAmount(1));

// Schreibe eine Funktion, die alle Produkte einer Bestellung auflistet:

// Eingabe: Bestellungs-ID
// Erwartete Ausgabe: Liste der Produkte mit ihren Details (Name, Preis, Anzahl)

function getOrderProducts(orderId) {
  let myOrderItems = [];
  let orderInfo = new Map();

  myOrderItems = orderItems.filter(orderItem => orderItem.orderId === orderId);
  myOrderItems.forEach(orderItem => {
    products.find(product => {
      if (product.id === orderItem.productId) {
        let myProduct = {};
        myProduct.name = product.name;
        myProduct.price = product.price;
        myProduct.quantity = orderItem.quantity;
        orderInfo.set(product.name, myProduct);
      }
    });
  });

  return orderInfo;
}

class StoreReport {
  constructor(store) {
    this.store = store;
    this.initialize();
  }

  initialize() {
    this.classOrderItems = this.getOrderItemsByLocation();
    this.orderValues = this.getStoreOrderValues();
    this.totalAmount = this.getTotalAmountStore();
  }

  update() {
    this.initialize();
  }

  getOrderItemsByLocation() {
    let myOrders = orders.filter(o => o.location === this.store);
    let myOrderItems = [];

    myOrders.forEach(order => {
      let orderItem = orderItems.filter(oi => oi.orderId === order.id);
      myOrderItems.push(orderItem);
    });
    return myOrderItems.flat(Infinity);
  }

  getStoreOrderValues() {
    let orderItemsWithProducts = [];

    this.classOrderItems.forEach(el => {
      products.find(product => {
        if (product.id === el.productId) {
          let resultObj = {};
          resultObj.name = product.name;
          resultObj.price = product.price;
          resultObj.quantity = el.quantity;

          orderItemsWithProducts.push(resultObj);
        }
      });
    });
    return orderItemsWithProducts;
  }

  getTotalAmountStore() {
    const value = this.orderValues.map(el => el.price * el.quantity);
    const totalAmount = value.reduce((acc, cur) => acc + cur);
    return totalAmount;
  }
}

function updateOrder() {
  orders.push({ id: 1, customerId: 1, location: 'Store A' });
}

let storeA = new StoreReport('Store A');
console.table(storeA);

updateOrder();

storeA.update();

console.table(storeA);
