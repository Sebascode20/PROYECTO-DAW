document.getElementById('formTask').addEventListener('submit', saveTask);

// Función para guardar las notas del formulario a través de los ids 'title', 'description' y 'category'
function saveTask(e) {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let category = document.getElementById('category').value; // Obtenemos el valor de la categoría seleccionada

  let task = {
    title,
    description,
    category // Añadimos la categoría al objeto 'task'
  };

  // Verificamos si hay datos guardados previamente
  let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

  // Agregamos la nueva tarea al arreglo de tareas
  tasks.push(task);

  // Guardamos las tareas actualizadas en el Local Storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Actualizamos la visualización de las tareas
  getTasks();

  // Reseteamos el formulario
  document.getElementById('formTask').reset();
  Toastify({
    text: "Nota añadida correctamente",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición de la notificación (top, bottom, left, right)
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    stopOnFocus: true, // Detener el temporizador cuando se enfoca en la ventana del navegador
}).showToast();
}

// Función para eliminar una nota almacenada dentro del Local Storage
function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
  Toastify({
    text: "Se ha borrado la nota",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición de la notificación (top, bottom, left, right)
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    stopOnFocus: true, // Detener el temporizador cuando se enfoca en la ventana del navegador
}).showToast();
}

// Recupera las tareas del Local Storage y las muestra en la interfaz de usuario
function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  if (tasks) {
    for(let i = 0; i < tasks.length; i++) {
      let title = tasks[i].title;
      let description = tasks[i].description;
      let category = tasks[i].category; // Obtenemos la categoría

      tasksView.innerHTML += `<div class="card mb-3">
          <div class="card-body">
            <p><strong>${title} - ${category}</strong></p>
            <p>${description}</p>
            <button onclick="deleteTask('${title}')" class="btn btn-warning btn-block">Borrar</button>
          </div>
        </div>`;
    }
  }
}

// Mostramos las tareas al cargar la página
getTasks();
