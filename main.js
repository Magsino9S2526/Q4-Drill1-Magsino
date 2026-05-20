// Electricity Consumption Classifier
function classifyUsage() {
    let usage = document.getElementById("usageInput").value;
    let result = document.getElementById("result");

    // Clear previous styles
    result.className = "";

    // Conditional Statements
    if (usage >= 0 && usage <= 100) {
        result.innerHTML = "Lifeline Consumer: Discounted electricity rates";
        result.classList.add("lifeline");
    } else if (usage >= 101 && usage <= 200) {
        result.innerHTML = "Low Consumption: Normal residential rate";
        result.classList.add("low");
    } else if (usage >= 201 && usage <= 300) {
        result.innerHTML = "Average Consumption: Typical electricity usage";
        result.classList.add("average");
    } else if (usage >= 301 && usage <= 500) {
        result.innerHTML = "High Consumption: Higher electricity usage";
        result.classList.add("high");
    } else if (usage > 500) {
        result.innerHTML = "Very High Consumption: Heavy electricity users";
        result.classList.add("veryhigh");
    } else {
        result.innerHTML = "⚠️ Please enter a valid kWh value.";
    }
}
