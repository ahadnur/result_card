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

// filer
var filter = document.getElementById('filter');
var catagory = document.getElementById('catagory');
filter.addEventListener('click', ()=>{
    catagory.classList.toggle('active');
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
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true
        }
    }
});

pickr.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    document.querySelector('.card__item').style.background = rgbaColor;
    document.getElementById('popup').style.background = rgbaColor;
});