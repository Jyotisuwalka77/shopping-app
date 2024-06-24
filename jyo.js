let cart = [];

function addToCart(productId) {
  let product = document.getElementById(productId);
  let productName = product.querySelector("h2").innerText;
  let productPrice = parseFloat(product.querySelector("p").innerText.split("$")[1]);
  cart.push({ name: productName, price: productPrice });
  updateCart();
}

function updateCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  document.getElementById("total").innerText = `Total: $${total}`;
}

function checkout() {
  alert("Thank you for shopping with us!");
  cart = [];
  updateCart();
}

function viewDetails(productId) {
  let product = document.getElementById(productId);
  let productName = product.querySelector("h2").innerText;
  let productPrice = product.querySelector("p").innerText;
  let productImg = product.querySelector("img").src;
  
  let modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <img src="${productImg}" alt="${productName}" style="width:100%; height:auto; margin-bottom:20px;">
    <h2>${productName}</h2>
    <p>${productPrice}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    <button onclick="addToCart('${productId}')">Add to Cart</button>
  `;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
