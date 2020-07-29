function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

var menuToggle = document.getElementById('to__btn');
var sideBar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', ()=>{
    sideBar.classList.toggle('active');
})