import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from "./showMessage.js";

function mostrarBienvenida() {
    // Verificamos si hay un usuario autenticado
    const user = auth.currentUser;
    
    // Si hay un usuario autenticado, mostramos el mensaje de bienvenida
    if (user) {
        // Verificamos si displayName está definido
        if (user.displayName) {
            showMessage('¡Bienvenido/a ' + user.displayName + '!');
        } else {
            showMessage('¡Bienvenido/a!');
        }
    } else {
        // Si no hay un usuario autenticado, redirigimos a la página de registro
        window.location.href = "registro.html";
    }
}

// Observador del estado de autenticación
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Si hay un usuario autenticado, llamamos a mostrarBienvenida
        mostrarBienvenida();
    } else {
        // Si no hay un usuario autenticado, redirigimos a la página de registro
        window.location.href = "registro.html";
    }
});
