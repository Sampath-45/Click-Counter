let counterValueEl = document.getElementById("counterValue");
let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterValueEl.textContent = 0;
} else {
    counterValueEl.textContent = clickCount;
}

function onIncrement() {
    let previousCountValue = counterValueEl.textContent;
    let updatedCountValue = parseInt(previousCountValue) + 1;

    localStorage.setItem("clickCount", updatedCountValue);
    counterValueEl.textContent = updatedCountValue;
}