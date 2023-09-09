const dataProduct3 = [
    {
        name: 'Nhà trọ Thanh Diễm',
        price: '800.000',
        desc: 'đường Tầm Vu, phường Hưng Lợi, quận Cái Răng, TP Cần Thơ',
        img: './img/hinh tro/phongtro17.jpg'
    },
    {
        name: 'Nhà trọ Chú Bảy',
        price: '700.000',
        desc: 'Hẻm 4, đường Nguyễn Trãi, phường Lê Bình, quận Cái Răng, TP Cần Thơ',
        img: './img/hinh tro/phongtro18.jpg'
    },
    {
        name: 'Nhà trọ Yến Nhi',
        price: '500.000',
        desc: 'Hẻm 5, đường Nguyễn Trãi, phường Lê Bình, quận Cái Răng, TP Cần Thơ',
        img: './img/hinh tro/phongtro19.jpg'
    },
    {
        name: 'Nhà trọ Hàm Hương',
        price: '600.000',
        desc: 'Hẻm 5, đường Phạm Hùng, phường Lê Bình, quận Cái Răng, TP Cần Thơ',
        img: './img/hinh tro/phongtro20.jpg'
    },
    {
        name: 'Nhà trọ Sinh Viên',
        price: '200.000',
        desc: 'Khu dân cư Hồng Loan, phường Hưng Thành, quận Cái Răng, TP Cần Thơ',
        img: './img/hinh tro/phongtro21.jpeg'
    },
    {
        name: 'Nhà trọ Thành Đạt',
        price: '700.000',
        desc: 'K1-01, KDC 586, phường Phú Thứ, quận Cái Răng, TP Cần Thơ',
        img: './img/hinh tro/phongtro22.jpg'
    },
    {
        name: 'Nhà trọ Anh Quân',
        price: '400.000',
        desc: '341A, KV Phú Mỹ, phường Hưng Thành, quận Cái Răng, TP Cần Thơ',
        img: './img/hinh tro/phongtro23.jpg'
    },
    {
        name: 'Nhà trọ Thị Tú',
        price: '900.000',
        desc: 'Đường 8, phường Thường Thạn, quận Cái Răng, TP Cần Thơ',
        img: './img/hinh tro/phongtro24.jpg'
    },
]

const product3 = document.querySelector('.product-3')

dataProduct3.forEach((product) => {
    const div = document.createElement('div')
    div.className = 'product-option'
    div.id = 'sanpham'
    div.innerHTML = `
        <div class="product-item">
            <img class="product--img" src="${product.img}" alt="">
            <div class="product-info">
                <div>
                    <p class="product--name">${product.name}</p>
                </div>
                <div>
                    <p class="product--price">${product.price}</p>
                </div>
                <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
                <p style='display: none;' class="topbuy--price product--desc">${product.desc}</p>
            </div>
        </div>
        `
    product3.appendChild(div)
})



// <!-- <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro17.jpg" alt="">
//     <div class="product-info">
//         <div>
//             <p class="product--name">Phòng Trọ 17</p>
//         </div>
//         <div>
//             <p class="product--price">200,000</p>
//         </div>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro18.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 18</p>
//         <p class="product--price">700,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro19.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 19</p>
//         <p class="product--price">500,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro20.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 20</p>
//         <p class="product--price">900,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro21.jpg" alt="">
//     <div class="product-info">
//         <div>
//             <p class="product--name">Phòng Trọ 21</p>
//         </div>
//         <div>
//             <p class="product--price">200,000</p>
//         </div>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro22.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 22</p>
//         <p class="product--price">700,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro23.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 23</p>
//         <p class="product--price">500,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro24.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 24</p>
//         <p class="product--price">900,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div> -->
