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
    form.classList.remove('active');
})

// Change text decoration
var changeTextDecBtn = document.getElementById('chtd');
var wholeContent = document.querySelector('.total__content');
changeTextDecBtn.addEventListener('click', ()=>{
    wholeContent.classList.toggle('rtl');
})
// Sub Menu
var subNavContent = document.querySelector('.subnav-content');
var subMenuBtn = document.getElementById('sub__menu');
subMenuBtn.addEventListener('click', ()=>{
    subNavContent.classList.toggle('active');
})

// Color Picker
// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic',
    default: '#ff3838',

    swatches: [
        '#FF5733',
        '#20B100',
        '#0020B1',
        '#FEE701',
        '#ffffff'
    ],

    components: {

        // Main components
        preview: true,
        // opacity: true,
        // hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            save: true
        }
    }
});

var cardItems = document.querySelectorAll('.card__item');
pickr.on('change', (color, instance) => {
    var rgbaColor = color.toRGBA().toString();
    cardItems.forEach(element => {
        element.style.background = rgbaColor;
    });
    document.getElementById('popup').style.background = rgbaColor;
});
