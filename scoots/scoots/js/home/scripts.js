// Weather API

let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=4208ccf753a6fe1968216e37c1d5ae7c";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });

apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=4208ccf753a6fe1968216e37c1d5ae7c";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let forecasts = jsObject.list.filter(get1800);

        function get1800(data) {
            return data.dt_txt.includes("12:00:00");
        }

        let test = new Date();
        let currDate = test.getDay();

        for (let i = 0; i < forecasts.length; i++) {
            let card = document.createElement('article');

            let date = document.createElement("h3");
            date.innerText = days[(currDate + i) % 7];
            card.appendChild(date)

            let imagesrc = 'https://openweathermap.org/img/w/' + forecasts[i].weather[0].icon + '.png';
            let image = document.createElement('img');
            image.setAttribute('src', imagesrc);
            image.setAttribute('alt', forecasts[i].weather[0].description);
            card.appendChild(image)

            let temp = document.createElement("p");
            temp.innerText = forecasts[i].main.temp + "°F";
            card.appendChild(temp)

            document.querySelector('div.forecast').appendChild(card);
        }
    });