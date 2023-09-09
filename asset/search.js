const searchBtn = document.querySelector('.search--btn')
const searchInput = document.querySelector('.search--input')

searchBtn.addEventListener('click', searchProduct)
searchInput.addEventListener("keyup", function (e) {
    if (e.key == 'Enter') {
        searchProduct()
    }
})

function searchProduct() {
    if(searchInput.value === '' ){
        alert("Cần nhập nội dung tìm kiếm!");
    }else{
    let exist = false
    //Search trong mảng dataTrangChu theo name chỉ dùng cho trang chủ, nhớ import file vào cuối TrangChu.html
    dataTrangChu2.forEach(element => {
        if ( element.name.toLowerCase().includes(searchInput.value.toLowerCase()) == true ) {
            exist = true
            localStorage.setItem('imgSrc', element.img);
            localStorage.setItem('nameProduct', element.name);
            localStorage.setItem('priceProduct', element.price);
            localStorage.setItem('descProduct', element.desc);
            window.location.href = './ChiTietSanPham.html'
        }
    })

    !exist && alert('Sản phầm không tồn tại')
    }
}