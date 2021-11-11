let d = new Date();

document.getElementById("year").textContent = d.getFullYear();

let lastUp = new Date(document.lastModified);
let day = (lastUp.getMonth() + 1) + "/" + lastUp.getDate() + "/" + lastUp.getFullYear();
let hour = String(lastUp.getHours());
let minute = String(lastUp.getMinutes());
let second = String(lastUp.getSeconds());
document.getElementById("update").innerHTML = day.padStart(2, '0') + " " + hour.padStart(2, '0') + ':' + minute.padStart(2, '0') + ':' + second.padStart(2, '0');
