const requestOptions = {
    method: "GET",
    redirect: "follow"
};

const recipeContainer = document.querySelector('#recipe');

fetch("https://www.themealdb.com/api/json/v1/1/categories.php", requestOptions)
.then((response) => response.json())
.then((result) => {
    displayMeal(result);
})
.catch((error) => console.error(error));

function displayMeal(data){
    console.log(data)
    const itemClass = ['group', 'aspect-h-7', 'aspect-w-10', 'block', 'w-full', 'overflow-hidden', 'rounded-lg', 'bg-gray-100', 'focus-within:ring-2', 'focus-within:ring-indigo-500', 'focus-within:ring-offset-2', 'focus-within:ring-offset-gray-100'];
    const imgClass = ['pointer-events-none', 'object-cover', 'group-hover:opacity-75'];
    const titleClass = ['p-4'];
    if (data && Array.isArray(data.categories)) {
        data.categories.forEach(meal => {
            
            const recipeItem = document.createElement('div');
            const recipeItemImg = document.createElement('img');
            const recipeItemTitle = document.createElement('div');

            recipeItemTitle.innerHTML = `<h4 class="pointer-events-none mt-2 block truncate text-md font-medium text-gray-900"></h4>`;
            
            recipeItem.classList.add(...itemClass);
            recipeItemImg.src = meal.strCategoryThumb
            recipeItemImg.classList.add(...imgClass);
            recipeItemTitle.classList.add(...titleClass);

            recipeItem.appendChild(recipeItemImg);
            recipeItem.appendChild(recipeItemTitle);
            recipeContainer.appendChild(recipeItem);

        });
    } else {
        console.error("Unexpected data structure:", data);
    }
}