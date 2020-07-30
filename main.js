// For popup
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

// Sidebar Toggle
var menuToggle = document.getElementById('to__btn');
var sideBar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', ()=>{
    sideBar.classList.toggle('active');
})

// Chat box
var chatBtn = document.getElementById('chat__btn');
var form = document.querySelector('.form');
chatBtn.addEventListener('click', ()=>{
    form.classList.add('active');
})
var closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', ()=>{
    form.classList.remove('active')
})