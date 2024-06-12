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
 localStorage.setItem('items',JSON.stringify('items'));
 items.forEach(item => {
    main.innerHTML += `
    <div>
    <img src="${item.image}">
    <p>R${item.price}</p>
    <button id="View">View More</button>
    <button class"buy" value=${item.id}">Purchase</button>
    </d>`
 });
 let buyItems = []
 let buyBtns = document.querySelectorAll('.buy');
 function addTocart(id){
    let [item] = items.filter(object => object.id === +id)
    buyItems.push(item);
    localStorage.setItem('cart', JSON.stringify(buyItems));

 }
 buyBtns.forEach(button =>{
    button.addEventListener('click',(event)=>{
        addTocart(event.target.value);
    })
 })

 displayItems(items);

