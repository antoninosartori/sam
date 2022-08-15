const titulo = document.getElementById('titulo');
const btn = document.getElementById('btn');
const estrellas = document.getElementById('estrellas');
const meteoritos = document.getElementById('meteoritos');
const sol = document.getElementById('sol');
const piso = document.getElementById('piso');
const astronauta = document.getElementById('astronauta');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    console.log(value);
    sol.style.marginTop = value * .5 + 'px';
    estrellas.style.top = value * 1.5 + 'px';
    meteoritos.style.top = value * 1.5 + 'px';
    meteoritos.style.margin = value * -1.5 + 'px';
    astronauta.style.left = value * .2 + 'px';
    titulo.style.marginTop = value * -2 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
});

