document.getElementById('compras').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarContenido('Listas de Compras');
});

document.getElementById('notas').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarContenido('Notas de Clases');
});

document.getElementById('diferente').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarContenido('Importante');
});

document.getElementById('recordatorios').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarContenido('Recordatorios');
});

function mostrarContenido(titulo) {
    document.getElementById('contenido').innerHTML = `<h2>${titulo}</h2>`;
}
