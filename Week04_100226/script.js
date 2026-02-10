// ================= CLASS =================
class Counter {
    constructor(startValue) {
        this.value = startValue;
    }

    increment() {
        this.value++;
    }

    decrement() {
        this.value--;
    }

    reset() {
        this.value = 0;
    }
}

// ================= OBJECT =================
let counterInfo = {
    max: 10,
    min: -10
};

// ================= VARIABLE =================
let counter = new Counter(0);

// ================= FUNCTION =================
function updateDisplay() {

    let countElement = document.getElementById("count");
    let message = document.getElementById("message");

    countElement.innerText = counter.value;

    // ================= CONDITION =================
    if (counter.value > counterInfo.max) {
        message.innerText = "Too High!";
    } 
    else if (counter.value < counterInfo.min) {
        message.innerText = "Too Low!";
    } 
    else {
        message.innerText = "Normal Range";
    }
}

// ================= EVENTS =================
document.getElementById("incBtn").addEventListener("click", function () {
    counter.increment();
    updateDisplay();
});

document.getElementById("decBtn").addEventListener("click", function () {
    counter.decrement();
    updateDisplay();
});

document.getElementById("resetBtn").addEventListener("click", function () {
    counter.reset();
    updateDisplay();
});

// ================= LOOP (Demo Purpose) =================
// Just to show loop usage
for (let i = 0; i < 1; i++) {
    updateDisplay();
}
