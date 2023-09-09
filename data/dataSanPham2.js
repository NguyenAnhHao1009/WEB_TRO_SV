const dataProduct2 = [
    {
        name: 'Nhà trọ Hải Dương',
        price: '200.000',
        desc: 'đường Bình Nhật, phường Long Hòa, quận Bình Thủy, TP Cần Thơ',
        img: './img/hinh tro/phongtro9.jpg'
    },
    {
        name: 'Nhà trọ Bình An',
        price: '500.000',
        desc: 'đường Bình Nhật, phường Long Hòa, quận Bình Thủy, TP Cần Thơ',
        img: './img/hinh tro/phongtro10.png'
    },
    {
        name: 'Nhà trọ Minh Nhựt',
        price: '300.000',
        desc: 'đường Bùi Hữu Nghĩa, phường Long Tuyền, quận Bình Thủy, TP Cần Thơ',
        img: './img/hinh tro/phongtro11.png'
    },
    {
        name: 'Nhà trọ Tao Ngộ',
        price: '200.000',
        desc: 'đường Trường Định, phường Long Tuyền, quận Bình Thủy, TP Cần Thơ',
        img: './img/hinh tro/phongtro12.jpg'
    },
    {
        name: 'Nhà trọ Quốc Bảo',
        price: '900.000',
        desc: 'đường Bùi Hữu Nghĩa, phường Long Tuyền, quận Bình Thủy, TP Cần Thơ',
        img: './img/hinh tro/phongtro13.jpg'
    },
    {
        name: 'Nhà trọ Tri Ân',
        price: '600.000',
        desc: 'đường Bình Nhật, phường Long Hòa, quận Bình Thủy, TP Cần Thơ',
        img: './img/hinh tro/phongtro14.jpg'
    },
    {
        name: 'Nhà trọ Bình Nhật',
        price: '300.000',
        desc: 'đường Bình Nhật, phường Long Hòa, quận Bình Thủy, TP Cần Thơ',
        img: './img/hinh tro/phongtro15.jpg'
    },
    {
        name: 'Nhà trọ Quốc Thái',
        price: '700.000',
        desc: 'đường Trường Định, phường Long Tuyền, quận Bình Thủy, TP Cần Thơ',
        img: './img/hinh tro/phongtro16.jpg'
    },
]

const product2 = document.querySelector('.product-2')

dataProduct2.forEach((product) => {
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
    product2.appendChild(div)
})



// <!-- <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro9.jpg" alt="">
//     <div class="product-info">
//         <div>
//             <p class="product--name">Phòng Trọ 9</p>
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
//     <img class="product--img" src="./img/hinh tro/phongtro10.png" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 10</p>
//         <p class="product--price">700,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro11.png" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 11</p>
//         <p class="product--price">500,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro12.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 12</p>
//         <p class="product--price">900,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro13.jpg" alt="">
//     <div class="product-info">
//         <div>
//             <p class="product--name">Phòng Trọ 13</p>
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
//     <img class="product--img" src="./img/hinh tro/phongtro14.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 14</p>
//         <p class="product--price">700,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro15.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 15</p>
//         <p class="product--price">500,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div>
// <div class="product-option" id="sanpham">
// <div class="product-item">
//     <img class="product--img" src="./img/hinh tro/phongtro16.jpg" alt="">
//     <div class="product-info">
//         <p class="product--name">Phòng Trọ 16</p>
//         <p class="product--price">900,000</p>
//         <button class="product-buy"><i class="fa-solid fa-circle-info fa-beat"></i></button>
//     </div>
// </div>
// </div> -->
