// Total numbers of drinks ordered
const totalDrinks = document.getElementById('totalDricks');

let totalOrder = Number(window.localStorage.getItem("totalOrder"));

// drinksTotal.textContent = drinksMade
if (totalOrder !== 0){
    drinksTotal.textContent = `Total number of custom orders made: ${totalOrder}`}
    else{
        drinksTotal.textContent = `You are yet to create a custom drink, make a fresh fruit mix!`
    }
