const changeStructure = (width, height) => {
    if(height > width) {
        // si el alto de la ventana es mayor al ancho => cambiar la estructura de la pagina (dispositivo movil)

        // si tengo la clase desktop => la saco => agrego la clase mobile
        if(document.getElementById('header').getAttribute('class') === 'headerStructureDesktop'){
            document.getElementById('header').setAttribute('class', 'headerStructureMobile');
        }
        if(document.getElementById('home').getAttribute('class') === 'homeStructureDesktop'){
            document.getElementById('home').setAttribute('class', 'homeStructureMobile');
        }
        if(document.getElementById('about').getAttribute('class') === 'aboutStructureDesktop'){
            document.getElementById('about').setAttribute('class', 'aboutStructureMobile');
        }
        if(document.getElementById('skills').getAttribute('class') === 'skillsStructureDesktop'){
            document.getElementById('skills').setAttribute('class', 'skillsStructureMobile');
        }
        if(document.getElementById('projects').getAttribute('class') === 'projectsStructureDesktop'){
            document.getElementById('projects').setAttribute('class', 'projectsStructureMobile');
        }
    }
    else {
        // si el alto de la ventana es menor al ancho => cambiar la estrcutura de la pagina (desktop)
        
        if(document.getElementById('header').getAttribute('class') === 'headerStructureMobile'){
            document.getElementById('header').setAttribute('class', 'headerStructureDesktop');
        }
        if(document.getElementById('home').getAttribute('class') === 'homeStructureMobile') {
            document.getElementById('home').setAttribute('class', 'homeStructureDesktop');
        }
        if(document.getElementById('about').getAttribute('class') === 'aboutStructureMobile') {
            document.getElementById('about').setAttribute('class', 'aboutStructureDesktop');
        }   
        if(document.getElementById('skills').getAttribute('class') === 'skillsStructureMobile') {
            document.getElementById('skills').setAttribute('class', 'skillsStructureDesktop');
        }   
        if(document.getElementById('projects').getAttribute('class') === 'projectsStructureMobile') {
            document.getElementById('projects').setAttribute('class', 'projectsStructureDesktop');
        }      
    }
}

const reSize = () => {
    window.addEventListener('resize', () => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        changeStructure(windowWidth, windowHeight);
    });
}

const scrollSpy = () => {
    // Guardamos los botones de la navBar en un arreglo
    const navBar = document.querySelectorAll('header nav a');

    // funcion para remover la clase active de un boton
    const removeActiveClass = () => {
        navBar.forEach((button) => {
            button.classList.remove('active');
        });
    }

    // funcion para agregar la clase active a un boton 
    const addActiveClass = (index) => {
        removeActiveClass();
        navBar[index - 1].classList.add('active');
    }

    // guardamos las distintas secciones de la pagina en un arreglo
    const sections = [
        document.getElementById('home'),
        document.getElementById('about'),
        document.getElementById('skills'),
        document.getElementById('projects'),
    ];

    // Guardamos el offsetTop de cada seccion en un objeto
    const offsetSection = {}
    sections.forEach((section) => {
        offsetSection[section.id] = section.offsetTop;
    });

    // funcion que se ejecuta cada vez que se scrollea en la ventana
    window.addEventListener('scroll', () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

        for(var i in offsetSection){
            if(offsetSection[i] <= scrollPos + 50) {
                addActiveClass(document.getElementById(i).dataset.index);
            }
        }
    });
}

const openOverlay = (overlay) => {
    document.querySelectorAll('.projectImage').forEach((image) => {
        image.addEventListener('click', () => {
            const path = image.getAttribute('src');
            document.querySelector('#overlay img').src = path;
            overlay.classList.add('overlayActivo');
        });
    });
}

const closeOverlay = (overlay) => {
    document.querySelector('.closeOverlay').addEventListener('click', () => {
        overlay.classList.remove('overlayActivo');
    });
}

/* ######################################################################################################################### */
/* ######################################################################################################################### */
/* ######################################################################################################################### */

const skills = [
    {
        svg: 'html.svg',
        title: 'HTML5',
        detail: 'Since 2020'
    },
    {
        svg: 'css.svg',
        title: 'CSS3',
        detail: 'Since 2020'
    },
    {
        svg: 'javascript.svg',
        title: 'JavaScript',
        detail: 'Since 2020'
    },
    {
        svg: 'bootstrap.svg',
        title: 'Bootstrap',
        detail: 'Since 2020'
    },
    {
        svg: 'react.svg',
        title: 'React JS',
        detail: 'Since 2021'
    },
    {
        svg: 'sass.svg',
        title: 'Sass',
        detail: 'Since 2021'
    },
    {
        svg: 'nodejs.svg',
        title: 'Node JS',
        detail: 'Since 2021'
    },
    {
        svg: 'php.svg',
        title: 'PHP',
        detail: 'Since 2020'
    },
    {
        svg: 'figma.svg',
        title: 'Figma',
        detail: 'Since 2020'
    },
    {
        svg: 'python.svg',
        title: 'Python',
        detail: 'Since 2020'
    },
    {
        svg: 'git.svg',
        title: 'Git',
        detail: 'Since 2020'
    },
    {
        svg: 'java.svg',
        title: 'Java',
        detail: 'Since 2019'
    }
]

skills.forEach(skill => {
    document.getElementById('grid').innerHTML += `
    <div class='skillCard'>
        <div class='cardImage' data-src='src/assets/images/${skill.svg}' >
        </div>
        <div class='skillDetails'>
            <p>${skill.title}</p>
            <p>${skill.detail}</p>
        </div>
    </div>
    `
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div[data-src]').forEach((svg) => {
        fetch(svg.dataset.src)
        .then(res => res.text())
        .then(xml => svg.innerHTML = xml);
    });
});

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

changeStructure(windowWidth, windowHeight);

window.addEventListener('load', () => {
    const overlay = document.getElementById('overlay');

    reSize();
    scrollSpy();
    openOverlay(overlay);
    closeOverlay(overlay);
});









