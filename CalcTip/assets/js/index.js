
var display = document.querySelector('#display');
var v_total = document.querySelector('#valor');
var t_slider = document.querySelector('#sliderDisplay');

const calc = document.querySelector('#botao-calcular');
const slider = document.querySelector('#sliderbar');

var form = document.querySelector("#form");

window.addEventListener('load', () => {
    display.innerHTML = v_total.value;
    t_slider.innerHTML = slider.value + "%";
    if ((slider.value) < 15) {
        t_slider.style.color = "crimson";
    } else {
        t_slider.style.color = "var(--shine)";
    }
})

slider.addEventListener('click', () => {
    t_slider.innerHTML = slider.value + "%";
    if ((slider.value) < 15) {
        t_slider.style.color = "crimson";
    } else {
        t_slider.style.color = "var(--shine)";
    }
    display.innerHTML = "R$" + ((((v_total.value * (slider.value / 100)).toFixed(2)).toString()).replace(".", ","));
})


calc.addEventListener('click', () => {
    display.innerHTML = "R$" + ((((v_total.value * (slider.value / 100)).toFixed(2)).toString()).replace(".", ","));
})

const light = document.querySelector('#light');
const dark = document.querySelector('#dark');
const container = document.querySelector('.container');

light.addEventListener('click', () => {
    document.body.style.setProperty('--light', '#14213D');
    document.body.style.setProperty('--lighter', '#FCA311');
    document.body.style.setProperty('--dark', '#E5E5E5');
    document.body.style.setProperty('--darker', '#FFFFFF');
    document.body.style.setProperty('--shine', '#222');
    document.body.style.setProperty('--shine2', '#FCA311');
    light.setAttribute("style", "border-color: #E5E5E5");
    dark.setAttribute("style", "border-color: #E5E5E5");

})

dark.addEventListener('click', () => {
    document.body.style.setProperty('--light', '#E5E5E5');
    document.body.style.setProperty('--lighter', '#FFFFFF');
    document.body.style.setProperty('--dark', '#14213D');
    document.body.style.setProperty('--darker', '#222');
    document.body.style.setProperty('--shine', '#FCA311');
    document.body.style.setProperty('--shine2', '#eb5e28');
    dark.setAttribute("style", "border-color: #14213D");
    light.setAttribute("style", "border-color: #14213D");
})

// :root{
//     --light: #E5E5E5;
//     --lighter: #FFFFFF;
//     --dark: #14213D;
//     --darker: #222;
//     --shine: #FCA311;
// }