// Total numbers of drinks ordered
const totalDrinks = document.getElementById('totalDrinks');

let totalOrder = Number(window.localStorage.getItem("totalOrder"));

// drinksTotal.textContent = drinksMade
if (totalOrder !== 0){
    totalDrinks.textContent = `Total number of custom orders made: ${totalOrder}`}
    else{
        totalDrinks.textContent = `You are yet to create a custom drink, make a fresh fruit mix!`
    }
