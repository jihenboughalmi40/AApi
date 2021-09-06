const searchBtn = document.getElementById('search-btn');
const mealist = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBTn = document.getElementById('recipe-close-btn');
function getMeal(){
    let searchInputTxt = document.getElementById('saerch-input').nodeValue.trimEnd();
fetch('www.themealdb.com/api/json/v1/1/filter.php?i=$(searchInputTxt)')
.then(response => response.json)
.then(date => {
console.log(data);

})
}
