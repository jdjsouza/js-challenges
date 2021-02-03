// Challenge as it was explained to me:
// create a function that takes in two values: price, coins
// price is 1.25 format and coins = [1, 2, 3, 4] quarters, dimes, nickles, pennies
// make a function that will take the coins and provide change in coins
// function will return all coins handed in if there are not enough
// kind of like a vending machine

let quarter = 0.25;
let dime = 0.1;
let nickle = 0.05;
let penny = 0.01;

let cost = 1.25;
let payment = [8, 12, 12, 15];

function purchase(price, coins) {
  console.log(coins);
  let total =
    coins[0] * quarter + coins[1] * dime + coins[2] * nickle + coins[3] * penny;
  console.log(total);
  if (total < price) {
    return `Not enough money, refund: ${coins[0]} quarters, ${coins[1]} dimes, ${coins[2]} nickles, and ${coins[3]} pennies.`;
  } else {
    let balance = total - price;
    let change = [0, 0, 0, 0];
    console.log(balance.toFixed(2));
    while (balance.toFixed(2) != 0.0) {
      if (balance > quarter) {
        balance -= quarter;
        change[0] += 1;
      } else if (balance > dime && balance < quarter) {
        balance -= dime;
        change[1] += 1;
      } else if (balance > nickle && balance < dime) {
        balance -= nickle;
        change[2] += 1;
      } else if (balance > penny && balance < nickle) {
        balance -= penny;
        change[3] += 1;
      }
    }
    return `Thank you for your purchase, here is your change: ${change[0]} quarters, ${change[1]} dimes, ${change[2]} nickles, and ${change[3]} pennies. Thank you, come again.`;
  }
  console.log(total);
}

console.log(purchase(cost, payment));
