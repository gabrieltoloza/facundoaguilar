
// Obtener elementos $ declarar variables
const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("navBtn");
const contactMe = document.getElementById("contact-me")
const starting = document.getElementById("starting")
const startpage = document.getElementById("start")
const logoHeader = document.getElementById("logo-header")
const navBarCollapse = document.getElementById("navbarNav")
let bol = false;
const offset = 90;




// Agregar "escucha de eventos" de desplazamiento( scroll) a la página
window.addEventListener("scroll", () => {
    // si la página se desplaza 90px
    if (scrollY > offset && bol === false){
        // agregue las clases para cambiar la barra de navegación a la versión ligera.
        // cambiar bg a blanco
        navbar.classList.add("bg-light");
        // cambiar texto a negro
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        // agregue un sombreado
        navbar.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
        // evita que el evento se dispare más de una vez
        bol = true;
        // eliminar todas las clases cuando la página se desplaza hacia arriba
    }else if (scrollY <= offset && bol === true){
        // cambiar el fondo de nuevo a transparente
        navbar.classList.remove("bg-light");
        // cambiar el texto de nuevo a blanco
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
        // remover el sombreado
        navbar.style.boxShadow = 'none';
        // evita que el evento se dispare más de una vez
        bol = false;
    }

    // controlamos la aparicion y desaparicion al llegar al formulario de contacto
    const rect = contactMe.getBoundingClientRect();
        // si llega al formulario desaparece
    if (rect.top <= 200) {
        navbar.classList.remove('opacity-100');
        navbar.classList.add('opacity-0');
    }
        // si nos alejamos hacia arriba o hacia abajo, vuelve a aparecer
    if (rect.bottom <= 0 || rect.top >= 200) {
        navbar.classList.remove('opacity-0');
        navbar.classList.add('opacity-100');
    } 
    
});



// Deslizamiento del boton " Contacto"
navBtn.addEventListener("click", function (event){
    console.log("el boton funciona")
    event.preventDefault();
    contactMe.scrollIntoView({behavior: "smooth"});

    const bsCollapse = new bootstrap.Collapse(navBarCollapse, {toggle: false})
    bsCollapse.hide()
})



// Deslizamiento del boton " Comenzar"
starting.addEventListener("click", (event) =>{
    console.log("el comienzo funciona");
    event.preventDefault();
    startpage.scrollIntoView({behavior: "smooth"});

})

// Deslizamiento hacia el inicio al darle click al Logotipo
logoHeader.addEventListener("click", (event) => {
    console.log("el boton de logo funciona");
    event.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
})







//* controlando la aparicion de los primeros titulos ( V-1)
// window.onload = () => {
//     const elements = document.querySelectorAll(".fade-in-element");
//     elements.forEach((element, index) => {
//         element.style.animationDelay = `${index}s`;
//         element.classList.add('fade-in')
//     });
// }



//* controlando la aparicion de los primeros titulos ( V-2)
window.onload = () => {
    const elements = document.querySelectorAll(".fade-in-element");
    for (let i = 0; i < elements.length ; i++){
        elements[i].style.animationDelay = `${i}s`;
        elements[i].classList.add('fade-in');
    }
}





console.log("El archivo javascript esta corriendo")