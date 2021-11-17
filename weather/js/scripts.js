const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();

document.getElementById("date").innerText = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
document.getElementById("year").innerText = date.getFullYear();

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}