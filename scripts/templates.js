function dishesTemplate(i, category, index, singleDish, finalOnePrice) {
    return `
        
        <div class="dish-card" id="dish-card">

            <h3 id="dish-card-dish">${singleDish.Name}</h3> 

            <br>

            <p>${finalOnePrice} €</p>

            <br>

            <p>${singleDish.Ingredients}</p> 

            <div class="dish-selector">

                <section  onclick="pushToShoppingCart(${i}, '${category}', ${index})">
                    <img src="./img/add-cart-1.png" class="filter-orange"></img>
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

                    <div onclick="decreaseQuantity('${oneDish.Name}')">
                        <img class="add-remove" src="./img/minus.png"></img>  
                    </div>

                    <p>${oneDish.quantity}</p>

                    <div onclick="addQuantity('${oneDish.Name}')">
                        <img class="add-remove" src="./img/plus.png"></img>                    
                    </div>

                </section>

                <p>${finalPrice} €</p>

                <img  class="trash-bin" src="./img/trash.svg" alt="trash-bin" onclick="removeFromCart('${oneDish.Name}')">

            </div>  

        </div>

        `;
}