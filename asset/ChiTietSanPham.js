var srcNew = localStorage.getItem('imgSrc')
var nameNew = localStorage.getItem('nameProduct')
var priceNew = localStorage.getItem('priceProduct')
var desc = localStorage.getItem('descProduct')
var image = document.getElementById('img_sanpham')
image.src = srcNew
var tensp_chitiet = document.querySelector('.ten-san-pham-chi-tiet').innerHTML = nameNew
var price = document.querySelector('.gia-san-pham-chi-tiet').innerHTML = priceNew
var desc = document.querySelector('.thong-tin-them').innerHTML = "<b>Địa chỉ: </b>"+desc


const btnAddCart = document.querySelector('.bnt-add-cart')
const dataAddCart = {
    name: nameNew,
    price: priceNew,
    img: srcNew,
    desc,
    quantity: 1
}
const cart = JSON.parse(window.localStorage.getItem('cart')) || []
btnAddCart.addEventListener('click', function (e) {
    e.preventDefault()
    cart.push(dataAddCart)
    window.localStorage.setItem('cart', JSON.stringify(cart))
    alert('Đã thêm sản phẩm vào phần thanh toán!')
})
