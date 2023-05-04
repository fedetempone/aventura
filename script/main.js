let boton3 = document.querySelector('.boton3');
let contenedorSalvacion = document.querySelector('.contenedorSalvacion');

boton3.addEventListener('click', mostrar);

function mostrar() {
    console.log('funciona');
    contenedorSalvacion.classList.add('active');
}
