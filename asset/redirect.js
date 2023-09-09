const btnRegister = document.querySelector('.btn-register')
const btnLogin = document.querySelector('.btn-login')
const btnPayment = document.querySelector('.btn-payment')

btnRegister && btnRegister.addEventListener('click', function (e) {
    e.preventDefault()
    alert('Đăng ký tài khoản thành công!')
    location.href = './TrangChu.html'
})

btnLogin && btnLogin.addEventListener('click', function (e) {
    e.preventDefault()
    alert('Đăng nhập thành công!')
    location.href = './TrangChu.html'
})

btnPayment.addEventListener('click', function (e) {
    e.preventDefault()
    alert('Thanh toán thành công!')
    location.href = './TrangChu.html'
})
