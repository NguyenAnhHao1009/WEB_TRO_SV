const bodyCartPage = document.querySelector('.body-cart-page .cart-table')
const cartData = JSON.parse(window.localStorage.getItem('cart')) || []

cartData.forEach((product, index) => {
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>
        <img width="100px;height:auto;" src="${product.img}" alt="">
    </td>
    <td class="canhtrai">
        <p> <b>${product.name}<b/> </p>
        <p><b>Giá:<b/> ${product.price}</p>
        <p><b>Địa Chỉ:<b/> ${product.desc}</p>
    </td>
    <td>
        <button onclick="deleteCart(${index})"><i class="fa-solid fa-trash "></i></button>
    </td>
            
         
        `
    bodyCartPage.appendChild(tr)
})

function deleteCart(id) {
    cartData.splice(id, 1)
    window.localStorage.setItem('cart', JSON.stringify(cartData))
    window.location.reload()
}