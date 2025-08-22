function init() {
    renderDishes (0, "Pizza");
}

function renderDishes(i, category,) {
    document.getElementById("dish-card-place").innerHTML = `<h3 class="dishes-header">${category}</h3>`;

    for (let index = 0; index < dishes[i][category].length; index++) {
        let onePrice = dishes[i][category][index].Price * 1;
        let finalOnePrice = onePrice.toFixed(2);
        document.getElementById("dish-card-place").innerHTML += dishesTemplate(i, category, index, dishes[i][category][index], finalOnePrice);
    }     
}

function dishesTemplate(i, category, index, singleDish, finalOnePrice) {
    return `
        
        <div class="dish-card" id="dish-card">

            <h3 id="dish-card-dish">${singleDish.Name}</h3> 

            <br>

            <p>${finalOnePrice} €</p>

            <br>

            <p>${singleDish.Ingredients}</p> 

            <div class="dish-selector">

                <section class="dish-selector-plus">+
                </section>

            </div>

        </div>

        `;
}

