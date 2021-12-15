const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// For the year and date
let date = new Date();

document.getElementById("year").textContent = date.getFullYear();
document.getElementById("latest-update").textContent = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

// For the small nav menu
function toggleMenu() {
    document.getElementById("navBar").classList.toggle("hide");
}

window.onresize = () => { if (window.innerWidth > 760) document.getElementById("navBar").classList.remove('hide') };