const input = require("prompt-sync")();

let waterReserve = 400;
let milkReserve = 540;
let coffeeReserve = 120;
let cupsReserve = 9;
let moneyReserve = 550;
let sugarReserve = 150;

while(true) {
    console.log('\nWrite action (buy, fill, take, remaining, exit): ')
    let action = input();

    switch (action) {
        case "buy": coffeeSelection(); break;
        case "fill": fillReserve(); break;
        case "take": console.log(`I gave you $${moneyReserve}`)  
                     moneyReserve = 0;
                     break;
        case "remaining": printReserve(); break
        case "exit": return false; break
}
}

function coffeeSelection() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - water, back - to main menu: ");
    let coffeeChoice = input();
    switch (coffeeChoice) {
        case "1": coffeeMaker(250,0,16,1,4); break;
        case "2": coffeeMaker(350,75,20,1,7); break;
        case "3": coffeeMaker(200, 100,12,1,6); break;
        case "4": coffeeMaker(250, 0,0,1,1); break;
        case "back": break;
    }
}

function coffeeMaker(waterRecipe, milkRecipe, coffeeRecipe, cupsRecipe, moneyRecipe) {
    console.log("Do you want to add some sugar? (y/n): ");
    let sugarAdd = input();
    switch (sugarAdd) {
        case "y": if (sugarReserve < 50) console.log("Sorry, not enough sugar!") 
                  else sugarReserve -= 50;
                  break;
        case "n": break;
    }

    if (waterReserve < waterRecipe) console.log("Sorry, not enough water!")
    else if (milkReserve < milkRecipe) console.log("Sorry, not enough milk!")
    else if (coffeeReserve < coffeeRecipe) console.log("Sorry, not enough coffee!")
    else if (cupsReserve < cupsRecipe) console.log("Sorry, not enough cups!")
    else {   waterReserve -= waterRecipe;
             milkReserve -= milkRecipe;
             coffeeReserve -= coffeeRecipe;
             cupsReserve -= cupsRecipe;
             moneyReserve += moneyRecipe;
             console.log("I have enough resources, making you a coffee!");
    }
}

function fillReserve() {
    console.log("Write how many ml of water you want to add: ");
    let waterFill = +input();
    console.log("Write how many ml of milk you want to add: ");
    let milkFill = +input();
    console.log("Write how many grams of coffee beans you want to add: ");
    let coffeeFill = +input();
    console.log("Write how many disposable cups you want to add: ");
    let cupsFill = +input();
    console.log("Write how many sugar you want to add: ");
    let sugarFill = +input();

    waterReserve += waterFill;
    milkReserve += milkFill;
    coffeeReserve += coffeeFill;
    cupsReserve += cupsFill;
    sugarReserve += sugarFill;
}

function printReserve() {
    console.log(`The coffee machine has:
${waterReserve} ml of water
${milkReserve} ml of milk
${coffeeReserve} g of coffee beans
${cupsReserve} disposable cups
${moneyReserve} of money
${sugarReserve} g of sugar`);
}