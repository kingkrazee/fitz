
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();

    
//Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
//In order to make the string into an array you need to use JSON.parse
let products = JSON.parse(localStorage.getItem('products'))
 //Ternary operator is used to check if we have data in the local storage
? JSON.parse(localStorage.getItem('products'))  : localStorage.setItem('products', JSON.stringify
    (
        [
            {
            productName: "Inferno",
            category: "Hoodie",
            Amount: 150.00,
            img_url: "https://kingkrazee.github.io/eccomerce/images/hood.png"
            },
            {
                productName: "Abyss",
                category: "Hoodie",
                Amount: 150.0,
                img_url: "https://kingkrazee.github.io/eccomerce/images/hoodies.png"
                
            },
            {
                productName: "Blank Space",
                category: "Hoodie",
                Amount: 150.0,
                img_url: "https://kingkrazee.github.io/eccomerce/images/plain hood.jpg"
            },
            {
                productName: "Sandy",
                category: "Hoodie",
                Amount: 150.0,
                img_url: "https://kingkrazee.github.io/eccomerce/images/hoodie5.webp"
            },
            {
                productName: "Blui",
                category: "Hoodie",
                Amount: 150.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/hoodie4.png"
            },
            {
                productName: "Greenie",
                category: "Crew Neck",
                Amount: 100.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/crew5.jpeg"
            },
            {
                productName: "Ashy",
                category: "Crew Neck",
                Amount: 100.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/crewneck2.png"
            },
            {
                productName: "Darkseid",
                category: "Crew Neck",
                Amount: 100.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/crewneck3.webp"

            },
            {
                productName: "Beijing",
                category: "Crew Neck",
                Amount: 100.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/crew4.jpg"
                
            },
            {
                productName: "Vamp",
                category: "Crew Neck",
                Amount: 100.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/crewneck1.jpg"
                

            },
            {
                productName: "Dicky",
                category: "Sweat Pants",
                Amount: 120.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/sweats3.webp"
            },
            {
                productName: "Eclipse",
                category: "Sweat Pants",
                Amount: 120.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/sweats2.jpg"
                

            },
            {
                productName: "Rooi",
                category: "Sweat Pants",
                Amount: 120.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/sweats1.jpg"
            },
            {
                productName: "Pinky",
                category: "Sweat Pants",
                Amount: 120.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/sweats4.webp"
            },
            {
                productName: "Army",
                category: "Sweat Pants",
                Amount: 120.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/sweats5.webp"
            },
            {
                productName: "Flower Boy",
                category: "Suit",
                Amount: 1500.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/suit4.webp"
            },
            {
                productName: "Golden Gates",
                category: "Suit",
                Amount: 1500.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/suit5.webp"
            },
            {
                productName: "Greener",
                category: "Suit",
                Amount: 1500.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/suit6.webp"
            },
            {
                productName: "Sleak",
                category: "Suit",
                Amount: 1500.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/suit7.png"
            },
            {
                productName: "Klassik Mahn",
                category: "Suit",
                Amount: 1500.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/suit3.png"
            },
            {
                productName: "Ocean",
                category: "Golfer",
                Amount: 80.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/golf1.jpg"
            },
            {
                productName: "Lava",
                category: "Golfer",
                Amount: 80.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/golf2.jpg"
            },
            {
                productName: "Magenta",
                category: "Golfer",
                Amount: 80.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/golf3.jpg"
            },
            {
                productName: "Ice",
                category: "Golfer",
                Amount: 80.00,
                img_url: "https://kingkrazee.github.io/eccomerce/images/golf4.jpg"
            }
        ]
    )
)
//Code for everytime you add a recent product
function recentProducts(){
    let latestProducts = products.reverse().slice(0, 4);
    console.log(latestProducts);
    latestProducts.forEach(product => {
        wrapper.innerHTML += `
        <div class="card">
            <img src="${[product.img_url]}" class="card-img-top" alt="${product.productName}">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <h4 class="product-amount">R${product.Amount}</h4>
                <p class="card-text">${product.category}</p>
            </div>
        </div> `
    })
}
recentProducts()

// Keyup event listener for product search
searchProduct.addEventListener('keyup', () => {
    // Display all products if the search input is empty
    if (searchProduct.value.length < 1) {
        displayProducts(products);
        return;
    }
    
    // Filter products based on the search input
    let filteredProduct = products.filter(product =>
        product.productName.toLowerCase().includes(searchProduct.value.toLowerCase())
    );
    
    displayProducts(filteredProduct);
    
    // Display an error message if no products are found
    if (!filteredProduct.length) {
        container.textContent = `${searchProduct.value} product was not found`;
    } else {
        container.textContent = ''; // Clear any previous error message
    }
});

               // Counter
               window.onload = () => {
                document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
                    ? JSON.parse(localStorage.getItem('checkout')).length
                    : 0
            }

