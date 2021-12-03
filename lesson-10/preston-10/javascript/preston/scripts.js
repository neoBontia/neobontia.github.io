const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();

document.getElementById("date").innerText = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
document.getElementById("year").innerText = date.getFullYear();

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

if (date.getDay() == 5) { 
    document.getElementById("banner").style.display = "block";
}


// Weather API

let apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=4208ccf753a6fe1968216e37c1d5ae7c";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('currTemp').textContent = jsObject.main.temp;
        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;

        /*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);*/


        // Wind Chill

        let temperature = jsObject.main.temp;
        let windSpeed = jsObject.wind.speed;

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
    });