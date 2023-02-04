var contador = 0

var sub = document.getElementById("bt1")
var reset = document.getElementById("bt2")
var add = document.getElementById("bt3")

window.addEventListener("click", event => {
    if (contador > 0) {
        document.querySelector('.contador').style.color = 'var(--color1)';
    } else{
        document.querySelector('.contador').style.color = 'var(--text1)';
    }
})

sub.addEventListener("click", event => {
    if (contador > 0) {
        contador = contador - 1;
        document.querySelector('.contador').textContent = contador;
    } else {
        contador = contador;
        document.querySelector('.contador').textContent = contador;
    }
})
reset.addEventListener("click", event => {
    contador = 0;
    document.querySelector('.contador').textContent = contador;
})
add.addEventListener("click", event => {
    contador = contador + 1;
    document.querySelector('.contador').textContent = contador;
})

