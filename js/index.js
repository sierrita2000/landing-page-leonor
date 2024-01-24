
const cargarEventos = () => {
    const boton_izq = document.getElementById('btn_izq');
    const boton_der = document.getElementById('btn_der');

    boton_der.addEventListener('click', () => {
        cambiarGustos();
    })

    boton_izq.addEventListener('click', () => {
        cambiarGustos();
    })

    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(carta => {
        carta.addEventListener('click', () => {
            mostrarCarta(cartas, carta);
        })
    })
}

window.onload = cargarEventos();

const cambiarGustos = () => {
    const titulo_naturaleza = document.querySelector('.gustos__naturaleza h3');
    const imagenes_naturaleza = document.querySelectorAll('.gustos__naturaleza img');
    const titulo_pintar = document.querySelector('.gustos__dibujar h3');
    const imagenes_pintar = document.querySelectorAll('.gustos__dibujar img');

    titulo_naturaleza.classList.toggle('desaparecer_titulo_naturaleza');
    imagenes_naturaleza.forEach(imagen => {
        imagen.classList.toggle('desaparecer_imagenes_naturaleza');
    })
    titulo_pintar.classList.toggle('aparecer_titulo_dibujar');
    imagenes_pintar[0].classList.toggle('aparecer_paleta');
    imagenes_pintar[1].classList.toggle('aparecer_pincel');
}

const mostrarCarta = (cartas, carta) => {
    if (carta.classList.contains('mostrar_carta')) {
        carta.classList.remove('mostrar_carta')
    } else {
        cartas.forEach(c => {
            c.classList.remove('mostrar_carta');
        })
        carta.classList.add('mostrar_carta');
    }
}