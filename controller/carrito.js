const db = require("../database/models")
const Product= db.Product
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout');
const addBtns = document.querySelectorAll('.add-to-cart');

const getCartProducts = async () => {
    try {
      // Obtener los productos de la base de datos utilizando Sequelize
      const products = await Product.findAll();
  
      // Convertir los productos en un formato compatible con el carrito
      const cartProducts = products.map(product => ({
        id: product.id,
        price: product.price,
        text: product.name,
        
      }));
  
      renderCartProducts(cartProducts);
    } catch (error) {
      console.error('Error al obtener los productos del carrito:', error);
    }
  };
 

let cartItems = [];
let cartTotal = 0;

addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const itemEl = btn.parentNode;
    const itemId = itemEl.getAttribute('data-id');
    const itemPrice = Number(itemEl.getAttribute('data-price'));
    const itemText = itemEl.textContent.trim();

    const cartItem = {
      id: itemId,
      price: itemPrice,
      text: itemText,
      qty: 1
    };

    const existingItemIndex = cartItems.findIndex(item => item.id === itemId);

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].qty++;
    } else {
      cartItems.push(cartItem);
    }

    updateCart();
  });
});

function updateCart() {
    cartItemsEl.innerHTML = '';
  
    cartItems.forEach(item => {
      const itemEl = document.createElement('li');
      itemEl.textContent = `${item.text} x${item.qty}`;
      cartItemsEl.appendChild(itemEl);
    });
  
    cartTotal = cartItems.reduce((total, item) => {
      return total + (item.price * item.qty);
    }, 0);
  
    cartTotalEl.textContent = `Total: $${cartTotal.toFixed(2)}`;
  }
  

checkoutBtn.addEventListener('click', () => {
  // Paso 1: Crear una instancia de la pasarela de pagos y definir los parámetros de pago
  const paymentGateway = new PaymentGateway();
  const paymentData = {
    items: cartItems.map(item => ({
      id: item.id,
      name: item.text,
      price: item.price,
      quantity: item.qty
    })),
    total: cartTotal
  };

  // Paso 2: Enviar los datos de pago a la pasarela de pagos
  paymentGateway.sendPaymentData(paymentData, (err, response) => {
    if (err) {
      alert('Error al procesar el pago');
    } else {
      alert(`Pago procesado exitosamente`)}
    })
})
