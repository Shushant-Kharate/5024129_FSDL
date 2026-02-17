// Function 1: Checking age
function checkAge(age) {
    try {

        if (age === "") {
            throw "Age cannot be empty!";
        }

        if (isNaN(age)) {
            throw "Age must be a number!";
        }

        if (age < 18) {
            throw "You are underage!";
        }

        console.log("Access Granted ✅");

    } catch (error) {
        console.log("Error Caught:", error);
    } finally {
        console.log("checkAge() finished execution.");
    }
}


// Function 2: Division (Error Propagation Example)
function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }

    return a / b;
}


// Using try-catch with divide
try {
    let result = divide(10, 0);
    console.log("Result:", result);
} catch (err) {
    console.log("Division Error:", err.message);
} finally {
    console.log("Division operation completed.");
}


// Calling age check
checkAge(17);
