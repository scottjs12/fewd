var price = parseInt( prompt("What's the price of the product you're buying?") );
var inventory =  prompt ("How many items are in inventory?");
var money = parseInt( prompt("How much money do you have?") );
var wish = parseInt( prompt ("How many do you wish to buy?") );

/* user has enough money and the product is in stock (there are more than zero items) */
/* user doesn't have enough money, but there are enough items, print "Not enough money */
/* user has enough money but there aren't enough items, print "Not enough inventory*/

if(money >= price && inventory > 0) {
  console.log("Purchase complete!");
} else if(money <= price && inventory >= wish) {
  console.log("Not enough money");
} else if(money >= price  && inventory <= wish) {
  console.log("Not enough inventory");
}