const prompt = require("prompt-sync")();

//Project - Restaurant v1.0

const menu = {
  1: "Pizza",
  2: "Burger",
  3: "Pasta",
  4: "Fries",
  5: "Coke",
};

const price = {
  "Pizza": 100,
  "Burger": 200,
  "Pasta": 300,
  "Fries": 400,
  "Coke": 500,
};

console.log("Welcome to our restaurant!");
console.log("Here is our menu:");
console.log(menu);

let waiting = true;
let order = [];

function takeOrder() {
  
  while (waiting) {
    const choice = prompt("Enter your choices to order(1-5): ");
    
    if (choice === "") {
      waiting = false;
    } else {
      for (let i = 0; i < choice.length; i++) {
        const item = choice[i];
        if (menu[item]) {
          order.push(menu[item]);
        }
      }
    }
  }
  
  return order;
}


function totalBill(order) {
  let totalBill = 0;
  for (let i = 0; i < order.length; i++) {
    const item = order[i];
    if (price[item]) {
      totalBill += price[item];
    }
  }
  return totalBill;
}


function restaurant() {
  const order = takeOrder();

  console.log("You have ordered: " + order);
  console.log("Your total bill is: " + totalBill(order));
}
restaurant();
