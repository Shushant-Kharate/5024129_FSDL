const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let users = []; // Array to store user objects

// Function to calculate age using Date
function calculateAge(dob) {
    let today = new Date();
    let birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || 
       (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function askUser() {

    rl.question("Enter your name: ", function(name) {

        // STRING VALIDATION
        if (name.trim() === "") {
            console.log("Name cannot be empty!");
            return askUser();
        }

        // String methods
        name = name.trim();
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

        rl.question("Enter your DOB (YYYY-MM-DD): ", function(dob) {

            let birthDate = new Date(dob);

            // DATE VALIDATION
            if (isNaN(birthDate.getTime())) {
                console.log("Invalid Date Format!");
                return askUser();
            }

            let age = calculateAge(dob);

            // Store in array as object
            let user = {
                name: name,
                dob: dob,
                age: age
            };

            users.push(user);

            console.log("\nUser Added Successfully ✅");
            console.log("Hello " + name + ", you are " + age + " years old.");

            console.log("\nCurrent Date:", new Date().toDateString());

            console.log("\nAll Users:");
            console.log(users);

            rl.close();
        });
    });
}

askUser();
