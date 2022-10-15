// Last date modified

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

// current year

let copyrightYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = copyrightYear;

// current date and time

let currentDate = new Date().toLocaleDateString('en-UK', { weekday:"long", day:"numeric", month:"long", year:"numeric"})
document.getElementById("currentDate").textContent = currentDate;

// Button

function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById("hamburger-button");

x.onclick = toggleMenu;
