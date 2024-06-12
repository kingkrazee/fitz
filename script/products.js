 //My Products 
 function createItem(id, name, category, image, description, quantity, price){
    this.id = id;
    this.name = name;
    this.category = category;
    this.image = image;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
 }

 const item1 = new createItem(1, 'Inferno', 'Hoodie','https://kingkrazee.github.io/eccomerce/images/hood.png','A bright red masterpiece only for comfort',1, 100.00);
 const item2 = new createItem(1, 'Abyss','Hoodie', 'https://kingkrazee.github.io/eccomerce/images/hoodies.png','So comfortable you will get lost in it',1, 100.00);
 const item3 = new createItem(1, 'Blank Space', 'Hoodies','https://kingkrazee.github.io/eccomerce/images/plain hood.jpg', 'Two wongs dont make a white, but we do and its comfy', 1, 100.00);
 const item4 = new createItem(1,'Klassik Mahn','Suits','https://kingkrazee.github.io/eccomerce/images/suit3.png','You can be me when you look this clean', 1, 1500.00);
 const item5 = new createItem(1,'Golden Hour','Suits','https://kingkrazee.github.io/eccomerce/images/suit5.webp','The perfect time to shine', 1, 1500.00);
 const item6 = new createItem(1, 'Flower Boy','Suits','https://kingkrazee.github.io/eccomerce/images/suit4.webp','I can buy myself flowers', 1, 1500.00);
 let items = [item1, item2, item3, item4, item5, item6]
 let main = document.getElementById('boughting');
 let itemsHTML = items.map(item => `
    <div class="col">
        <div class="card h-100">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.category}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">Price: R${item.price}</p>
                <button class="buy btn btn-primary" value="${item.id}">Purchase</button>
            </div>
        </div>
    </div>
`).join('');

// Construct the row and container HTML
let containerHTML = `
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            ${itemsHTML}
        </div>
    </div>
`;

// Append the container HTML to the main element
main.innerHTML = containerHTML;
 let buyItems = JSON.parse(localStorage.getItem('cart'))||[];
 let buyBtns = document.querySelectorAll('.buy');
 function addTocart(id){
    let [item] = items.filter(object => object.id === +id)
    let existingItemIndex = buyItems.findIndex(item => item.id === itemToAdd.id);
    if (existingItemIndex !== -1){
        buyItems[existingItemIndex].quantity++;
    }else {
        itemToAdd.quantity = 1;
        buyItems.push(itemToAdd);
    }
    localStorage.setItem('cart', JSON.stringify(buyItems))

 }
 buyBtns.forEach(button =>{
    button.addEventListener('click',(event)=>{
        addTocart(event.target.value);
    })
 })
