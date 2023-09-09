var header = document.getElementById('header_container')
var btn_menu = document.getElementById('menu')
var navbar_menu = document.getElementById('navbar_menu');
btn_menu.onclick = function() {
    if(navbar_menu.className==='navbar') {navbar_menu.className='active_menu';}
    else {navbar_menu.className='navbar';}}
const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){backTop.classList.add("active");} 
    else{backTop.classList.remove("active");}})
var loader = function() {
    setTimeout(function() {
        $('#loader').css({ 'opacity': 0, 'visibility':'hidden' });}, 500);};
$(function(){loader();});

var footerLinks = document.querySelectorAll("footer a");

  footerLinks.forEach(function(link) {
    link.setAttribute("target", "_blank");
  });

  document.getElementById('email_btn').addEventListener('click', function() {
    // Lấy dữ liệu từ ô input
    var inputData = document.getElementById('input1').value;
    
    // Chuyển hướng đến trang abc và truyền dữ liệu qua URL
    window.location.href = 'Dangky.html?inputData=' + encodeURIComponent(inputData);
  });