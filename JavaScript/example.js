console.log("Hello, World!");
document.write("Hello, World!");

let name = "Lee"; // setting name to Lee
console.log(name); // should output "Lee"
name = "Taylor"; // changing name to Taylor
console.log(name); // should output "Taylor"

const colour = "blue"; // setting colour to blue
console.log(colour); // should output "blue"
// colour = "red"; // changing colour to red
// console.log(colour); // should throw an error

console.warn("Yellow Warning is here");
console.error("Red and Angry Message Here");


alert("This is the end!");

// 7/2
console.log("7 divided by 2");
console.log(7/2); // should output 3.5

// "5" + 3
console.log("String 5 plus 3");
console.log("5" + 3); // should concat them together to "53"

// true + 1
console.log("Boolean true plus 1");
console.log(true + 1); // should output 2

// turning 135 minutes into hours and minutes
console.log("135 minutes into hours and minutes");
console.log(Math.floor(135/60) + "h " + (135%60) + "m");

// sharing 10 pizzas between 3, how many each, and how many left?
console.log("10 pizzas shared between 3 people");
console.log(Math.floor(10/3) + " each, " + (10%3) + " left");


// Creating a receipt
const item = "Cookie", quantity = 12, price = 150;
console.log("Creating a receipt");
console.log("Using concatenation");
console.log(quantity + " " + item + " @ £" + (price/100).toFixed(2) + " = £" + (quantity * (price/100)).toFixed(2));
// with interpolation
console.log("Using interpolation");
console.log(`${quantity} ${item} @ £${(price/100).toFixed(2)} = £${(quantity * (price/100)).toFixed(2)}`);

// Split the bill
const people = 3, tip_rate = 0.125;
const total = quantity * price;
console.log(total);

const tip = total * tip_rate;
console.log("Tip = " + tip + "pence");
const total_with_tip = total + tip;
console.log("Total with tip = £" + (total_with_tip/100).toFixed(2));

const share = total_with_tip / people;
console.log("Each person pays £" + (share/100).toFixed(2));

console.log(`Total with ${tip_rate * 100}% tip rate = £${(total*tip_rate).toFixed(2)}`);