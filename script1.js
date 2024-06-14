function addToCart() {
  var productName = document.getElementById("productName").value;
  var productPrice = document.getElementById("productPrice").value;
  
  var product = {
    name: productName,
    price: productPrice,
    quantity: 1
  };

  // Get the existing cart from localStorage
  var cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists in the cart
  var existingProduct = cart.find(p => p.name === product.name && p.price === product.price);

  if (existingProduct) {
    // If the product exists, increment its quantity
    existingProduct.quantity++;
  } else {
    // If the product doesn't exist, add it to the cart
    cart.push(product);
  }

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart display without opening the cart
  displayCart();
}


function displayCart() {
  var cartContentsDiv = document.getElementById("cartContents");
  cartContentsDiv.innerHTML = ""; // Clear the cart contents div
  
  // Get the cart from localStorage
  var cart = JSON.parse(localStorage.getItem('cart')) || [];

  for(var i = 0; i < cart.length; i++) {
    var product = cart[i];
    cartContentsDiv.innerHTML += "<p>Name: " + product.name + ", Price: " + product.price + ", Quantity: " + product.quantity + "</p>";
  }
}

function openCart() {
  var cart = document.getElementById("cart");
  cart.style.width = "25%";
  displayCart();

  cart.addEventListener('transitionend', function() {
    document.addEventListener('click', closeCartOnClickOutside);
  }, { once: true });
}

function closeCart() {
  var cart = document.getElementById("cart");
  cart.style.width = "0";

  // Remove the event listener from the document when the cart is closed
  document.removeEventListener('click', closeCartOnClickOutside);
}

function closeCartOnClickOutside(event) {
  var clickPosition = event.clientX;
  var windowWidth = window.innerWidth;

  // Check if the click was on the left 75% of the screen
  if (clickPosition < windowWidth * 0.75) {
    closeCart();
  }
}



function clearCart() {
  // Clear the cart in localStorage
  localStorage.removeItem('cart');

  // Clear the cart contents div
  var cartContentsDiv = document.getElementById("cartContents");
  cartContentsDiv.innerHTML = "";

  
}
