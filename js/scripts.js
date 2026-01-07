// TOGGLE MODO OSCURO
const toggle = document.getElementById("themeToggle");
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
            if(localStorage.getItem('theme') === 'dark'){
                document.body.classList.add('dark');
            }

// MENU HAMBURGUESA
const navbarToggle = document.querySelector (".navbar-toggle");
const navbarMenu = document.querySelector (".navbar-menu");
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});


const productos = [
    { id: 1, nombre: "Huatulco Secrets 2026 - Jr Suite Ocean View", precio: 17162 },
    { id: 2, nombre: "Huatulco Dreams 2026 - Deluxe King", precio: 14660 },
    { id: 3, nombre: "Huatulco Secrets 2026 - Jr Suite", precio: 11126 },
    { id: 4, nombre: "Huatulco Dreams 2026 - Doble Deluxe", precio: 7950 },
    { id: 5, nombre: "Hotel Xcaret México", precio: 51803 },
    { id: 6, nombre: "Huatulco Nirú 2026 Ocean View", precio: 11446 },
    { id: 7, nombre: "Verano en Italia & París 2026 con Disneyland", precio: 51900 }
];

function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    document.getElementById("cart-count").textContent = carrito.length;
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
}


// INICIALIZAR CONTADOR AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
    renderizarCarritoPagina();
});


// LOGICA MODAL CARRITO
const modal = document.getElementById("cart-modal");

function abrirCarrito() {
    modal.style.display = "flex";
    renderizarCarrito();
}

function cerrarCarrito() {
    modal.style.display = "none";
}

// RENDERIZAR PRODUCTOS MODAL CARRITO
function renderizarCarrito() {
    const contenedor = document.getElementById("cart-items");
    const totalSpan = document.getElementById("cart-total");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contenedor.innerHTML = "";
    let total = 0;

    carrito.forEach((p, index) => {
        contenedor.innerHTML += `
            <p>
                ${p.nombre} - $${p.precio}
                <button onclick="eliminarProducto(${index})">❌</button>
            </p>
        `;
        total += p.precio;
    });

    totalSpan.textContent = total;
}

// ELIMINAR PRODUCTOS DEL CARRITO
function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
    renderizarCarrito();
}

// RENDERIZAR CARRITO PÁGINA COMPLETA
function renderizarCarritoPagina() {
    const contenedor = document.getElementById("cart-page-items");
    const totalSpan = document.getElementById("cart-page-total");

    if (!contenedor) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
        totalSpan.textContent = "0";
        return;
    }

    carrito.forEach((p, index) => {
        contenedor.innerHTML += `
        <div class="cart-item">
            <span>${p.nombre}</span>
            <span>$${p.precio}</span>
            <button onclick="eliminarProducto(${index})">❌</button>
        </div>
        `;
        total += p.precio;
    });

    totalSpan.textContent = total;
}

// VACIAR CARRITO COMPLETO
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    actualizarContador();
    renderizarCarrito();
    renderizarCarritoPagina();
}

