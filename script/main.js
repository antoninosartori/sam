const titulo = document.getElementById('titulo');
const btn = document.getElementById('btn');
const estrellas = document.getElementById('estrellas');
const meteoritos = document.getElementById('meteoritos');
const sol = document.getElementById('sol');
const piso = document.getElementById('piso');
const astronauta = document.getElementById('astronauta');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    sol.style.marginTop = value * .5 + 'px';
    estrellas.style.top = value * 1.5 + 'px';
    meteoritos.style.top = value * 1.5 + 'px';
    meteoritos.style.margin = value * -1.5 + 'px';
    astronauta.style.left = value * .2 + 'px';
    titulo.style.marginTop = value * -2 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
});

//menu toggle
const btnToggle = document.querySelector('#btnToggle');
const navLista = document.querySelector('.navLista');
const navEnlace1 = document.querySelector('.navEnlace1');
const navEnlace2 = document.querySelector('.navEnlace2');
const navEnlace3 = document.querySelector('.navEnlace3');

btnToggle.addEventListener('click', mostrarMenu);
function mostrarMenu(){
    navLista.classList.toggle('inactive');
}

navEnlace1.addEventListener('click',cerrarMenu);
navEnlace2.addEventListener('click',cerrarMenu);
navEnlace3.addEventListener('click',cerrarMenu);
function cerrarMenu(){
    navLista.classList.toggle('inactive');
}



