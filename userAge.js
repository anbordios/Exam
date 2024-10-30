// Declare the variable age and store the value.
let age = 20;

// Using nested if-else statement.
if (age < 5) {
    console.log("Toddler");
} else {
    if (age <= 12) {
        console.log("Child");
    } else {
        if (age <= 19) {
            console.log("Teenager");
        } else {
            if (age <= 35) {
                console.log("Young Adult");
            } else {
                if (age <= 60) {
                    console.log("Middle-Aged");
                } else {
                    console.log("Senior");
                }
            }
        }
    }
}
