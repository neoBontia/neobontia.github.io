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

//

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('article');

            let image = document.createElement('img');
            image.setAttribute('src', "images/home/" + towns[i].photo);
            image.setAttribute('alt', "Picture of " + towns[i].name);
            card.appendChild(image)


            let data = document.createElement('div');

            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            data.appendChild(h2);

            let motto = document.createElement('p');
            motto.textContent = towns[i].motto;
            data.appendChild(motto);

            let year = document.createElement('p');
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            data.appendChild(year);

            let pop = document.createElement('p');
            pop.textContent = "Current Population: " + towns[i].currentPopulation;
            data.appendChild(pop);

            let rain = document.createElement('p');
            rain.textContent = "Average Rainfall: " + towns[i].averageRainfall;
            data.appendChild(rain);
            
            card.appendChild(data)

            document.querySelector('div.cards').appendChild(card);
        }
    });