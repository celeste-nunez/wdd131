import { recipes } from './recipes.js';

function random(listLength) {
    const randomNum = Math.floor(Math.random()* listLength);
    return randomNum
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function renderRecipes(recipe) {
    return `
    <section class="recipesBlock">
        <div class="recipeImg"><img src="${recipe.recipeImg}" alt="recipeImg"></div>
        <div class="recipeContent">
            <div class="recipeName"><h2>${recipe.recipeName}</h2></div>      
            <span
                class="recipeStars"
                role="img"
                aria-label="Rating: ${recipe.recipeStars}"
            >
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
    document.querySelector('.recipesBlock').innerHTML = recipeHTML;
}
init();

function filter(query) {
	const filtered = recipes.filter(recipe =>
        recipe.recipeName.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase())
    );
	const sorted = filtered.sort((a,b) => a.recipeName.localeCompare(b.recipeName));
	return sorted;
}

function searchHandler(e) {
	e.preventDefault()

	const query = document.querySelector('.searchEntry').value;
    const filteredRecipes = filter(query);

    document.querySelector('.recipesBlock').innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const recipeHTML = renderRecipes(recipe);
        document.querySelector('.recipesBlock').innerHTML += recipeHTML;
    })
}

const randomRecipe = getRandomListEntry(recipes);
console.log(renderRecipes(randomRecipe));
document.querySelector('.submit').addEventListener('click', searchHandler);

document.querySelector('.searchEntry').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchHandler(e);
    }
});
