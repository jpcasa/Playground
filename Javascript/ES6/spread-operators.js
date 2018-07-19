'use strict';

// EXAMPLE 1

const originalFlavors = ['Choco', 'Vainila'];

const newFlavors = ['Mint', 'Pistachio'];

const inventory = ['Strawberry', ...originalFlavors, 'Nutella', ...newFlavors];

console.log(inventory);

// EXAMPLE 2

function mySecondFunction(name, iceCream) {
  console.log(`${name} really likes ${iceCream} ice cream`);
}

let args = ['Gabe', 'Vainilla'];

mySecondFunction(...args);
