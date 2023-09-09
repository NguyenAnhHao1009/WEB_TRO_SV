var sanphams = document.querySelectorAll('#sanpham')
var images = document.querySelectorAll('.product--img')
for (var i = 0; i < sanphams.length; i++) {
    sanphams[i].onclick = function () { location.href = './ChiTietSanPham.html' }
}
sanphams.forEach(function (sanpham) {
    sanpham.addEventListener('click', function () {
        var imgElement = sanpham.querySelector('.product--img');
        var src = imgElement.getAttribute('src');
        localStorage.setItem('imgSrc', src);
    });
});
sanphams.forEach(function (sanpham) {
    sanpham.addEventListener('click', function () {
        var name = sanpham.querySelector('.product--name').innerHTML;
        localStorage.setItem('nameProduct', name);
    });
});
sanphams.forEach(function (sanpham) {
    sanpham.addEventListener('click', function () {
        var price = sanpham.querySelector('.product--price').innerHTML;
        localStorage.setItem('priceProduct', price);
    });
});
sanphams.forEach(function (sanpham) {
    sanpham.addEventListener('click', function () {
        var desc = sanpham.querySelector('.product--desc').innerHTML;
        localStorage.setItem('descProduct', desc);
    });
});
