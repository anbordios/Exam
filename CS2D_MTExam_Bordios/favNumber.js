// Declare a variable to hold the favorite number.
let favNumber = 15;

// Initialize the counter.
let guess = 0;

// Using while loop and prompt() window object to let the user guess the correct favorite number.
while(guess != favNumber) {
    guess = prompt("Guess my favorite number:");
    
    if (guess > favNumber) {
        console.log("too high");
    } else if (guess > favNumber) {
        console.log("too low");
    } else {
        console.log("correct");
    }
}
