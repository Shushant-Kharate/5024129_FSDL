const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = []; // Array

function validateInput(value) {
    if (value.trim() === "") {
        return "Input cannot be empty!";
    }

    if (isNaN(value)) {
        return "Only numbers are allowed!";
    }

    if (Number(value) < 0) {
        return "Number cannot be negative!";
    }

    return null;
}

function askNumber() {
    rl.question("Enter a number (type 'stop' to finish): ", function(input) {

        if (input.toLowerCase() === "stop") {

            console.log("\nFinal Array:", numbers);
            console.log("Total Numbers:", numbers.length);

            if (numbers.length > 0) {
                let sum = 0;

                for (let i = 0; i < numbers.length; i++) {
                    sum += numbers[i];
                }

                console.log("Sum:", sum);
                console.log("Average:", sum / numbers.length);
            }

            rl.close();
            return;
        }

        let error = validateInput(input);

        if (error) {
            console.log("Validation Error:", error);
        } else {
            numbers.push(Number(input));
            console.log("Added Successfully ✅");
        }

        askNumber(); // Repeat
    });
}

askNumber();
