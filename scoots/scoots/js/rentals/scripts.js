let rentalsFile = "json/rentals.json";

fetch(rentalsFile)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });