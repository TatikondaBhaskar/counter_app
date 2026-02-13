let count = 0;
const maxLimit = 10;
const minLimit = 0;

const countDisplay = document.getElementById("count");
const message = document.getElementById("message");
const buttons = document.querySelectorAll("button");

const decrementBtn = buttons[0];
const incrementBtn = buttons[1];

function updateUI() {
    countDisplay.innerText = count;

    decrementBtn.disabled = count === minLimit;
    incrementBtn.disabled = count === maxLimit;

    if (count === maxLimit) {
        message.innerText = "Maximum limit reached!";
    } else if (count === minLimit) {
        message.innerText = "Minimum limit reached!";
    } else {
        message.innerText = "";
    }
}

function increment() {
    if (count < maxLimit) {
        count++;
        updateUI();
    }
}

function decrement() {
    if (count > minLimit) {
        count--;
        updateUI();
    }
}

updateUI();
