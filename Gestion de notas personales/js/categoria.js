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

document.getElementById('Recordatorios').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarContenido('Recordatorios');
});

function mostrarContenido(categoria) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let contenidoHTML = '';
    if (tasks) {
        tasks.forEach(task => {
            if (task.category === categoria) {
                contenidoHTML += `<div class="card mb-3">
                    <div class="card-body">
                        <p><strong>${task.title}</strong></p>
                        <p>${task.description}</p>
                        <button onclick="deleteTask('${task.title}')" class="btn btn-warning btn-block">Borrar</button>
                    </div>
                </div>`;
            }
        });
    }
    document.getElementById('contenido').innerHTML = contenidoHTML;
}

