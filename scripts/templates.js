function dishesTemplate(i, category, index, singleDish, finalOnePrice) {
    return `
        
        <div class="dish-card" id="dish-card">

            <h3 id="dish-card-dish">${singleDish.Name}</h3> 

            <br>

            <p>${finalOnePrice} €</p>

            <br>

            <p>${singleDish.Ingredients}</p> 

            <div class="dish-selector">

                <section class="dish-selector-plus" onclick="pushToShoppingCart(${i}, '${category}', ${index})">+
                </section>

            </div>

        </div>

        `;
}

function shoppingCartTemplate(oneDish, finalPrice) {
    return `
        <div class="shopping-cart-item">

            <h3 class="ml-20">${oneDish.Name}</h3>

            <div class="shopping-cart-amount-and-price">

                <section class="shopping-cart-item-amount">

                    <div class="dish-selector-shopping-cart-minus" >-
                    </div>

                    <p>${oneDish.quantity}</p>

                    <div class="dish-selector-shopping-cart-plus" >+
                    </div>

                </section>

                <p>${finalPrice} €</p>

                <img  class="trash-bin" src="./img/trash.svg" alt="trash-bin">

            </div>  

        </div>

        `;
}