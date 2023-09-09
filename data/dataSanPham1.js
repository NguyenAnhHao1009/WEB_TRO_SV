const dataProduct1 = [
    {
        name: 'Nhà trọ Phương Nam',
        price: '200.000',
        desc: 'Hẻm 51, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, TP Cần Thơ',
        img: './img/hinh tro/phongtro1.jpg'
    },
    {
        name: 'Nhà trọ Anh Hào',
        price: '700.000',
        desc: 'Hẻm 49, đường Mạc Thiên Tích, phường Xuân Khánh, quận Ninh Kiều, TP Cần Thơ',
        img: './img/hinh tro/phongtro2.jpg'
    },
    {
        name: 'Nhà trọ Cô Sen',
        price: '500.000',
        desc: 'Hẻm 228, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, TP Cần Thơ',
        img: './img/hinh tro/phongtro3.jpg'
    },
    {
        name: 'Nhà trọ Hạnh Uyên',
        price: '900.000',
        desc: 'Hẻm 3, đường Mậu Thân, phường Xuân Khánh, quận Ninh Kiều, TP Cần Thơ',
        img: './img/hinh tro/phongtro4.jpg'
    },
    {
        name: 'Nhà trọ Sinh Viên',
        price: '200.000',
        desc: 'Hẻm liên tổ 5-6, đường Nguyễn Văn Linh, phường Hưng Lợi, quận Ninh Kiều, TP Cần Thơ',
        img: './img/hinh tro/phongtro5.jpg'
    },
    {
        name: 'Nhà trọ Phương Thanh',
        price: '700.000',
        desc: 'Hẻm 68, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, TP Cần Thơ',
        img: './img/hinh tro/phongtro6.jpg'
    },
    {
        name: 'Nhà trọ Anh Đào',
        price: '500.000',
        desc: 'Hẻm 33, đường Trần Hưng Đạo, phường Xuân Khánh, quận Ninh Kiều, TP Cần Thơ',
        img: './img/hinh tro/phongtro7.jpg'
    },
    {
        name: 'Nhà trọ Thành Nhân',
        price: '900.000',
        desc: 'Đường Trần Nam Phú, phường An Khánh, quận Ninh Kiều, TP Cần Thơ',
        img: './img/hinh tro/phongtro8.png'
    },
]

const product1 = document.querySelector('.product-1')

dataProduct1.forEach((product) => {
    const div = document.createElement('div')
    div.className = 'product-option topbuy--option'
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
    product1.appendChild(div)
})

// <!-- <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro1.jpg" alt="">
//     <div class="product-info">
//         <div>
//             <p class="product--name">Phòng Trọ 1</p>
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
//     <img class="product--img" src="./img/hinh tro/phongtro2.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 2</p>
//         <p class="product--price">700,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro3.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 3</p>
//         <p class="product--price">500,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro4.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 4</p>
//         <p class="product--price">900,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro5.jpg" alt="">
//     <div class="product-info">
//         <div>
//             <p class="product--name">Phòng Trọ 5</p>
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
//     <img class="product--img" src="./img/hinh tro/phongtro6.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 6</p>
//         <p class="product--price">700,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro7.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 7</p>
//         <p class="product--price">500,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro8.png" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 8</p>
//         <p class="product--price">900,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div> -->
