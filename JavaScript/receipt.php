<?php
echo "Hello, World!"; // Output to the browser
//error_log('Hello!'); // Output to a server side log
//echo "<script>console.log('Hello!');</script>"; // Output to the browser console runs a single line JavaScript basically.

$name = "Lee";
echo $name;
$name = "Taylor";
echo $name;

const colour = "blue";
echo colour;
$colour = "red";
echo colour;
// didn't error, but didn't change the colour

echo "\n";
echo (7/2);

echo "\n";
echo ("5" + 3); // This is coercion - the string is changed to an integer first and then calculated.

echo "\n";
echo (true + 1); // Gives 2 because "true" is a boolean but has the value 1... So 1 + 1 = 2

$totalMins = 135;
$mins = $totalMins % 60;
$hours = floor($totalMins / 60);
echo "\n";
echo $totalMins . ' minutes is ' . $hours . ' hours and ' . $mins . ' minutes.';

// Sharing 10 pizza slices between 3. How many each and how many left?
echo "\n";
$totalSlices = 10;
$numPeople = 3;
$leftover = $totalSlices % $numPeople;
echo "\n";
echo $totalSlices . ' pizza slices shared between ' . $numPeople . ' people - Each gets ' . floor($totalSlices / $numPeople) . ' slices, with ' . $leftover . ' remaining.';
echo "\n";

// Formatting a receipt line
echo "\n";
$item = "Cookie";
$price = 1.50;
$quantity = 12;
$subTotal = $price * $quantity;
echo $quantity . " x " . $item . " @ £" . number_format($price, 2) . " = £" . number_format($subTotal, 2);

// Split the bill
echo "\n";
$tipRate = 0.20;
$tipAmount = $subTotal * $tipRate;
echo $tipRate . " x £" . number_format($subTotal, 2) . " = £" . number_format($tipAmount, 2);
echo "\n";
$grandTotal = $subTotal + $tipAmount;
echo "Grand Total: £" . number_format($grandTotal, 2);
echo "\n";
echo "Each Person's Share: £" . number_format($grandTotal / 3, 2);

// Much happier with the above nor I've re-written it myself in PHP!