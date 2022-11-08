// In order for javaScript to communicate with the menu we need to add class or id to html
// function toggleMenu() {
//     console.log("It Worked!") /* when click on hamburgerBtn, the console will print this word to prove that the following code is correct*/
// }

// do something useful with the function
// use javaScript to add and remove a class from html
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// the date at the middle screen
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// the last modified date at footer
document.querySelector("#lastModified").textContent =  `Last Modification: ${document.lastModified}`;

date =  new Date()
const dayOfWeek = date.getDay()

let message;

if (dayOfWeek >= 1  && dayOfWeek <=2) {
    message = "🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}else{
    message = ''
}
document.querySelector('#meeting').textContent = message
document.querySelector('#small-meeting').textContent = message

if ((day === 1) || (day === 2)) {banner.style.display = "block"}
else {banner.style.display = "none"}
const banner = document.querySelector("#banner");
let day = date.getDay();

if ((day === 1) || (day === 2)) {banner.style.display = "block"}
else {banner.style.display = "none"}
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();