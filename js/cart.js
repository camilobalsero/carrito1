const container1 = document.getElementById("container")
const emptyCart = document.getElementById('empty-cart')


container1.addEventListener('click', function (event) {
  if (event.target.classList.contains('car')) {
      const card = event.target.closest('.card');
      if (card) {
          const sku = card.getAttribute('id');
          const productToAdd = products.find(product => product.sku === sku);
          addToCart(productToAdd);
      }
  }
});



document.addEventListener('DOMContentLoaded', () => {
  try {
      const storedCart = localStorage.getItem('products-in-cart');
      if (storedCart) {
          // Intenta analizar la cadena JSON
          cart = JSON.parse(storedCart);
          updateCart();  // Actualiza la interfaz del carrito después de cargar desde localStorage
      }
  } catch (error) {
      // Maneja el error al analizar la cadena JSON
      console.error('Error parsing cart from localStorage:', error);
      // Puedes tomar medidas adicionales según tus necesidades, como restablecer el carrito o informar al usuario.
  }

  // Resto del código...
});

let cart = [];

function addToCart(productToAdd) {
  const { sku, stock } = productToAdd;
  if (stock > 0) {
      const existingItem = cart.find(item => item.sku === sku);

      if (existingItem) {
          existingItem.quantity += 0;
      } else {
          cart.push({ ...productToAdd, quantity: 1 });
      }

      // Actualizar el stock del producto
      productToAdd.stock -= 1;

      // Guardar el carrito en localStorage
      localStorage.setItem('products-in-cart', JSON.stringify(cart));

      // Actualizar la interfaz del carrito
      updateCart();
  }
}

function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  let totalPrice = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-new-product');
    cartItem.innerHTML = `<p id = "text">${item.tittle} - Cantidad:</p> 
    <div class = "buttons">
      <button class = "btn-Minum" onclick="decrementQuantity('${item.sku}')">-</button><p id="text">
      ${item.quantity}</p>
      <button class = "btn-Plus" onclick="incrementQuantity('${item.sku}')">+</button>
      <button class = "btn-Delete" onclick="removeFromCart('${item.sku}')">Eliminar</button>
    </div>`;

    cartItemsDiv.appendChild(cartItem);

    totalPrice += item.price * item.quantity;
  });

  document.getElementById('cart-total').innerText = `$${totalPrice}`;
}

function incrementQuantity(sku) {
  const item = cart.find(item => item.sku === sku);
  if (item && item.quantity < item.stock) {
    item.quantity++;
    updateCart();
  }
  }
  
  function decrementQuantity(sku) {
  const item = cart.find(item => item.sku === sku);
  if (item && item.quantity > 1) {
    item.quantity--;
    updateCart();
  }
  
}

// Función para eliminar un producto del carrito
function removeFromCart(sku) {
  cart = cart.filter(item => item.sku !== sku);
  localStorage.setItem('products-in-cart', JSON.stringify(cart));
  updateCart();
}

// Función para vaciar completamente el carrito
document.getElementById('empty-cart').addEventListener('click', () => {
  cart = [];
  localStorage.setItem('prdocuts-in-cart', cart)
  updateCart();
});

// Evento al hacer clic en "Añadir al carrito" en cada producto
container1.addEventListener('click', function(event) {
  if (event.target.classList.contains('btnAdd')) {
    const sku = event.target.getAttribute('id');
    const productToAdd = products.find(product => product.sku === sku);
    addToCart(productToAdd);
  }
});

  // Función para eliminar un producto del carrito
  function removeFromCart(sku) {
    cart = cart.filter(item => item.sku !== sku);
    localStorage.setItem('products-in-cart', JSON.stringify(cart));
    updateCart();
}

  
  // Función para vaciar completamente el carrito
  emptyCart.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('products-in-cart', cart);
    updateCart();
  });

