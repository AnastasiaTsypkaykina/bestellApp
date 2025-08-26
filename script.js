function init() {
  renderDishes(0, "Pizza");
  renderShoppingCart();
}

function renderDishes(i, category) {
  document.getElementById(
    "dish-card-place"
  ).innerHTML = `<h3 class="dishes-header">${category}</h3>`;
  for (let index = 0; index < dishes[i][category].length; index++) {
    let onePrice = dishes[i][category][index].Price * 1;
    let finalOnePrice = onePrice.toFixed(2);
    document.getElementById("dish-card-place").innerHTML += dishesTemplate(
      i,
      category,
      index,
      dishes[i][category][index],
      finalOnePrice
    );
  }
}

function dialogBubblingPrevention(event) {
  event.stopPropagation();
}

function openCloseMenu() {
  document.getElementById("menu").classList.toggle("menu_box_closed");
}

function closeMenu() {
  document.getElementById("menu").classList.add("menu_box_closed");
}

let shoppingCart = [];

function renderShoppingCart() {
  shoppingCartContent();
  let subTotalValue = calculateSubTotal();
  let deliveryCostsValue = 2;
  let calculateTotalValue = calculateTotal(subTotalValue, deliveryCostsValue);

  setPrice("sub-total", `${subTotalValue.toFixed(2)} €`);
  setPrice("delivery-costs", `${deliveryCostsValue.toFixed(2)} €`);
  setPrice("total-price", `${calculateTotalValue.toFixed(2)} €`);
}

function shoppingCartContent() {
  let originalShoppingCart = document.getElementById("shopping-cart-dishes");
  let respShoppingCart = document.getElementById('resp-shopping-cart-dishes');
  originalShoppingCart.innerHTML = "";
  respShoppingCart.innerHTML = '';
  for (let i = 0; i < shoppingCart.length; i++) {
    let price = shoppingCart[i].Price * shoppingCart[i].quantity;
    let finalPrice = price.toFixed(2);
    originalShoppingCart.innerHTML += shoppingCartTemplate(shoppingCart[i], finalPrice);
    respShoppingCart.innerHTML += shoppingCartTemplate(shoppingCart[i], finalPrice);
  };
}

function pushToShoppingCart(i, category, index) {
  let selectedDish = dishes[i][category][index];
  let existingDish = shoppingCart.find(dish => dish.Name === selectedDish.Name);

    if (existingDish) {
        existingDish.quantity++;
    } else {
        shoppingCart.push({
            ...selectedDish,
            quantity: 1
        });
    };
  renderShoppingCart();
}

function calculateSubTotal() {
  let subTotal = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    subTotal += shoppingCart[i].Price * shoppingCart[i].quantity;
  }
  return subTotal;
}

function calculateTotal(subTotal, delivery) {
  let total = 0;
  total = subTotal + delivery;
  return total;
}

function setPrice(id, text) {
  let element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
}

function addQuantity(name) {
  for (i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].Name === name) {
      shoppingCart[i].quantity++;
    }
  }
  renderShoppingCart();
}

function decreaseQuantity(name) {
  for (i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].Name === name) {
      if (shoppingCart[i].quantity > 1) {
        shoppingCart[i].quantity--;
      } else if (shoppingCart[i].quantity === 1) {
        shoppingCart.splice(i, 1);
      }
    }
  }
  renderShoppingCart();
}

function removeFromCart(name) {
     let index = -1;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].Name === name) {
            index = i;
            break;
        }
    }   

    if (index === -1) return;

    shoppingCart.splice(index, 1);
    renderShoppingCart();
}

function renderOrderDialog() {
    let orderDialog = document.getElementById('order-dialog');
    let overlay = document.getElementById('overlay');

    if (shoppingCart.length >= 1) {
        //respShoppingCartCloser();
        orderDialog.classList.remove('d-none');
        overlay.classList.remove('d-none');
        shoppingCart = [];
        renderShoppingCart();        
    };
}

function closeOrderDialog() {
    let orderDialog = document.getElementById('order-dialog');
    let overlay = document.getElementById("overlay");
    orderDialog.classList.add('d-none');
    overlay.classList.add("d-none");    
}

function respShoppingCartOpener(){
    let dialog = document.getElementById('dialog');
    let overlay = document.getElementById('overlay');
    dialog.classList.remove('d-none');
    overlay.classList.remove('d-none');
    
    renderShoppingCart();
}

function respShoppingCartCloser(){
    let dialog = document.getElementById('dialog');
    let overlay = document.getElementById('overlay');    
    dialog.classList.add('d-none');
    overlay.classList.add('d-none');
}