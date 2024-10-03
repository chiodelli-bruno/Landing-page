const mobileBtn = document.querySelector('.mobile-btn');
const container = document.querySelector('.menu .container');

mobileBtn.addEventListener('click', () => {
  container.classList.toggle('active');
});
// Login y Registro
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

// Cambia a formulario de registro
registerLink.onclick = (event) => {
    event.preventDefault();  // Evita el comportamiento predeterminado del enlace
    wrapper.classList.add('active');
};

// Cambia a formulario de login
loginLink.onclick = (event) => {
    event.preventDefault();  // Evita el comportamiento predeterminado del enlace
    wrapper.classList.remove('active');
};


// Menú con Ionicons
const menuToggle = document.querySelector(".menu-container .circle");
const iconContainer = document.querySelector(".menu-container .icon-container");

// Activa o desactiva el menú desplegable
menuToggle.onclick = function () {
    iconContainer.classList.toggle("active");
};

// Cambia el ítem activo en el menú
const iconList = document.querySelectorAll(".menu-container .icon");
function activeIcon() {
    iconList.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
    });
}

iconList.forEach((item) => {
    item.addEventListener("click", activeIcon);
});

// Funcionalidad del menú de navegación principal
const navLinks = document.querySelectorAll('.navbar .menu-container .icon-container .icon');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
    });
});
