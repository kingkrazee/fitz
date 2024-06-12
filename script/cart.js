let items = JSON.parse(localStorage.getItem('items'));
let purchased = JSON.parse(localStorage.getItem('cart'))||[];
let main = document.getElementById('thecart')
let btn = document.querySelector('button')
    purchased.forEach(item => {
        main.innerHTML += `<tr>
                    <td><img src="${item.image}" alt="${item.name}"></td>
                    <td${item.name}<td/>
                    <td>${item.price}</td>
                    </tr>
                            `;
});