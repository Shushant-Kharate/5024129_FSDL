EXPERIMENT 09
Implementation using Node.js: Installation and Configuration, callbacks
Implementation using Node.js: Event loops, Creating express app, implement Mongodb application.
Implementation using Node.js: Installation and Configuration, callbacks
Installation and Configuration:
@harshit-s23/workspaces/5024162_FSDL/week18_15042026/nodejs-demo (main) $ node -v
v24.11.1
Callbacks:
callback.js
// Function with callback
function calculate(a, b, callback) {
console.log("Calculating...");
callback(a, b);
}
// Callback function
function add(x, y) {
}
console.log("Sum = " + (x + y));
// Calling function
calculate(5, 3, add);
@harshit-s23/workspaces/5024162_FSDL/week10_15042026 (main) $ node callback.js
Calculating...
Sum = 8
@harshit-s23/workspaces/5024162 FSDL/week10 15042026 (main) $
Implementation using Node.js: Event loops, Creating express app, implement
Mongodb application.
eventloops.js
console.log("Start");
setTimeout(() => {
console.log("Async Task");
}, 0);
console.log("End");
@
harshit-s23/workspaces/5024162_FSDL/week10_15042026 (main) $ node eventloop.j
Start
End
Async Task
@harshit-s23/workspaces/5024162_FSDL/week10 15042026 (main) $
express.js
const express = require('express');
const app = express();
app.use(express.json());
// Home route
app.get('/', (req, res) => {
res.send("Student Notes App Running");
});
app.listen(3000, () => {
console.log("Server running on port 3000");
});
@harshit-s23/workspaces/5024162_FSDL/week10_15042026 (main) $ node express.js
Server running on port 3000