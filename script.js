const btn = document.querySelector('#convert-btn');
const degree = document.querySelector('#degree');
const unit = document.querySelector('#unit');
const result = document.querySelector('#result');

btn.onclick = () => {

    // Reset result style each time
    result.style.color = "#222";

    // 1. Read and trim input
    const trimmed_degree = degree.value.trim();

    // 2. Empty input check
    if (trimmed_degree === "") {
        result.textContent = "Please enter a temperature value";
        result.style.color = "red";
        return;
    }

    // 3. Convert to number
    const degree_value = Number(trimmed_degree);

    // 4. Invalid number check
    if (isNaN(degree_value)) {
        result.textContent = "Please enter a valid number";
        result.style.color = "red";
        return;
    }

    // 5. Read unit
    const value = unit.value;

    // 6. Unit not selected check
    if (value === "") {
        result.textContent = "Please select a unit";
        result.style.color = "red";
        return;
    }

    // 7. Conversion logic
    let ans;
    let outputUnit;

    if (value === "C") {
        ans = (degree_value * 1.8) + 32;
        outputUnit = "℉";
    } else {
        ans = ((degree_value - 32) * 5) / 9;
        outputUnit = "℃";
    }

    // 8. Show result
    result.textContent = ans.toFixed(2) + " " + outputUnit;
    result.style.color = "#4ba517";

};
