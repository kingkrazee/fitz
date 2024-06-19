
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
let checkoutTable = document.querySelector('[table-checkout]');


function cartItems() {
  if (cart.length === 0) {
      checkoutTable.innerHTML = "<tr><td colspan='6'>Add items to your cart</td></tr>"; // Message that displays if no items in cart
      return;
  }

  let tableContent = "";
  let finalTotal = 0; 

  
  let uniqueProducts = Array.from(new Set(cart.map(item => item.productName)))
      .map(productName => {
          return cart.find(item => item.productName === productName);
      });

  uniqueProducts.forEach(item => {
      let quantity = cart.filter(cartItem => cartItem.productName === item.productName).length;
      let amount = Number(item.Amount);
      let total = amount * quantity;
      finalTotal += total;

      tableContent +=
          `<tr>
              <td>${item.productName}</td>
              <td><img class="checkoutImages" src="${item.img_url}" alt="${item.productName}"></td>
              <td>${item.category}</td>
              <td>${quantity}</td>
              <td>R${amount.toFixed(2)}</td>
              <td>R${total.toFixed(2)}</td>
          </tr>`;
  });

 
  const headingElement = document.querySelector('#total-container');
  headingElement.textContent = `Amount Due: R${finalTotal.toFixed(2)}`;
  checkoutTable.innerHTML = tableContent;

  
  document.querySelector('[purchase]').addEventListener('click', () => {
      alert("Thank you for purchasing");
  });

  
  document.querySelector('[clear]').addEventListener('click', () => {
      
      cart = []; 
      localStorage.setItem('checkout', JSON.stringify(cart)); 
      cartItems(); 
      document.querySelector('#total-container').style.display = 'none'; 
  });
}


cartItems();

