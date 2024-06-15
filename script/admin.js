function createItem(id, name, category, image, description, quantity, price){
    this.id = id;
    this.name = name;
    this.category = category;
    this.image = image;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
 }

 const item1 = new createItem(1, 'Inferno', 'Hoodie','https://kingkrazee.github.io/eccomerce/images/hood.png','A bright red masterpiece only for comfort',1, 150.00);
 const item2 = new createItem(1, 'Abyss','Hoodie', 'https://kingkrazee.github.io/eccomerce/images/hoodies.png','So comfortable you will get lost in it',1, 150.00);
 const item3 = new createItem(1, 'Blank Space', 'Hoodies','https://kingkrazee.github.io/eccomerce/images/plain hood.jpg', 'Two wongs dont make a white, but we do and its comfy', 1, 150.00);
 const item4 = new createItem(1,'Sandy','Hoodie','https://kingkrazee.github.io/eccomerce/images/hoodie5.webp','As Sandy as Delft', 1, 150.00);
 const item5 = new createItem(1,'Blui','Hoodie','https://kingkrazee.github.io/eccomerce/images/hoodie4.png','Blue Skies', 1, 150.00);
 const item6 = new createItem(1,'Klassik Mahn','Suits','https://kingkrazee.github.io/eccomerce/images/suit3.png','You can be me when you look this clean', 1, 1500.00);
 const item7 = new createItem(1, 'Flower Boy','Suits','https://kingkrazee.github.io/eccomerce/images/suit4.webp','I can buy myself flowers', 1, 1500.00);
 const item8 = new createItem(1, 'Greener','Suits','https://kingkrazee.github.io/eccomerce/images/suit4.webp','The Grass is Greener On The Otherside', 1, 1500.00);
 const item9 = new createItem(1,'Golden Gates','Suits','https://kingkrazee.github.io/eccomerce/images/suit5.webp','The perfect time to shine', 1, 1500.00);
 const item10 = new createItem(1, 'Sleak','Suits','https://kingkrazee.github.io/eccomerce/images/suit4.webp','Like Silk', 1, 1500.00);
 const item11 = new createItem(1, 'Dicky','Sweat Pants','https://kingkrazee.github.io/eccomerce/images/sweats3.webp','I can buy myself flowers', 1, 120.00);
 const item12 = new createItem(1, 'Eclipse','Sweat Pants','https://kingkrazee.github.io/eccomerce/images/sweats2.jpg','I can buy myself flowers', 1, 120.00);
 const item13 = new createItem(1, 'Rooi','Sweat Pants','https://kingkrazee.github.io/eccomerce/images/sweats1.jpg','I can buy myself flowers', 1, 120.00);
 const item14 = new createItem(1, 'Pinky','Sweat Pants','https://kingkrazee.github.io/eccomerce/images/sweats4.webp','I can buy myself flowers', 1, 120.00);
 const item15 = new createItem(1, 'Army','Sweat Pants','https://kingkrazee.github.io/eccomerce/images/sweats5.webp','I can buy myself flowers', 1, 120.00);
 const item16 = new createItem(1, 'Greenie','Crew Neck','https://kingkrazee.github.io/eccomerce/images/crew5.jpeg','I can buy myself flowers', 1, 100.00);
 const item17 = new createItem(1, 'Ashy','Crew Neck','https://kingkrazee.github.io/eccomerce/images/crewneck2.png','I can buy myself flowers', 1, 100.00);
 const item18 = new createItem(1, 'Darkseid','Crew Neck','https://kingkrazee.github.io/eccomerce/images/crewneck3.webp','I can buy myself flowers', 1, 100.00);
 const item19 = new createItem(1, 'Beijing','Crew Neck','https://kingkrazee.github.io/eccomerce/images/crew4.jpg','I can buy myself flowers', 1, 100.00);
 const item20 = new createItem(1, 'Vamp','Crew Neck','https://kingkrazee.github.io/eccomerce/images/crewneck1.jpg','I can buy myself flowers', 1, 100.00);
 const item21 = new createItem(1, 'Ocean','Golfer','https://kingkrazee.github.io/eccomerce/images/golf1.jpg','I can buy myself flowers', 1, 80.00);
 const item22 = new createItem(1, 'Lava','Golfer','https://kingkrazee.github.io/eccomerce/images/golf2.jpg','I can buy myself flowers', 1, 80.00);
 const item23 = new createItem(1, 'Magenta','Golfer','https://kingkrazee.github.io/eccomerce/images/golf3.jpg','I can buy myself flowers', 1, 80.00);
 const item24 = new createItem(1, 'Ice','Golfer','https://kingkrazee.github.io/eccomerce/images/golf4.jpg','I can buy myself flowers', 1, 80.00);

 let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24]

 function displayProducts() {
    let productsTableBody = document.getElementById('productsTableBody');
    productsTableBody.innerHTML = '';
    items.forEach((product, index) => {
        let row = `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" class="img-thumbnail"></td>
                <td>${product.name}</td>
                <td>R ${product.price.toFixed(2)}</td> <!-- Displaying price in Rands -->
                <td>
                    <button class="btn btn-info btn-sm" onclick="editProduct(${index})" id="edit-btn">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
        productsTableBody.innerHTML += row;
    });
}

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        displayProducts();
    }
}

function editProduct(index) {
    const product = items[index];
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductImage').value = product.image;
    
    document.getElementById('editProductForm').onsubmit = function (e) {
        e.preventDefault();
        product.name = document.getElementById('editProductName').value;
        product.price = parseFloat(document.getElementById('editProductPrice').value);
        product.image = document.getElementById('editProductImage').value;
        localStorage.setItem('items', JSON.stringify(items));
        displayProducts();
        const editProductModal = new bootstrap.Modal(document.getElementById('editProductModal'));
        editProductModal.hide();
    };
    
    const editProductModal = new bootstrap.Modal(document.getElementById('editProductModal'));
    editProductModal.show();
    
    editProductModal.addEventListener('hidden.bs.modal', function () {
        
        document.getElementById('editProductForm').reset();
        document.getElementById('editProductForm').onsubmit = null;
        // location.reload()
    });
}

document.getElementById('sortProductsBtn').addEventListener('click', function () {
    items.sort((a, b) => a.price - b.price);
    localStorage.setItem('items', JSON.stringify(items));
    displayProducts();
});

displayProducts();

document.getElementById('addProductBtn').addEventListener('click', function () {
    const addProductModal = new bootstrap.Modal(document.getElementById('addProductModal'));
    addProductModal.show();
    
    document.getElementById('addProductForm').onsubmit = function (e) {
        e.preventDefault();
        
        const newProductId = items.length + 1;
        
        const newProduct = new CreateItem(
            newProductId,
            document.getElementById('productName').value,
            'Uncategorized',  
            document.getElementById('productImage').value,
            '',  
            parseFloat(document.getElementById('productPrice').value),
            1   
        );
        
        items.push(newProduct);
        
        localStorage.setItem('items', JSON.stringify(items));
        
        displayProducts();
        
        addProductModal.hide();
        
        document.getElementById('addProductForm').reset();
    };
});