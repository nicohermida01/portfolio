
/* ####################################################################################################### */
/*                                              SCROLL SPY                                                 */   
/* ####################################################################################################### */

const botones_nav = document.querySelectorAll("header nav a");

const removeActiveClass = () => botones_nav.forEach(boton => boton.classList.remove('active'));

const addActiveClass = index => {
    removeActiveClass();
    botones_nav[index - 1].classList.add('active');
}

var section = [
    document.getElementById('home'),
    document.getElementById('works'),
    document.getElementById('skills')
];

var offsetSection = {};
section.forEach(e => offsetSection[e.id] = e.offsetTop);


window.addEventListener('scroll', () => {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (var i in offsetSection){
        if (offsetSection[i] <= scrollPosition) {
            addActiveClass(document.getElementById(i).dataset.index);
        }
    }
});

/* ####################################################################################################### */
/*                                         EVENTO ABRIR IMAGEN                                             */   
/* ####################################################################################################### */

const overlay = document.getElementById("overlay");

document.querySelectorAll('#works section .img-contenedor img').forEach(elem => {
    elem.addEventListener('click', () => {
        const ruta = elem.getAttribute('src');
        document.querySelector('#overlay img').src = ruta;
        overlay.classList.add('activo');
    });
});

/* CLICK EN CERRAR IMAGEN (CRUZ) */
document.querySelector('#btn-cerrar-popup').addEventListener('click', () => overlay.classList.remove('activo'));

/* CLICK EN EL OVERLAY (CERRAR) */
overlay.addEventListener('click', evento => evento.target.id === 'overlay' ? overlay.classList.remove('activo') : "");

/* ####################################################################################################### */
/*                                        LIBRERIA DE PARTICULAS                                           */   
/* ####################################################################################################### */

particlesJS(
    {
    "particles": {
        "number": {
        "value": 80,
        "density": {
            "enable": true,
            "value_area": 800
        }
        },
        "color": {
        "value": "#000000"
        },
        "shape": {
        "type": "circle",
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
        "polygon": {
            "nb_sides": 5
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
        },
        "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
        },
        "size": {
        "value": 3,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": false,
            "mode": "repulse"
        },
        "onclick": {
            "enable": false,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
    }
);

