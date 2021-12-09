const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();

document.getElementById("date").innerText = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
document.getElementById("year").innerText = date.getFullYear();

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

if (date.getDay() == 0) { 
    document.getElementById("banner").style.display = "block";
}


// Weather API

let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=4208ccf753a6fe1968216e37c1d5ae7c";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('currTemp').textContent = jsObject.main.temp;
        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;

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

// Forecast API

apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=4208ccf753a6fe1968216e37c1d5ae7c";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let forecasts = jsObject.list.filter(get1800);

        function get1800(data) {
            return data.dt_txt.includes("18:00:00");
        }

        console.log(forecasts)
        let test = new Date();
        let currDate = test.getDay();

        for (let i = 0; i < forecasts.length; i++) {
            let card = document.createElement('article');

            let date = document.createElement("h3");
            date.innerText = days[(currDate + i) % 7];
            card.appendChild(date)

            let imagesrc = 'https://openweathermap.org/img/w/' + forecasts[i].weather[0].icon + '.png';  // note the concatenation
            let image = document.createElement('img');
            image.setAttribute('src', imagesrc);
            image.setAttribute('alt', forecasts[i].weather[0].description);
            card.appendChild(image)

            let temp = document.createElement("p");
            temp.innerText = forecasts[i].main.temp + "°F";
            card.appendChild(temp)

            document.querySelector('div.forecasts').appendChild(card);
        }
    });

// Events Box

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        let label = document.createElement("h4");
        label.innerText = "Upcoming Events";
        document.querySelector("div.events-box").appendChild(label);

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven") {
                let card = document.createElement('article');

                for (let x = 0; x < towns[i].events.length; x++) {
                    let p = document.createElement("p");
                    p.innerHTML = towns[i].events[x];
                    card.appendChild(p)
                }
                document.querySelector("div.events-box").appendChild(card);
            }
        }
    });