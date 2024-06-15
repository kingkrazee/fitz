//  //My Products 
//  function createItem(id, name, category, image, description, quantity, price){
//     this.id = id;
//     this.name = name;
//     this.category = category;
//     this.image = image;
//     this.description = description;
//     this.quantity = quantity;
//     this.price = price;
//  }

//  const item1 = new createItem(1, 'Inferno', 'Hoodie','https://kingkrazee.github.io/eccomerce/images/hood.png','A bright red masterpiece only for comfort',1, 100.00);
//  const item2 = new createItem(1, 'Abyss','Hoodie', 'https://kingkrazee.github.io/eccomerce/images/hoodies.png','So comfortable you will get lost in it',1, 100.00);
//  const item3 = new createItem(1, 'Blank Space', 'Hoodies','https://kingkrazee.github.io/eccomerce/images/plain hood.jpg', 'Two wongs dont make a white, but we do and its comfy', 1, 100.00);
//  const item4 = new createItem(1,'Klassik Mahn','Suits','https://kingkrazee.github.io/eccomerce/images/suit3.png','You can be me when you look this clean', 1, 1500.00);
//  const item5 = new createItem(1,'Golden Hour','Suits','https://kingkrazee.github.io/eccomerce/images/suit5.webp','The perfect time to shine', 1, 1500.00);
//  const item6 = new createItem(1, 'Flower Boy','Suits','https://kingkrazee.github.io/eccomerce/images/suit4.webp','I can buy myself flowers', 1, 1500.00);
//  let items = [item1, item2, item3, item4, item5, item6]
//  let main = document.getElementById('boughting');
//  let itemsHTML = items.map(item => `
//     <div id= "pros1" class="col">
//         <div class="card h-100">
//             <img src="${item.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${item.category}</h5>
//                 <p class="card-text">${item.description}</p>
//                 <p class="card-text">Price: R${item.price}</p>
//                 <button class="buy btn btn-primary" value="${item.id}">Purchase</button>
//             </div>
//         </div>
//     </div>
// `).join('');

// // Construct the row and container HTML
// let containerHTML = `
//     <div class="container">
//         <div id="pros2" class="row row-cols-1 row-cols-md-3 g-4">
//             ${itemsHTML}
//         </div>
//     </div>
// `;

// // Append the container HTML to the main element
// main.innerHTML = containerHTML;

// // Function to add an item to the cart
// function addToCart(itemId) {
//     // Find the item by its id
//     let selectedItem = items.find(item => item.id === itemId);
    
//     // Check if the item is already in the cart
//     let existingItem = purchased.find(item => item.id === itemId);
    
//     if (!existingItem) {
//         // If not in cart, add it
//         purchased.push(selectedItem);
//     } else {
//         // If already in cart, you can update quantity or skip
//         existingItem.quantity++; 
//     }
    
//     // Update cart display and total price
//     updateCartDisplay();
//     updateTotalPrice();
// }

// // Function to update cart display
// function updateCartDisplay() {
//     main.innerHTML = ''; // Clear current cart display
//     purchased.forEach(item => {
//         main.innerHTML += `<tr>
//             <td><img src="${item.image}" alt="${item.name}"></td>
//             <td>${item.name}</td>
//             <td>${item.price}</td>
//         </tr>`;
//     });
// }

// // Function to calculate and display total price
// function updateTotalPrice() {
//     let totalPrice = purchased.reduce((total, item) => total + item.price, 0);
//     document.getElementById('totalPrice').innerText = `Total Price: R${totalPrice}`;
// }

// // Add event listeners to purchase buttons
// document.querySelectorAll('.buy').forEach(button => {
//     button.addEventListener('click', function() {
//         addToCart(parseInt(this.value));
//     });
// });




/*Updated Code That I must StiLL Up date */



    
let container = document.querySelector('[myStore]')
let searchProduct = document.querySelector('[searchProduct]')
let sortingByAmount = document.querySelector('[sorting]')
let clotheProducts = JSON.parse(
    localStorage.getItem('products')
)
console.log(clotheProducts);
// items/products
let checkoutItems = JSON.parse(localStorage.getItem('checkout')) 
    ? JSON.parse(localStorage.getItem('checkout'))
    : []


   function displayProducts(args) {
    container.innerHTML = "";
    try {
        container.innerHTML = `
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>`;

        setTimeout(() => {
            container.innerHTML = "";

            let html = '';
            for (let i = 0; i < args.length; i++) {
                if (i % 5 === 0) {
                    html += `<div class="row mb-4">`; // Start a new row for every 5 items
                }

                html += `
                    <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                        <div class="card5">
                            <img src="${args[i].img_url}" class="card-img5" alt="${args[i].productName}" loading="lazy">
                            <div class="card-body5">
                                <h5 class="card-title5">${args[i].productName}</h5>
                                <p class="card-text5">${args[i].category}</p>
                                <p class="card-text5">
                                    <span class="shadow amount fw-bold"></span>
                                    R${args[i].Amount}
                                </p>
                                <button type='button' class="btn btnAddToCart btn-sm" onclick='addToCart(${JSON.stringify(args[i])})'>Add to cart</button>
                            </div>
                        </div>
                    </div>`;

                if ((i + 1) % 5 === 0 || i === args.length - 1) {
                    html += `</div>`; // End row after 5 items or at the end of the list
                }
            }

            container.innerHTML = html;

        }, 1500);

    } catch (e) {
        container.innerHTML = `
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>`;
    }
}

    displayProducts(clotheProducts);

    

// Sorting by ascending and descending
let isToggle = false
sortingByAmount.addEventListener('click', () => {
try {
    if (!clotheProducts) throw new Error('Please try again later')
    if (!isToggle) {
        clotheProducts.sort((a, b) => b.Amount - a.Amount)
        sortingByAmount.textContent = 'Sorted by highest amount'
        isToggle = true
    } else {
        clotheProducts.sort((a, b) => a.Amount - b.Amount)
        sortingByAmount.textContent = 'Sorted by lowest amount'
        isToggle = false
    }
    displayProducts(clotheProducts)
} catch (e) {
    container.textContent = e.message || 'We are working on this issue'
}
})


searchProduct.addEventListener('keyup', () => {
let searchValue = searchProduct.value.toLowerCase();
let filteredProduct = clotheProducts;

// Filter products based on the search input
if (searchValue.length >= 1) {
    filteredProduct = clotheProducts.filter(product =>
        product.productName.toLowerCase().includes(searchValue)
    );
}

// Clear the container
container.textContent = '';

// Display the filtered products or an error message
if (filteredProduct.length) {
    displayProducts(filteredProduct);
} else {
    container.innerHTML = `${searchValue} <div class="spinner-border text-danger" role="status">
    <span class="sr-only"></span>
    <p>Error 404</p>
  </div>`;
}
});





           
// Add to cart
let clotheCart = JSON.parse(localStorage.getItem('checkout')) || [];
function addToCart(product) {
try {
    clotheCart.push(product);
    localStorage.setItem('checkout', JSON.stringify(sweetsCart));
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout')).length
    : 0
} catch (e) {
    alert('The Checkout is under maintenance');
}
}
   
           // Counter
   window.onload = () => {
       document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
           ? JSON.parse(localStorage.getItem('checkout')).length
           : 0
   }




















