var topbuys = document.querySelectorAll('.topbuy--option');
for (var i = 0; i < topbuys.length; i++) {
    topbuys[i].onclick = function () {
        location.href = './ChiTietSanPham.html'
    }
}


topbuys.forEach(function (topbuy) {
    topbuy.addEventListener('click', function () {
        var imgTopbuy = topbuy.querySelector('.topbuy--img');
        var src_img_topbuy = imgTopbuy.getAttribute('src');
        localStorage.setItem('imgTopbuy', src_img_topbuy);
    });
});

topbuys.forEach(function (topbuy) {
    topbuy.addEventListener('click', function () {
        var name_topbuy = topbuy.querySelector('.topbuy--name').innerHTML;
        localStorage.setItem('nameTopbuy', name_topbuy);
    });
});

topbuys.forEach(function (topbuy) {
    topbuy.addEventListener('click', function () {
        var price_topbuy = topbuy.querySelector('.topbuy--price').innerHTML;
        localStorage.setItem('priceTopbuy', price_topbuy);
    });
});

topbuys.forEach(function (topbuy) {
    topbuy.addEventListener('click', function () {
        var imgTopbuy = topbuy.querySelector('.topbuy--img');

        var name_topbuy = topbuy.querySelector('.topbuy--name').innerHTML;
        var price_topbuy = topbuy.querySelector('.topbuy--price').innerHTML;
        var src_img_topbuy = imgTopbuy.getAttribute('src');
        localStorage.setItem('imgTopbuy', src_img_topbuy);
        localStorage.setItem('nameTopbuy', name_topbuy);
        localStorage.setItem('priceTopbuy', price_topbuy);
    });
});