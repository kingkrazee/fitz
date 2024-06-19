
let container = document.querySelector('[myStore]')
let searchProduct = document.querySelector('[searchProduct]')
let sortingByAmount = document.querySelector('[sorting]')
let clotheProducts = JSON.parse(
    localStorage.getItem('products')
)
console.log(clotheProducts);

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
                    html += `</div>`; 
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


if (searchValue.length >= 1) {
    filteredProduct = clotheProducts.filter(product =>
        product.productName.toLowerCase().includes(searchValue)
    );
}


container.textContent = '';


if (filteredProduct.length) {
    displayProducts(filteredProduct);
} else {
    container.innerHTML = `${searchValue} <div class="spinner-border text-danger" role="status">
    <span class="sr-only"></span>
    <p>Error 404</p>
  </div>`;
}
});





           

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
   
           
   window.onload = () => {
       document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
           ? JSON.parse(localStorage.getItem('checkout')).length
           : 0
   }




















