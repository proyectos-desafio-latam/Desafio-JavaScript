precio = 400000

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

/* Lo anterior para poder manipular con más facilidad las variables, se ocuparía let si deseara cambiar la referencia a otro elemento o valor, pero están estrictamente relacionadas con con precio inicial, cantidad y valor total */

precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = 0;
totalSpan.innerHTML = precio * parseInt(cantidadSpan.innerHTML);

/* lo anterior se identifica los valores iniciales */
/* y parseInt es una función que sirve para transformar un string a un number */

function increase() {
    let cantidad = parseInt(cantidadSpan.innerHTML);
    /* primer llamo al valor actual */
    cantidad++;
    /* esto es equivalente a cantidad = cantidad +1 */
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = precio * cantidad;
}

function decrease() {
    let cantidad = parseInt(cantidadSpan.innerHTML);
    if (cantidad > 0) { /* no permite que sea menor a 1 */
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        totalSpan.innerHTML = precio * cantidad;
    }
}S
