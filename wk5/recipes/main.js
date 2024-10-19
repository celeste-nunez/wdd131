import { recipes } from './recipes.js';

function random(listLength) {
    randomNum = Math.floor(Math.random()* listLength);
    return randomNum
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function renderRecipes(recipe) {
    return `
    <section class="dessertBlock">
        <div class="recipeImg"><img src="${recipe.recipeImg}" alt="recipeImg"></div>
        <div class="recipeContent">
            <div class="recipeName"><h2>${recipe.recipeName}</h2></div>      
            <span
                class="recipeStars"
                role="img"
                aria-label="Rating: ${recipe.recipeStars}"
            >
                // following 2 lines curtosey of chatGPT
                ${'⭐'.repeat(Math.floor(recipe.recipeStars))}
                ${'☆'.repeat(5 - Math.floor(recipe.recipeStars))}
            </span>
            <div class="recipeDescription hide"><p>${recipe.description}</p></div>
        </div>
    </section>
    `;
}

function init() {
    const recipe = getRandomListEntry(recipes);
    const recipeHTML = renderRecipes(recipe);
    document.body.innerHTML += recipeHTML;
}

function filter(query) {
	const filtered = recipes.filter(recipe =>
        recipe.recipeName.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase())
    );
	const sorted = filtered.sort((a,b) => a.recipeName.localeCompare(b.recipeName));
	return sorted
}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
  // convert the value in the input to lowercase
  // use the filter function to filter our recipes
  // render the filtered list

}




init();

console.log(getRandomListEntry(recipes));
const randomRecipe = getRandomListEntry(recipes);
console.log(recipeTemplate(randomRecipe));