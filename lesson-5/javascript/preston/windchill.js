let temperature = parseInt(document.getElementById("currTemp").textContent);
let windSpeed = parseInt(document.getElementById("windSpeed").textContent);

if (temperature <= 50) {
    if (windSpeed > 3) {
        document.getElementById("windChill").textContent = parseInt(35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16) + "°F";
    }
    else {
        document.getElementById("windChill").textContent = "N/A"
    }
}
else {
    document.getElementById("windChill").textContent = "N/A"
}