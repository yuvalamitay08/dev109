// Ask the user for a number from 0 to 10
let userInput = prompt("Enter a number between 0 and 10:");

// Convert input to number and validate it
let num = parseInt(userInput);
if (isNaN(num) || num < 0 || num > 10) {
  num = 0; // Default to 0 if invalid
}

// Create multiplication table message
let msg = "<h2>Multiplication Table</h2><br>";
for (let i = 1; i <= 9; i++) {
  msg += `${i} x ${num} = ${i * num}<br>`;
}

// Display result in HTML page
document.getElementById("output").innerHTML = msg;
